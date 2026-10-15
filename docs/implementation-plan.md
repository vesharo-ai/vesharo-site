# Vesharo Website — Engineering Implementation Plan

> **Audience**: Any frontend engineer or technical lead stepping into this codebase for the first time with zero prior context.  
> **Repository**: `github.com/vesharo-ai/vesharo-site`  
> **Production Target**: `vesharo.com` (Vercel Edge Network)  
> **Branch**: `feature/VS-00-05-website-fixes`

---

## 1. System Architecture & Tech Stack

```text
[ Astro 7 Static / Serverless Hybrid Engine ]
  │
  ├── UI Islands (React 19)
  │     ├── Navigation (Header, Drawer, Dropdowns)
  │     ├── Contact Form (Turnstile CAPTCHA, Honeypot, Time-Trap, Submissions)
  │     └── Sliders (Swiper 11 / Project Carousel)
  │
  ├── Styling Foundation
  │     ├── Self-Hosted Variable Fonts (Plus Jakarta Sans, Inter)
  │     ├── Design Tokens (src/styles/tokens.css)
  │     ├── Restrained Dark Glass System (src/styles/glass.css)
  │     └── Flat Utility Overrides (src/styles/globals.css)
  │
  ├── Content Layer (Astro Content Collections)
  │     ├── Services (7 Dedicated Services, Mobile-First)
  │     ├── Portfolio (LockApp, NavratriOS, Wirebench, MedMarketMD)
  │     ├── Blog (Pragmatic Engineering & Architecture Articles)
  │     └── Testimonials & FAQ (Strictly Verified, No Invented Social Proof)
  │
  └── Edge APIs (/api/contact)
        ├── Upstash Redis Rate Limiting (Serverless-Safe)
        ├── Cloudflare Turnstile Verification
        ├── Resend Email Delivery (onboarding@resend.dev -> vesharo.ai@gmail.com)
        └── Google Sheets Webhook Lead Ingestion
```

---

## 2. Directory Structure & File Map

```text
/
├── public/                 # Static assets, self-hosted WOFF2 fonts, llms.txt, favicon, robots.txt
├── src/
│   ├── components/         # Astro components & React 19 interactive islands
│   │   ├── banner/         # Hero section with real product UI in phone frame
│   │   ├── contact/        # ContactFormBox.tsx (Turnstile, rate limit handling)
│   │   ├── navbar/         # Navbar.tsx (Mobile menu, glass blur on scroll)
│   │   ├── pricing/        # Transparent engagement models & rate calculators
│   │   ├── project/        # Portfolio cards & case studies
│   │   ├── service/        # Accessible service cards (no hover required)
│   │   ├── tech-stack/     # Production technology categories
│   │   └── seo/            # Dynamic Open Graph, Twitter Cards & JSON-LD
│   ├── config/
│   │   └── site.ts         # SINGLE SOURCE OF TRUTH for email, phone, booking, metadata
│   ├── content/            # JSON data files for portfolio, services, team, blog
│   ├── layouts/
│   │   └── Layout.astro    # Master HTML shell, preloaded fonts, dark mode lock
│   ├── lib/
│   │   ├── content.ts      # Type-safe content query helpers
│   │   ├── jsonLd.ts       # Structured data generators (LocalBusiness, SoftwareApp, etc.)
│   │   └── reviewMode.ts   # Staging vs production placeholder gating
│   ├── pages/              # Astro routes & API endpoints
│   │   ├── index.astro     # Master Home Page (exact 10-section sequence)
│   │   ├── api/contact.ts  # Hardened edge contact API
│   │   ├── services/       # 7 Dedicated service pages
│   │   └── portfolio/      # Case study pages
│   └── styles/             # Modular CSS layers
├── scripts/                # Automated audit scripts (SEO, links, placeholders, visual QA)
└── docs/                   # Full operational and architectural documentation
```

---

## 3. Environment & Prerequisites

- **Node.js**: Requires Node `>= 22.12.0` (Local: use Node 24/26 via `/opt/homebrew/bin/node`).
- **Package Manager**: `npm`.
- **Primary CLI Commands**:
  - `PATH="/opt/homebrew/bin:$PATH" npm run dev` — Start Astro local dev server (`http://localhost:4321`)
  - `PATH="/opt/homebrew/bin:$PATH" npm run build` — Build production serverless bundle
  - `PATH="/opt/homebrew/bin:$PATH" npm test` — Execute unit tests, internal link audits, and metadata verification
  - `PATH="/opt/homebrew/bin:$PATH" npm run check:placeholders` — Run strict launch gate audit

---

## 4. Key Configuration Standards

All company facts live in a single source of truth: `src/config/site.ts`:
- **Company Name**: Vesharo (by Apptify Solutions)
- **Primary Domain**: `https://vesharo.com`
- **Public Temporary Email**: `vesharo.ai@gmail.com`
- **Direct Phone / WhatsApp**: `+91 95862 12495` (Mon–Fri 09:00–18:30 IST)
- **Cal.com Booking URL**: `https://cal.com/vesharo/15min`
- **Location**: Ahmedabad, Gujarat, India (Country: `IN`, Locality: `Ahmedabad`, no street)

---

## 5. Security & Invariant Verification Pipeline

1. **Content Integrity (No Fake Content)**:
   - Run `npm run check:placeholders`. In production mode (`PUBLIC_REVIEW_MODE=false`), the script enforces that any test/demo data is purged or guarded.
2. **Contact API Security**:
   - Upstash Redis token bucket (`5 submissions per hour per IP`).
   - Time-trap rejects submissions completed in under 1,500ms.
   - Honeypot field (`_gotcha`) must remain empty.
   - Payload limit capped at 64KB.
   - Resend defaults to `onboarding@resend.dev` delivering to `vesharo.ai@gmail.com`.
3. **Accessibility & Design Rules**:
   - All text combinations must meet WCAG 2.2 AA (>= 4.5:1 contrast).
   - Touch targets must be >= 44x44px.
   - All interactive cards must show content without requiring hover states.
   - Strictly sentence case headings and buttons.
