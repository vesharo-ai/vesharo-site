# Vesharo Brand Guidelines & Design System

## 1. Brand Overview
**Vesharo** is an IT services & AI automation company delivering custom software engineering, intelligent agents, and scalable cloud solutions for forward-thinking enterprises.

- **Primary URL**: `https://vesharo.com`
- **Location**: Ahmedabad, Gujarat, India
- **Contact**: `contact@vesharo.com` · `+91 95862 12495`

---

## 2. Logo System

The Vesharo logo combines a high-precision, faceted geometric "V" monogram with a modern, kerning-optimized wordmark.

### Asset Manifest (`/public/brand/`)
| File | Format | Description | Context / Usage |
| :--- | :--- | :--- | :--- |
| `logo.svg` | SVG | Horizontal lockup (Full color mark + White text) | Default navbar, dark surfaces |
| `logo-dark.svg` | SVG | Horizontal lockup (Full color mark + Navy text) | Light canvas, paper, white bg |
| `logo-white.svg` | SVG | Monochrome White lockup | Dark overlays, media backgrounds |
| `logo-mono.svg` | SVG | Monochrome Dark Navy lockup | Single-ink print, fax, B&W docs |
| `logo-stacked.svg` | SVG | Centered stacked lockup (Color + White text) | Mobile hero cards, app splash screens |
| `logo-stacked-dark.svg` | SVG | Centered stacked lockup (Color + Navy text) | Light mode splash screens |
| `logo-stacked-white.svg` | SVG | Centered stacked lockup (All-white) | Dark hero presentations |
| `logo-icon.svg` | SVG | Icon mark only (Full color) | App icons, PWA, social avatars |
| `logo-icon-white.svg` | SVG | Icon mark only (White) | Monochromatic icon badges |
| `logo-icon-dark.svg` | SVG | Icon mark only (Navy) | Light mode icon badges |
| `og-image.png` | PNG | 1200×630 default OpenGraph / Twitter card | Social link sharing |
| `og-image.svg` | SVG | Vector source for social sharing | Vector reference |

### Logo Clear Space & Minimum Sizing
- **Minimum Digital Size (Icon)**: 16px × 16px (fully legible as favicon).
- **Minimum Digital Size (Lockup)**: 120px wide.
- **Clear Space Rule**: Maintain clear space equal to 50% of the mark's height around all sides of the lockup. No text, icons, or borders may intrude into this zone.

---

## 3. Color Palette & Tokens

The palette is engineered around a deep midnight navy foundation paired with an electric blue & cyan accent system.

### Color Tokens

```css
/* Vesharo Brand Design Tokens */
:root {
  /* Navy Canvas & Surfaces */
  --vesharo-navy-950: #070b14; /* Deepest canvas / background */
  --vesharo-navy-900: #0b0f19; /* Primary dark background */
  --vesharo-navy-850: #0f1626; /* Secondary card background */
  --vesharo-navy-800: #141d33; /* Elevated surface */
  --vesharo-navy-700: #1e293b; /* Borders & dividers (dark) */
  --vesharo-navy-600: #334155; /* Subtle borders */

  /* Electric Accent (Brand Identity) */
  --vesharo-electric-primary: #0066ff; /* Core brand blue */
  --vesharo-electric-accent: #00d2ff;  /* High-contrast electric cyan */
  --vesharo-electric-glow: #00f0ff;    /* Neon highlights & glows */
  --vesharo-electric-hover: #0052cc;   /* Hover state */
  --vesharo-electric-subtle: rgba(0, 210, 255, 0.12); /* Translucent glow */

  /* Neutral Scale */
  --vesharo-neutral-50: #f8fafc;  /* Clean light text / light canvas */
  --vesharo-neutral-100: #f1f5f9; /* Light surface */
  --vesharo-neutral-200: #e2e8f0; /* Light borders */
  --vesharo-neutral-300: #cbd5e1; /* Subtle text */
  --vesharo-neutral-400: #94a3b8; /* Dark mode muted text */
  --vesharo-neutral-500: #64748b; /* Secondary muted */
  --vesharo-neutral-600: #475569; /* Light mode body text */
  --vesharo-neutral-900: #0f172a; /* Light mode main text */

  /* Semantic Colors */
  --vesharo-semantic-success: #10b981;
  --vesharo-semantic-warning: #f59e0b;
  --vesharo-semantic-error: #ef4444;
  --vesharo-semantic-info: #00d2ff;
}
```

### WCAG 2.2 AA / AAA Contrast Verification

| Foreground | Background | Purpose | Contrast Ratio | WCAG Compliance |
| :--- | :--- | :--- | :--- | :--- |
| `#FFFFFF` (White) | `#0B0F19` (Navy 900) | Primary Body Text (Dark Mode) | **19.15:1** | **PASS (AAA)** |
| `#94A3B8` (Neutral 400) | `#0B0F19` (Navy 900) | Secondary / Meta Text (Dark Mode) | **7.47:1** | **PASS (AAA)** |
| `#00D2FF` (Electric Cyan) | `#0B0F19` (Navy 900) | Links, Badges, Highlights | **10.64:1** | **PASS (AAA)** |
| `#FFFFFF` (White) | `#141D33` (Navy 800) | Card Text | **16.76:1** | **PASS (AAA)** |
| `#00D2FF` (Electric Cyan) | `#141D33` (Navy 800) | Card Interactive Links | **9.31:1** | **PASS (AAA)** |
| `#0F172A` (Neutral 900) | `#F8FAFC` (Neutral 50) | Primary Body Text (Light Mode) | **17.06:1** | **PASS (AAA)** |
| `#475569` (Neutral 600) | `#F8FAFC` (Neutral 50) | Secondary Body Text (Light Mode) | **7.24:1** | **PASS (AAA)** |
| `#0066FF` (Electric Blue) | `#FFFFFF` (Pure White) | Primary CTA Button (Light Mode) | **4.83:1** | **PASS (AA)** |

---

## 4. Typography

- **Headings**: `Plus Jakarta Sans` (weights: 600 SemiBold, 700 Bold, 800 ExtraBold)
- **Body & Interface**: `Inter` (weights: 400 Regular, 500 Medium, 600 SemiBold)
- **Code & Metrics**: `JetBrains Mono` / System monospace

---

## 5. Usage Do's & Don'ts

### Do:
- Use `/brand/logo.svg` or `/brand/logo-white.svg` on dark backgrounds (`#0B0F19`, `#070B14`, `#111827`).
- Use `/brand/logo-dark.svg` on clean white or neutral light surfaces (`#FFFFFF`, `#F8FAFC`).
- Maintain the aspect ratio and minimum clear space around the logo at all times.
- Ensure all text links and UI controls satisfy at least 4.5:1 contrast against their backdrop.

### Don't:
- Do NOT distort, rotate, stretch, or alter the geometry of the mark.
- Do NOT use low-contrast combinations like Electric Blue (`#0066FF`) on Navy (`#0B0F19`) for body text.
- Do NOT replace the wordmark font with non-brand typefaces.
- Do NOT enclose the logo in heavy drop shadows or colored borders.
