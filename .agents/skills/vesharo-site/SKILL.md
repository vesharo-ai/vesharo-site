---
name: vesharo-site
description: Guidelines, single-source-of-truth facts table, non-negotiable rules, anti-AI tells checklist, QA commands, and definition of done for the Vesharo website.
---

# Vesharo Website — Engineering & Design Skill

This skill enforces continuous consistency, content integrity, and design excellence for the Vesharo website (`github.com/vesharo-ai/vesharo-site`). Every AI agent and human engineer working on this repository must strictly adhere to these standards.

---

## 1. Facts (Single Source of Truth)

All company metadata, contact information, and booking links must stay centralized in `src/config/site.ts` exclusively. Never hardcode these values across components.

| Item | Value |
|---|---|
| **Company** | Vesharo (by Apptify Solutions), Ahmedabad, Gujarat, India |
| **Positioning** | **Mobile app development first** (React Native / Expo). Second layer: Node.js backend, DevOps/CI-CD, AI/agentic development, IT consulting. Both service and product work. |
| **Products** | LockApp (Android Enterprise MDM), NavratriOS (Offline Event Ticketing), Wirebench (API Governance). MedMarketMD as confidential B2B client platform. |
| **Phone / WhatsApp** | `+91 95862 12495` · Hours: Mon–Fri 9:00–18:30 IST |
| **Public Email (Temporary)** | `vesharo.ai@gmail.com` (until custom domain mailbox is configured; switch to `contact@vesharo.com` in `site.ts` only) |
| **Form Delivery** | Dispatches to `vesharo.ai@gmail.com` via Resend default sender `onboarding@resend.dev` |
| **Booking URL** | `https://cal.com/vesharo/15min` (replaces all `/discovery` and generic links) |
| **Domain & Hosting** | `vesharo.com` · Hosting: Vercel Serverless Edge |
| **Fonts** | Plus Jakarta Sans (headings) + Inter (body), 100% self-hosted variable WOFF2 |
| **Team Leadership** | Hitesh Chauhan (Founder), Harsh Siddhapura (Engineering Lead) |

---

## 2. Non-Negotiable Rules

1. **No Invented Anything**: No fake client logos, fabricated metrics, imaginary awards, or unverified compliance certifications ("HIPAA", "SOC2", "50,000+ scans", "zero hallucination"). Every claim must be recorded with evidence in `docs/claims.md`.
2. **Review Mode Gating**: Demo or placeholder content is strictly forbidden on production (`vesharo.com`). In production mode (`PUBLIC_REVIEW_MODE=false`), the launch gate (`npm run check:placeholders`) guarantees demo items are purged from public queries.
3. **Free Tools Only**:
   - Analytics: Umami Cloud or Vercel Web Analytics (+ optional GA4).
   - Rate Limiting: Upstash Redis free tier with local in-memory fallback.
   - Lead Capture: Google Sheets Webhook (Apps Script) + Resend free tier.
4. **Original Work Only**: Study competitor patterns, but never copy layouts, text, code, or images.
5. **No Secrets in Code**: All third-party secrets configured via environment variables documented in `.env.example`.
6. **Commit Format**: Follow conventional commit structure: `VS-XX: short message`.

---

## 3. Anti-AI Tells Checklist

- [x] **Sentence Case Enforced**: Headings, buttons, and badges use natural sentence case. Uppercase is restricted to tiny technical acronyms (`EAS`, `MDM`, `API`).
- [x] **No Single-Word Headline Gradients**: Headlines use clean, uniform `#F8FAFC` high-contrast type.
- [x] **Atmospheric Restraint**: Glassmorphism is focused intentionally on the navigation header and hero device frame. Secondary sections use flat obsidian cards (`#0B0F19`) with hairline borders.
- [x] **No Hover-Hidden Content**: All capability descriptions and bullet points are 100% visible by default on mobile touchscreens and keyboards.
- [x] **Real Artifacts**: Hero displays real mobile app UI in physical device bezels, not generic "cyber" or "AI" abstract art.
- [x] **Action-Driven Motion**: Zero continuous idle animations or gratuitous reveals. Motion only responds to direct user interaction (menus, accordions, form states).

---

## 4. Quality & QA Commands

> **Important**: Astro 7 requires Node `>= 22.12.0`. On systems with multiple Node versions, prefix commands with `PATH="/opt/homebrew/bin:$PATH"`.

```bash
# 1. Start development server
PATH="/opt/homebrew/bin:$PATH" npm run dev

# 2. Run unit tests, SEO metadata verification, and link audits
PATH="/opt/homebrew/bin:$PATH" npm test

# 3. Check for leaking demo placeholders (Production Launch Gate)
PATH="/opt/homebrew/bin:$PATH" npm run check:placeholders

# 4. Run TypeScript checks and production build
PATH="/opt/homebrew/bin:$PATH" npm run check

# 5. Run visual Playwright QA (if environment configured)
python scripts/qa-visual-check.py --base http://localhost:4321
```

---

## 5. Definition of Done (DoD)

Before any PR is merged or release finalized:
- [ ] `npm test` passes with 0 errors (all API security tests, SEO audits, and internal link checks).
- [ ] `npm run check:placeholders` passes without leaking demo data.
- [ ] `npm run check` (`astro check && astro build`) passes with 0 errors.
- [ ] All primary CTAs point to `https://cal.com/vesharo/15min`.
- [ ] Public email points to `vesharo.ai@gmail.com`.
- [ ] Mobile navigation and contact forms operate smoothly across viewports (360px, 768px, 1024px, 1440px).
- [ ] All claims verified in `docs/claims.md`.
