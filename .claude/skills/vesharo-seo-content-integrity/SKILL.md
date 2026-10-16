---
name: vesharo-seo-content-integrity
description: Content integrity standards, claims verification, review mode gating, structured data (JSON-LD), and SEO/AEO optimization for the Vesharo website.
---

# Vesharo — SEO & Content Integrity Specialist Skill

## 1. Content Integrity Policy (Non-Negotiable)
- **Zero Invented Claims**: Never invent clients, logos, testimonials, metrics ("50,000+ scans"), awards, or compliance certifications ("HIPAA compliant", "SOC2 certified", "zero hallucination").
- **Product Ownership Honesty**: Clearly distinguish Vesharo-owned proprietary products (LockApp, NavratriOS, Wirebench) from client work (MedMarketMD). Never describe our own products as client engagements.
- **The Discernment-Nudge Protocol**: Before shipping changes, verify the 3 core facts a skeptical CTO or investor would audit:
  1. *Are the products real code and real architectures?* (LockApp, NavratriOS, Wirebench verified).
  2. *Are client endorsements genuine?* (Zero fake corporate logos; demo items tagged `placeholder: true`).
  3. *Are compliance and performance claims substantiated?* (Cleansed of blanket HIPAA/SOC2 claims).

## 2. Review Mode & Production Launch Gate
- **Staging / Review (`PUBLIC_REVIEW_MODE=true`)**: Demo items allowed strictly with `placeholder: true`, visible `DEMO` badge, top review banner, and automated `noindex, nofollow`.
- **Production (`PUBLIC_REVIEW_MODE=false`)**:
  - `src/lib/content.ts` strips all `placeholder: true` items from public queries.
  - Launch gate `npm run check:placeholders` runs during CI/CD. The build fails if demo content would be exposed to search engines.

## 3. Structured Data (JSON-LD) Invariants
Every route must output valid, schema-compliant JSON-LD:
- **`ProfessionalService` / `LocalBusiness`**: Included on base layouts (country `IN`, locality `Ahmedabad`, no street).
- **`SoftwareApplication`**: Emitted for each verified software product on portfolio hubs and case study routes.
- **`Organization` & `WebSite`**: Canonical metadata referencing `https://vesharo.com`.
- **`Article`**: For blog posts and technical case studies with published date and author attribution.
- **`FAQPage`**: Included on FAQ teasers and dedicated FAQ pages.
- **`BreadcrumbList`**: Accurate nested breadcrumb hierarchy on all deep pages.

## 4. Machine-Readable LLM Context (`llms.txt`)
- Maintain `public/llms.txt` (summary) and `public/llms-full.txt` (comprehensive documentation) at the site root for AI coding assistants and discovery search engines.
