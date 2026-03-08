/**
 * Media utility — Puppeteer screenshot capture + image optimisation.
 *
 * Screenshots are saved to /public/screenshots/[slug]/ as WebP files.
 * All failures are non-fatal: the pipeline continues without images.
 */

import { createRequire } from 'module';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public', 'screenshots');

/**
 * Take a screenshot of a URL and save it as WebP.
 * Returns the public path (/screenshots/slug/name.webp) or null on failure.
 */
export async function screenshotUrl(url, slug, name, options = {}) {
  const { width = 1280, height = 800, fullPage = false, description = '' } = options;

  const screenshotDir = path.join(PUBLIC_DIR, slug);
  const fileName = `${name}.webp`;
  const filePath = path.join(screenshotDir, fileName);
  const publicPath = `/screenshots/${slug}/${fileName}`;

  // Return cached screenshot if it already exists
  try {
    await fs.access(filePath);
    console.log(`    [screenshot] Using cached: ${publicPath}`);
    return { path: publicPath, description };
  } catch {
    // Not cached — proceed to capture
  }

  let browser;
  try {
    // Lazy-import Puppeteer so the pipeline can run without it installed
    const puppeteer = await import('puppeteer').catch(() => null);
    if (!puppeteer) {
      console.warn(`    [screenshot] Puppeteer not installed — skipping ${url}`);
      return null;
    }

    console.log(`    [screenshot] Capturing ${url}…`);

    browser = await puppeteer.default.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width, height });

    // Block ads/trackers for cleaner screenshots
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['font', 'media'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Brief pause for late-loading content
    await new Promise((r) => setTimeout(r, 1500));

    // Hide cookie banners / GDPR overlays
    await page.evaluate(() => {
      const selectors = [
        '[class*="cookie"]',
        '[class*="gdpr"]',
        '[class*="consent"]',
        '[id*="cookie"]',
        '[id*="gdpr"]',
      ];
      for (const sel of selectors) {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      }
    });

    await fs.mkdir(screenshotDir, { recursive: true });

    const screenshotBuffer = await page.screenshot({
      type: 'webp',
      quality: 85,
      fullPage,
    });

    // Try to optimise with sharp if available
    try {
      const sharp = await import('sharp').catch(() => null);
      if (sharp) {
        await sharp
          .default(screenshotBuffer)
          .webp({ quality: 82, effort: 4 })
          .toFile(filePath);
      } else {
        await fs.writeFile(filePath, screenshotBuffer);
      }
    } catch {
      await fs.writeFile(filePath, screenshotBuffer);
    }

    console.log(`    [screenshot] Saved: ${publicPath}`);
    return { path: publicPath, description };
  } catch (err) {
    console.warn(`    [screenshot] Failed for ${url}: ${err.message}`);
    return null;
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

/**
 * Capture multiple screenshots in sequence.
 * Returns an array of result objects (null entries removed).
 */
export async function captureScreenshots(targets, slug) {
  if (!targets || targets.length === 0) return [];

  const results = [];
  for (const target of targets) {
    const safeName = target.name || slugify(target.url);
    const result = await screenshotUrl(target.url, slug, safeName, {
      description: target.description || target.caption || target.url,
      fullPage: target.fullPage ?? false,
    });
    if (result) results.push({ ...result, caption: target.caption || target.description });
  }
  return results;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}
