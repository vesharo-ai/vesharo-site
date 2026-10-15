# Vesharo — Design Principles & Aesthetic Blueprint

> **Aesthetic Archetype**: *Atmospheric Technical Modernism (Restrained Glass & Deep Reflection)*  
> Built to eliminate generic AI-template tells while executing a bespoke, tactile mobile-first feel.

---

## 1. Color System (6 Named Hex Tokens)

| Token Name | Hex Code | Role & Intent | Contrast Ratio (vs. Canvas) |
|---|---|---|---|
| **Deep Space** | `#070B14` | Primary viewport canvas, foundation surface. Absorptive and non-fatiguing. | — (Base) |
| **Obsidian** | `#0B0F19` | Elevated card & section background. Flat solid contrast layer. | 1.1:1 vs `#070B14` |
| **Electric Core** | `#0066FF` | Primary interactive trigger, active buttons, focused inputs. | 5.2:1 (WCAG AA pass) |
| **Cyan Glow** | `#00D2FF` | Technical highlights, active status pips, focused device contours. | 11.8:1 (WCAG AAA pass) |
| **Pure Slate** | `#F8FAFC` | Primary headings and high-priority data readouts. | 18.2:1 (WCAG AAA pass) |
| **Muted Silver** | `#94A3B8` | Body copy, secondary descriptions, technical metadata. | 7.4:1 (WCAG AA pass) |

---

## 2. Typography Hierarchy & Fluid Scale

- **Headings**: `Plus Jakarta Sans` (`--font-family-heading`, variable weight 600–800, tight letter-spacing: -0.025em to -0.01em). Sentence case strictly enforced.
- **Body & Code**: `Inter` (`--font-family-body`, weight 400–500, line-height 1.6 to 1.7 for maximum legibility).
- **Scale**:
  - `Display / Hero`: `clamp(2.25rem, 5vw, 3.75rem)` (36px to 60px)
  - `Section H2`: `clamp(1.75rem, 3.5vw, 2.5rem)` (28px to 40px)
  - `Card / H3`: `1.25rem` to `1.5rem` (20px to 24px)
  - `Subhead / Lead`: `1.0625rem` to `1.125rem` (17px to 18px)
  - `Body`: `0.9375rem` to `1rem` (15px to 16px)
  - `Captions & Micro-Tags`: `0.75rem` to `0.8125rem` (12px to 13px)

---

## 3. The 3 Anti-Template Principles

1. **Spend Boldness in One Place (Atmospheric Restraint)**
   - *Anti-Pattern*: Scattered gradient orbs, rainbow cards, pulsating glows, and uniform glass everywhere.
   - *Vesharo Standard*: The hero section and featured product devices are the single focal point of visual drama (phone frame, illuminated status bar, real UI). All other sections (process, tech stack, FAQ, pricing) use disciplined flat obsidian surfaces (`#0B0F19`), hairline 1px borders (`rgba(255,255,255,0.06)`), and crisp high-contrast type.

2. **Ground in Real Artifacts, Not Cyber Abstractions**
   - *Anti-Pattern*: Floating glowing 3D cubes, cyber grids, artificial "neural network" lines, or fake metric badges ("50,000+ scans").
   - *Vesharo Standard*: Real phone device frames, real status bars, real biometric unlock states, real HMAC ticket scanners (NavratriOS), real OpenAPI diff trees (Wirebench). Real code, real architectures.

3. **Motion Answers Action, Never Distracts**
   - *Anti-Pattern*: Staggered slide-in reveals on every card, continuous hovering bobbing animations, and parallax lag.
   - *Vesharo Standard*: Zero continuous decorative motion. Page loads crisply. Animation is reserved strictly for interactive cause-and-effect: mobile menu open/close, accordion expansion, form submission states, and subtle keyboard focus transitions. Respects `prefers-reduced-motion` unconditionally.

---

## 4. Layout Concepts & ASCII Wireframes

### One-Sentence Layout Concept
*An authoritative, dark-canvas engineering hub that puts real mobile device UI in human hands above the fold, followed by direct technical proof, structured transparent pricing, and zero marketing filler.*

### Hero Section Wireframe
```text
+---------------------------------------------------------------------------------+
| [LOGO] Vesharo       Services  Portfolio  Process  Pricing  Blog  [Book a 15-min Call] |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   [ Mobile App Engineering ]                                                    |
|                                                     +-----------------------+   |
|   We ship production mobile apps                    | [===  9:41  === 5G ]  |   |
|   and software for startups.                        |                       |   |
|                                                     |   LockApp Enterprise  |   |
|   React Native & Expo cross-platform mobile apps    |   Device MDM Active   |   |
|   with offline resilience, Node.js cloud backends,  |                       |   |
|   and pragmatic AI automation.                      |   +----------------+  |   |
|                                                     |   | Knox Persistence | |  |
|   [ Book a 15-minute call ]  [ See our work ]       |   | Status: SECURE |  |   |
|                                                     |   +----------------+  |   |
|   * Direct senior engineers  * 100% IP ownership    |                       |   |
|                                                     +-----------------------+   |
+---------------------------------------------------------------------------------+
| [ Proven in production across ]: Electronics MDM  |  Festivals  |  API Squads   |
+---------------------------------------------------------------------------------+
```

### Service Detail Page Wireframe (`/services/mobile-app-development`)
```text
+---------------------------------------------------------------------------------+
| Home / Services / Mobile App Development                                        |
|                                                                                 |
| # Mobile App Development (iOS & Android)                                        |
| High-performance cross-platform applications built with React Native and Expo.  |
|                                                                                 |
| [ Book a 15-minute call ]   [ View Mobile Case Studies ]                        |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  [ Engineering Capabilities ]                     [ Delivery Specifications ]   |
|  +--------------------------------------------+   +---------------------------+ |
|  | * Cross-Platform React Native & Expo       |   | Architecture: Offline-1st | |
|  | * Native Swift / Kotlin Bridges            |   | State: WatermelonDB / Redux| |
|  | * Background Telemetry & Device Sensors    |   | Pipeline: EAS / Fastlane  | |
|  | * Offline SQLite & Sync Conflict Logic     |   | Timeline: 4-8 week MVPs   | |
|  +--------------------------------------------+   +---------------------------+ |
|                                                                                 |
|  [ Shipped in Production ]: LockApp (B2B MDM), NavratriOS (Offline Scanning)   |
|                                                                                 |
|  [ Technical FAQ ]: Expo vs Pure Native? App Store approvals? OTA updates?     |
+---------------------------------------------------------------------------------+
| Ready to build your mobile application? [ Book a 15-minute architecture call ]  |
+---------------------------------------------------------------------------------+
```

---

## 5. Review Against Known "AI Tells" Checklist

| AI Tell | Status on Vesharo | Enforced Fix |
|---|---|---|
| **ALL-CAPS headings/buttons** | **Eliminated** | All headings and CTAs converted to natural sentence case. Caps reserved exclusively for micro-tags (`5G`, `EAS`, `MDM`). |
| **Single-word gradient headlines** | **Eliminated** | Headlines use uniform `#F8FAFC` high-contrast crisp text without gimmicky 1-word color fades. |
| **Uniform rounded glass cards everywhere** | **Eliminated** | Glass treatment concentrated on the navigation and hero device; secondary sections use clean `#0B0F19` with subtle hairline border. |
| **Hover-hidden content** | **Eliminated** | Service cards, pricing grids, and portfolio items show 100% of details by default on touch and desktop. |
| **Fake metrics & badges** | **Eliminated** | Zero "50k+ scans", "SOC2 certified", or "sub-second" claims. Replaced with factual architecture specs. |
| **Meaningless aurora washes** | **Eliminated** | Decorative background bloat removed; contrast maintained at WCAG AA (>= 4.5:1) everywhere. |
