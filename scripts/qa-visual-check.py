#!/usr/bin/env python3
"""Vesharo visual QA (based on the webapp-testing skill pattern).

Usage (server already running):
    python scripts/qa-visual-check.py --base http://localhost:4321
With the skill's helper managing the server:
    python scripts/with_server.py --server "npm run preview -- --port 4321" --port 4321 -- python scripts/qa-visual-check.py --base http://localhost:4321

Outputs screenshots to ./qa-output and a report.md listing console errors, failed requests,
horizontal overflow, images without alt, and tap targets smaller than 44px.
"""
import argparse, pathlib, xml.etree.ElementTree as ET, urllib.request
from playwright.sync_api import sync_playwright

VIEWPORTS = [(360, 800), (768, 1024), (1024, 768), (1440, 900)]
DEFAULT_PAGES = ["/", "/about", "/services", "/portfolio", "/pricing", "/blog", "/contact", "/faq", "/privacy", "/terms", "/404"]

def pages_from_sitemap(base):
    try:
        with urllib.request.urlopen(base + "/sitemap-index.xml", timeout=5) as r:
            idx = ET.fromstring(r.read())
        ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = []
        for sm in idx.findall("s:sitemap/s:loc", ns):
            with urllib.request.urlopen(sm.text.replace("https://vesharo.com", base), timeout=5) as r:
                tree = ET.fromstring(r.read())
            urls += [u.text.replace("https://vesharo.com", base).replace(base, "") or "/" for u in tree.findall("s:url/s:loc", ns)]
        return sorted(set(urls))
    except Exception:
        return DEFAULT_PAGES

JS_CHECKS = """() => ({
  overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
  noAlt: [...document.images].filter(i => !i.hasAttribute('alt')).map(i => i.src).slice(0, 10),
  smallTargets: [...document.querySelectorAll('a,button,input,select,textarea')]
    .filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44); })
    .map(e => (e.innerText || e.getAttribute('aria-label') || e.tagName).trim().slice(0, 40)).slice(0, 10),
  h1Count: document.querySelectorAll('h1').length,
  title: document.title,
  description: (document.querySelector('meta[name=description]') || {}).content || ''
})"""

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="http://localhost:4321")
    ap.add_argument("--out", default="qa-output")
    a = ap.parse_args()
    out = pathlib.Path(a.out); out.mkdir(exist_ok=True)
    pages = pages_from_sitemap(a.base)
    lines = ["# Vesharo visual QA report", ""]
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for path in pages:
            for w, h in VIEWPORTS:
                page = browser.new_page(viewport={"width": w, "height": h})
                errors, failed = [], []
                page.on("console", lambda m, e=errors: e.append(m.text) if m.type == "error" else None)
                page.on("requestfailed", lambda r, f=failed: f.append(r.url))
                try:
                    resp = page.goto(a.base + path, wait_until="networkidle", timeout=15000)
                except Exception as err:
                    resp = None
                    errors.append(str(err))
                name = (path.strip("/").replace("/", "_") or "home") + f"_{w}.png"
                page.screenshot(path=str(out / name), full_page=True)
                res = page.evaluate(JS_CHECKS)
                issues = []
                if resp and resp.status >= 400 and path != "/404": issues.append(f"HTTP {resp.status}")
                if res["overflow"]: issues.append("horizontal overflow")
                if res["noAlt"]: issues.append(f"images without alt: {res['noAlt']}")
                if res["smallTargets"] and w <= 768: issues.append(f"targets <44px: {res['smallTargets']}")
                if res["h1Count"] != 1 and path != "/404": issues.append(f"h1 count = {res['h1Count']}")
                if not res["description"] and path != "/404": issues.append("missing meta description")
                if errors: issues.append(f"console errors: {errors[:3]}")
                if failed: issues.append(f"failed requests: {failed[:3]}")
                lines.append(f"- `{path}` @ {w}px — " + ("OK" if not issues else "; ".join(issues)))
                page.close()
        browser.close()
    (out / "report.md").write_text("\n".join(lines) + "\n")
    print("\n".join(lines))

if __name__ == "__main__":
    main()
