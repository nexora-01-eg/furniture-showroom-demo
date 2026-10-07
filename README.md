# EMKAN Furniture — Digital Showroom Concept

**NEXORA CONCEPT / DEMO** — an interactive sales demonstration of what a digital commerce
experience for **EMKAN Furniture (Tanta, Egypt)** could look and feel like.

> This is **not** the final production website. Products, prices, photography, contact
> details and availability are realistic **placeholders** until EMKAN supplies real data.

Live idea: **DIGITAL SHOWROOM → DISCOVER → FILTER → COMPARE → TRUST → BUY**

---

## Features

| # | Section | What it demonstrates |
|---|---------|----------------------|
| 01 | Hero | Category, quality and purpose in one screen · two-intent CTAs · floating product metadata |
| 02 | Shop by Category | 8 entry points (by room + by type), each applying a live catalog filter |
| 03 | Featured Collection | Curated start · bento hierarchy · hover image swap · quick view · add to cart |
| 04 | Smart Filtering | **Functional** filters: category, room, style, price, color, material + search + sort |
| 05 | Product Detail | Gallery, colors (live image change), specs, availability, WhatsApp CTA, demo cart |
| 06 | Product Story | Scroll-driven MATERIAL → CRAFT → COMFORT → DIMENSIONS with sticky visual |
| 07 | Trust | Showroom, hours, delivery, warranty — every unverified fact marked `TO BE CONFIRMED` |
| 08 | Digital Sales System | The lead flow the real site would connect, visualized |
| 09 | Before / After | Draggable comparison — "we are extending the showroom into the digital world" |
| 10 | Why This Website | The 7 principles behind the design |
| — | Final | Honest framing + `BUILD THE REAL EXPERIENCE` / `TALK TO NEXORA` |

Plus: **NEXORA DEMO mode** (floating toggle, bottom-right) — turns on per-section
“WHY THIS SECTION?” annotations with a guided panel (11 notes, prev/next).

---

## Tech

- Plain **HTML + CSS + JavaScript** — no build step, no framework
- Zero external dependencies (fonts from Google Fonts only)
- All product imagery is **generated inline SVG** — nothing can 404
- Vanilla `IntersectionObserver` reveals, pointer parallax, drag interactions
- Responsive: desktop / tablet / mobile (1200 · 960 · 640 breakpoints)
- Semantic HTML, ARIA on dialogs, keyboard support (Esc, arrow keys on comparison)

## Project structure

```
emkan-furniture-demo/
├── index.html            # single page — all sections + modals + demo layer
├── css/
│   └── styles.css        # design tokens, layout, responsive, motion
├── js/
│   ├── data.js           # products, categories, filter values, demo annotations
│   ├── visuals.js        # SVG scene generator (rooms, product shots, story frames)
│   └── app.js            # filters, PDP, cart, search, demo mode, forms
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

Tested headless (Edge + Playwright): **48/48 checks pass** — filters, search, sort,
PDP gallery & colors, cart, demo mode, before/after drag, contact form, mobile menu,
mobile filter sheet, zero JS errors, no horizontal scroll at 375px / 1440px.

## License / status

Internal NEXORA concept demo for presentation to EMKAN. Not for publication as a
live store.
