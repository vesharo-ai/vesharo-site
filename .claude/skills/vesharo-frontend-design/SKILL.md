---
name: vesharo-frontend-design
description: Design principles, typography, color tokens, responsive standards, restrained glass aesthetic, and anti-AI tells enforcement for the Vesharo website.
---

# Vesharo — Frontend Design Specialist Skill

## 1. Aesthetic Archetype: Atmospheric Technical Modernism
- **Visual Feel**: Restrained Dark Glass, Deep Reflection, Precision Engineering.
- **Subject Grounding**: Real mobile apps in real hands. Hero and featured showcases use physical phone frames and real application screens (LockApp, NavratriOS, Wirebench) instead of stock "cyber" abstractions or meaningless floating glowing cubes.
- **Restraint Rule**: Spend boldness in one place (the hero + one product showcase); keep secondary sections quiet, flat, and legible.

## 2. Color System (6 Named Hex Tokens)
| Token | Hex | Role | Contrast Ratio |
|---|---|---|---|
| **Deep Space** | `#070B14` | Primary viewport background | Base canvas |
| **Obsidian** | `#0B0F19` | Secondary section background | Flat solid layer |
| **Navy Card** | `#0F1626` | Card background | Hairline bordered surface |
| **Electric Core** | `#0066FF` | Interactive primary actions & active buttons | >= 5.2:1 (WCAG AA) |
| **Cyan Glow** | `#00D2FF` | Technical accents & focused borders | >= 11.8:1 (WCAG AAA) |
| **Pure Slate** | `#F8FAFC` | Primary headings & high-emphasis text | >= 18.2:1 (WCAG AAA) |
| **Muted Silver** | `#94A3B8` | Body text, captions & metadata | >= 7.4:1 (WCAG AA) |

## 3. Typography Standards
- **Headings**: `Plus Jakarta Sans` (`--font-family-heading`, variable weight 600–800, tight tracking: -0.025em to -0.01em). **Strictly sentence case**.
- **Body & Code**: `Inter` (`--font-family-body`, weight 400–500, line-height 1.6 to 1.7).
- All fonts 100% self-hosted variable WOFF2 in `/public/fonts/`.

## 4. Anti-AI Tells Checklist (Strictly Enforced)
- [x] **Sentence case everywhere**: Headings, buttons, and badges use natural sentence case. Uppercase is permitted ONLY for tiny technical acronyms (`EAS`, `MDM`, `API`, `5G`).
- [x] **No single-word headline gradients**: Headlines use uniform `#F8FAFC` high-contrast crisp text.
- [x] **No uniform glass cards**: Glass is reserved for header on scroll and hero phone bezels; secondary sections use flat `#0B0F19` / `#0F1626` cards with 1px hairline borders (`rgba(255,255,255,0.06)`).
- [x] **No hover-hidden content**: All card features and service deliverables are immediately visible and legible on touchscreens and keyboards.
- [x] **No continuous idle motion**: Motion only answers user interaction (menu toggles, accordions, form states).
- [x] **Action-explicit CTAs**: Buttons state the exact commitment: *"Book a 15-minute call"* or *"See what we've shipped"*, never generic "Submit" or "Click Here".

## 5. Responsive & A11y Invariants
- Breakpoints: 360px (mobile), 768px (tablet), 1024px (small desktop), 1440px (wide desktop).
- Zero horizontal overflow on any viewport (`scrollWidth <= innerWidth`).
- Touch targets >= 44x44px.
- Visible focus rings on all interactive elements.
- `prefers-reduced-motion` and `prefers-reduced-transparency` fully supported.
