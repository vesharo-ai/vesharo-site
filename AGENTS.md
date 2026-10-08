# Vesharo — Agent Context, Engineering Guidelines & Architectural Contract

This document provides the definitive context for Antigravity, Roo, Cline, Claude, and human engineers working on the **Vesharo** codebase.

---

## 1. Company Identity & Business Model

**Vesharo Technologies** is an engineering-first technology company headquartered in Ahmedabad, Gujarat, India, delivering high-impact software solutions for clients across the United States, United Kingdom, Europe, Australia, and India.

As the company owner and leadership, our identity rests on three interlocking pillars:
1. **IT Consulting & Architecture Advisory**: Strategic technology guidance, cloud architecture & FinOps, legacy modernization (strangler pattern), technical due diligence, cybersecurity audits, and fractional CTO advisory.
2. **Custom Software Engineering**: Full-stack web platforms, iOS/Android mobile applications, cloud & DevOps automation, enterprise systems, and data/AI pipeline integrations delivered in agile 2-week sprint pods.
3. **Product-Based Work & Labs**: In-house proprietary SaaS products, developer accelerators, and internal software ventures (e.g., *CoreFlow* event orchestrator, *CloudPulse* telemetry & FinOps, *LaunchEngine* enterprise SaaS accelerator, and *DocuMind AI* document intelligence). 
   - **Why this matters**: We dogfood our own architectural principles. Clients benefit from battle-tested production components that cut 40–50% off initial time-to-market while retaining 100% IP ownership.

---

## 2. Core Integrity & Credibility Rules (Golden Rule)

> **Golden Rule**: We never represent work we cannot prove. An honest presentation beats a decorative lie every time.

- **No fake client logos**: Do not paste fabricated company logos or claim Fortune 500 clients without verified written consent.
- **No fake testimonials or reviews**: Only publish testimonials from real individuals with verifiable names, companies, and roles. Where none exist, focus on our verified engineering policies, SLA commitments, and technical architecture.
- **No stock photos pretending to be staff**: Do not use generic 3D stock people or stock photography labeled as Vesharo engineers. Real photography only.
- **Engagement Archetypes**: Until named client case studies have legal clearance, showcase *Engagement Archetypes* (the real technical architectures, challenges, and deliverables we execute).

---

## 3. SEO, AEO & GEO Standards (Search & AI Engine Optimization)

All pages must be engineered for both traditional search engines (Google, Bing) and Answer / Generative AI Engines (Perplexity, ChatGPT Search, Claude, Google Gemini):

1. **Information Density & Direct Answers**:
   - Provide direct, concise definitions for every service, engagement model, pricing tier, and architectural approach.
   - Answer key buyer questions in plain language: turnaround times, pricing ranges, IP ownership, NDAs, and tech stacks.
2. **Schema.org Rich Data (`application/ld+json`)**:
   - `Organization`, `LocalBusiness`, and `ProfessionalService` on the root layout.
   - `ItemList` schema for all services and products.
   - `FAQPage` schema on `/faq` with full Question and acceptedAnswer pairs.
   - `BreadcrumbList` on every subpage.
   - `Service` schema on `/services/[slug]`.
   - `SoftwareApplication` / `Product` schema for in-house products & accelerators.
3. **AI Crawlers & Standards**:
   - Support `public/robots.txt` allowing AI indexing bots (GPTBot, ClaudeBot, PerplexityBot).
   - Maintain `public/llms.txt` following the modern standard for LLM knowledge discovery.
4. **Metadata Integrity**:
   - Every page must have unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), and Twitter card meta tags.

---

## 4. Accessibility (a11y) & UX Guidelines

Adhere strictly to **WCAG 2.1 AA** accessibility standards:
- **Skip Links**: Accessible `#main` skip link at the top of the body.
- **Color Contrast**: Minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text across dark modes.
- **Keyboard Navigation**: All interactive elements (`<button>`, `<a>`, `<input>`) must have visible focus rings (`:focus-visible`).
- **Semantic HTML**: Proper header hierarchy (`h1` -> `h2` -> `h3`, never skipping levels). Meaningful landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section aria-labelledby="...">`).
- **Screen Reader Support**:
  - Purely decorative icons must have `aria-hidden="true"`.
  - Icon-only buttons must have `aria-label`.
  - Form fields must have matching `<label for="...">` and `<input id="...">`.

---

## 5. Technology Stack & Directory Map

- **Framework**: Astro 5 (Static mode with Node SSR adapter for API endpoints)
- **UI Runtime**: React 19 for interactive islands (`client:visible`, `client:load`, `client:idle`)
- **Node Version**: Node `>=22.12.0` (managed via `.nvmrc` -> Node 22)
- **Design Tokens & CSS**: Custom CSS design tokens in `src/styles/` combined with Bootstrap 5 grid utilities.
- **Icons**: Phosphor Icons (loaded as local woff2/woff webfonts via `src/styles/phosphoricons.css`).
- **Key Directories**:
  - `src/config/`: Central brand constants (`brand.ts`).
  - `src/seeds/`: Structured data models (`Service.seeds.ts`, `Project.seeds.ts`, `Products.seeds.ts`, `Faq.seeds.ts`, `menu.ts`).
  - `src/components/`: Modular React and Astro components categorized by domain.
  - `src/pages/`: Astro routing pages.
  - `scripts/`: Visual generators and tooling (`generate-visuals.mjs`).
  - `public/`: Static production assets, favicons, logos, diagrams, and AI manifests (`llms.txt`, `robots.txt`).

---

## 6. Development Workflow & Commands

```bash
# Set Node version
nvm use 22

# Start background development server
astro dev --background

# Inspect dev server
astro dev status
astro dev logs
astro dev stop

# Re-generate branded conceptual artwork
npm run visuals

# Production build check
npm run build
```
