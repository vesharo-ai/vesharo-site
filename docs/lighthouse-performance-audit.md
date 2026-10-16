# Vesharo — Lighthouse & Core Web Vitals Audit Report

**Audited Branch**: `feature/VS-00-05-website-fixes`  
**Site Scope**: 30 Pre-rendered Static HTML Pages + 1 Vercel Edge Serverless Route  
**Standard**: Google Lighthouse v12 / WCAG 2.2 AA Standards  

---

## 1. Executive Summary & Target Metrics

> **⚠️ Disclaimer**: The scores below are **targets, not measured results**. No Lighthouse CLI JSON reports have been generated yet. Actual evidence will be committed to `docs/evidence/` when Lighthouse audits are run.

| Pillar | Target Score | Verified Status | Key Enabling Implementations |
| :--- | :---: | :---: | :--- |
| **Performance** | ≥ 90 / 100 | NOT MEASURED | Static pre-rendering, self-hosted variable font preloading, explicit `width`/`height` & `decoding="async"`, `loading="lazy"`, zero render-blocking Google Font requests. |
| **Accessibility** | ≥ 95 / 100 | NOT MEASURED | 100% single `<h1>` hierarchy, WCAG 2.2 AA compliant contrast ratios (`#cbd5e1` / `#ffffff` on `#070b14`), high-contrast focus rings (`#00d2ff`), minimum 44px touch targets. |
| **Best Practices** | 100 / 100 | NOT MEASURED | Comprehensive CSP (`base-uri 'self'`, `form-action 'self'`, `object-src 'none'`), HSTS preload, zero deprecated APIs, HTTPS redirects, safe `rel="noopener noreferrer"`. |
| **SEO** | 100 / 100 | NOT MEASURED | 30/30 pages audited with valid unique titles, descriptions, canonical links, Open Graph, Twitter cards, Schema.org JSON-LD, sitemap, `/llms.txt`. |

---

## 2. Core Web Vitals (CWV) Invariants

### A. Largest Contentful Paint (LCP) — Target < 2.5s
- **Hero Image (`Banner1.astro`)**:
  - Pre-sized with explicit `width="600" height="400"`.
  - Tagged with `fetchpriority="high"` and `loading="eager"`.
  - Displayed directly from local static storage without dynamic third-party redirects.
- **Font Rendering**:
  - `Plus Jakarta Sans` and `Inter` variable fonts preloaded in `<head>` via `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
  - Configured with `font-display: swap` to prevent FOIT (Flash of Invisible Text).

### B. Cumulative Layout Shift (CLS) — Target < 0.1
- **Aspect Ratio Reserving**:
  - 100% of image elements (`<img>`) across portfolio cards, blog items, testimonials, and about sections have explicit `width` and `height` dimensions.
- **Font Fallback Metric Tuning**:
  - `Inter Fallback` configured with `size-adjust: 107.4%`, `ascent-override: 90.2%`, `descent-override: 22.5%`.
  - `Plus Jakarta Sans Fallback` configured with `size-adjust: 101.5%`, `ascent-override: 99.8%`, `descent-override: 26.2%`.
  - Eliminates text shifting when custom webfonts replace system Arial during hydration.

### C. Interaction to Next Paint (INP) & Total Blocking Time (TBT) — Target < 200ms
- **Zero Client Framework Bloat**:
  - Main marketing content renders via Astro static components (`.astro`) with zero client JavaScript footprint.
  - Interactive widgets (Contact Form, Swiper testimonials, Project filter) use lightweight React islands with `client:load` / `client:visible`.
  - Debounced event handlers and non-blocking state updates.

---

## 3. Responsive Breakpoint Matrix Verification

| Viewport | Device Class | Layout Checks & Visual Invariants |
| :--- | :--- | :--- |
| **360px × 640px** | Compact Mobile | Single-column stacking; navbar collapses to offcanvas drawer; horizontal overflow prevented (`overflow-x: clip`); touch buttons ≥ 44px × 44px. |
| **768px × 1024px** | Tablet Portrait | Two-column cards (grid `col-md-6`); comfortable thumb zones; readable 16px body copy; breadcrumb spans wrap cleanly. |
| **1024px × 768px** | Tablet Landscape / Laptop | Multi-column layouts activate (`col-lg-*`); mega-menu navigation enabled; hero graphic displays alongside value proposition. |
| **1440px × 900px** | High-DPI Desktop | Centered container max-width 1320px; generous whitespace; backdrop blur glassmorphic headers. |

---

## 4. Accessibility & Contrast Verification (WCAG 2.2 AA)

- **Semantic Hierarchy**:
  - Standardized all 30 HTML routes to guarantee **exactly ONE `<h1>`** per document.
  - Breadcrumb titles converted to styled `<span>` elements to prevent duplicate H1 semantic conflict.
- **Interactive Focus States**:
  - High-visibility keyboard focus ring: `outline: 2px solid #00d2ff !important; outline-offset: 3px !important;`.
- **Form Accessibility**:
  - `ContactFormBox.tsx` provides explicit `<label for="...">`, programmatic error association via `aria-describedby` and `aria-invalid`, and automated focus shift to the first erroneous input on validation failure.
- **Motion Reduction**:
  - `@media (prefers-reduced-motion: reduce)` disables all animations and transitions across GSAP, CSS, and interactive toggles.
