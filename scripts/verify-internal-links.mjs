import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist/client');
const htmlFiles = [];

function findHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

findHtmlFiles(distDir);
console.log(`Auditing internal links across ${htmlFiles.length} pages...`);

let brokenLinks = 0;
const checkedLinks = new Set();

for (const filePath of htmlFiles) {
  const relPath = path.relative(distDir, filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match href="..."
  const hrefMatches = content.matchAll(/href=["'](\/[^"']*)["']/g);

  for (const match of hrefMatches) {
    const rawUrl = match[1];
    // Ignore hashes, query params, tel, mailto, javascript
    const url = rawUrl.split('#')[0].split('?')[0];

    if (!url || url === '' || url === '/') continue;

    // Normalize path
    const cleanPath = url.replace(/\/$/, '');
    const checkKey = `${relPath} -> ${cleanPath}`;
    if (checkedLinks.has(checkKey)) continue;
    checkedLinks.add(checkKey);

    // Look for file or directory/index.html
    const targetFile = path.join(distDir, cleanPath);
    const targetIndex = path.join(distDir, cleanPath, 'index.html');
    const targetHtml = path.join(distDir, `${cleanPath}.html`);

    const exists = fs.existsSync(targetFile) || fs.existsSync(targetIndex) || fs.existsSync(targetHtml);

    if (!exists) {
      console.error(`[BROKEN LINK] in ${relPath}: ${rawUrl} does not resolve to an existing file in dist/client`);
      brokenLinks++;
    }
  }

  // Match src="..."
  const srcMatches = content.matchAll(/src=["'](\/[^"']*)["']/g);
  for (const match of srcMatches) {
    const rawSrc = match[1];
    const srcPath = rawSrc.split('#')[0].split('?')[0];
    if (!srcPath || srcPath === '' || srcPath === '/') continue;

    const checkKey = `${relPath} [src] -> ${srcPath}`;
    if (checkedLinks.has(checkKey)) continue;
    checkedLinks.add(checkKey);

    const targetFile = path.join(distDir, srcPath);
    const targetPublic = path.join(path.resolve('public'), srcPath);
    const exists = fs.existsSync(targetFile) || fs.existsSync(targetPublic);

    if (!exists) {
      console.error(`[BROKEN ASSET] in ${relPath}: ${rawSrc} does not resolve`);
      brokenLinks++;
    }
  }
}

if (brokenLinks === 0) {
  console.log(`✅ ALL INTERNAL LINKS & ASSETS RESOLVE PERFECTLY! (Checked ${checkedLinks.size} unique references)`);
} else {
  console.error(`❌ Found ${brokenLinks} broken internal references.`);
  process.exit(1);
}
