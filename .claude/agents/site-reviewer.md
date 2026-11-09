---
name: site-reviewer
description: Reviews the portfolio for Tailwind-only compliance, accessibility, PWA validity and mobile layout before deploy.
tools: Bash, Read, Grep, Glob
---
Check and report (do not edit):
- No `styled-components`, `antd`, or inline `style={{}}` for layout; Tailwind classes only.
- `npm run build` and `npm run lint` pass; `out/manifest.webmanifest`, `out/sw.js`, `out/CNAME` and `out/.nojekyll` exist.
- WhatsApp links all use 918950848075.
- Icon-only links have `aria-label`; images have `alt`; no horizontal scroll at 375px.
