/* ============================================================
   EMKAN DEMO — data layer
   All products, prices and availability are DEMO PLACEHOLDERS.
   Replace with EMKAN's real catalog in production.
   ============================================================ */

const CATEGORIES = [
  { key:'room:Living Room', name:'Living Room',  tag:'24+ demo items', type:'sofa'   },
  { key:'room:Bedroom',     name:'Bedroom',      tag:'18+ demo items', type:'bed'    },
  { key:'room:Dining',      name:'Dining',       tag:'15+ demo items', type:'dining' },
  { key:'room:Office',      name:'Office',       tag:'16+ demo items', type:'desk'   },
  { key:'category:Sofas',   name:'Sofas',        tag:'Seats & lounges', type:'sofa'  },
  { key:'category:Tables',  name:'Tables',       tag:'Coffee · dining · desks', type:'table' },
  { key:'category:Chairs',  name:'Chairs',       tag:'Lounge · task · dining', type:'chair' },
  { key:'category:Storage', name:'Storage',      tag:'Wardrobes · units', type:'storage' }
];

const PRODUCTS = [
  {
    id:'haven-sofa', name:'Haven 3-Seater Sofa', category:'Sofas', room:'Living Room',
    style:'Modern', color:'beige', colors:['beige','grey','green'], material:'Fabric',
    price:12900, avail:'In stock', scene:'sofa', feature:1,
    dims:'W 220 × D 95 × H 85 cm · Seat H 45 cm',
    materials:'Linen-blend upholstery, kiln-dried beech frame, high-resilience foam',
    desc:'A calm, deep-seated three-seater built for everyday living. Clean lines, soft linen-blend upholstery and a solid beech base — the anchor piece of the Haven living room set.'
  },
  {
    id:'oslo-sectional', name:'Oslo Sectional Sofa', category:'Sofas', room:'Living Room',
    style:'Contemporary', color:'grey', colors:['grey','beige','charcoal'], material:'Fabric',
    price:18500, avail:'Made to order', scene:'sectional', feature:1,
    dims:'W 280 × D 170 × H 82 cm (L-shape)',
    materials:'Performance weave fabric, reinforced hardwood frame, feather-touch cushioning',
    desc:'A generous L-shaped sectional for large living spaces. Modular chaise can be set left or right to fit the room.'
  },
  {
    id:'lira-chair', name:'Lira Lounge Chair', category:'Chairs', room:'Living Room',
    style:'Mid-century', color:'brown', colors:['brown','charcoal'], material:'Leather',
    price:6400, avail:'In stock', scene:'lounge', feature:1,
    dims:'W 78 × D 82 × H 74 cm · Seat H 42 cm',
    materials:'Top-grain leather, solid walnut-stained legs, sinuous spring seat',
    desc:'A compact lounge chair with a relaxed recline — reads as an accent piece from day one and holds its shape for years.'
  },
  {
    id:'nest-table', name:'Nest Coffee Table', category:'Tables', room:'Living Room',
    style:'Minimalist', color:'brown', colors:['brown','black'], material:'Wood',
    price:4200, avail:'In stock', scene:'coffee', feature:1,
    dims:'W 110 × D 60 × H 42 cm',
    materials:'Solid oak top, blackened steel legs, hand-rubbed oil finish',
    desc:'A quiet rectangular coffee table with a floating top and slim steel underframe. Sized to sit in front of most two- and three-seaters.'
  },
  {
    id:'frame-tv', name:'Frame TV Unit', category:'Storage', room:'Living Room',
    style:'Modern', color:'charcoal', colors:['charcoal','brown'], material:'Wood',
    price:5800, avail:'In stock', scene:'tv', feature:1,
    dims:'W 180 × D 40 × H 45 cm',
    materials:'Veneered MDF body, powder-coated steel base, soft-close doors',
    desc:'A low, wide media unit with concealed cable routing and two closed compartments — screens up to 65 inches recommended.'
  },
  {
    id:'pebble-ottoman', name:'Pebble Ottoman', category:'Chairs', room:'Living Room',
    style:'Modern', color:'green', colors:['green','beige','grey'], material:'Fabric',
    price:2300, avail:'In stock', scene:'ottoman',
    dims:'W 70 × D 70 × H 42 cm',
    materials:'Boucle-look upholstery, solid beech legs, foam core',
    desc:'A soft rounded ottoman that works as extra seating, a footrest or a bedside perch.'
  },
  {
    id:'linea-console', name:'Linea Console Table', category:'Tables', room:'Living Room',
    style:'Minimalist', color:'black', colors:['black','brown'], material:'Metal',
    price:3750, avail:'In stock', scene:'console',
    dims:'W 120 × D 32 × H 78 cm',
    materials:'Powder-coated steel frame, tempered glass top option',
    desc:'A slim entryway console — keys, mail and a lamp, without stealing hallway space.'
  },
  {
    id:'serene-bed', name:'Serene King Bed', category:'Storage', room:'Bedroom',
    style:'Modern', color:'beige', colors:['beige','brown','grey'], material:'Wood',
    price:15700, avail:'Made to order', scene:'bed', feature:1,
    dims:'W 180 × L 200 × H 100 cm (king)',
    materials:'Upholstered headboard, solid pine frame, slatted base',
    desc:'An upholstered platform bed with a soft, tall headboard for late-night reading. Mattress sold separately.'
  },
  {
    id:'drift-wardrobe', name:'Drift 3-Door Wardrobe', category:'Storage', room:'Bedroom',
    style:'Modern', color:'grey', colors:['grey','beige','charcoal'], material:'Wood',
    price:11300, avail:'In stock', scene:'wardrobe',
    dims:'W 180 × D 60 × H 220 cm',
    materials:'Matte-finish engineered wood, soft-close hinges, steel handles',
    desc:'Full-height storage with two hanging rails and three internal shelves. Mirror door option available on request.'
  },
  {
    id:'quiet-nightstand', name:'Quiet Nightstand', category:'Tables', room:'Bedroom',
    style:'Minimalist', color:'brown', colors:['brown','black'], material:'Wood',
    price:2650, avail:'In stock', scene:'nightstand',
    dims:'W 45 × D 40 × H 52 cm',
    materials:'Solid rubberwood, dovetail drawer, felt-lined base',
    desc:'One drawer, one open shelf — everything a bedside table needs and nothing it does not.'
  },
  {
    id:'gather-table', name:'Gather Dining Table', category:'Tables', room:'Dining',
    style:'Scandinavian', color:'brown', colors:['brown','black'], material:'Wood',
    price:9800, avail:'In stock', scene:'dining', feature:1,
    dims:'W 180 × D 90 × H 76 cm · seats 6',
    materials:'Solid ash top, tapered legs, natural oil finish',
    desc:'A six-seater dining table with a warm ash grain and rounded corners — the everyday family table.'
  },
  {
    id:'arc-chairs', name:'Arc Dining Chairs · Set of 4', category:'Chairs', room:'Dining',
    style:'Modern', color:'charcoal', colors:['charcoal','beige','green'], material:'Wood',
    price:7300, avail:'In stock', scene:'dchair',
    dims:'W 46 × D 52 × H 82 cm · Seat H 46 cm',
    materials:'Molded seat, powder-coated steel legs, felt feet',
    desc:'A set of four curved-back dining chairs that stack neatly when the room needs to change shape.'
  },
  {
    id:'pantry-sideboard', name:'Pantry Sideboard', category:'Storage', room:'Dining',
    style:'Contemporary', color:'brown', colors:['brown','charcoal'], material:'Wood',
    price:8900, avail:'Made to order', scene:'sideboard',
    dims:'W 160 × D 45 × H 80 cm',
    materials:'Veneered body, solid wood doors, soft-close hinges',
    desc:'Dining-room storage for tableware, linens and the things that should not live on the table.'
  },
  {
    id:'focus-desk', name:'Focus Executive Desk', category:'Tables', room:'Office',
    style:'Modern', color:'charcoal', colors:['charcoal','brown'], material:'Wood',
    price:7900, avail:'In stock', scene:'desk', feature:1,
    dims:'W 160 × D 80 × H 75 cm',
    materials:'Veneered worktop, steel frame, integrated cable tray',
    desc:'A wide home-office desk with a cable tray and a modesty panel — built for long working days.'
  },
  {
    id:'ergo-chair', name:'Ergo Task Chair', category:'Chairs', room:'Office',
    style:'Contemporary', color:'charcoal', colors:['charcoal','grey'], material:'Mesh',
    price:4950, avail:'In stock', scene:'task',
    dims:'W 66 × D 66 × H 115–125 cm',
    materials:'Breathable mesh back, molded foam seat, gas lift, 5-star base',
    desc:'Adjustable lumbar support, breathable mesh and a five-point base — the chair that keeps the workday comfortable.'
  },
  {
    id:'shelf-bookcase', name:'Shelfwork Bookcase', category:'Storage', room:'Office',
    style:'Minimalist', color:'beige', colors:['beige','brown','black'], material:'Wood',
    price:5400, avail:'In stock', scene:'bookcase',
    dims:'W 90 × D 32 × H 180 cm · 5 shelves',
    materials:'Engineered wood, wall anchor included',
    desc:'Five open shelves for books, samples and display — sized for home offices and showrooms alike.'
  }
];

/* Price brackets for the filter */
const PRICE_BANDS = [
  { id:'any',   label:'Any price',   min:0,     max:Infinity },
  { id:'u3',    label:'Under 3,000', min:0,     max:3000 },
  { id:'3to7',  label:'3k – 7k',     min:3000,  max:7000 },
  { id:'7to12', label:'7k – 12k',    min:7000,  max:12000 },
  { id:'o12',   label:'12,000+',     min:12000, max:Infinity }
];

const MATERIALS = ['Fabric','Wood','Leather','Metal','Mesh'];
const STYLES    = ['Modern','Contemporary','Minimalist','Mid-century','Scandinavian'];
const ROOMS     = ['Living Room','Bedroom','Dining','Office'];
const CATS      = ['Sofas','Tables','Chairs','Storage'];

/* ------------------------------------------------------------
   DEMO MODE — explanation layer
   ------------------------------------------------------------ */
const DEMO_NOTES = [
  {
    id:'hero', label:'WHY THIS SECTION?', title:'01 — The Hero',
    text:'The hero identifies the category (furniture), the quality level and the commercial purpose of the website inside one screen. Two CTAs split the two visitor intents: ready-to-shop visitors go to EXPLORE COLLECTION, evaluating visitors go to SEE HOW IT WORKS.',
    hint:'Nothing competes with that first decision — no offers, no statistics, no long menus. The floating product metadata previews what a real product card looks like before you scroll.'
  },
  {
    id:'categories', label:'WHY PRODUCT-FIRST?', title:'02 — Shop by Category',
    text:'Furniture customers usually need to see products before they care about company information. The interface therefore prioritizes discovery — eight entry points covering how people actually think: by room (Living Room, Bedroom…) or by product type (Sofas, Tables…).',
    hint:'The category structure reduces decision friction and helps customers reach the product they want faster. Each card applies a live filter to the catalog below and scrolls you straight there.'
  },
  {
    id:'featured', label:'WHY A CURATED START?', title:'03 — Featured Collection',
    text:'A full catalog can overwhelm. A featured row gives first-time visitors a confident starting point while demonstrating real product-card behavior: price, stock status, hover imagery, quick view and an add-to-cart action.',
    hint:'The first card is deliberately larger — visual hierarchy tells the eye where to begin. In production, "featured" becomes a merchandising tool EMKAN controls.'
  },
  {
    id:'filters', label:'WHY FILTERING?', title:'04 — Smart Filtering',
    text:'Filtering turns a large furniture catalog into a guided shopping experience. Category, room, style, price, color and material filters combine live — the customer narrows 16 demo items down to the two or three that fit their room.',
    hint:'Try combining filters: Color = beige + Material = Fabric + Price up to 13,000. Every control here is functional, not a screenshot.'
  },
  {
    id:'pdp', label:'WHY THIS PAGE?', title:'05 — Product Detail',
    text:'The product page is where interest becomes action. Gallery, dimensions, materials, color options, availability and delivery information answer in one place what customers usually send one WhatsApp message at a time.',
    hint:'Open any product (Quick view) to test it. The WhatsApp CTA keeps the channel Egyptian shoppers already trust, while Add to Cart demonstrates the future checkout path. Click a color swatch — the main image changes.'
  },
  {
    id:'story', label:'WHY STORYTELLING?', title:'06 — Product Story',
    text:'A single photo sells a commodity. Material, craft, comfort and dimensions — revealed as the visitor scrolls — turn one product into a considered purchase, and justify a premium price without discounting.',
    hint:'The visual on the left stays in place and swaps frames as each block becomes active: swatch close-up, construction detail, comfort and the dimensions drawing.'
  },
  {
    id:'trust', label:'WHY PLACEHOLDERS?', title:'07 — Trust',
    text:'Trust is built on real information, not invented statistics. This section is fully designed but every unverified detail is explicitly marked TO BE CONFIRMED — address, hours, delivery terms, warranty and contact numbers.',
    hint:'NEXORA does not fabricate business claims. During onboarding EMKAN supplies the verified data and every placeholder becomes a real, confidence-building fact.'
  },
  {
    id:'system', label:'WHY VISUALIZE THE FLOW?', title:'08 — Digital Sales System',
    text:'This is what the website would connect: discovery → details → cart or inquiry → order → lead in EMKAN\u2019s hands → follow-up. Showing the system helps the business see the website as a sales channel, not a brochure.',
    hint:'Step 3 has two doors: the demo cart works today; production adds payments, inventory and a structured lead inbox when EMKAN is ready.'
  },
  {
    id:'compare', label:'WHY BEFORE / AFTER?', title:'09 — Before / After',
    text:'The message is not "your current way is wrong" — it is "we are extending the showroom into the digital world." The showroom stays; the catalog, search, filtering and 24/7 availability simply go online too.',
    hint:'Drag the handle (or use arrow keys after focusing it) to compare the two states.'
  },
  {
    id:'why', label:'WHY THIS VERSION?', title:'10 — Why This Website',
    text:'Seven principles justify every decision in this demo: product-first, easy discovery, strong visual presentation, a searchable catalog, mobile-first design, conversion focus and a structure that is ready for future e-commerce infrastructure.',
    hint:'Each card maps to a section you have already seen — this is the summary a decision-maker can repeat internally.'
  },
  {
    id:'final', label:'WHY CLOSE THIS WAY?', title:'Final — Not the Final Website',
    text:'Honest framing builds trust: this is a demonstration of what EMKAN\u2019s digital commerce experience could become. The real website would be designed around EMKAN\u2019s brand, real products, real photography, real pricing and real customer journey.',
    hint:'BUILD THE REAL EXPERIENCE opens the inquiry form; TALK TO NEXORA opens WhatsApp (demo number).'
  }
];
