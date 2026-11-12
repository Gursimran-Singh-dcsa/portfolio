# Portfolio — Gursimran Singh

Personal portfolio at https://gursimran.in (GitHub Pages, custom domain).

## Stack
- **Next.js (App Router) static export** (`output: 'export'`, `trailingSlash: true`) — every page is pre-rendered to plain HTML in `out/`. Do not add anything that needs a server (API routes, SSR, middleware, `next/image` optimisation).
- **Styling: Tailwind CSS v4 only** (via `@tailwindcss/postcss`; no styled-components, no antd, no CSS-in-JS, no component libraries). Global CSS only in `src/app/globals.css`.
- PWA: hand-written `public/sw.js` + `public/manifest.webmanifest`, registered by `src/components/RegisterSW.tsx` (production only). Icons in `public/icons/`.
- Blog: Markdown in `src/content/blog/*.md` (frontmatter: title, date, summary, tags), read at build time by `src/data/blogs.ts`, rendered with `marked` + Tailwind typography at real URLs `/blog/<slug>/` via `generateStaticParams`.
- SEO: metadata + JSON-LD in `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`.
- Components are server components unless they need state/effects (`'use client'`: Nav, Reveal, Contact, RegisterSW, Projects, BlogRow).

## Reusable UI components (use these, don't repeat class strings)
`src/components/ui/`: `Section` (max-width, side gutter, mobile-first `py-16 sm:py-24`; `dark` for navy), `Card` (`tone` light/glass/dark, `padding`, `interactive`), `Chip` (tags, badges, pills), `Button` (link or button; `primary`/`outline`/`ghost`/`whatsapp`/`link`; 44-48px touch height and pointer cursor built in). Shared elsewhere: `SectionHead`/`Reveal` (`Reveal.tsx`), `Icon`/`SocialIcon` (`Icons.tsx`), `Projects` (used for both products and projects), `BlogRow`. Markdown rendering lives in `src/lib/markdown.ts` (lazy images, mobile-friendly tables).

## Mobile-first rules
Design for 375px first, then add `sm:`/`md:`/`lg:`. Check 320px, 375px, 768px and desktop; there must be no horizontal scroll. Tap targets are at least 44px. Inputs use `text-base` (stops iOS zoom). The hero photo is hidden on phones. In blog posts, wide images get a phone variant via `<picture>` (`scripts/make-diagrams.py`); tables become stacked cards on phones automatically.

## Content lives in data, not JSX
- `src/data/site.ts` — profile, socials, experience, skills, **projects**, `WHATSAPP_NUMBER`.
- `src/data/blogs.ts` — loads blog markdown.
- Contact is WhatsApp-only: every message goes to **+91-8950848075** via `wa.me/918950848075`. Never reintroduce another contact backend.

## Deploy (keep as is)
- `npm run deploy` → `predeploy` runs `next build` and strips `.DS_Store`, then `gh-pages -t -d out` pushes `out/` to the `gh-pages` branch (`-t` is required so `.nojekyll` is published; without it GitHub Pages drops `_next/`).
- `public/CNAME` (`gursimran.in`) and `public/.nojekyll` MUST stay.

## Role titles
In project cards use mostly "Full Stack Developer" or "Senior Software Engineer" — never "(frontend)" / "(backend)" in brackets.

## Products vs projects
`products` in `src/data/site.ts` are Gursimran's own sites (GadgetSimplify, Pharmacist Notes) shown in the "Products I run" section; `projects` are client/employer work.

## Adding a project
1. Add an entry to `projects` in `src/data/site.ts` and give it a `domain` (from the `domains` list in the same file; add a new domain there only if none fits). The Work section filters by domain.
2. If it has a live URL, capture screenshots (desktop 1440x900, mobile 390x844) to `public/projects/<slug>-desktop.jpg` and `<slug>-mobile.jpg`, and set `desktop`/`mobile` paths on the entry. Use the `project-screenshotter` agent.

## SEO and keywords
Target searches (kept in `seo.keywords` in `src/data/site.ts`): Gursimran Singh, Gursimran Ambala, Gursimran full stack developer, Gursimran Trantor, web developer near me, plus related local/business terms. They're used in the home `<title>`/description, hero and Services copy, `Person` and `ProfessionalService` JSON-LD (`src/app/layout.tsx`, `src/app/page.tsx`). Don't add structured data (e.g. FAQPage) for content that isn't visible on the page. RSS: `/feed.xml`. Sitemap/robots are generated.

## Adding a blog post
Create `src/content/blog/<slug>.md` — use the `blog-writer` agent. Every post needs a cover (also the social-share image): `python3 scripts/make-cover.py <slug> "<Title>" "<Tag>"` (needs Pillow), then set `cover:` and `coverAlt:` in the frontmatter. Inline images go in `public/blog/images/` (see `scripts/make-diagrams.py`) and must have descriptive alt text.

## Commands
`npm run dev` · `npm run build` (static export to `out/`) · `npm run lint` · `npm run deploy`

## Style rules
Palette is taken from movematerelocations.co.nz — use ONLY these tokens (defined in `src/app/globals.css`): `primary` #004cdf (buttons, links, accents), `navy` #0b1f3a (nav, hero, contact, footer), `sky` #6ea2ff (text accents on navy only), `soft` #f1f5fb (page background), white cards with slate-200 borders. Roboto font. Navy sections for hero/contact/footer, light sections for content. Mobile-first, respect `prefers-reduced-motion`, keep accessible labels on icon links.
