# Vesharo — Claude / AI Engineering Instructions

## Project Overview
Production website for **Vesharo (by Apptify Solutions)**, Ahmedabad, Gujarat, India.
- **Positioning**: **Mobile app development first** (React Native / Expo). Second layer: Node.js backend, DevOps/CI-CD, AI/agentic development, IT consulting.
- **Stack**: Astro 7, React 19 islands, Bootstrap 5, GSAP, Swiper, self-hosted variable fonts (Plus Jakarta Sans, Inter).
- **Hosting**: Vercel Serverless Edge (`vesharo.com`).

## Core Commands
> Node `>= 22.12.0` required. Prefix with `PATH="/opt/homebrew/bin:$PATH"` if needed.
- Dev Server: `npm run dev`
- Unit Tests & SEO Audits: `npm test`
- Launch Gate: `npm run check:placeholders`
- Type & Build Verification: `npm run check` (`astro check && astro build`)

## Architecture & Code Standards
- Keep 1 clean home page (`src/pages/index.astro`) following the strict 10-section sequence.
- All company facts live in `src/config/site.ts` (single source of truth).
- Booking link: `https://cal.com/vesharo/15min` (never `/discovery` or generic).
- Public email: `vesharo.ai@gmail.com` (dispatches to Resend `onboarding@resend.dev` until custom domain mailbox exists).
- Design tokens: Use CSS variables from `src/styles/tokens.css` and `src/styles/brand.css`.
- Headings: `Plus Jakarta Sans` (`--font-family-heading`, sentence case).
- Body: `Inter` (`--font-family-body`).
- Color palette: Deep Space base (`#070B14`, `#0B0F19`) + Electric Accent (`#0066FF`, `#00D2FF`).
- All text/background combinations must meet WCAG 2.2 AA contrast.
- No hover-hidden cards: all service and feature details must be readable on touchscreens.

## Content Integrity Rule
- Real portfolio only: LockApp, NavratriOS, Wirebench. MedMarketMD with confidential client status.
- No invented statistics, testimonials, awards, compliance claims (no "HIPAA/SOC2"), or fake logos.
- Any test or demo content strictly tagged with `"placeholder": true` and gated in production.
- Consult and update `docs/claims.md` for any factual claim.

## Commit Conventions
- Format: `VS-XX: short message`
- Complete Definition of Done before closing any ticket.
