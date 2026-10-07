/* ============================================================
   EMKAN DEMO — application logic
   ============================================================ */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const fmt = n => 'EGP ' + n.toLocaleString('en-US');
const byId = id => PRODUCTS.find(p => p.id === id);

/* ---------------- toasts ---------------- */
function toast(msg){
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 450); }, 2600);
}

/* ---------------- reveal on scroll ---------------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
function observeReveals(root = document){ $$('.rv', root).forEach(el => io.observe(el)); }

/* ---------------- nav ---------------- */
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive:true }); onScroll();

const burger = $('#burger'), mMenu = $('#mMenu');
function toggleMenu(force){
  const open = force !== undefined ? force : !mMenu.classList.contains('open');
  mMenu.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  mMenu.setAttribute('aria-hidden', !open);
  document.body.classList.toggle('lock', open);
}
burger.addEventListener('click', () => toggleMenu());
$$('#mMenu a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

/* ---------------- hero ---------------- */
$('#heroImg').innerHTML = VIS.heroScene();
(() => {                                   /* subtle pointer parallax — desktop only */
  const v = $('#heroVisual');
  if (matchMedia('(hover:none)').matches) return;
  $('#hero').addEventListener('pointermove', e => {
    const r = $('#hero').getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    v.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
  });
  $('#hero').addEventListener('pointerleave', () => v.style.transform = '');
})();

/* ---------------- category cards ---------------- */
const catMap = { sofa:'sofa', bed:'bed', dining:'dining', desk:'desk', table:'coffee', chair:'dchair', storage:'wardrobe' };
$('#catGrid').innerHTML = CATEGORIES.map((c, i) => `
  <button class="cat-card rv" data-key="${c.key}" style="transition-delay:${i * 60}ms">
    <span class="cat-media">${VIS.scene({ type:catMap[c.type], color:['beige','brown','grey','charcoal','green'][i % 5], alt:c.name })}</span>
    <span class="cat-shade"></span>
    <span class="cat-go">→</span>
    <span class="cat-txt"><b>${c.name}</b><span>${c.tag}</span></span>
  </button>`).join('');

/* ---------------- product card template ---------------- */
function cardHTML(p, i = 0){
  const availClass = p.avail === 'Made to order' ? 'made' : '';
  return `
  <article class="p-card rv" data-id="${p.id}" style="transition-delay:${(i % 4) * 50}ms">
    <div class="p-media">
      <span class="scene main">${VIS.productScene(p, 0)}</span>
      <span class="scene alt">${VIS.productScene(p, 1)}</span>
      <span class="p-badge ${availClass}">${p.avail}</span>
      <div class="p-actions">
        <button class="p-quick" data-quick="${p.id}">Quick view</button>
        <button class="p-add" data-add="${p.id}">Add to cart</button>
      </div>
    </div>
    <div class="p-info">
      <span class="p-cat">${p.category} · ${p.room}</span>
      <h3><button data-quick="${p.id}">${p.name}</button></h3>
      <div class="p-meta">
        <span class="p-price">${fmt(p.price)}</span>
        <span class="p-avail ${availClass}">${p.avail}</span>
      </div>
    </div>
  </article>`;
}

/* ---------------- featured ---------------- */
$('#featGrid').innerHTML = PRODUCTS.filter(p => p.feature).slice(0, 6).map(cardHTML).join('');

/* ---------------- catalog: filters ---------------- */
const F = {
  category:new Set(), room:new Set(), style:new Set(),
  color:new Set(), material:new Set(),
  priceMax:20000, q:'', sort:'featured'
};

function chipGroup(el, values, key){
  el.innerHTML = values.map(v => `<button class="chip-f" data-v="${v}" data-k="${key}">${v}</button>`).join('');
}
chipGroup($('#fCategory'), CATS, 'category');
chipGroup($('#fRoom'), ROOMS, 'room');
chipGroup($('#fStyle'), STYLES, 'style');
chipGroup($('#fMaterial'), MATERIALS, 'material');
$('#fColor').innerHTML = ['beige','grey','brown','charcoal','green','black']
  .map(c => `<button class="sw" data-c="${c}" data-k="color" aria-label="${c}"></button>`).join('');

function matches(p){
  if (F.category.size && !F.category.has(p.category)) return false;
  if (F.room.size && !F.room.has(p.room)) return false;
  if (F.style.size && !F.style.has(p.style)) return false;
  if (F.color.size && !F.color.has(p.color)) return false;
  if (F.material.size && !F.material.has(p.material)) return false;
  if (p.price > F.priceMax) return false;
  if (F.q){
    const hay = (p.name + ' ' + p.category + ' ' + p.room + ' ' + p.style + ' ' + p.material + ' ' + p.desc).toLowerCase();
    if (!hay.includes(F.q.toLowerCase())) return false;
  }
  return true;
}

function sortList(list){
  const s = F.sort;
  if (s === 'price-asc')  return list.sort((a, b) => a.price - b.price);
  if (s === 'price-desc') return list.sort((a, b) => b.price - a.price);
  if (s === 'name')       return list.sort((a, b) => a.name.localeCompare(b.name));
  return list.sort((a, b) => (b.feature || 0) - (a.feature || 0));
}

function activeChips(){
  const out = [];
  ['category','room','style','color','material'].forEach(k =>
    F[k].forEach(v => out.push({ k, v, label:v })));
  if (F.priceMax < 20000) out.push({ k:'price', v:'', label:'≤ ' + fmt(F.priceMax) });
  if (F.q) out.push({ k:'q', v:'', label:'“' + F.q + '”' });
  return out;
}

function renderCatalog(){
  const list = sortList(PRODUCTS.filter(matches));
  $('#catalogGrid').innerHTML = list.map(cardHTML).join('');
  $('#resultCount').textContent = `${list.length} of ${PRODUCTS.length} demo products`;
  $('#emptyState').hidden = list.length > 0;
  $('#catalogGrid').style.display = list.length ? '' : 'none';

  $('#activeFilters').innerHTML = activeChips()
    .map(c => `<button class="af" data-k="${c.k}" data-v="${c.v}">${c.label} ✕</button>`).join('');

  const n = activeChips().length;
  const badge = $('#fBadge'); badge.hidden = !n; badge.textContent = n;

  $$('.chip-f').forEach(b => b.classList.toggle('on', F[b.dataset.k].has(b.dataset.v)));
  $$('.sw[data-k]').forEach(b => b.classList.toggle('on', F.color.has(b.dataset.c)));
  $('#priceHint').textContent = F.priceMax >= 20000 ? 'Any' : '≤ ' + fmt(F.priceMax);

  observeReveals($('#catalogGrid'));
}

document.addEventListener('click', e => {
  const chip = e.target.closest('.chip-f');
  if (chip){
    const set = F[chip.dataset.k];
    set.has(chip.dataset.v) ? set.delete(chip.dataset.v) : set.add(chip.dataset.v);
    renderCatalog();
  }
  const sw = e.target.closest('.sw[data-k]');
  if (sw){
    F.color.has(sw.dataset.c) ? F.color.delete(sw.dataset.c) : F.color.add(sw.dataset.c);
    renderCatalog();
  }
  const af = e.target.closest('.af');
  if (af){
    if (af.dataset.k === 'price')      { F.priceMax = 20000; $('#fPrice').value = 20000; }
    else if (af.dataset.k === 'q')     { F.q = ''; $('#fSearch').value = ''; $('#searchOverlayInput').value = ''; }
    else                               { F[af.dataset.k].delete(af.dataset.v); }
    renderCatalog();
  }
});

$('#fPrice').addEventListener('input', e => { F.priceMax = +e.target.value; renderCatalog(); });
$('#fSort').addEventListener('change', e => { F.sort = e.target.value; renderCatalog(); });

let qTimer;
$('#fSearch').addEventListener('input', e => {
  clearTimeout(qTimer);
  qTimer = setTimeout(() => { F.q = e.target.value.trim(); renderCatalog(); }, 220);
});

function clearAll(){
  ['category','room','style','color','material'].forEach(k => F[k].clear());
  F.q = ''; F.priceMax = 20000; F.sort = 'featured';
  $('#fSearch').value = ''; $('#fPrice').value = 20000; $('#fSort').value = 'featured';
  renderCatalog();
}
$('#clearFilters').addEventListener('click', clearAll);
$('#emptyReset').addEventListener('click', clearAll);

/* category cards → apply filter + scroll */
$('#catGrid').addEventListener('click', e => {
  const card = e.target.closest('.cat-card'); if (!card) return;
  clearAll();
  const [kind, value] = card.dataset.key.split(':');
  F[kind === 'room' ? 'room' : 'category'].add(value);
  renderCatalog();
  $('#catalog').scrollIntoView({ behavior:'smooth' });
  toast(`Filtered by ${value}`);
});

/* mobile filter sheet */
const filtersEl = $('#filters');
$('#filtersOpen').addEventListener('click', () => { filtersEl.classList.add('open'); document.body.classList.add('lock'); });
$('#filtersClose').addEventListener('click', closeFilters);
function closeFilters(){ filtersEl.classList.remove('open'); document.body.classList.remove('lock'); }

/* ---------------- product detail modal (05) ---------------- */
const pdp = { product:null, color:null, variant:0 };
const pdpEl = $('#pdp');

function openPDP(id){
  const p = byId(id); if (!p) return;
  pdp.product = p; pdp.color = p.color; pdp.variant = 0;
  $('#pdpCat').textContent = `${p.category} · ${p.room} · ${p.style}`;
  $('#pdpName').textContent = p.name;
  $('#pdpPrice').textContent = fmt(p.price) + '  · demo price';
  const av = $('#pdpAvail');
  av.textContent = p.avail; av.classList.toggle('made', p.avail === 'Made to order');
  $('#pdpDesc').textContent = p.desc;
  $('#pdpDims').textContent = p.dims;
  $('#pdpMat').textContent = p.materials;
  $('#pdpDelivery').textContent = 'Delivery & installation across Tanta and the Delta — terms TO BE CONFIRMED with EMKAN.';
  $('#pdpColorName').textContent = '— ' + p.color;
  $('#pdpSwatches').innerHTML = p.colors
    .map(c => `<button class="sw ${c === p.color ? 'on' : ''}" data-c="${c}" aria-label="${c}"></button>`).join('');
  $('#pdpThumbs').innerHTML = [0,1,2]
    .map(v => `<button class="pdp-thumb ${v === 0 ? 'on' : ''}" data-v="${v}" aria-label="View ${v + 1}">${VIS.productScene({ ...p, color:p.color }, v)}</button>`).join('');
  $('#pdpMain').innerHTML = VIS.productScene(p, 0);
  $('#pdpWa').href = 'https://wa.me/201000000000?text=' + encodeURIComponent(
    `Hello EMKAN (demo inquiry) — I'm interested in "${p.name}" (${fmt(p.price)}).`);
  openOverlay(pdpEl);
}

function refreshPDPImage(){
  const p = pdp.product;
  $('#pdpMain').innerHTML = VIS.productScene({ ...p, color:pdp.color }, pdp.variant);
  $('#pdpColorName').textContent = '— ' + pdp.color;
  $('#pdpSwatches').querySelectorAll('.sw').forEach(s => s.classList.toggle('on', s.dataset.c === pdp.color));
  $('#pdpThumbs').querySelectorAll('.pdp-thumb').forEach(t => t.classList.toggle('on', +t.dataset.v === pdp.variant));
}

$('#pdpSwatches').addEventListener('click', e => {
  const s = e.target.closest('.sw'); if (!s) return;
  pdp.color = s.dataset.c; refreshPDPImage();
});
$('#pdpThumbs').addEventListener('click', e => {
  const t = e.target.closest('.pdp-thumb'); if (!t) return;
  pdp.variant = +t.dataset.v; refreshPDPImage();
});
$('#pdpAdd').addEventListener('click', () => { addToCart(pdp.product.id); closeOverlay(pdpEl); });

/* quick view / add delegation */
document.addEventListener('click', e => {
  const quick = e.target.closest('[data-quick]');
  if (quick){ openPDP(quick.dataset.quick); return; }
  const add = e.target.closest('[data-add]');
  if (add){ addToCart(add.dataset.add); return; }
  const oc = e.target.closest('[data-open-contact]');
  if (oc){ openOverlay($('#contactModal')); }
});

/* ---------------- cart ---------------- */
let cart = [];
const drawer = $('#cartDrawer');

function addToCart(id){
  const p = byId(id); if (!p) return;
  const line = cart.find(l => l.id === id);
  line ? line.qty++ : cart.push({ id, qty:1 });
  renderCart();
  toast(`${p.name} added to cart (demo)`);
}
function renderCart(){
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const badge = $('#cartCount');
  badge.hidden = count === 0; badge.textContent = count;
  const total = cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
  $('#cartTotal').textContent = fmt(total);

  $('#cartItems').innerHTML = cart.length ? cart.map(l => {
    const p = byId(l.id);
    return `
    <div class="cart-item" data-id="${l.id}">
      <div class="ci-img">${VIS.productScene(p, 0)}</div>
      <div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-meta">${p.category} · ${p.avail}</div>
        <div class="ci-qty">
          <button data-q="-1" aria-label="Decrease">−</button>
          <span>${l.qty}</span>
          <button data-q="1" aria-label="Increase">+</button>
        </div>
      </div>
      <div>
        <div class="ci-price">${fmt(p.price * l.qty)}</div>
        <button class="ci-rm" data-rm>Remove</button>
      </div>
    </div>`;
  }).join('') : '<p class="cart-empty">Your cart is empty.<br>Add a product to see the flow.</p>';

  const text = cart.length
    ? 'Hello EMKAN (demo order) — I would like to order:%0A' +
      cart.map(l => `• ${byId(l.id).name} ×${l.qty}`).join('%0A')
    : 'Hello EMKAN (demo inquiry)';
  $('#cartWa').href = 'https://wa.me/201000000000?text=' + text;
}
$('#cartItems').addEventListener('click', e => {
  const item = e.target.closest('.cart-item'); if (!item) return;
  const line = cart.find(l => l.id === item.dataset.id); if (!line) return;
  if (e.target.matches('[data-rm]')) cart = cart.filter(l => l !== line);
  else if (e.target.matches('[data-q]')){
    line.qty += +e.target.dataset.q;
    if (line.qty < 1) cart = cart.filter(l => l !== line);
  } else return;
  renderCart();
});
$('#cartBtn').addEventListener('click', () => openOverlay(drawer));
$('#checkoutBtn').addEventListener('click', () => {
  if (!cart.length){ toast('Cart is empty — add a product first'); return; }
  toast('Checkout is intentionally disabled in this demo');
});

/* ---------------- overlay helpers ---------------- */
function openOverlay(el){
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  const focusable = el.querySelector('button, input, a[href]');
  if (focusable) setTimeout(() => focusable.focus(), 60);
}
function closeOverlay(el){
  el.classList.remove('open'); el.setAttribute('aria-hidden', 'true');
  if (!$$('.modal.open, .drawer.open, .search-overlay.open, .m-menu.open').length)
    document.body.classList.remove('lock');
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')){
    const o = e.target.closest('.modal, .drawer, .search-overlay');
    if (o) closeOverlay(o);
  }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  $$('.modal.open, .drawer.open, .search-overlay.open').forEach(closeOverlay);
  if (mMenu.classList.contains('open')) toggleMenu(false);
  if (filtersEl.classList.contains('open')) closeFilters();
  if (demoPanel.classList.contains('open')) closeDemo();
});

/* ---------------- search overlay ---------------- */
const so = $('#searchOverlay'), soInput = $('#searchOverlayInput');
function openSearch(){ openOverlay(so); setTimeout(() => soInput.focus(), 80); renderSearch(''); }
$('#searchBtn').addEventListener('click', openSearch);
function renderSearch(q){
  const list = q
    ? PRODUCTS.filter(p => (p.name + p.category + p.room + p.style).toLowerCase().includes(q.toLowerCase()))
    : PRODUCTS.slice(0, 6);
  $('#searchResults').innerHTML = list.length
    ? list.map(p => `
      <button class="sr-item" data-quick="${p.id}">
        <span class="sr-thumb">${VIS.productScene(p, 0)}</span>
        <span><span class="sr-name">${p.name}</span><br><span class="sr-cat">${p.category} · ${p.room}</span></span>
        <span class="sr-price">${fmt(p.price)}</span>
      </button>`).join('')
    : '<p class="sr-empty">No products match that search.</p>';
}
let sTimer;
soInput.addEventListener('input', e => {
  clearTimeout(sTimer);
  sTimer = setTimeout(() => renderSearch(e.target.value.trim()), 180);
});
$('#searchResults').addEventListener('click', e => {
  if (e.target.closest('[data-quick]')) closeOverlay(so);
});

/* ---------------- product story ---------------- */
const storyFrames = ['material','craft','comfort','dimensions'];
$('#storyVisual').innerHTML = storyFrames
  .map((k, i) => `<div class="story-frame ${i === 0 ? 'on' : ''}" data-f="${i}">${VIS.storyFrame(k)}</div>`).join('');

const stepIO = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const i = +e.target.dataset.step;
    $$('.story-step').forEach(s => s.classList.toggle('on', +s.dataset.step === i));
    $$('.story-frame').forEach(f => f.classList.toggle('on', +f.dataset.f === i));
  });
}, { threshold:.55, rootMargin:'-10% 0px -30% 0px' });
$$('.story-step').forEach(s => stepIO.observe(s));
$$('.story-step')[0].classList.add('on');

/* ---------------- before / after slider ---------------- */
(() => {
  const ba = $('#ba'), before = $('#baBefore'), handle = $('#baHandle');
  let dragging = false;
  const set = pct => {
    pct = Math.max(6, Math.min(94, pct));
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
    handle.setAttribute('aria-valuenow', Math.round(pct));
  };
  const fromEvent = e => {
    const r = ba.getBoundingClientRect();
    set(((e.clientX ?? e.touches[0].clientX) - r.left) / r.width * 100);
  };
  ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); fromEvent(e); });
  ba.addEventListener('pointermove', e => { if (dragging) fromEvent(e); });
  ba.addEventListener('pointerup',   () => dragging = false);
  ba.addEventListener('pointercancel', () => dragging = false);
  handle.addEventListener('keydown', e => {
    const cur = +handle.getAttribute('aria-valuenow');
    if (e.key === 'ArrowLeft')  { set(cur - 4); e.preventDefault(); }
    if (e.key === 'ArrowRight') { set(cur + 4); e.preventDefault(); }
  });
  set(50);
})();

/* ---------------- DEMO MODE ---------------- */
const demoFab = $('#demoFab'), demoPanel = $('#demoPanel');
let demoIdx = 0, demoOn = false;

/* markers on sections */
$$('[data-demo]').forEach(sec => {
  const noteIdx = DEMO_NOTES.findIndex(n => n.id === sec.dataset.demo);
  if (noteIdx < 0) return;
  const b = document.createElement('button');
  b.className = 'demo-mark';
  b.textContent = `WHY THIS SECTION? · ${String(noteIdx + 1).padStart(2, '0')}`;
  b.addEventListener('click', ev => { ev.stopPropagation(); showNote(noteIdx); });
  sec.appendChild(b);
});

function showNote(i){
  demoIdx = (i + DEMO_NOTES.length) % DEMO_NOTES.length;
  const n = DEMO_NOTES[demoIdx];
  $('#demoLabel').textContent = n.label;
  $('#demoTitle').textContent = n.title;
  $('#demoText').textContent = n.text;
  $('#demoHint').textContent = n.hint;
  $('#demoProg').textContent = `${String(demoIdx + 1).padStart(2, '0')} / ${DEMO_NOTES.length}`;
  $('#demoPrev').disabled = demoIdx === 0;
  $('#demoNext').disabled = demoIdx === DEMO_NOTES.length - 1;
  demoPanel.classList.add('open');
  demoPanel.setAttribute('aria-hidden', 'false');
}
function closeDemo(){ demoPanel.classList.remove('open'); demoPanel.setAttribute('aria-hidden', 'true'); }

demoFab.addEventListener('click', () => {
  demoOn = !demoOn;
  document.body.classList.toggle('demo-on', demoOn);
  demoFab.classList.toggle('on', demoOn);
  demoFab.setAttribute('aria-pressed', demoOn);
  if (demoOn){ showNote(demoIdx); toast('Demo annotations ON — click any "WHY THIS SECTION?" badge'); }
  else closeDemo();
});
$('#demoClose').addEventListener('click', closeDemo);
$('#demoPrev').addEventListener('click', () => showNote(demoIdx - 1));
$('#demoNext').addEventListener('click', () => showNote(demoIdx + 1));

/* ---------------- contact form ---------------- */
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = (fd.get('name') || '').toString().trim();
  const phone = (fd.get('phone') || '').toString().trim();
  const okPhone = /^0?1[0-9]{9}$/.test(phone.replace(/[\s-]/g, ''));
  if (!name || !okPhone){ $('#formErr').hidden = false; return; }
  $('#formErr').hidden = true;
  closeOverlay($('#contactModal'));
  e.target.reset();
  toast('Demo form — nothing was sent. In production this creates a real lead.');
});

/* ---------------- boot ---------------- */
renderCatalog();
renderCart();
observeReveals();
})();
