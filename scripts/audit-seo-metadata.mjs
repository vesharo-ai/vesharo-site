import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist/client');
const files = [];

function findHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
}

findHtmlFiles(distDir);
console.log(`Found ${files.length} HTML pages to audit.\n`);

const results = [];
const titles = new Map();
let errors = 0;

for (const file of files) {
  const relPath = path.relative(distDir, file);
  const html = fs.readFileSync(file, 'utf8');

  // Title check
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Description check
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : null;

  // Canonical check
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  // Robots check
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : null;

  // OG check
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDesc = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);

  // Twitter check
  const twCard = html.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i);
  const twTitle = html.match(/<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']*)["']/i);

  // JSON-LD check
  const jsonLdBlocks = [];
  const scriptRegex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      jsonLdBlocks.push(parsed);
    } catch (e) {
      console.error(`[ERROR] Invalid JSON-LD in ${relPath}:`, e.message);
      errors++;
    }
  }

  // Duplicate title check for indexable pages
  const isNoindex = robots && robots.includes('noindex');
  if (!isNoindex && title) {
    if (titles.has(title)) {
      console.warn(`[WARNING] Duplicate title: "${title}" in ${relPath} and ${titles.get(title)}`);
    } else {
      titles.set(title, relPath);
    }
  }

  const fileIssues = [];
  if (!title) fileIssues.push('Missing <title>');
  if (!desc) fileIssues.push('Missing meta description');
  if (!canonical) fileIssues.push('Missing canonical link');
  if (!ogTitle) fileIssues.push('Missing og:title');
  if (!ogDesc) fileIssues.push('Missing og:description');
  if (!ogImage) fileIssues.push('Missing og:image');
  if (!twCard) fileIssues.push('Missing twitter:card');
  if (!twTitle) fileIssues.push('Missing twitter:title');
  // Single H1 check
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    fileIssues.push(`Expected exactly 1 <h1> element, found ${h1Matches.length}`);
  }

  if (fileIssues.length > 0) {
    console.error(`[FAIL] ${relPath}: ${fileIssues.join(', ')}`);
    errors += fileIssues.length;
  } else {
    results.push({
      page: relPath,
      title,
      descLength: desc ? desc.length : 0,
      canonical,
      jsonLdCount: jsonLdBlocks.length,
      noindex: isNoindex,
    });
  }
}

console.log(`\nAudited ${files.length} pages. Total issues: ${errors}`);
if (errors === 0) {
  console.log('✅ ALL PAGES HAVE VALID METADATA, CANONICAL LINKS, OPEN GRAPH, TWITTER CARDS & JSON-LD!');
} else {
  process.exit(1);
}
