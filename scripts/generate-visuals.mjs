/**
 * Vesharo branded visual generator.
 *
 * Produces the conceptual (non-photographic) artwork described in ASSET-AUDIT.md.
 * Colours and the wordmark are derived from src/config/brand.ts and public/site-logo.svg.
 *
 * These assets illustrate HOW Vesharo works. They deliberately depict no client,
 * project, dashboard, metric, screenshot or person, because none has been verified.
 *
 * Usage: node scripts/generate-visuals.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = resolve(ROOT, "public");

const C = {
  primary: "#7C5CFF",
  light: "#A78BFA",
  dim: "#C4B5FD",
  panel: "#171717",
  deep: "#0F0F0F",
  line: "#2A2A2E",
  text: "#9E9AA8",
  white: "#FFFFFF",
};

const FONT = "Outfit, 'Segoe UI', Arial, Helvetica, sans-serif";

/* ---------------------------------------------------------------- helpers */

/** Standard service-concept frame. */
const frame = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${C.primary}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${C.primary}" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" rx="20" fill="${C.panel}"/>
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="20" stroke="${C.primary}" stroke-opacity="0.22"/>
${body}
</svg>
`;

const label = (x, y, t, o = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${o.size ?? 11}" font-weight="${o.weight ?? 500}" letter-spacing="${o.ls ?? 0.6}" fill="${o.fill ?? C.text}"${o.anchor ? ` text-anchor="${o.anchor}"` : ""}>${t}</text>`;

const box = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 10}" fill="${o.fill ?? C.deep}" stroke="${o.stroke ?? C.line}" stroke-width="${o.sw ?? 1}"/>`;

const arrow = (x1, y1, x2, y2, o = {}) =>
  `<path d="M${x1} ${y1}H${x2}" stroke="${o.stroke ?? C.primary}" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="${o.dash ?? '0'}"/>
   <path d="M${x2 - 5} ${y2 - 4}L${x2} ${y2}L${x2 - 5} ${y2 + 4}" stroke="${o.stroke ?? C.primary}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`;

const dot = (x, y, r, fill, o = {}) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${o.fill ?? fill}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="1.4"` : ""}${o.opacity ? ` opacity="${o.opacity}"` : ""}/>`;

/* --------------------------------------------------- 1. web development */

const webDevelopment = frame(560, 400, `
  ${label(32, 44, "PRESENTATION", { fill: C.light, weight: 600 })}
  ${box(32, 60, 220, 148, { r: 12 })}
  <path d="M32 84h220" stroke="${C.line}" stroke-width="1"/>
  ${dot(48, 72, 3.5, C.primary)}${dot(60, 72, 3.5, C.line)}${dot(72, 72, 3.5, C.line)}
  ${box(48, 100, 86, 12, { r: 6, fill: C.primary, stroke: "none", o: 1 })}
  ${box(48, 122, 188, 10, { r: 5, fill: C.line, stroke: "none" })}
  ${box(48, 140, 152, 10, { r: 5, fill: C.line, stroke: "none" })}
  ${box(48, 162, 70, 26, { r: 8, fill: "none", stroke: C.primary, sw: 1.4 })}
  ${label(83, 179, "CTA", { size: 10, fill: C.dim, ls: 1 })}
  ${box(136, 162, 100, 26, { r: 8, fill: C.line, stroke: "none" })}

  ${label(32, 246, "TYPED API", { fill: C.light, weight: 600 })}
  ${box(32, 262, 220, 104, { r: 12 })}
  ${["GET  /orders", "POST /checkout", "PATCH /profile"].map((t, i) =>
    `${box(48, 280 + i * 28, 188, 20, { r: 6, fill: C.deep, stroke: C.line })}
     ${label(60, 294 + i * 28, t, { size: 11, fill: i === 0 ? C.dim : C.text, ls: 0 })}
     ${dot(226, 290 + i * 28, 3.5, i === 0 ? C.primary : C.line)}`
  ).join("\n  ")}

  ${arrow(268, 170, 300, 170)}
  ${arrow(268, 314, 300, 314)}

  ${label(316, 44, "QUERY CACHE", { fill: C.light, weight: 600 })}
  ${box(316, 60, 212, 168, { r: 12 })}
  ${[
    { t: "Reference data", w: 168 },
    { t: "Session state", w: 132 },
    { t: "Derived views", w: 96 },
  ].map((r, i) =>
    `${dot(340, 92 + i * 44, 5, C.primary, { opacity: 1 - i * 0.28 })}
     ${label(358, 88 + i * 44, r.t, { size: 11, ls: 0.2 })}
     <rect x="358" y="${98 + i * 44}" width="${r.w}" height="6" rx="3" fill="${C.line}"/>`
  ).join("\n  ")}
  <path d="M316 60v168" stroke="${C.line}" stroke-width="1"/>

  ${label(316, 284, "PERSISTENCE", { fill: C.light, weight: 600 })}
  ${box(316, 298, 212, 68, { r: 12 })}
  <ellipse cx="352" cy="320" rx="20" ry="7" fill="none" stroke="${C.primary}" stroke-width="1.5"/>
  <path d="M332 320v22c0 3.9 9 7 20 7s20-3.1 20-7v-22" fill="none" stroke="${C.primary}" stroke-width="1.5"/>
  <path d="M332 331c0 3.9 9 7 20 7s20-3.1 20-7" fill="none" stroke="${C.primary}" stroke-width="1.5" opacity="0.5"/>
  ${label(386, 328, "Primary store", { size: 11, ls: 0.2, fill: C.white })}
  ${label(386, 346, "+ read replica", { size: 10, ls: 0 })}
`);

/* -------------------------------------------------- 2. mobile development */

const mobileDevelopment = frame(560, 400, `
  ${label(32, 44, "ONE CODEBASE", { fill: C.light, weight: 600 })}

  ${box(32, 62, 116, 200, { r: 16 })}
  ${box(52, 86, 76, 108, { r: 6, fill: "none", stroke: C.primary, sw: 1.5 })}
  <path d="M52 108h76" stroke="${C.primary}" stroke-width="1.5"/>
  ${dot(90, 97, 2.5, C.line)}
  ${box(60, 122, 60, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(60, 138, 44, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(60, 160, 60, 20, { r: 6, fill: C.primary, stroke: "none" })}
  ${label(90, 210, "React Native", { size: 10, anchor: "middle", ls: 0.4 })}
  ${label(90, 228, "iOS / Android", { size: 10, anchor: "middle", ls: 0, fill: C.text })}

  ${box(172, 76, 150, 172, { r: 14 })}
  ${box(194, 100, 106, 96, { r: 6, fill: "none", stroke: C.primary, sw: 1.5 })}
  ${box(206, 116, 60, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(206, 132, 82, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(206, 152, 82, 28, { r: 6, fill: "none", stroke: C.line })}
  ${label(247, 224, "Flutter", { size: 10, anchor: "middle", ls: 0.4 })}
  ${label(247, 240, "Cross-platform", { size: 10, anchor: "middle", ls: 0, fill: C.text })}

  ${box(346, 62, 182, 200, { r: 14 })}
  ${box(368, 86, 138, 118, { r: 8, fill: "none", stroke: C.primary, sw: 1.5 })}
  <path d="M368 112h138" stroke="${C.primary}" stroke-width="1.5"/>
  ${dot(380, 99, 2.5, C.line)}${dot(390, 99, 2.5, C.line)}${dot(400, 99, 2.5, C.line)}
  ${box(380, 128, 114, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(380, 144, 88, 8, { r: 4, fill: C.line, stroke: "none" })}
  ${box(380, 164, 114, 26, { r: 6, fill: C.primary, stroke: "none" })}
  ${label(437, 226, "Responsive web", { size: 10, anchor: "middle", ls: 0.4 })}
  ${label(437, 242, "Same design system", { size: 10, anchor: "middle", ls: 0, fill: C.text })}

  ${label(32, 296, "SHARED DESIGN SYSTEM", { fill: C.light, weight: 600 })}
  ${box(32, 312, 496, 52, { r: 12, fill: "url(#g)", stroke: C.primary, sw: 1.2 })}
  ${["Buttons", "Forms", "Nav", "Tokens", "Motion"].map((t, i) =>
    `${box(48 + i * 97, 329, 84, 18, { r: 9, fill: C.panel, stroke: C.primary, sw: 1 })}
     ${label(90 + i * 97, 342, t, { size: 10, anchor: "middle", ls: 0.3, fill: C.dim })}`
  ).join("\n  ")}
`);

/* ------------------------------------------------------- 3. cloud devops */

const cloudDevops = frame(560, 400, `
  ${label(32, 42, "DELIVERY PIPELINE", { fill: C.light, weight: 600 })}
  ${[
    { t: "Commit", s: "branch" },
    { t: "Build", s: "container" },
    { t: "Test", s: "suite" },
    { t: "Deploy", s: "staging" },
  ].map((s, i) => {
    const x = 32 + i * 126;
    return `${box(x, 58, 104, 72, { r: 12 })}
    ${dot(x + 22, 82, 6, C.primary, { opacity: 1 - i * 0.22 })}
    ${label(x + 38, 86, `0${i + 1}`, { size: 11, fill: C.dim })}
    ${label(x + 16, 110, s.t, { size: 12, weight: 600, fill: C.white, ls: 0.2 })}
    ${label(x + 16, 124, s.s, { size: 10, ls: 0, opacity: 1 })}`;
  }).join("\n  ")}
  ${arrow(136, 94, 154, 94)}${arrow(262, 94, 280, 94)}${arrow(388, 94, 406, 94)}

  ${label(32, 186, "ORCHESTRATED RUNTIME", { fill: C.light, weight: 600 })}
  ${box(32, 202, 320, 168, { r: 14 })}
  ${[0, 1, 2].map(i => `<path d="M192 276L${[114, 192, 270][i]} 228" stroke="${C.primary}" stroke-width="1.2" opacity="0.4" stroke-dasharray="3 4"/>
    <path d="M192 276L${[114, 192, 270][i]} 344" stroke="${C.primary}" stroke-width="1.2" opacity="0.4" stroke-dasharray="3 4"/>`).join("\n  ")}
  ${[[114, 228], [270, 228], [114, 344], [270, 344]].map(([x, y]) => `${dot(x, y, 21, C.deep, { stroke: C.primary })}`).join("\n  ")}
  ${[[114, 228], [270, 228], [114, 344], [270, 344]].map(([x, y]) => dot(x, y, 7, C.primary)).join("\n  ")}
  <path d="M192 250l32 18v36l-32 18-32-18v-36z" fill="url(#g)" stroke="${C.primary}" stroke-width="1.7"/>
  ${label(192, 291, "API", { size: 12, anchor: "middle", weight: 600, fill: C.white, ls: 0.4 })}

  ${label(376, 186, "OBSERVABILITY", { fill: C.light, weight: 600 })}
  ${box(376, 202, 152, 168, { r: 14 })}
  ${[
    { t: "Uptime", v: "watched" },
    { t: "Cost", v: "audited" },
    { t: "Security", v: "scanned" },
  ].map((r, i) =>
    `${box(392, 222 + i * 48, 120, 38, { r: 9 })}
     ${label(406, 238 + i * 48, r.t, { size: 10, ls: 0.3 })}
     ${label(406, 253 + i * 48, r.v, { size: 11, weight: 600, fill: C.dim, ls: 0.2 })}
     ${dot(500, 241 + i * 48, 3.5, C.primary)}`
  ).join("\n  ")}
`);

/* ------------------------------------------------- 4. enterprise solutions */

const enterpriseSolutions = frame(560, 400, `
  ${label(32, 42, "MODERN SURFACE", { fill: C.light, weight: 600 })}
  ${[0, 1, 2].map(i =>
    `${box(32, 58 + i * 62, 148, 52, { r: 12, fill: "url(#g)", stroke: C.primary, sw: 1.3 })}
     ${label(50, 82 + i * 62, ["Web app", "Mobile", "Portal"][i], { size: 12, weight: 600, fill: C.white, ls: 0.2 })}
     ${label(50, 98 + i * 62, ["New build", "New build", "New build"][i], { size: 10, ls: 0 })}`
  ).join("\n  ")}

  ${label(224, 42, "ADAPTER LAYER", { fill: C.light, weight: 600 })}
  ${box(224, 58, 132, 176, { r: 12 })}
  ${["ERP", "CRM", "BILLING", "LEGACY API"].map((t, i) =>
    `${box(240, 74 + i * 40, 100, 30, { r: 8 })}
     ${label(254, 93 + i * 40, t, { size: 10, ls: 0.4, fill: C.dim })}
     ${dot(328, 89 + i * 40, 3.5, C.primary, { opacity: 0.85 })}`
  ).join("\n  ")}
  ${[0, 1, 2].map(i => `<path d="M180 ${84 + i * 62}H224" stroke="${C.primary}" stroke-width="1.4" opacity="0.55"/>`).join("\n  ")}

  ${arrow(356, 146, 388, 146)}

  ${label(388, 42, "LEGACY CORE", { fill: C.light, weight: 600 })}
  ${box(388, 58, 140, 176, { r: 12, fill: C.deep, stroke: C.line, sw: 1, })}

  ${label(32, 292, "STRANGLER MIGRATION", { fill: C.light, weight: 600 })}
  ${box(32, 308, 496, 62, { r: 12, fill: "url(#g)", stroke: C.primary, sw: 1.2 })}
  ${["Phase 1", "Phase 2", "Phase 3"].map((t, i) => {
    const x = 48 + i * 160;
    return `${dot(x + 12, 339, 11, C.panel, { stroke: C.primary })}
    ${label(x + 12, 343, `${i + 1}`, { size: 11, anchor: "middle", weight: 600, fill: C.white })}
    ${label(x + 32, 336, t, { size: 11, weight: 600, fill: C.white, ls: 0.2 })}
    ${label(x + 32, 352, ["Route around", "Shift traffic", "Retire safely"][i], { size: 10, ls: 0 })}
    ${i < 2 ? `<path d="M${x + 118} 339h34" stroke="${C.primary}" stroke-width="1.4" opacity="0.5"/>` : ""}`;
  }).join("\n  ")}
`);

/* ---------------------------------------------------------- 5. data & ai */

const dataAi = frame(560, 400, `
  ${label(32, 42, "SOURCES", { fill: C.light, weight: 600 })}
  ${["Events", "CRM", "Billing"].map((t, i) =>
    `${box(32, 58 + i * 56, 104, 44, { r: 11 })}
     ${dot(52, 80 + i * 56, 5, C.primary)}
     ${label(68, 84 + i * 56, t, { size: 11, ls: 0.3, fill: C.white })}`
  ).join("\n  ")}
  ${[0, 1, 2].map(i => `<path d="M136 ${80 + i * 56}H196V142H228" stroke="${C.primary}" stroke-width="1.3" opacity="0.4" fill="none"/>`).join("")}

  ${label(228, 42, "PIPELINE + WAREHOUSE", { fill: C.light, weight: 600 })}
  ${box(228, 58, 140, 168, { r: 12 })}
  ${["Ingest", "Transform", "Validate"].map((t, i) =>
    `${box(244, 72 + i * 42, 108, 32, { r: 8, fill: "url(#g)", stroke: C.primary, sw: 1.1 })}
     ${label(298, 92 + i * 42, t, { size: 10, anchor: "middle", ls: 0.3, fill: C.dim })}`
  ).join("\n  ")}
  <ellipse cx="298" cy="200" rx="34" ry="9" fill="none" stroke="${C.primary}" stroke-width="1.5"/>
  <path d="M264 200v14c0 5 15 9 34 9s34-4 34-9v-14" fill="none" stroke="${C.primary}" stroke-width="1.5"/>

  ${arrow(368, 142, 400, 142)}

  ${label(400, 42, "OUTPUTS", { fill: C.light, weight: 600 })}
  ${[
    { t: "Analytics", s: "dashboards + alerts" },
    { t: "AI workflows", s: "LLM + retrieval" },
  ].map((o, i) =>
    `${box(400, 58 + i * 76, 128, 64, { r: 12, fill: "url(#g)", stroke: C.primary, sw: 1.2 })}
     ${label(418, 86 + i * 76, o.t, { size: 12, weight: 600, fill: C.white, ls: 0.2 })}
     ${label(418, 104 + i * 76, o.s, { size: 10, ls: 0 })}`
  ).join("\n  ")}

  ${label(32, 290, "PRODUCTION GUARANTEES", { fill: C.light, weight: 600 })}
  ${box(32, 306, 496, 62, { r: 12 })}
  ${["Typed schemas", "Replayable jobs", "Eval harness", "Review gate"].map((t, i) =>
    `${dot(58 + i * 120, 332, 3.5, C.primary)}
     ${label(72 + i * 120, 336, t, { size: 11, ls: 0.2, fill: C.dim })}`
  ).join("\n  ")}
  <path d="M48 352h464" stroke="${C.line}" stroke-width="1"/>
  ${label(280, 366, "Schemas versioned alongside the code that depends on them", { size: 10, ls: 0, anchor: "middle" })}
`);

/* ------------------------------------------------------- 6. ui/ux design */

const uiUxDesign = frame(560, 400, `
  ${label(32, 42, "DESIGN TOKENS", { fill: C.light, weight: 600 })}
  ${box(32, 58, 168, 200, { r: 12 })}
  ${[C.primary, C.light, C.dim, C.white].map((c, i) =>
    `${box(50, 76 + i * 38, 28, 28, { r: 8, fill: c, stroke: "none" })}
     ${label(90, 94 + i * 38, ["Primary", "Accent", "Surface", "Text"][i], { size: 10, ls: 0.3 })}`
  ).join("\n  ")}
  <path d="M48 232h136" stroke="${C.line}" stroke-width="1"/>
  ${[
    ["Display", 76, 6],
    ["Heading", 56, 5],
    ["Body", 38, 4],
  ].map(([t, w, h], i) =>
    `${label(50, 251 + i * 14, t, { size: 9, ls: 0.2 })}
     <rect x="112" y="${244 + i * 14}" width="${w}" height="${h}" rx="${h / 2}" fill="${C.line}"/>`
  ).join("\n  ")}

  ${label(228, 42, "COMPONENT KIT", { fill: C.light, weight: 600 })}
  ${box(228, 58, 300, 200, { r: 12 })}
  ${box(248, 78, 120, 34, { r: 17, fill: C.primary, stroke: "none" })}
  ${label(308, 100, "Primary", { size: 11, anchor: "middle", weight: 600, fill: C.white, ls: 0.3 })}
  ${box(380, 78, 60, 34, { r: 17, fill: "none", stroke: C.primary, sw: 1.4 })}
  ${label(410, 100, "Ghost", { size: 11, anchor: "middle", ls: 0.3, fill: C.dim })}
  ${box(248, 126, 260, 36, { r: 9 })}
  ${label(262, 149, "Input field", { size: 10, ls: 0.2, fill: C.text })}
  ${box(452, 133, 48, 22, { r: 11, fill: C.primary, stroke: "none" })}
  ${label(476, 148, "On", { size: 9, anchor: "middle", fill: C.white, ls: 0.3 })}
  ${box(248, 176, 260, 36, { r: 9 })}
  ${label(262, 199, "Select", { size: 10, ls: 0.2, fill: C.text })}
  <path d="M492 191l5 5 5-5" stroke="${C.primary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  ${box(248, 226, 126, 20, { r: 10, fill: C.deep, stroke: C.line })}
  <rect x="248" y="226" width="86" height="20" rx="10" fill="${C.primary}" opacity="0.85"/>
  ${label(348, 240, "62%", { size: 10, ls: 0.2, fill: C.dim })}

  ${label(32, 308, "SHIP LOOP", { fill: C.light, weight: 600 })}
  ${box(32, 324, 496, 48, { r: 12, fill: "url(#g)", stroke: C.primary, sw: 1.2 })}
  ${["Research", "Wireframe", "Prototype", "Test", "System", "Ship"].map((t, i) => {
    const x = 48 + i * 80;
    return `${dot(x + 14, 348, 9, C.panel, { stroke: C.primary })}
    ${label(x + 14, 352, `${i + 1}`, { size: 10, anchor: "middle", weight: 600, fill: C.white })}
    ${label(x + 28, 352, t, { size: 10, ls: 0.2, fill: C.dim })}
    ${i < 5 ? `<path d="M${x + 44} 348h30" stroke="${C.primary}" stroke-width="1.2" opacity="0.45"/>` : ""}`;
  }).join("\n  ")}
`);

/* ------------------------------------------------------- hero visual */

const heroVisual = `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="560" viewBox="0 0 560 560" fill="none" role="img">
  <defs>
    <linearGradient id="hp" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${C.primary}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${C.primary}" stop-opacity="0.08"/>
    </linearGradient>
    <linearGradient id="hp2" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="${C.dim}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${C.primary}" stop-opacity="0.5"/>
    </linearGradient>
  </defs>

  <circle cx="280" cy="280" r="216" fill="url(#hp)" opacity="0.5"/>
  <circle cx="280" cy="280" r="216" fill="none" stroke="${C.primary}" stroke-opacity="0.28"/>
  <circle cx="280" cy="280" r="164" fill="none" stroke="${C.primary}" stroke-opacity="0.16" stroke-dasharray="4 8"/>

  ${[
    { x: 280, y: 116, r: 26, t: "Commit" },
    { x: 435, y: 200, r: 22, t: "Build" },
    { x: 435, y: 360, r: 22, t: "Test" },
    { x: 280, y: 444, r: 26, t: "Deploy" },
    { x: 125, y: 360, r: 22, t: "Operate" },
    { x: 125, y: 200, r: 22, t: "Design" },
  ].map((n, i, arr) => {
    const nx = arr[(i + 1) % arr.length];
    return `<path d="M${n.x} ${n.y}L${nx.x} ${nx.y}" stroke="url(#hp2)" stroke-width="1.6" opacity="0.5"/>`;
  }).join("\n  ")}

  ${[
    { x: 280, y: 116, r: 26, t: "Commit" },
    { x: 435, y: 200, r: 22, t: "Build" },
    { x: 435, y: 360, r: 22, t: "Test" },
    { x: 280, y: 444, r: 26, t: "Deploy" },
    { x: 125, y: 360, r: 22, t: "Operate" },
    { x: 125, y: 200, r: 22, t: "Design" },
  ].map((n, i) =>
    `${dot(n.x, n.y, n.r, C.deep, { stroke: C.primary })}
     ${dot(n.x, n.y, n.r - 6, C.primary, { opacity: 0.16 })}
     ${label(n.x, n.y + 4, n.t, { size: 11, anchor: "middle", ls: 0.3, fill: C.dim })}`
  ).join("\n  ")}

  <circle cx="280" cy="280" r="62" fill="url(#hp)" stroke="${C.primary}" stroke-width="1.8"/>
  <rect x="262" y="262" width="36" height="36" rx="8" fill="${C.primary}"/>
  <path d="M270 271l9 18 9-18h-6.6L280 279.4 276.6 271z" fill="${C.white}"/>
  <path d="M276.5 271L280 278.1 283.5 271z" fill="${C.dim}"/>
</svg>
`;

/* ---------------------------------------------------------- emission */

const svgs = {
  "images/service/concept-web-development.svg": webDevelopment,
  "images/service/concept-mobile-development.svg": mobileDevelopment,
  "images/service/concept-cloud-devops.svg": cloudDevops,
  "images/service/concept-enterprise-solutions.svg": enterpriseSolutions,
  "images/service/concept-data-ai.svg": dataAi,
  "images/service/concept-ui-ux-design.svg": uiUxDesign,
  "images/brand/hero-system.svg": heroVisual,
};

for (const [rel, content] of Object.entries(svgs)) {
  const abs = resolve(PUBLIC, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content.replace(/\n\s*\n/g, "\n"));
  console.log("svg  ", rel);
}

/* ------------------------------------------------ raster: OG + covers */

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.log("\nsharp unavailable — skipped OG card and blog covers (SVGs still written).");
}

if (sharp) {
  const solid = (w, h, c) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${c}"/></svg>`;

  /** Dark branded backdrop with a soft purple bloom. */
  const backdrop = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <radialGradient id="b" cx="18%" cy="12%" r="90%">
      <stop offset="0%" stop-color="${C.primary}" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="#14121F" stop-opacity="0.92"/>
      <stop offset="100%" stop-color="${C.deep}"/>
    </radialGradient>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0v48" fill="none" stroke="${C.white}" stroke-opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#b)"/>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
</svg>`;

  const wordmark = (x, y, s = 1, nameSize = 44) => `<g transform="translate(${x} ${y}) scale(${s})">
  <rect width="56" height="56" rx="13" fill="${C.primary}"/>
  <path d="M12.5 14L28 42l15.5-28h-9.1L28 29.6 20.6 14z" fill="${C.white}"/>
  <path d="M21.5 14L28 26.2 34.5 14z" fill="${C.dim}"/>
  <text x="74" y="40" font-family="${FONT}" font-size="${nameSize}" font-weight="600" letter-spacing="0.5" fill="${C.white}">Vesharo</text>
</g>`;

  // --- Open Graph card 1200x630
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="url(#b)"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1060" cy="120" r="230" fill="none" stroke="${C.primary}" stroke-opacity="0.2"/>
  <circle cx="1060" cy="120" r="160" fill="none" stroke="${C.primary}" stroke-opacity="0.12" stroke-dasharray="4 10"/>

  ${wordmark(80, 74, 1)}

  <text x="80" y="270" font-family="${FONT}" font-size="72" font-weight="700" fill="${C.white}">Custom software,</text>
  <text x="80" y="352" font-family="${FONT}" font-size="72" font-weight="700" fill="${C.white}">cloud platforms, and</text>
  <text x="80" y="434" font-family="${FONT}" font-size="72" font-weight="700" fill="${C.light}">AI-powered products.</text>

  <text x="80" y="500" font-family="${FONT}" font-size="27" font-weight="400" fill="${C.text}">Engineering digital products that scale.</text>

  <rect x="80" y="540" width="180" height="2" fill="${C.primary}"/>
  <text x="80" y="585" font-family="${FONT}" font-size="24" font-weight="500" letter-spacing="1" fill="${C.dim}">VESHARO.COM</text>
</svg>`;

  // --- Blog covers 1200x750, one motif per article
  const covers = [
    {
      file: "cover-tech-stack.jpg",
      motif: `<rect x="330" y="250" width="540" height="250" rx="18" fill="${C.deep}" stroke="${C.primary}" stroke-opacity="0.7"/>
        <path d="M330 306h540" stroke="${C.primary}" stroke-opacity="0.5"/>
        <circle cx="356" cy="278" r="5" fill="${C.primary}"/><circle cx="376" cy="278" r="5" fill="${C.text}" opacity="0.4"/>
        <rect x="356" y="330" width="180" height="14" rx="7" fill="${C.primary}" opacity="0.9"/>
        <rect x="356" y="358" width="440" height="10" rx="5" fill="${C.white}" opacity="0.22"/>
        <rect x="356" y="378" width="380" height="10" rx="5" fill="${C.white}" opacity="0.22"/>
        <rect x="356" y="404" width="240" height="10" rx="5" fill="${C.white}" opacity="0.22"/>
        <rect x="356" y="436" width="130" height="40" rx="9" fill="${C.primary}"/>
        <rect x="502" y="436" width="130" height="40" rx="9" fill="none" stroke="${C.primary}" stroke-opacity="0.8"/>`,
    },
    {
      file: "cover-cloud-migration.jpg",
      motif: `<circle cx="600" cy="375" r="150" fill="none" stroke="${C.primary}" stroke-opacity="0.4"/>
        <circle cx="600" cy="375" r="104" fill="none" stroke="${C.primary}" stroke-opacity="0.7"/>
        <circle cx="600" cy="375" r="56" fill="${C.primary}" opacity="0.28"/>
        <circle cx="600" cy="375" r="20" fill="${C.primary}"/>
        ${[[600, 225], [750, 375], [600, 525], [450, 375]].map(([x, y]) =>
          `<circle cx="${x}" cy="${y}" r="13" fill="${C.deep}" stroke="${C.primary}"/>
           <path d="M${x} ${y - 5}L${x} ${y + 5}M${x - 5} ${y}L${x + 5} ${y}" stroke="${C.light}" stroke-width="1.6" stroke-linecap="round"/>`
        ).join("")}
        ${[[600, 225], [750, 375], [600, 525], [450, 375]].map(([x, y], i, a) => {
          const n = a[(i + 1) % a.length];
          return `<path d="M${x} ${y}L${n[0]} ${n[1]}" stroke="${C.primary}" stroke-opacity="0.35" stroke-width="1.4"/>`;
        }).join("")}`,
    },
    {
      file: "cover-enterprise-ux.jpg",
      motif: `<rect x="360" y="215" width="480" height="320" rx="18" fill="${C.deep}" stroke="${C.primary}" stroke-opacity="0.55"/>
        <path d="M360 253h480" stroke="${C.primary}" stroke-opacity="0.4"/>
        <circle cx="384" cy="234" r="5" fill="${C.primary}"/><circle cx="402" cy="234" r="5" fill="${C.white}" opacity="0.25"/>
        <rect x="360" y="253" width="112" height="282" fill="${C.primary}" fill-opacity="0.10"/>
        <path d="M472 253v282" stroke="${C.primary}" stroke-opacity="0.35"/>
        ${["Overview", "Records", "Reports", "Admin"].map((t, i) =>
          `<rect x="380" y="${285 + i * 34}" width="3" height="14" rx="1.5" fill="${C.primary}" opacity="${i === 0 ? 1 : 0}"/>
           ${label(392, 297 + i * 34, t, { size: 13, ls: 0.2, fill: i === 0 ? C.white : C.text })}`
        ).join("")}
        ${[0, 1, 2].map(r =>
          [0, 1, 2].map(c =>
            `<rect x="${504 + c * 112}" y="${283 + r * 86}" width="94" height="68" rx="10" fill="${C.primary}" fill-opacity="${0.07 + (r + c) * 0.02}" stroke="${C.primary}" stroke-opacity="0.4"/>
             <rect x="${518 + c * 112}" y="${300 + r * 86}" width="46" height="7" rx="3.5" fill="${C.white}" opacity="0.3"/>
             <rect x="${518 + c * 112}" y="${316 + r * 86}" width="66" height="6" rx="3" fill="${C.white}" opacity="0.15"/>`
          ).join("")
        ).join("")}`,
    },
    {
      file: "cover-analytics.jpg",
      motif: `${[[380, 300], [600, 300], [820, 300]].map(([x, y]) =>
        `<circle cx="${x}" cy="${y}" r="30" fill="${C.deep}" stroke="${C.primary}" stroke-opacity="0.8"/>`
      ).join("")}
        ${[[380, 300], [600, 300], [820, 300]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="${C.primary}"/>`).join("")}
        ${[[380, 300], [600, 300], [820, 300]].map(([x, y], i) => `<path d="M${x} ${y + 30}v70" stroke="${C.primary}" stroke-opacity="0.5"/>`).join("")}
        <path d="M380 400h440" stroke="${C.primary}" stroke-opacity="0.5"/>
        <rect x="500" y="400" width="200" height="110" rx="16" fill="${C.primary}" opacity="0.2" stroke="${C.primary}" stroke-opacity="0.8"/>
        ${[0, 1, 2, 3, 4].map(i => {
          const h = [26, 44, 34, 62, 50][i];
          return `<rect x="${528 + i * 32}" y="${486 - h}" width="18" height="${h}" rx="5" fill="${C.primary}" opacity="${0.45 + i * 0.13}"/>`;
        }).join("")}`,
    },
  ];

  const raster = async (svg, out, w, h) => {
    const abs = resolve(PUBLIC, out);
    mkdirSync(dirname(abs), { recursive: true });
    const composed = sharp(Buffer.from(svg), { density: 96 })
      .resize(w, h, { fit: "cover" })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(abs);
    await composed;
    console.log("jpg  ", out);
  };

  await raster(og, "images/brand/og-default.jpg", 1200, 630);

  for (const c of covers) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <radialGradient id="b" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="${C.primary}" stop-opacity="0.13"/>
      <stop offset="55%" stop-color="#14121F" stop-opacity="0.94"/>
      <stop offset="100%" stop-color="${C.deep}"/>
    </radialGradient>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0v48" fill="none" stroke="${C.white}" stroke-opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="1200" height="750" fill="url(#b)"/>
  <rect width="1200" height="750" fill="url(#g)"/>
  ${c.motif}
</svg>`;
    await raster(svg, `images/blog/${c.file}`, 1200, 750);
  }

  void solid;
}

console.log("\nDone.");