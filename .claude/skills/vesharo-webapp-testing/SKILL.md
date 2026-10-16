---
name: vesharo-webapp-testing
description: Playwright visual regression testing, multi-viewport QA, console error interception, and accessibility audits for the Vesharo website.
---

# Vesharo — Webapp Testing & Visual QA Specialist Skill

## 1. Multi-Viewport Standards
Every page route must be verified against four standard responsive viewports:
- **360 × 800**: Compact mobile (iPhone SE / Android standard).
- **768 × 1024**: Tablet portrait (iPad).
- **1024 × 768**: Small desktop / tablet landscape.
- **1440 × 900**: Standard desktop monitor.

## 2. Automated Visual QA Script (`scripts/qa-visual-check.py`)
Run the visual QA pipeline against a running preview server:
```bash
# Run server helper and QA script in sequence
python scripts/with_server.py --server "npm run preview -- --port 4321" --port 4321 -- python scripts/qa-visual-check.py --base http://localhost:4321
```

### Automated Invariants Tested:
- **Horizontal Overflow**: `document.documentElement.scrollWidth <= window.innerWidth + 1`.
- **Missing Alt Attributes**: `<img>` elements without `alt`.
- **Touch Target Sizing**: All `<a>`, `<button>`, `<input>`, `<select>` must be >= 44x44px on mobile (<= 768px).
- **Heading Hierarchy**: Exactly one `<h1>` per page.
- **Meta Descriptions**: Non-empty `<meta name="description">` on every route.
- **Console Errors & Failed Requests**: 0 uncaught exceptions or 404 assets during `networkidle`.

## 3. The Chanel Rule Critique Protocol
Before declaring any UI work complete:
1. Examine screenshots captured in `qa-output/`.
2. Apply the Chanel Rule: *"Before you leave the house, look in the mirror and take one thing off."*
3. Remove at least one non-essential decorative element, redundant border, or noisy animation.
4. Record the critique and rationale in `docs/design-log.md`.

## 4. Primary Quality Gate Commands
```bash
# Run unit tests, SEO metadata verification, and internal link resolver
PATH="/opt/homebrew/bin:$PATH" npm test

# Run placeholder launch gate check
PATH="/opt/homebrew/bin:$PATH" npm run check:placeholders

# Run full TypeScript check and Astro production build
PATH="/opt/homebrew/bin:$PATH" npm run check
```
