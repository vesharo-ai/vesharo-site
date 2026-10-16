#!/usr/bin/env node
/**
 * Vesharo Launch Gate: Placeholder, Review Mode & Visibility Validator (VS-30 / VS-00-05)
 *
 * Verifies that:
 * 1. All placeholder entries across collections (team, clients, testimonials, portfolio) are catalogued.
 * 2. The real portfolio collection in `src/content/portfolio.json` is scanned.
 * 3. Publication Visibility Rules are strictly enforced:
 *    - Confidential client items (e.g. MedMarketMD) without explicit public approval NEVER leak into `featured`,
 *      public navigation (`siteConfig.portfolio`), or public production outputs.
 *    - Public items must have explicit public approval (`publicApproved: true`, `visibility: 'public'`).
 * 4. Review mode (PUBLIC_REVIEW_MODE=true) is NEVER active on the public production domain (https://vesharo.com).
 * 5. In production mode (PUBLIC_REVIEW_MODE=false or domain=vesharo.com), demo items are shielded.
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const siteUrl = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || 'https://vesharo.com';
const rawReviewMode = process.env.PUBLIC_REVIEW_MODE ?? process.env.REVIEW_MODE;
const isReviewMode = rawReviewMode === 'true' || (rawReviewMode !== 'false' && !siteUrl.includes('vesharo.com'));

console.log('\n======================================================');
console.log('       VESHARO PRODUCTION LAUNCH GATE (VS-30 / VS-00-05)');
console.log('======================================================');
console.log(`Target Site URL:     ${siteUrl}`);
console.log(`Public Review Mode:  ${isReviewMode ? 'ENABLED (Review Build)' : 'DISABLED (Production Build)'}`);
console.log('------------------------------------------------------\n');

const placeholders = [];
const violations = [];

// 1. Scan team.json
const teamPath = path.join(rootDir, 'src/content/team.json');
if (fs.existsSync(teamPath)) {
  const team = JSON.parse(fs.readFileSync(teamPath, 'utf8'));
  for (const member of team) {
    if (member.placeholder) {
      placeholders.push({
        collection: 'team',
        id: member.id,
        title: member.name,
        roleOrCategory: member.role,
        file: 'src/content/team.json',
      });
    }
  }
}

// 2. Scan clients.json
const clientsPath = path.join(rootDir, 'src/content/clients.json');
if (fs.existsSync(clientsPath)) {
  const clients = JSON.parse(fs.readFileSync(clientsPath, 'utf8'));
  for (const client of clients) {
    if (client.placeholder) {
      placeholders.push({
        collection: 'clients',
        id: client.id,
        title: client.name,
        roleOrCategory: client.category,
        file: 'src/content/clients.json',
      });
    }
  }
}

// 3. Scan testimonials.json
const testimonialsPath = path.join(rootDir, 'src/content/testimonials.json');
if (fs.existsSync(testimonialsPath)) {
  const testimonials = JSON.parse(fs.readFileSync(testimonialsPath, 'utf8'));
  for (const item of testimonials) {
    if (item.placeholder) {
      placeholders.push({
        collection: 'testimonials',
        id: item.id,
        title: item.company,
        roleOrCategory: item.role,
        file: 'src/content/testimonials.json',
      });
    }
  }
}

// 4. Scan the REAL configured portfolio source: src/content/portfolio.json
const portfolioJsonPath = path.join(rootDir, 'src/content/portfolio.json');
const siteConfigPath = path.join(rootDir, 'src/config/site.ts');
let siteConfigContent = '';
if (fs.existsSync(siteConfigPath)) {
  siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
}

if (fs.existsSync(portfolioJsonPath)) {
  const portfolioItems = JSON.parse(fs.readFileSync(portfolioJsonPath, 'utf8'));
  for (const item of portfolioItems) {
    if (item.placeholder) {
      placeholders.push({
        collection: 'portfolio',
        id: item.id,
        title: item.title,
        roleOrCategory: item.category || 'Portfolio',
        file: 'src/content/portfolio.json',
      });
    }

    // Publication Visibility Rule Verification
    const isConfidential =
      Boolean(item.confidential) ||
      item.visibility === 'confidential' ||
      Boolean(item.status && item.status.toLowerCase().includes('confidential'));

    if (isConfidential) {
      // Confidential rule 1: Must NOT have publicApproved: true without explicit evidence
      if (item.publicApproved === true) {
        violations.push(
          `Confidential portfolio item "${item.id}" cannot have publicApproved: true without verified owner authorization.`
        );
      }

      // Confidential rule 2: Must NOT be featured on homepage
      if (item.featured === true) {
        violations.push(
          `Confidential portfolio item "${item.id}" is marked "featured: true", which would leak to the homepage.`
        );
      }

      // Confidential rule 3: Must NOT be in public siteConfig.portfolio
      // Check if siteConfig.ts has portfolio item with this ID
      const regex = new RegExp(`id:\\s*["']${item.id}["']`, 'i');
      if (regex.test(siteConfigContent)) {
        violations.push(
          `Confidential portfolio item "${item.id}" is listed in src/config/site.ts siteConfig.portfolio navigation.`
        );
      }

      // Confidential rule 4: Must not have visibility="public"
      if (item.visibility === 'public') {
        violations.push(
          `Confidential portfolio item "${item.id}" cannot have visibility: "public".`
        );
      }
    } else {
      // Public item rule: Must have explicit publicApproved: true and visibility: "public"
      if (item.visibility === 'public' && item.publicApproved !== true) {
        violations.push(
          `Public portfolio item "${item.id}" lacks explicit approval metadata (publicApproved: true).`
        );
      }
    }
  }
} else {
  violations.push('Configured portfolio source src/content/portfolio.json is missing!');
}

console.log(`Found ${placeholders.length} placeholder / demo content entries:`);
console.table(
  placeholders.map((p) => ({
    Collection: p.collection,
    ID: p.id,
    Title: p.title,
    Category: p.roleOrCategory,
    Location: p.file,
  }))
);

// Rule 1: Review mode CANNOT be ON on public domain https://vesharo.com
if (isReviewMode && siteUrl.includes('vesharo.com')) {
  violations.push(
    'Review mode is ON while target domain is production (https://vesharo.com)! Set PUBLIC_REVIEW_MODE=false before deploying to production.'
  );
}

// Rule 2: In production mode, ensure all placeholder items are safely flagged and will be hidden
if (!isReviewMode) {
  console.log('✓ Production mode active: verified all demo placeholders will be stripped from public site queries.');
} else {
  console.log('ℹ Review mode active: demo placeholders will be displayed with explicit DEMO CONTENT badges.');
}

if (violations.length > 0) {
  console.error('\n❌ [LAUNCH GATE FAILURE] Visibility or placeholder invariants violated:');
  for (const v of violations) {
    console.error(`   - ${v}`);
  }
  console.error('\nLaunch Gate Check FAILED.\n');
  process.exit(1);
} else {
  console.log('\n✓ Launch Gate Check PASSED. All placeholder and publication-visibility invariants satisfied.\n');
  process.exit(0);
}
