/**
 * Updater utility — automatically patches Blog.tsx and App.tsx
 * to register a newly generated article.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, '..', '..', '..', 'src');

/**
 * Add the new post entry to BLOG_POSTS in src/pages/Blog.tsx.
 * Inserts at position 0 so the new article appears first.
 */
export async function addToBlogPosts(entry) {
  const blogPath = path.join(SRC_DIR, 'pages', 'Blog.tsx');
  let content = await fs.readFile(blogPath, 'utf8');

  // Check if slug already registered
  if (content.includes(`slug: '${entry.slug}'`)) {
    console.log(`  [updater] ${entry.slug} already in BLOG_POSTS — skipping`);
    return;
  }

  const entryCode = `  {
    slug: '${entry.slug}',
    title: '${escapeStr(entry.title)}',
    excerpt: '${escapeStr(entry.excerpt)}',
    date: '${entry.date}',
    readTime: '${entry.readTime}',
    category: '${entry.category}',
  },`;

  // Insert right after `export const BLOG_POSTS = [`
  const insertAfter = 'export const BLOG_POSTS = [';
  const insertIdx = content.indexOf(insertAfter) + insertAfter.length;

  content = content.slice(0, insertIdx) + '\n' + entryCode + content.slice(insertIdx);

  await fs.writeFile(blogPath, content, 'utf8');
  console.log(`  [updater] Added '${entry.slug}' to BLOG_POSTS`);
}

/**
 * Add category colour to CATEGORY_COLORS in Blog.tsx if it's new.
 */
export async function addCategoryColor(category, colorClass) {
  const blogPath = path.join(SRC_DIR, 'pages', 'Blog.tsx');
  let content = await fs.readFile(blogPath, 'utf8');

  if (content.includes(`'${category}':`)) {
    return; // already registered
  }

  const insertAfter = 'const CATEGORY_COLORS: Record<string, string> = {';
  const insertIdx = content.indexOf(insertAfter) + insertAfter.length;
  const newLine = `\n  '${category}': '${colorClass}',`;
  content = content.slice(0, insertIdx) + newLine + content.slice(insertIdx);

  await fs.writeFile(blogPath, content, 'utf8');
  console.log(`  [updater] Added category colour for '${category}'`);
}

/**
 * Add the lazy import, route, and PAGE_META entry to App.tsx.
 */
export async function addToAppTsx({ slug, componentName, metaTitle, metaDescription }) {
  const appPath = path.join(SRC_DIR, 'App.tsx');
  let content = await fs.readFile(appPath, 'utf8');

  // --- 1. Lazy import ---
  const importLine = `const ${componentName} = lazy(() => import('./pages/blog/${componentName}.tsx'));`;
  if (!content.includes(importLine)) {
    // Insert before the PAGE_META declaration
    const pageMeta = 'const PAGE_META:';
    const insertIdx = content.indexOf(pageMeta);
    content = content.slice(0, insertIdx) + importLine + '\n' + content.slice(insertIdx);
    console.log(`  [updater] Added lazy import for ${componentName}`);
  }

  // --- 2. PAGE_META entry ---
  const routeKey = `/blog/${slug}`;
  const metaEntry = `  '${routeKey}': {\n    title: '${escapeStr(metaTitle)}',\n    description: '${escapeStr(metaDescription)}',\n  },`;
  if (!content.includes(`'${routeKey}':`)) {
    // Insert before the closing `};` of PAGE_META
    // Find the last `},` inside PAGE_META block then insert before the closing `};`
    const pageMeta = 'const PAGE_META:';
    const metaStart = content.indexOf(pageMeta);
    const metaEnd = content.indexOf('};', metaStart) + 2;
    const metaBlock = content.slice(metaStart, metaEnd);
    const insertAt = metaStart + metaBlock.lastIndexOf('},') + 2;
    content = content.slice(0, insertAt) + '\n' + metaEntry + content.slice(insertAt);
    console.log(`  [updater] Added PAGE_META for ${routeKey}`);
  }

  // --- 3. Route ---
  const routeLine = `          <Route path="${routeKey}" element={<${componentName} />} />`;
  if (!content.includes(routeLine)) {
    // Insert before the catch-all NotFound route
    const notFound = '<Route path="*"';
    const insertIdx = content.indexOf(notFound);
    content = content.slice(0, insertIdx) + routeLine + '\n          ' + content.slice(insertIdx);
    console.log(`  [updater] Added route for ${routeKey}`);
  }

  await fs.writeFile(appPath, content, 'utf8');
}

function escapeStr(str) {
  return (str || '').replace(/'/g, "\\'").replace(/\n/g, ' ');
}
