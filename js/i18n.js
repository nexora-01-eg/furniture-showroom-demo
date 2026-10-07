/* ============================================================
   EMKAN DEMO — i18n (AR inline is the source of truth;
   EN is translated here. Dynamic UI strings live in app.js
   and call I18N.tx(ar, en)).
   ============================================================ */

const I18N = (() => {
  'use strict';

  const EN = {
    brandSub:'Digital showroom — interactive demo',
    navIdea:'Idea', navCats:'Categories', navProducts:'Products',
    navFilter:'Filters', navStory:'Product', navFlow:'Flow', navWhy:'Why NEXORA', navCta:'Start your project',

    heroKicker:'NEXORA interactive demo — Tanta, Egypt',
    heroL1:'Your furniture deserves',
    heroL2:'a digital space to match.',
    heroSub:'An e-commerce experience designed to turn a showroom into a browsing-and-selling space that works around the clock.',
    heroCta1:'Explore the experience', heroCta2:'How it works?',
    heroTag1:'Home & office furniture', heroTag2:'Tanta, Egypt', heroTag3:'Demo — not the live store',
    chip1t:'Haven 3-Seater Sofa', chip1s:'Demo price · EGP 12,900',
    chip2t:'The showroom', chip2s:'Tanta — by appointment',
    chip3t:'Material', chip3s:'Linen blend · kiln-dried beech',

    ideaKicker:'The idea',
    ideaS0:'A real showroom with a door, glass and physical products.',
    ideaS1:'The same products — organized, searchable and filterable.',
    ideaS2:'Customers browse, compare and reserve at any hour.',

    catsKicker:'Categories', catsTitle:'Shop by category',
    catsSub:'Pick how you think — by room or by product type. Each card drops you into a pre-filtered catalog.',
    discKicker:'Product discovery', discTitle:'The product is the hero',
    discSub:'A real product grid — image, name, category, demo price, availability and details. Everything is interactive.',
    discCta:'See the full catalog', discNote:'Prices shown are “demo price” — not real prices.',

    filKicker:'Smart filtering', filTitle:'From a long catalog to a guided shopping experience',
    filSub:'Category · room · style · material · color · price — every filter works for real. Try combining more than one.',
    filPanel:'Filters', filClear:'Clear all', filBtn:'Filters', filReset:'Reset filters',
    fCat:'Category', fRoom:'Room', fStyle:'Style', fPrice:'Price', fColor:'Color', fMat:'Material',
    sortFeatured:'Sort: Featured', sortAsc:'Price: low to high', sortDesc:'Price: high to low', sortName:'Name: A → Z',
    emptyT:'No products match these filters.',
    emptyS:'Try removing a filter — this catalog is a demo set.',

    stKicker:'Product story', stTitle:'From a photo… to an experience',
    stSub:'Instead of a boring spec table, each part appears visually as you scroll: material, detail, craft and comfort.',
    st1t:'Material', st1p:'Linen-blend upholstery over a kiln-dried beech frame. In the real site, every claim here is checked against the supplier sheet EMKAN provides.',
    st2t:'Detail', st2p:'A regular machine stitch, sanded edges and a hand finish. Detail shots are what turn an ordinary piece into a deliberate one.',
    st3t:'Craft', st3p:'Reinforced joints, hidden fixings and assembly by trained hands. Craft is not a slogan — it is what you still feel after years.',
    st4t:'Comfort', st4p:'Layers of different-density foam under a soft fiber top — support that keeps its shape. Comfort is written down so nobody has to ask.',

    cvKicker:'Conversion system', cvTitle:'The website is not decoration — it is sales architecture',
    cvSub:'From the first visit to the lead in your hands, the path is designed to end in an outcome.',
    cv1:'Visitor', cv1s:'Arrived from search or social.',
    cv2:'Views a product', cv2s:'Image, price and availability are there instantly.',
    cv3:'Explores details', cv3s:'Size, material, colors, delivery — every question answered.',
    cv4:'Compares', cv4s:'Filters and search narrow the choice down.',
    cv5:'Trusts', cv5s:'Showroom, delivery and warranty info in one place.',
    cv6:'Contacts / orders', cv6s:'Demo cart, WhatsApp or an inquiry form.',
    cv7s:'Name, product and intent arrive in a single message.',
    cvNote:'A clear path — the infrastructure (payments, inventory, CRM) is scoped at build time.',

    baKicker:'Before / after', baTitle:'We extend what you already have — not replace it',
    baSub:'Drag the handle and compare. The showroom stays — the website adds to it.',
    baAfter:'After — with the website', baBefore:'Before — today',
    baA1:'Organized store', baA2:'Categories', baA3:'Search', baA4:'Filtering',
    baA5:'Product pages', baA6:'CTA + lead capture', baA7:'24/7 presence',
    baB1:'Manual messages & calls', baB2:'Scattered product photos',
    baB3:'Repeated questions', baB4:'Limited, scattered catalog',

    wnKicker:'Why NEXORA', wnTitle:'Not a template with your name on it',
    wnSub:'We start from the business itself and move step by step until there is a system that works.',
    wn1:'Business identity', wn2:'Audience', wn3:'Sales model', wn4:'Products',
    wn5:'The problem', wn7:'Visual system', wn8:'Website', wn9:'Growth system',

    pzKicker:'The real version', pzTitle:'So… what about the real build?',
    pzSub:'The demo you are seeing explains the idea. The real website is built from your own business.',
    pz1:'Your logo', pz2:'Your colors', pz3:'Your typography', pz4:'Your products',
    pz5:'Your photography', pz6:'Your customers', pz7:'Your sales process',
    pzSalesSlot:'How do you sell today? The website learns that.',
    pzClose:'One template does not fit every business.',

    fnKicker:'Next step', fnTitle:'Make your showroom sell even when you are not there.',
    fnSub:'This demo explains the idea. The real website — your products, photos, prices and sales process — starts here.',
    fnCta1:'Start your project', fnCta2:'Talk to NEXORA',
    fnNote:'The WhatsApp number above is a demo number.',

    ftTag:'Your furniture deserves a digital space to match. — Tanta, Egypt',
    ftContact:'Contact',
    ftDemo:'An interactive demo by NEXORA. Products, prices and contact data are all placeholders until EMKAN supplies them.',

    cartT:'Cart', cartSub:'Subtotal', cartReq:'Request order — Demo',
    cartNote:'Checkout is intentionally off — this is an interactive demo. In the real build this step becomes an order or an inquiry.',
    cartWa:'Order via WhatsApp (Demo)',

    demoBtn:'Demo mode', demoLabel:'Demo mode · NEXORA', demoPrev:'Previous', demoNext:'Next',
    demoPrice:'Demo price',
    pdpAdd:'Add to cart — Demo', pdpDetails:'Request details', pdpWa:'WhatsApp',
    pdpDims:'Dimensions', pdpMat:'Materials', pdpDel:'Delivery', pdpColor:'Color',
    pdpNote:'Demo product — images, price and availability are all placeholders.',

    ctTitle:'Start your project',
    ctSub:'Leave your details and NEXORA will reply with scope, cost and next steps. <b>This form is a demo — nothing is sent.</b>',
    ctName:'Name', ctPhone:'Phone / WhatsApp', ctNeed:'What do you need?',
    ctSend:'Send request', ctErr:'Please enter a name and a valid phone number.',

    phSearch:'Search the catalog…', phSearchOverlay:'Search sofas, tables, desks…',
    phName:'Your name', phPhone:'01xxxxxxxxx', phMsg:'Website, online store, catalog…'
  };

  const IDEA = [
    {
      title:{ ar:'المعرض لا ينتهي عند باب المحل.', en:'The showroom does not end at the shop door.' },
      line:{ ar:'الموقع هنا لا يستبدل المعرض… هو يمدّ المعرض إلى الإنترنت.', en:'The website does not replace the showroom — it extends it onto the internet.' }
    },
    {
      title:{ ar:'كل قطعة ليها مكانها.', en:'Every piece gets its place.' },
      line:{ ar:'نفس المنتجات، منظّمة وقابلة للبحث والفلترة من أول زيارة.', en:'The same products — organized, searchable and filterable from the first visit.' }
    },
    {
      title:{ ar:'المعرض مفتوح 24 ساعة.', en:'The showroom is open 24/7.' },
      line:{ ar:'العميل بيشوف ويقارن ويحجز في أي وقت — وإنت مش لازم تكون موجود.', en:'Customers browse, compare and reserve anytime — with or without you being there.' }
    }
  ];

  let lang = null;
  const tx = (ar, en) => (lang === 'en' ? en : ar);

  function applyStatic(){
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'en'
      ? 'EMKAN Digital Showroom — Interactive Demo by NEXORA'
      : 'EMKAN Digital Showroom — معرض إمكان الرقمي | عرض NEXORA';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (el.dataset.ar === undefined) el.dataset.ar = el.textContent;
      el.innerHTML = lang === 'en' ? (EN[key] ?? el.dataset.ar) : el.dataset.ar;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      if (el.dataset.ph === undefined) el.dataset.ph = el.placeholder;
      el.placeholder = lang === 'en' ? (EN[el.dataset.i18nPh] ?? el.dataset.ph) : el.dataset.ph;
    });

    const arSpan = document.querySelector('.lang-ar'), enSpan = document.querySelector('.lang-en');
    if (arSpan && enSpan){ arSpan.classList.toggle('on', lang === 'ar'); enSpan.classList.toggle('on', lang === 'en'); }
  }

  function setLang(next){
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem('emkan-lang', lang); } catch(e){}
    applyStatic();
    document.dispatchEvent(new CustomEvent('langchange'));
  }

  function init(){
    let saved = null;
    try { saved = localStorage.getItem('emkan-lang'); } catch(e){}
    lang = (saved === 'en' || saved === 'ar') ? saved : 'ar';
    applyStatic();
  }

  return { init, setLang, tx, IDEA, get lang(){ return lang; } };
})();
