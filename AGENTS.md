# Vesharo — Claude / AI Engineering Instructions

## Project Overview
Production website for **Vesharo** (IT services & AI automation).
- Stack: Astro 7, React 19, Bootstrap 5, GSAP, Swiper, self-hosted variable fonts (Plus Jakarta Sans, Inter).

## Core Commands
- Dev Server: `astro dev --background`
- Build: `npm run build`
- Type & Build Verification: `npm run check` (`astro check && astro build`)
- Dev Status: `astro dev status`

## Architecture & Code Standards
- Keep 1 clean home page (`src/pages/index.astro`).
- Design tokens: Use CSS variables from `src/styles/tokens.css` and `src/styles/brand.css`.
- Headings: `Plus Jakarta Sans` (`--font-family-heading`).
- Body: `Inter` (`--font-family-body`).
- Color palette: Deep Navy base (`#070B14`, `#0B0F19`) + Electric Accent (`#0066FF`, `#00D2FF`).
- All text/background combinations must meet WCAG 2.2 AA contrast.

## Content Integrity Rule
- Real portfolio only: LockApp, NavratriOS, Wirebench.
- No invented statistics, testimonials, awards, or fake logos.

## Commit Conventions
- Format: `VS-XX: short message`
- Complete Definition of Done before closing any ticket.
