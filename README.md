# EMKAN Furniture — Digital Showroom Concept (v2)

**NEXORA CONCEPT / DEMO** — an interactive sales demonstration of what a digital commerce
experience for **EMKAN Furniture (Tanta, Egypt)** could look and feel like.

**v2:** Arabic-first (RTL) with a live **عربي / English** toggle · **Dark / Light** theme ·
pinned scroll story (The Idea) · 12 guided demo notes.

> This is **not** the final production website. Products, prices, photography, contact
> details and availability are realistic **placeholders** until EMKAN supplies real data.

Live idea: **الفكرة → DISCOVER → FILTER → COMPARE → TRUST → BUY**

---

## Features

| # | Section | What it demonstrates |
|---|---------|----------------------|
| 01 | Hero | Category, quality and purpose in one screen · two-intent CTAs · floating product metadata |
| 02 | The Idea | **Pinned 3-step scroll story** — physical showroom → digital showroom → 24/7 access (custom SVG scenes, progress rail) |
| 03 | Shop by Category | 8 entry points (by room + by type), each applying a live catalog filter |
| 04 | Featured Collection | Curated start · bento hierarchy · hover image swap · quick view · add to cart |
| 05 | Smart Filtering | **Functional** filters: category, room, style, price, color, material + search + sort + removable chips |
| 06 | Product Story | Scroll-driven MATERIAL → STITCH DETAIL → CRAFT → COMFORT with sticky visual (4 frames) |
| 07 | Digital Sales System | The lead flow the real site would connect, visualized (7 steps) |
| 08 | Before / After | Draggable comparison — "we are extending the showroom into the digital world" |
| 09 | Why NEXORA | The 7 principles behind the design |
| 10 | Personalization | Seven-card grid showing how the future configurator starts |
| — | Final | Honest framing + `BUILD THE REAL EXPERIENCE` / `TALK TO NEXORA` |
| — | Product Detail (modal) | Gallery, colors (live image change), specs, availability, WhatsApp CTA, demo cart |

Plus: **NEXORA DEMO mode** (floating toggle, bottom-right) — per-section numbered
annotations, a scroll-linked bubble and a guided side panel (**12 notes**, prev/next,
including a dedicated product-detail note) — all bilingual.

### Language & theme

- **AR-first:** Arabic is the default and the source of truth in the HTML; the EN
  toggle swaps every string — static (`data-i18n`), dynamic (cards, filters, cart,
  demo notes) and even `lang`/`dir`/`page title` — without a reload. The toggle
  persists in `localStorage`.
- **RTL-safe:** logical CSS properties throughout (`inset-inline-*`,
  `border-inline-start`…), direction-aware off-screen offsets, and an RTL guard that
  neutralises Latin letter-spacing on Arabic text.
- **Dark / Light:** real token sets for both themes (default: dark), persisted; the
  fixed-dark bands keep their identity in either theme.

## Tech

- Plain **HTML + CSS + JavaScript** — no build step, no framework
- Zero external dependencies (fonts from Google Fonts only, `display=swap`)
- All product imagery is **generated inline SVG** — nothing can 404
- Vanilla `IntersectionObserver` reveals + scroll rAF, pointer parallax, drag interactions
- Responsive: desktop / tablet / mobile (1200 · 960 · 640 breakpoints)
- Semantic HTML, ARIA on dialogs, keyboard support (Esc, arrow keys on comparison),
  `prefers-reduced-motion` respected

## Project structure

```
emkan-furniture-demo/
├── index.html            # single page — all sections + modals + demo layer (AR source)
├── css/
│   └── styles.css        # design tokens (dark/light), RTL logic, layout, responsive
├── js/
│   ├── i18n.js           # language engine — EN dictionary, AR capture, dir/title sync
│   ├── data.js           # bilingual products, categories, filters, 12 demo notes
│   ├── visuals.js        # SVG scene generator (rooms, product shots, story/idea frames)
│   └── app.js            # filters, PDP, cart, search, demo mode, forms, scroll stories
├── README.md
└── DEMO_PRESENTATION.md  # full design / UX / conversion rationale
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
1. Create a repo → push this folder
2. Repo → *Settings → Pages → Deploy from a branch* → `main` / root
3. Site appears at `https://<user>.github.io/<repo>/`

**Vercel**
```bash
npm i -g vercel && vercel
```
Accept defaults (no build command, output = repo root).

**Netlify**
- Drag-and-drop the folder at <https://app.netlify.com/drop>, or
```bash
npm i -g netlify-cli && netlify deploy --prod --dir .
```

## Customization

| Change | Where |
|--------|-------|
| Products, prices, specs | `js/data.js` → `PRODUCTS` |
| Categories & filter values | `js/data.js` → `CATEGORIES`, `ROOMS`, `STYLES`… |
| Demo-mode annotations | `js/data.js` → `DEMO_NOTES` |
| Colors / type | `css/styles.css` → `:root` tokens |
| WhatsApp number | search `wa.me/201000000000` in `index.html` + `js/app.js` |
| Imagery (real photos) | replace `VIS.productScene()` output with `<img>` in `js/app.js` (`cardHTML`, PDP) |

## Verification

Tested headless (Edge + Playwright): **70/70 checks pass** — boot state (ar/RTL/dark),
render counts, filters & chips, category-card filtering, PDP gallery/swatches, cart
(+qty, badge, checkout guard), search overlay, **full AR⇄EN round-trip** (dir, dynamic
strings, demo notes), theme toggle, demo mode (FAB, pop, markers, panel, 12-note prog),
idea scroll story, story-step activation, before/after drag, contact form validation,
mobile menu + filter sheet at 390px, zero JS/console errors.

## License / status

Internal NEXORA concept demo for presentation to EMKAN. Not for publication as a
live store.
