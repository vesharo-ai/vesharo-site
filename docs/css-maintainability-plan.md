# Vesharo — CSS Debt Cleanup & Maintainability Plan (VS-40.4)

Last updated: October 2026  
Status: Post-Launch Technical Roadmap  

---

## 1. Context & Motivation

During the initial development and migration, legacy styles from the HTML template were contained in `src/styles/globals.css`. While the new Glass & Depth layer (`src/styles/glass.css`), tokens system (`src/styles/tokens.css`), and brand rules (`src/styles/brand.css`) deliver a stunning, unified aesthetic, a post-launch cleanup sprint will improve long-term developer velocity.

---

## 2. Key Action Items

### A. Reduce `!important` Declarations
- **Current State:** Several utility classes and card overrides use `!important` to reliably override vendor template rules.
- **Remediation:** Remove legacy vendor styles in `globals.css` that conflict with design tokens, enabling clean cascade hierarchy without `!important`.

### B. Prune Unused Legacy Template CSS
- **Current State:** `globals.css` retains unused styles from the multi-theme template (e.g., outdated e-commerce widgets, unused blog layouts).
- **Remediation:** Run PurgeCSS or unCSS to eliminate unreferenced selectors, reducing the CSS bundle size from ~140KB to < 40KB.

### C. Consolidate Component Styles into Astro Scoped CSS
- **Current State:** Select global classes apply styling to banner, services, and footer.
- **Remediation:** Shift component-specific styling into `<style>` blocks in Astro components (e.g. `Banner1.astro`, `Footer.astro`) to take advantage of Astro's automated scoping and critical CSS inlining.
