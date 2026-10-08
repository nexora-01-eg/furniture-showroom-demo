# BAYT Furniture — Interactive Showroom Demo

An interactive furniture showroom concept: browse, filter, compare and inquire.
Arabic-first (RTL) with a full **عربي / English** toggle, **dark / light** themes,
a pinned scroll story and a guided demo mode.

> Portfolio sample. The brand, products, prices, imagery and contact details are
> fictional **placeholders** for demonstration purposes only.

## Features

| # | Section | What it demonstrates |
|---|---------|----------------------|
| 01 | Hero | Category, quality and purpose in one screen · two-intent CTAs |
| 02 | The Idea | Pinned 3-step scroll story — physical showroom → digital showroom → 24/7 access |
| 03 | Shop by Category | 8 entry points (by room + by type), each applying a live catalog filter |
| 04 | Featured Collection | Curated start · bento hierarchy · hover image swap · quick view · add to cart |
| 05 | Smart Filtering | Functional filters: category, room, style, price, color, material + search + sort |
| 06 | Product Story | Scroll-driven MATERIAL → DETAIL → CRAFT → COMFORT with sticky visual |
| 07 | Conversion Flow | The lead flow a real store would connect, visualized (7 steps) |
| 08 | Before / After | Draggable comparison widget |
| 09 | Why This Concept | The principles behind the design |
| 10 | Personalization | How a production build gets tailored (logo, colors, products, photography) |
| — | Product Detail (modal) | Gallery, colors, specs, availability, WhatsApp CTA, demo cart |

Plus a **demo mode** (floating toggle, bottom-right) — per-section annotations with a
guided side panel, fully bilingual.

## Tech

- Plain **HTML + CSS + JavaScript** — no build step, no framework
- Zero external dependencies (Google Fonts only, `display=swap`)
- All product imagery generated inline as SVG — nothing can 404
- Vanilla `IntersectionObserver` reveals + scroll rAF, drag interactions
- Responsive: desktop / tablet / mobile (1200 · 960 · 640 breakpoints)
- RTL-safe logical CSS properties, `prefers-reduced-motion` respected

## Project structure

```
furniture-showroom-demo/
├── index.html            # single page — all sections + modals + demo layer (AR source)
├── css/
│   └── styles.css        # design tokens (dark/light), RTL logic, layout, responsive
├── js/
│   ├── i18n.js           # language engine — EN dictionary, AR capture, dir/title sync
│   ├── data.js           # bilingual products, categories, filters, demo notes
│   ├── visuals.js        # SVG scene generator (rooms, product shots, story frames)
│   └── app.js            # filters, PDP, cart, search, demo mode, forms, scroll stories
└── README.md
```

## Run locally

No installation required — open the file:

```powershell
start ".\index.html"
```

Optional local server:

```powershell
npx serve .          # or:  python -m http.server 8080
```

## Deployment (free)

The site is static — deploy the folder as-is.

**GitHub Pages**
1. Push this folder to a repo
2. Repo → *Settings → Pages → Deploy from a branch* → `main` / root
3. Site appears at `https://<user>.github.io/<repo>/`

**Vercel**
```bash
npm i -g vercel && vercel
```

**Netlify**
- Drag-and-drop the folder at <https://app.netlify.com/drop>

## Status

Concept demo built as a portfolio sample by **nexora-01-eg**. Not a live store —
the WhatsApp number (`wa.me/201000000000`) is an obvious placeholder.
