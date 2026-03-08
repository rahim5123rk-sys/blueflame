/**
 * STAGE 7 — PUBLISH
 *
 * The final stage that assembles everything into deployable files:
 *
 *  1. Generates the complete TSX React component
 *  2. Captures screenshots of referenced websites (Puppeteer)
 *  3. Writes the TSX file to src/pages/blog/
 *  4. Updates BLOG_POSTS in src/pages/Blog.tsx
 *  5. Updates PAGE_META, lazy imports, and routes in src/App.tsx
 *  6. Logs a backlink action checklist for the human to action post-publish
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { streamOpus } from '../utils/claude.js';
import { captureScreenshots } from '../utils/media.js';
import { generateTSX } from '../utils/template.js';
import { addToBlogPosts, addCategoryColor, addToAppTsx } from '../utils/updater.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..', '..', '..');
const BLOG_DIR = path.join(PROJECT_ROOT, 'src', 'pages', 'blog');

export async function runPublish(state) {
  const { plan, enhanced, research } = state;

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  STAGE 7 — PUBLISH                    ║');
  console.log('╚════════════════════════════════════════╝');

  const slug = plan.slug;
  const componentName = plan.componentName;

  // ── Step 1: Capture screenshots ───────────────────────────────────────────
  console.log('\n  [1/5] Capturing screenshots...');
  let screenshots = [];
  if (plan.screenshotTargets?.length > 0) {
    screenshots = await captureScreenshots(plan.screenshotTargets, slug);
    console.log(`    Captured ${screenshots.length}/${plan.screenshotTargets.length} screenshots`);
  } else {
    console.log('    No screenshot targets defined — skipping');
  }

  // ── Step 2: Generate TSX via template ─────────────────────────────────────
  console.log('\n  [2/5] Generating TSX component...');
  const stateWithScreenshots = { ...state, screenshots };
  let tsxContent = generateTSX(stateWithScreenshots);

  // ── Step 3: Claude final TSX quality pass ────────────────────────────────
  console.log('\n  [3/5] Running Claude final TSX quality pass...');
  tsxContent = await finalTsxQualityPass(tsxContent, state);

  // ── Step 4: Write TSX file ────────────────────────────────────────────────
  console.log(`\n  [4/5] Writing file: src/pages/blog/${componentName}.tsx`);
  await fs.mkdir(BLOG_DIR, { recursive: true });
  const tsxPath = path.join(BLOG_DIR, `${componentName}.tsx`);
  await fs.writeFile(tsxPath, tsxContent, 'utf8');
  console.log(`    ✓ Written: ${tsxPath}`);

  // ── Step 5: Update Blog.tsx and App.tsx ───────────────────────────────────
  console.log('\n  [5/5] Updating Blog.tsx and App.tsx...');

  await addToBlogPosts({
    slug,
    title: plan.title,
    excerpt: plan.excerpt,
    date: plan.date || new Date().toISOString().slice(0, 10),
    readTime: plan.readTime,
    category: plan.category,
  });

  await addCategoryColor(plan.category, getCategoryColor(plan.category));

  await addToAppTsx({
    slug,
    componentName,
    metaTitle: enhanced?.metaTitle || plan.metaTitle,
    metaDescription: enhanced?.metaDescription || plan.metaDescription,
  });

  // ── Backlink checklist ────────────────────────────────────────────────────
  const backlinkActions = [
    ...(research.backlinkOpportunities?.map((b) => `${b.site}: ${b.strategy}`) || []),
    ...(enhanced?.seoAudit?.backlinkActions || []),
    ...(plan.backlinkStrategy || []),
  ];

  if (backlinkActions.length > 0) {
    const backlinkPath = path.join(PROJECT_ROOT, `backlinks-${slug}.md`);
    const backlinkContent = `# Backlink Actions — ${plan.title}

Published: ${new Date().toLocaleDateString('en-GB')}
URL: https://www.blueflameworcester.com/blog/${slug}

## Post-Publish Backlink Checklist

${backlinkActions.map((a, i) => `- [ ] ${a}`).join('\n')}

## External Sources Referenced
${research.externalSources?.map((s) => `- [${s.organisation}](${s.url})`).join('\n') || 'None'}

## Screenshots Taken
${screenshots.map((s) => `- ${s.path}: ${s.caption}`).join('\n') || 'None'}
`;
    await fs.writeFile(backlinkPath, backlinkContent, 'utf8');
    console.log(`\n  📋 Backlink checklist saved: backlinks-${slug}.md`);
  }

  // ── Final summary ─────────────────────────────────────────────────────────
  console.log('\n  ✅ PUBLISH COMPLETE');
  console.log(`\n  ┌────────────────────────────────────────────────────┐`);
  console.log(`  │  Article: ${plan.title.slice(0, 48)}${plan.title.length > 48 ? '…' : ' '.repeat(48 - plan.title.length)} │`);
  console.log(`  │  File:    src/pages/blog/${componentName}.tsx${' '.repeat(Math.max(0, 26 - componentName.length))} │`);
  console.log(`  │  URL:     /blog/${slug.slice(0, 42)}${' '.repeat(Math.max(0, 43 - slug.length))} │`);
  console.log(`  │  Words:   ~${estimateWordCount(tsxContent)} words${' '.repeat(Math.max(0, 38 - String(estimateWordCount(tsxContent)).length))} │`);
  console.log(`  │  Media:   ${screenshots.length} screenshots · ${plan.youtubeVideos?.length || 0} videos · ${enhanced?.infographics?.length || 0} infographics${' '.repeat(Math.max(0, 7))} │`);
  console.log(`  └────────────────────────────────────────────────────┘`);
  console.log(`\n  Next steps:`);
  console.log(`    1. Run: cd /home/user/blueflame && npm run build`);
  console.log(`    2. Preview: npm run dev — visit /blog/${slug}`);
  console.log(`    3. Work through backlinks-${slug}.md`);
  console.log(`    4. Submit to Google Search Console for indexing`);

  return { ...state, published: { tsxPath, slug, componentName, screenshots } };
}

/**
 * Run a final Claude pass to validate and improve the generated TSX.
 * Checks for: valid JSX, Blue Flame style consistency, broken links, readability.
 */
async function finalTsxQualityPass(tsxContent, state) {
  const { plan } = state;

  console.log('    Running validation and polish...');

  const result = await streamOpus(
    [
      {
        role: 'user',
        content: `You are a React/TypeScript expert and Blue Flame content editor.

Review this TSX component and fix any issues:
1. Invalid JSX syntax (unescaped characters, unclosed tags, invalid attributes)
2. Missing or wrong imports (only import icons that are actually used in JSX)
3. Content quality (fix any garbled text, broken sentences, HTML entities in wrong places)
4. Ensure all YouTube embeds use proper aspect-ratio containers
5. Ensure all <img> tags have alt attributes
6. Ensure all external links have target="_blank" rel="noopener noreferrer"
7. Check that the article reads naturally and professionally
8. Verify the article matches the Blue Flame brand (dark blue #1d4ed8, Gas Safe registered, Worcester focus)

ARTICLE: "${plan.title}"

TSX CONTENT:
${tsxContent}

Return ONLY the complete corrected TSX content, starting with the imports. No markdown, no backticks, no explanation.`,
      },
    ],
    { system: 'You are a precise React/TypeScript editor. Return only valid TSX code, no markdown.', maxTokens: 32000, thinking: false },
  );

  const cleaned = result.text
    .replace(/^```(?:tsx?|jsx?|typescript)?\n?/i, '')
    .replace(/\n?```$/i, '')
    .trim();

  // Sanity check: must start with import statements
  if (cleaned.startsWith('import ')) {
    return cleaned;
  }

  console.warn('    TSX quality pass returned invalid content — using template output');
  return tsxContent;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getCategoryColor(category) {
  const colors = {
    'Boiler Installation': 'bg-blue-100 text-blue-800',
    'Boiler Advice': 'bg-indigo-100 text-indigo-800',
    'Boiler Troubleshooting': 'bg-amber-100 text-amber-800',
    'Boiler Comparison': 'bg-purple-100 text-purple-800',
    'Boiler Servicing': 'bg-teal-100 text-teal-800',
    'Gas Safety': 'bg-red-100 text-red-800',
    'DIY Heating Tips': 'bg-green-100 text-green-800',
    'Radiator Advice': 'bg-orange-100 text-orange-800',
    'Energy Saving': 'bg-emerald-100 text-emerald-800',
    'Emergency Advice': 'bg-rose-100 text-rose-800',
    'Heat Pumps': 'bg-cyan-100 text-cyan-800',
    'Smart Home': 'bg-violet-100 text-violet-800',
    'Landlord Guide': 'bg-yellow-100 text-yellow-800',
  };
  return colors[category] || 'bg-blue-100 text-blue-800';
}

function estimateWordCount(tsxContent) {
  // Strip JSX/HTML tags and count words
  return Math.round(
    tsxContent
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 3).length * 0.7,
  );
}
