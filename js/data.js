/* ============================================================
   EMKAN DEMO — data layer (v2, bilingual AR/EN)
   All products, prices and availability are DEMO PLACEHOLDERS.
   Replace with EMKAN's real catalog in production.
   ============================================================ */

/* ---------- localized labels (filter values stay English keys) ---------- */
const LBL = {
  category:{
    'Sofas'   :{ ar:'كنب وركنات',   en:'Sofas' },
    'Tables'  :{ ar:'طاولات',       en:'Tables' },
    'Chairs'  :{ ar:'كراسي',        en:'Chairs' },
    'Storage' :{ ar:'وحدات تخزين',  en:'Storage' }
  },
  room:{
    'Living Room':{ ar:'غرفة المعيشة', en:'Living Room' },
    'Bedroom'    :{ ar:'غرفة النوم',   en:'Bedroom' },
    'Dining'     :{ ar:'السفرة',       en:'Dining' },
    'Office'     :{ ar:'المكتب',       en:'Office' }
  },
  style:{
    'Modern'      :{ ar:'عصري',          en:'Modern' },
    'Contemporary':{ ar:'معاصر',         en:'Contemporary' },
    'Minimalist'  :{ ar:'مينيمال',       en:'Minimalist' },
    'Mid-century' :{ ar:'منتصف القرن', en:'Mid-century' },
    'Scandinavian':{ ar:'اسكندنافي',     en:'Scandinavian' }
  },
  material:{
    'Fabric'  :{ ar:'قماش',   en:'Fabric' },
    'Wood'    :{ ar:'خشب',    en:'Wood' },
    'Leather' :{ ar:'جلد',    en:'Leather' },
    'Metal'   :{ ar:'معدن',   en:'Metal' },
    'Mesh'    :{ ar:'شبك',    en:'Mesh' }
  },
  avail:{
    'in'  :{ ar:'متوفر الآن',      en:'In stock' },
    'made':{ ar:'يُصنع بالطلب',    en:'Made to order' }
  },
  color:{
    'beige'   :{ ar:'بيج',    en:'Beige' },
    'grey'    :{ ar:'رمادي',  en:'Grey' },
    'brown'   :{ ar:'بني',    en:'Brown' },
    'charcoal':{ ar:'فحمي',   en:'Charcoal' },
    'green'   :{ ar:'أخضر',   en:'Green' },
    'black'   :{ ar:'أسود',   en:'Black' }
  }
};
const lbl = (kind, key) => {
  const e = LBL[kind] && LBL[kind][key];
  return e ? I18N.tx(e.ar, e.en) : key;
};

const DELIVERY = {
  ar:'توصيل وتركيب داخل طنطا والدلتا — الشروط «تُوضَّح مع إمكان».',
  en:'Delivery & installation across Tanta and the Delta — terms TO BE CONFIRMED with EMKAN.'
};

/* ---------- categories ---------- */
const CATEGORIES = [
  { key:'room:Living Room', name:{ ar:'غرفة المعيشة', en:'Living Room' }, tag:{ ar:'+24 قطعة تجريبية', en:'24+ demo items' }, type:'sofa'   },
  { key:'room:Bedroom',     name:{ ar:'غرفة النوم',   en:'Bedroom'     }, tag:{ ar:'+18 قطعة تجريبية', en:'18+ demo items' }, type:'bed'    },
  { key:'room:Dining',      name:{ ar:'السفرة',       en:'Dining'      }, tag:{ ar:'+15 قطعة تجريبية', en:'15+ demo items' }, type:'dining' },
  { key:'room:Office',      name:{ ar:'المكتب',       en:'Office'      }, tag:{ ar:'+16 قطعة تجريبية', en:'16+ demo items' }, type:'desk'   },
  { key:'category:Sofas',   name:{ ar:'كنب وركنات',   en:'Sofas'       }, tag:{ ar:'مقاعد وركنات',      en:'Seats & lounges' }, type:'sofa'   },
  { key:'category:Tables',  name:{ ar:'طاولات',       en:'Tables'      }, tag:{ ar:'قهوة · سفرة · مكاتب', en:'Coffee · dining · desks' }, type:'table' },
  { key:'category:Chairs',  name:{ ar:'كراسي',        en:'Chairs'      }, tag:{ ar:'راحة · شغل · سفرة',  en:'Lounge · task · dining' }, type:'chair' },
  { key:'category:Storage', name:{ ar:'وحدات تخزين',  en:'Storage'     }, tag:{ ar:'خزائن · وحدات',      en:'Wardrobes · units' }, type:'storage' }
];

/* ---------- products ---------- */
const PRODUCTS = [
  {
    id:'haven-sofa', name:'Haven 3-Seater Sofa', category:'Sofas', room:'Living Room',
    style:'Modern', color:'beige', colors:['beige','grey','green'], material:'Fabric',
    price:12900, avail:'in', scene:'sofa', feature:1,
    dims:'W 220 × D 95 × H 85 cm · Seat H 45 cm',
    materials:{ ar:'تنجيد مزيج كتان، إطار بيش مجفف بالفرن، فوم عالي المرونة', en:'Linen-blend upholstery, kiln-dried beech frame, high-resilience foam' },
    desc:{
      ar:'كنبة ثلاثية هادئة العمق للاستخدام اليومي — خطوط نظيفة، تنجيد كتان مريح، وقاعدة بيش صلبة. القطعة الأساسية في ركنة الهافن.',
      en:'A calm, deep-seated three-seater built for everyday living. Clean lines, soft linen-blend upholstery and a solid beech base — the anchor piece of the Haven living room set.'
    }
  },
  {
    id:'oslo-sectional', name:'Oslo Sectional Sofa', category:'Sofas', room:'Living Room',
    style:'Contemporary', color:'grey', colors:['grey','beige','charcoal'], material:'Fabric',
    price:18500, avail:'made', scene:'sectional', feature:1,
    dims:'W 280 × D 170 × H 82 cm (L-shape)',
    materials:{ ar:'نسيج عالي التحمل، هيكل خشب صلب مقوّى، تنجيد ريشي ناعم', en:'Performance weave fabric, reinforced hardwood frame, feather-touch cushioning' },
    desc:{
      ar:'ركنة L فخمة لمساحات المعيشة الكبيرة — الوحدة الجانبية تقدر تركّبها يمين أو شمال حسب شكل الغرفة.',
      en:'A generous L-shaped sectional for large living spaces. Modular chaise can be set left or right to fit the room.'
    }
  },
  {
    id:'lira-chair', name:'Lira Lounge Chair', category:'Chairs', room:'Living Room',
    style:'Mid-century', color:'brown', colors:['brown','charcoal'], material:'Leather',
    price:6400, avail:'in', scene:'lounge', feature:1,
    dims:'W 78 × D 82 × H 74 cm · Seat H 42 cm',
    materials:{ ar:'جلد طبيعي، أرجل بجوز مصبوغ، زنبرك موجي في الجلسة', en:'Top-grain leather, solid walnut-stained legs, sinuous spring seat' },
    desc:{
      ar:'كرسة راحة مدمجة بميل مريح — بتبان قطعة مميزة من أول يوم وبتحتفظ بشكلها لسنين.',
      en:'A compact lounge chair with a relaxed recline — reads as an accent piece from day one and holds its shape for years.'
    }
  },
  {
    id:'nest-table', name:'Nest Coffee Table', category:'Tables', room:'Living Room',
    style:'Minimalist', color:'brown', colors:['brown','black'], material:'Wood',
    price:4200, avail:'in', scene:'coffee', feature:1,
    dims:'W 110 × D 60 × H 42 cm',
    materials:{ ar:'سطح بلوط صلب، أرجل فولاذ أسود، تشطيب زيت يدوي', en:'Solid oak top, blackened steel legs, hand-rubbed oil finish' },
    desc:{
      ar:'طاولة قهوة مستطيلة هادئة بسطح عائم وهيكل فولاذي رفيع — مقاسة تناسب أغلب الكنب الثنائية والثلاثية.',
      en:'A quiet rectangular coffee table with a floating top and slim steel underframe. Sized to sit in front of most two- and three-seaters.'
    }
  },
  {
    id:'frame-tv', name:'Frame TV Unit', category:'Storage', room:'Living Room',
    style:'Modern', color:'charcoal', colors:['charcoal','brown'], material:'Wood',
    price:5800, avail:'in', scene:'tv',
    dims:'W 180 × D 40 × H 45 cm',
    materials:{ ar:'قشرة MDF، قاعدة فولاذ مطلي بالبودرة، أبواب هادئة الإغلاق', en:'Veneered MDF body, powder-coated steel base, soft-close doors' },
    desc:{
      ar:'وحدة تلفزيون منخفضة وعريضة بمسارات كابلات مخفية وخزنتين مقفلتين — موصى بشاشات حتى 65 بوصة.',
      en:'A low, wide media unit with concealed cable routing and two closed compartments — screens up to 65 inches recommended.'
    }
  },
  {
    id:'pebble-ottoman', name:'Pebble Ottoman', category:'Chairs', room:'Living Room',
    style:'Modern', color:'green', colors:['green','beige','grey'], material:'Fabric',
    price:2300, avail:'in', scene:'ottoman',
    dims:'W 70 × D 70 × H 42 cm',
    materials:{ ar:'تنجيد بوكليه، أرجل بيش صلب، نواة فوم', en:'Boucle-look upholstery, solid beech legs, foam core' },
    desc:{
      ar:'أوتومان ناعم مدور بيشتغل كضيف إضافي أو رِجْلين أو طاولة جانبية بجانب السرير.',
      en:'A soft rounded ottoman that works as extra seating, a footrest or a bedside perch.'
    }
  },
  {
    id:'linea-console', name:'Linea Console Table', category:'Tables', room:'Living Room',
    style:'Minimalist', color:'black', colors:['black','brown'], material:'Metal',
    price:3750, avail:'in', scene:'console',
    dims:'W 120 × D 32 × H 78 cm',
    materials:{ ar:'هيكل فولاذ مطلي بالبودرة، خيار سطح زجاج مقسّى', en:'Powder-coated steel frame, tempered glass top option' },
    desc:{
      ar:'كونسول ممر رفيع — مفاتيح وبريد ولمبة، من غير ما ياخد مساحة عن الممر.',
      en:'A slim entryway console — keys, mail and a lamp, without stealing hallway space.'
    }
  },
  {
    id:'serene-bed', name:'Serene King Bed', category:'Storage', room:'Bedroom',
    style:'Modern', color:'beige', colors:['beige','brown','grey'], material:'Wood',
    price:15700, avail:'made', scene:'bed', feature:1,
    dims:'W 180 × L 200 × H 100 cm (king)',
    materials:{ ar:'تاج مبطن، هيكل صنوبر صلب، قاعدة مشرشرة', en:'Upholstered headboard, solid pine frame, slatted base' },
    desc:{
      ar:'سرير منصّة مبطن بتاج رفيع للقراءة المتأخرة. المرتبة تتباع منفصل.',
      en:'An upholstered platform bed with a soft, tall headboard for late-night reading. Mattress sold separately.'
    }
  },
  {
    id:'drift-wardrobe', name:'Drift 3-Door Wardrobe', category:'Storage', room:'Bedroom',
    style:'Modern', color:'grey', colors:['grey','beige','charcoal'], material:'Wood',
    price:11300, avail:'in', scene:'wardrobe',
    dims:'W 180 × D 60 × H 220 cm',
    materials:{ ar:'خشب هندسي مطفي، مفصلات هادئة الإغلاق، مقابض فولاذ', en:'Matte-finish engineered wood, soft-close hinges, steel handles' },
    desc:{
      ar:'خزانة ب3 أبواب بارتفاع كامل — رفّين تعليق و3 رفوف داخلية. خيار باب مراية عند الطلب.',
      en:'Full-height storage with two hanging rails and three internal shelves. Mirror door option available on request.'
    }
  },
  {
    id:'quiet-nightstand', name:'Quiet Nightstand', category:'Tables', room:'Bedroom',
    style:'Minimalist', color:'brown', colors:['brown','black'], material:'Wood',
    price:2650, avail:'in', scene:'nightstand',
    dims:'W 45 × D 40 × H 52 cm',
    materials:{ ar:'خشب روبير صلب، درج بتجميع مطابق، بطانة شمع', en:'Solid rubberwood, dovetail drawer, felt-lined base' },
    desc:{
      ar:'درج واحد ورف مفتوح — كل اللي الطاولة السريرية محتاجاه، ومزيدش.',
      en:'One drawer, one open shelf — everything a bedside table needs and nothing it does not.'
    }
  },
  {
    id:'gather-table', name:'Gather Dining Table', category:'Tables', room:'Dining',
    style:'Scandinavian', color:'brown', colors:['brown','black'], material:'Wood',
    price:9800, avail:'in', scene:'dining', feature:1,
    dims:'W 180 × D 90 × H 76 cm · seats 6',
    materials:{ ar:'سطح زان صلب، أرجل مدببة، تشطيب زيت طبيعي', en:'Solid ash top, tapered legs, natural oil finish' },
    desc:{
      ar:'طاولة سفرة ل6 أفراد بخشب زان طبيعي وحوايا مدورة — الطاولة اليومية للبيت.',
      en:'A six-seater dining table with a warm ash grain and rounded corners — the everyday family table.'
    }
  },
  {
    id:'arc-chairs', name:'Arc Dining Chairs · Set of 4', category:'Chairs', room:'Dining',
    style:'Modern', color:'charcoal', colors:['charcoal','beige','green'], material:'Wood',
    price:7300, avail:'in', scene:'dchair',
    dims:'W 46 × D 52 × H 82 cm · Seat H 46 cm',
    materials:{ ar:'مقعد مقولب، أرجل فولاذ مطلي، وسائد منع للازاحة', en:'Molded seat, powder-coated steel legs, felt feet' },
    desc:{
      ar:'طقم 4 كراسي سفرة بظهر مقوّس بتتلأقى فوق بعض لما الغرفة تحتاج تتغيّر.',
      en:'A set of four curved-back dining chairs that stack neatly when the room needs to change shape.'
    }
  },
  {
    id:'pantry-sideboard', name:'Pantry Sideboard', category:'Storage', room:'Dining',
    style:'Contemporary', color:'brown', colors:['brown','charcoal'], material:'Wood',
    price:8900, avail:'made', scene:'sideboard',
    dims:'W 160 × D 45 × H 80 cm',
    materials:{ ar:'جسم مقشّر، أبواب خشب صلب، مفصلات هادئة الإغلاق', en:'Veneered body, solid wood doors, soft-close hinges' },
    desc:{
      ar:'تخزين السفرة للأطباق والفوط والحاجات اللي مش المفروض تفضل على الترابيزة.',
      en:'Dining-room storage for tableware, linens and the things that should not live on the table.'
    }
  },
  {
    id:'focus-desk', name:'Focus Executive Desk', category:'Tables', room:'Office',
    style:'Modern', color:'charcoal', colors:['charcoal','brown'], material:'Wood',
    price:7900, avail:'in', scene:'desk', feature:1,
    dims:'W 160 × D 80 × H 75 cm',
    materials:{ ar:'سطح مقشّر، هيكل فولاذ، مسار كابلات مدمج', en:'Veneered worktop, steel frame, integrated cable tray' },
    desc:{
      ar:'مكتب واسع للمنزل أو المكتب بمسار كابلات ولوحة حجب — متصمّم لأيام شغل طويلة.',
      en:'A wide home-office desk with a cable tray and a modesty panel — built for long working days.'
    }
  },
  {
    id:'ergo-chair', name:'Ergo Task Chair', category:'Chairs', room:'Office',
    style:'Contemporary', color:'charcoal', colors:['charcoal','grey'], material:'Mesh',
    price:4950, avail:'in', scene:'task',
    dims:'W 66 × D 66 × H 115–125 cm',
    materials:{ ar:'ظهر شبكة مسامية، مقعد فوم مقولب، عمود غاز، قاعدة 5 نجوم', en:'Breathable mesh back, molded foam seat, gas lift, 5-star base' },
    desc:{
      ar:'مسند قطني قابل للضبط، شبكة بتتنفس وقاعدة 5 نجوم — الكرسي اللي بيخلي يوم الشغل مريح.',
      en:'Adjustable lumbar support, breathable mesh and a five-point base — the chair that keeps the workday comfortable.'
    }
  },
  {
    id:'shelf-bookcase', name:'Shelfwork Bookcase', category:'Storage', room:'Office',
    style:'Minimalist', color:'beige', colors:['beige','brown','black'], material:'Wood',
    price:5400, avail:'in', scene:'bookcase',
    dims:'W 90 × D 32 × H 180 cm · 5 shelves',
    materials:{ ar:'خشب هندسي، ترسية تثبيت للحائط مرفقة', en:'Engineered wood, wall anchor included' },
    desc:{
      ar:'5 رفوف مفتوحة لكتب وعينات وعرض — مقاسة للمكاتب المنزلية والمعرض.',
      en:'Five open shelves for books, samples and display — sized for home offices and showrooms alike.'
    }
  }
];

const MATERIALS = ['Fabric','Wood','Leather','Metal','Mesh'];
const STYLES    = ['Modern','Contemporary','Minimalist','Mid-century','Scandinavian'];
const ROOMS     = ['Living Room','Bedroom','Dining','Office'];
const CATS      = ['Sofas','Tables','Chairs','Storage'];

/* ------------------------------------------------------------
   DEMO MODE — explanation layer (scroll-linked + panel)
   ------------------------------------------------------------ */
const DEMO_NOTES = [
  {
    id:'hero',
    label:{ ar:'ليه القسم ده؟', en:'WHY THIS SECTION?' },
    title:{ ar:'01 — الهيرو', en:'01 — The Hero' },
    text:{
      ar:'الهيرو بيعرّف بالنشاط (أثاث)، ومستوى الجودة، والهدف التجاري للصفحة كلها في شاشة واحدة. زرارين بيقسموا نيتين الزائر: اللي جاهز يشتري يروح لـ«استكشف التجربة»، واللي لسه بيدوّر يروح لـ«كيف تعمل؟».',
      en:'The hero identifies the category (furniture), the quality level and the commercial purpose of the website inside one screen. Two CTAs split the two visitor intents: ready-to-shop visitors go to EXPLORE, evaluating visitors go to HOW IT WORKS.'
    },
    hint:{
      ar:'مفيش حاجة بتنافس القرار الأول — لا عروض ولا إحصائيات ولا قوائم طويلة. البطاقات العائمة بتوريك شكل كارت المنتج الحقيقي قبل ما تسكرول.',
      en:'Nothing competes with that first decision — no offers, no statistics, no long menus. The floating product metadata previews what a real product card looks like before you scroll.'
    }
  },
  {
    id:'idea',
    label:{ ar:'ليه الفكرة دي؟', en:'WHY THIS SCROLL STORY?' },
    title:{ ar:'02 — الفكرة', en:'02 — The Idea' },
    text:{
      ar:'الموقع مش بديل عن المعرض — هو امتداده الرقمي. القسم ده متعمّم بالسكرول: أول ما تتحرك، المشهد بيتحول من واجهة المعرض لمعرض رقمي مفتوح 24 ساعة.',
      en:'The website does not replace the showroom — it extends it digitally. This section is scroll-linked: as you move, the scene morphs from the physical storefront into a digital showroom open 24/7.'
    },
    hint:{
      ar:'اتنين حاجات بتحصل مع السكرول: النص والخطوات بيتغيّروا، والمشهد على اليمين بيتبدّل. دي حركة متصمّمة تحكي قصة، مش زينة.',
      en:'Two things move with your scroll: the copy and steps advance, and the visual on the side swaps frames. Motion here performs a story — it is not decoration.'
    }
  },
  {
    id:'categories',
    label:{ ar:'ليه المنتج قبل كل حاجة؟', en:'WHY PRODUCT-FIRST?' },
    title:{ ar:'03 — التصنيفات', en:'03 — Shop by Category' },
    text:{
      ar:'عملاء الأثاث عادةً بيشوفوا المنتجات قبل ما يهتموا ببيانات الشركة. عشان كده الواجهة بتبدأ بالاكتشاف — 8 مداخل بتغطي طريقة تفكير الناس فعلًا: بالغرفة أو بنوع القطعة.',
      en:'Furniture customers usually need to see products before they care about company information. The interface therefore prioritizes discovery — eight entry points covering how people actually think: by room or by product type.'
    },
    hint:{
      ar:'كل كارت بيطبّق فلتر حقيقي على الكتالوج تحت ويوصلك جاهز — جرّب أي واحد.',
      en:'Each card applies a live filter to the catalog below and scrolls you straight there — try any of them.'
    }
  },
  {
    id:'discovery',
    label:{ ar:'ليه شبكة المنتجات؟', en:'WHY A CURATED START?' },
    title:{ ar:'04 — اكتشاف المنتجات', en:'04 — Product Discovery' },
    text:{
      ar:'كتالوج كامل ممكن يدوّخ. صف مختار بيدوّر الزائر الجديد نقطة بداية واثقة، وفي نفس الوقت بيوريك سلوك كارت المنتج الحقيقي: السعر، التوافر، الصورتين، والزر السريع.',
      en:'A full catalog can overwhelm. A featured row gives first-time visitors a confident starting point while demonstrating real product-card behavior: price, stock status, hover imagery and quick actions.'
    },
    hint:{
      ar:'أول كارت أكبر عن قصد — التسلسل البصري بيقول للعين منين تبدأ. في التنفيذ الحقيقي، «مميّز» بتبقى أداة تجهيز محتوى بيتحكم فيها إمكان.',
      en:'The first card is deliberately larger — visual hierarchy tells the eye where to begin. In production, “featured” becomes a merchandising tool EMKAN controls.'
    }
  },
  {
    id:'filters',
    label:{ ar:'ليه الفلترة؟', en:'WHY FILTERING?' },
    title:{ ar:'05 — الفلترة الذكية', en:'05 — Smart Filtering' },
    text:{
      ar:'الفلترة بتحوّل كتالوج أثاث طويل لتجربة تسوّق موجّهة. الفئة والغرفة والستايل والسعر واللون والخامة بيشتغلوا مع بعض — الزائر بيضيّق 16 قطعة تجريبية لـ 2-3 تناسب أوضته فعلًا.',
      en:'Filtering turns a large furniture catalog into a guided shopping experience. Category, room, style, price, color and material filters combine live — the customer narrows 16 demo items down to the two or three that fit their room.'
    },
    hint:{
      ar:'جرّب تجمع فلاتر: لون = بيج + خامة = قماش + سعر ≤ 13,000. كل زرار هنا شغّال فعليًا، مش صورة.',
      en:'Try combining filters: Color = beige + Material = Fabric + Price up to 13,000. Every control here is functional, not a screenshot.'
    }
  },
  {
    id:'pdp',
    label:{ ar:'ليه صفحة المنتج؟', en:'WHY THIS PAGE?' },
    title:{ ar:'06 — صفحة المنتج', en:'06 — Product Detail' },
    text:{
      ar:'صفحة المنتج هي المكان اللي الاهتمام بيتحوّل لفعل. معرض الصور، الأبعاد، الخامات، الألوان، التوافر، والتوصيل — كل الأسئلة اللي بتيجي واتساب واحدة واحدة، بترد عليها صفحة واحدة.',
      en:'The product page is where interest becomes action. Gallery, dimensions, materials, color options, availability and delivery answer in one place what customers usually send one WhatsApp message at a time.'
    },
    hint:{
      ar:'افتح أي منتج وجرّب: بدّل اللون وشوف الصورة، وتفرّق على الصور المصغّرة. زرار واتساب بيسيب قناة اللي المتسوّقين المصريين بيثقوا فيها.',
      en:'Open any product to test it: click a color swatch — the main image changes; click the thumbnails. The WhatsApp CTA keeps the channel Egyptian shoppers already trust.'
    }
  },
  {
    id:'story',
    label:{ ar:'ليه القصة؟', en:'WHY STORYTELLING?' },
    title:{ ar:'07 — قصة المنتج', en:'07 — Product Story' },
    text:{
      ar:'صورة واحدة بتبيع سلعة. الخامة والحرفة والراحة والمقاسات — اللي بتظهر وأنت بتسكرول — بتحوّل قطعة واحدة لشراء مدروس، وبتبرّر سعر أعلى من غير ما تنزل.',
      en:'A single photo sells a commodity. Material, craft, comfort and dimensions — revealed as the visitor scrolls — turn one product into a considered purchase, and justify a premium price without discounting.'
    },
    hint:{
      ar:'الصورة الشمال ثابتة وبيتبدّل إطارها مع كل خطوة بتفعّل — قريب للخامة، ديتيل، طبقات الراحة.',
      en:'The visual stays in place and swaps frames as each block becomes active: material close-up, construction detail, comfort layers.'
    }
  },
  {
    id:'conversion',
    label:{ ar:'ليه نعرض المسار؟', en:'WHY VISUALIZE THE FLOW?' },
    title:{ ar:'08 — نظام التحويل', en:'08 — Digital Sales System' },
    text:{
      ar:'دي الحاجة اللي الموقع بيربطها: زيارة → منتج → تفاصيل → مقارنة → ثقة → تواصل → Lead في إيدك. عرض النظام بيساعد النشاط يشوف الموقع كقناة بيع، مش كتيّب دعائي.',
      en:'This is what the website would connect: discovery → details → comparison → trust → inquiry → lead in EMKAN’s hands. Showing the system helps the business see the website as a sales channel, not a brochure.'
    },
    hint:{
      ar:'الخطوة 3 ليها بابين: الديمو السلة شغّالة النهارده؛ في التنفيذ بيتضاف دفع ومخزون وصندوق Leads منظم في وقت إمكان.',
      en:'Step 3 has two doors: the demo cart works today; production adds payments, inventory and a structured lead inbox when EMKAN is ready.'
    }
  },
  {
    id:'compare',
    label:{ ar:'ليه قبل وبعد؟', en:'WHY BEFORE / AFTER?' },
    title:{ ar:'09 — قبل / بعد', en:'09 — Before / After' },
    text:{
      ar:'الرسالة مش «طريقتك غلط» — الرسالة «بنمدّ المعرض للعالم الرقمي». المعرض يفضل مكانه، والكتالوج والبحث والفلترة والساعة 24/7 بيتضافوا فوقه.',
      en:'The message is not “your current way is wrong” — it is “we are extending the showroom into the digital world.” The showroom stays; catalog, search, filtering and 24/7 availability simply go online too.'
    },
    hint:{
      ar:'اسحب المقبض (أو استخدم أسهم الكيبورد بعد ما تركّز عليه) لمقارنة الحالتين.',
      en:'Drag the handle (or use arrow keys after focusing it) to compare the two states.'
    }
  },
  {
    id:'whynexora',
    label:{ ar:'ليه الإطار ده؟', en:'WHY THIS FRAMEWORK?' },
    title:{ ar:'10 — ليه نكسيرا؟', en:'10 — Why NEXORA' },
    text:{
      ar:'9 خطوات بتبرّر كل قرار في العرض ده: هوية النشاط، الجمهور، طريقة البيع، المنتجات، المشكلة، الواجهة، الهوية البصرية، الموقع، ونظام النمو — مفيش template بيتشطب على مقاسك.',
      en:'Nine steps justify every decision in this demo: business identity, audience, sales model, products, the problem, UX, visual system, website and the growth system — no template gets cut to fit you.'
    },
    hint:{
      ar:'كل خطوة بتربط بقسم شفته قبل كده — دي الخلاصة اللي صاحب القرار يقدر يعيدها جوه مكتبه.',
      en:'Each step maps to a section you have already seen — this is the summary a decision-maker can repeat internally.'
    }
  },
  {
    id:'personalize',
    label:{ ar:'ليه الجزء ده؟', en:'WHY PERSONALIZATION?' },
    title:{ ar:'11 — النسخة الحقيقية', en:'11 — The Real Version' },
    text:{
      ar:'اللي بتشوفه ده عرض شرح. الموقع الحقيقي يتبني من نشاطك أنت: شعارك، ألوانك، خطوطك، منتجاتك، تصويرك، عملاؤك، وطريقتك في البيع.',
      en:'What you are seeing is a demonstration. The real website is built from your business: your logo, colors, typography, products, photography, customers and sales process.'
    },
    hint:{
      ar:'اسحب لليمين والبطاقات بتوضّح الفرق بين demo ونسخة EMKAN الكاملة. «مفيش قالب واحد لكل نشاط».',
      en:'Each card shows the gap between this demo and a full EMKAN build. “One template does not fit every business.”'
    }
  },
  {
    id:'final',
    label:{ ar:'ليه نقفل كده؟', en:'WHY CLOSE THIS WAY?' },
    title:{ ar:'12 — نهاية العرض', en:'12 — Not the Final Website' },
    text:{
      ar:'إطار صادق بيبني ثقة: ده عرض لشكل تجربة التجارة الرقمية اللي ممكن تبقى تبع إمكان. الموقع الحقيقي يتصمم حول علامتك ومنتجاتك الحقيقية وأسعارك وطريقتك في البيع.',
      en:'Honest framing builds trust: this is a demonstration of what EMKAN’s digital commerce experience could become. The real website would be designed around EMKAN’s brand, real products, real pricing and real customer journey.'
    },
    hint:{
      ar:'«ابدأ مشروعك» بتفتح نموذج التواصل؛ «تحدث مع NEXORA» بتفتح واتساب (رقم تجريبي).',
      en:'START YOUR PROJECT opens the inquiry form; TALK TO NEXORA opens WhatsApp (demo number).'
    }
  }
];
