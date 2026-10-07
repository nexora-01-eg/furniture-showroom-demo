/* ============================================================
   EMKAN DEMO — application logic (v2)
   AR/EN · dark/light · scroll story · demo explanation engine
   ============================================================ */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const T  = (ar, en) => I18N.tx(ar, en);
const fmt = n => 'EGP ' + n.toLocaleString('en-US');
const byId = id => PRODUCTS.find(p => p.id === id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------------- theme (dark / light) ---------------- */
const themeBtn = $('#themeBtn');
function applyTheme(t){
  document.documentElement.dataset.theme = t;
  themeBtn.setAttribute('aria-pressed', t === 'dark');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = t === 'dark' ? '#131312' : '#F6F2EA';
  try { localStorage.setItem('emkan-theme', t); } catch(e){}
}
let savedTheme = null;
try { savedTheme = localStorage.getItem('emkan-theme'); } catch(e){}
applyTheme(savedTheme === 'light' ? 'light' : 'dark');
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next); tick(660);
});

/* ---------------- sound (tiny UI ticks) ---------------- */
let soundOn = false, actx = null;
try { soundOn = localStorage.getItem('emkan-sound') === '1'; } catch(e){}
const soundBtn = $('#soundBtn');
soundBtn.setAttribute('aria-pressed', soundOn);
soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.setAttribute('aria-pressed', soundOn);
  try { localStorage.setItem('emkan-sound', soundOn ? '1' : '0'); } catch(e){}
  tick(760);
});
function tick(freq = 520, dur = .05){
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'triangle'; o.frequency.value = freq;
    g.gain.setValueAtTime(.06, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001, actx.currentTime + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(); o.stop(actx.currentTime + dur);
  } catch(e){}
}

/* ---------------- toasts ---------------- */
function toast(msg){
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 450); }, 2800);
}

/* ---------------- reveal on scroll ---------------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold:.12, rootMargin:'0px 0px -6% 0px' });
function observeReveals(root = document){ $$('.rv', root).forEach(el => io.observe(el)); }

/* ---------------- nav / mobile menu ---------------- */
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

/* ---------------- overlay helpers ---------------- */
function openOverlay(el){
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  const focusable = el.querySelector('button, input, a[href]');
  if (focusable) setTimeout(() => focusable.focus(), 60);
}
function closeOverlay(el){
  el.classList.remove('open'); el.setAttribute('aria-hidden', 'true');
  if (!$$('.modal.open, .drawer.open, .search-overlay.open').length && !mMenu.classList.contains('open'))
    document.body.classList.remove('lock');
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')){
    const o = e.target.closest('.modal, .drawer, .search-overlay');
    if (o) closeOverlay(o);
  }
});

/* ---------------- hero ---------------- */
$('#heroImg').innerHTML = VIS.heroScene();
(() => {
  if (matchMedia('(hover:none)').matches) return;
  const v = $('#heroVisual');
  $('#hero').addEventListener('pointermove', e => {
    const r = $('#hero').getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    v.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
  });
  $('#hero').addEventListener('pointerleave', () => v.style.transform = '');
})();

/* replay intro */
$('#replayBtn').addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
  $$('.hero .line>span, .hero .sub, .hero-cta, .hero-tags, .hero-visual').forEach(el => {
    el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  });
  tick(560);
});

/* ---------------- category cards ---------------- */
const catMap = { sofa:'sofa', bed:'bed', dining:'dining', desk:'desk', table:'coffee', chair:'dchair', storage:'wardrobe' };
function renderCatGrid(){
  $('#catGrid').innerHTML = CATEGORIES.map((c, i) => `
    <button class="cat-card rv" data-key="${c.key}" style="transition-delay:${i * 60}ms">
      <span class="cat-media">${VIS.scene({ type:catMap[c.type] || 'sofa', color:['beige','brown','grey','charcoal','green'][i % 5], alt:T(c.name.ar, c.name.en) })}</span>
      <span class="cat-shade"></span>
      <span class="cat-go">←</span>
      <span class="cat-txt"><b>${T(c.name.ar, c.name.en)}</b><span>${T(c.tag.ar, c.tag.en)}</span></span>
    </button>`).join('');
}

/* ---------------- product card template ---------------- */
function cardHTML(p, i = 0){
  const made = p.avail === 'made';
  return `
  <article class="p-card rv" data-id="${p.id}" style="transition-delay:${(i % 4) * 50}ms">
    <div class="p-media">
      <span class="scene main">${VIS.productScene(p, 0)}</span>
      <span class="scene alt">${VIS.productScene(p, 1)}</span>
      <span class="p-badge ${made ? 'made' : ''}">${lbl('avail', p.avail)}</span>
      <div class="p-actions">
        <button data-quick="${p.id}">${T('عرض سريع', 'Quick view')}</button>
        <button data-add="${p.id}">${T('أضف للسلة', 'Add to cart')}</button>
      </div>
    </div>
    <div class="p-info">
      <span class="p-cat">${lbl('category', p.category)} · ${lbl('room', p.room)}</span>
      <h3><button data-quick="${p.id}">${p.name}</button></h3>
      <div class="p-meta">
        <span class="p-price">${fmt(p.price)}</span>
        <span class="p-avail ${made ? 'made' : ''}">${lbl('avail', p.avail)}</span>
      </div>
    </div>
  </article>`;
}
function renderFeat(){
  $('#featGrid').innerHTML = PRODUCTS.filter(p => p.feature).slice(0, 6).map(cardHTML).join('');
  observeReveals($('#featGrid'));
}

/* ---------------- catalog: filters ---------------- */
const F = {
  category:new Set(), room:new Set(), style:new Set(),
  color:new Set(), material:new Set(),
  priceMax:20000, q:'', sort:'featured'
};

function chipGroup(el, values, key){
  el.innerHTML = values.map(v => `<button class="chip-f" data-v="${v}" data-k="${key}">${lbl(key, v)}</button>`).join('');
}
function renderFilterChips(){
  chipGroup($('#fCategory'), CATS, 'category');
  chipGroup($('#fRoom'), ROOMS, 'room');
  chipGroup($('#fStyle'), STYLES, 'style');
  chipGroup($('#fMaterial'), MATERIALS, 'material');
  $('#fColor').innerHTML = ['beige','grey','brown','charcoal','green','black']
    .map(c => `<button class="sw" data-c="${c}" data-k="color" aria-label="${lbl('color', c)}"></button>`).join('');
}

function haystack(p){
  return [p.name, p.category, p.room, p.style, p.material, p.desc.ar, p.desc.en,
    lbl('category', p.category), lbl('room', p.room), lbl('style', p.style), lbl('material', p.material)]
    .join(' ').toLowerCase();
}
function matches(p){
  if (F.category.size && !F.category.has(p.category)) return false;
  if (F.room.size && !F.room.has(p.room)) return false;
  if (F.style.size && !F.style.has(p.style)) return false;
  if (F.color.size && !F.color.has(p.color)) return false;
  if (F.material.size && !F.material.has(p.material)) return false;
  if (p.price > F.priceMax) return false;
  if (F.q && !haystack(p).includes(F.q.toLowerCase())) return false;
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
    F[k].forEach(v => out.push({ k, v, label: k === 'color' ? lbl('color', v) : lbl(k, v) })));
  if (F.priceMax < 20000) out.push({ k:'price', v:'', label:'≤ ' + fmt(F.priceMax) });
  if (F.q) out.push({ k:'q', v:'', label:'“' + F.q + '”' });
  return out;
}

function renderCatalog(){
  const list = sortList(PRODUCTS.filter(matches));
  $('#catalogGrid').innerHTML = list.map(cardHTML).join('');
  $('#resultCount').textContent = T(
    `${list.length} من ${PRODUCTS.length} منتج تجريبي`,
    `Showing ${list.length} of ${PRODUCTS.length} demo products`);
  $('#emptyState').hidden = list.length > 0;
  $('#catalogGrid').style.display = list.length ? '' : 'none';

  const chips = activeChips();
  $('#activeFilters').innerHTML = chips
    .map(c => `<button class="af" data-k="${c.k}" data-v="${c.v}">${c.label} ✕</button>`).join('');
  const badge = $('#fBadge'); badge.hidden = !chips.length; badge.textContent = chips.length;

  $$('.chip-f').forEach(b => b.classList.toggle('on', F[b.dataset.k].has(b.dataset.v)));
  $$('.sw[data-k]').forEach(b => b.classList.toggle('on', F.color.has(b.dataset.c)));
  $('#priceHint').textContent = F.priceMax >= 20000
    ? T('أي سعر', 'Any price')
    : '≤ ' + fmt(F.priceMax);

  observeReveals($('#catalogGrid'));
}

document.addEventListener('click', e => {
  const chip = e.target.closest('.chip-f');
  if (chip){
    const set = F[chip.dataset.k];
    set.has(chip.dataset.v) ? set.delete(chip.dataset.v) : set.add(chip.dataset.v);
    tick(480); renderCatalog();
  }
  const sw = e.target.closest('.sw[data-k]');
  if (sw){
    F.color.has(sw.dataset.c) ? F.color.delete(sw.dataset.c) : F.color.add(sw.dataset.c);
    tick(480); renderCatalog();
  }
  const af = e.target.closest('.af');
  if (af){
    if (af.dataset.k === 'price'){ F.priceMax = 20000; $('#fPrice').value = 20000; }
    else if (af.dataset.k === 'q'){ F.q = ''; $('#fSearch').value = ''; $('#searchOverlayInput').value = ''; }
    else F[af.dataset.k].delete(af.dataset.v);
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

/* category cards → apply filter + scroll to catalog */
$('#catGrid').addEventListener('click', e => {
  const card = e.target.closest('.cat-card'); if (!card) return;
  clearAll();
  const [kind, value] = card.dataset.key.split(':');
  F[kind === 'room' ? 'room' : 'category'].add(value);
  renderCatalog();
  tick(620);
  $('#catalogGrid').scrollIntoView({ behavior:'smooth', block:'start' });
  const c = kind === 'room' ? { ar:value, en:value } : null;
  toast(T(`تم الفلترة على ${c ? value : value}`, `Filtered by ${value}`));
});

/* mobile filter sheet */
const filtersPanel = $('#filtersPanel');
$('#filtersOpen').addEventListener('click', () => { filtersPanel.classList.add('open'); document.body.classList.add('lock'); });
$('#filtersClose').addEventListener('click', closeFilters);
function closeFilters(){ filtersPanel.classList.remove('open'); document.body.classList.remove('lock'); }

/* ---------------- product detail (PDP) ---------------- */
const pdp = { product:null, color:null, variant:0 };
const pdpEl = $('#pdp');

function openPDP(id){
  const p = byId(id); if (!p) return;
  pdp.product = p; pdp.color = p.color; pdp.variant = 0;
  renderPDP();
  openOverlay(pdpEl);
  if (document.body.classList.contains('demo-on')) showNote(DEMO_NOTES.findIndex(n => n.id === 'pdp'));
}
function renderPDP(){
  const p = pdp.product; if (!p) return;
  $('#pdpCat').textContent = `${lbl('category', p.category)} · ${lbl('room', p.room)} · ${lbl('style', p.style)}`;
  $('#pdpName').textContent = p.name;
  $('#pdpPrice').textContent = fmt(p.price);
  const av = $('#pdpAvail');
  av.textContent = lbl('avail', p.avail);
  av.classList.toggle('made', p.avail === 'made');
  $('#pdpDesc').textContent = T(p.desc.ar, p.desc.en);
  $('#pdpDims').textContent = p.dims;
  $('#pdpMat').textContent = T(p.materials.ar, p.materials.en);
  $('#pdpDelivery').textContent = T(DELIVERY.ar, DELIVERY.en);
  $('#pdpColorName').textContent = '— ' + lbl('color', pdp.color);
  $('#pdpSwatches').innerHTML = p.colors
    .map(c => `<button class="sw ${c === pdp.color ? 'on' : ''}" data-c="${c}" aria-label="${lbl('color', c)}"></button>`).join('');
  $('#pdpThumbs').innerHTML = [0,1,2]
    .map(v => `<button class="pdp-thumb ${v === pdp.variant ? 'on' : ''}" data-v="${v}" aria-label="View ${v + 1}">${VIS.productScene({ ...p, color:pdp.color }, v)}</button>`).join('');
  $('#pdpMain').innerHTML = VIS.productScene({ ...p, color:pdp.color }, pdp.variant);
  $('#pdpWa').href = 'https://wa.me/201000000000?text=' + encodeURIComponent(
    T(`مرحبا إمكان (استفسار تجريبي) — مهتم بـ "${p.name}" (${fmt(p.price)}).`,
      `Hello EMKAN (demo inquiry) — I'm interested in "${p.name}" (${fmt(p.price)}).`));
}
function refreshPDPImage(){
  const p = pdp.product;
  $('#pdpMain').innerHTML = VIS.productScene({ ...p, color:pdp.color }, pdp.variant);
  $('#pdpColorName').textContent = '— ' + lbl('color', pdp.color);
  $('#pdpSwatches').querySelectorAll('.sw').forEach(s => s.classList.toggle('on', s.dataset.c === pdp.color));
  $('#pdpThumbs').querySelectorAll('.pdp-thumb').forEach(t => t.classList.toggle('on', +t.dataset.v === pdp.variant));
}
$('#pdpSwatches').addEventListener('click', e => {
  const s = e.target.closest('.sw'); if (!s) return;
  pdp.color = s.dataset.c; refreshPDPImage(); tick(540);
});
$('#pdpThumbs').addEventListener('click', e => {
  const t = e.target.closest('.pdp-thumb'); if (!t) return;
  pdp.variant = +t.dataset.v; refreshPDPImage();
});
$('#pdpAdd').addEventListener('click', () => { addToCart(pdp.product.id); closeOverlay(pdpEl); });
$('#pdpDetails').addEventListener('click', () => { closeOverlay(pdpEl); openOverlay($('#contactModal')); });

/* quick view / add / contact delegation */
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
  renderCart(); tick(700);
  toast(T(`${p.name} اتضاف للسلة (تجريبي)`, `${p.name} added to cart (demo)`));
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
        <div class="ci-meta">${lbl('category', p.category)} · ${lbl('avail', p.avail)}</div>
        <div class="ci-qty">
          <button data-q="-1" aria-label="Decrease">−</button>
          <span>${l.qty}</span>
          <button data-q="1" aria-label="Increase">+</button>
        </div>
      </div>
      <div>
        <div class="ci-price">${fmt(p.price * l.qty)}</div>
        <button class="ci-rm" data-rm>${T('حذف', 'Remove')}</button>
      </div>
    </div>`;
  }).join('') : `<p class="cart-empty">${T('سلتك فاضية.<br>ضيف منتج عشان تشوف المسار.', 'Your cart is empty.<br>Add a product to see the flow.')}</p>`;

  const text = cart.length
    ? T('مرحبا إمكان (طلب تجريبي) — أحب أطلب:%0A', 'Hello EMKAN (demo order) — I would like to order:%0A') +
      cart.map(l => `• ${byId(l.id).name} ×${l.qty}`).join('%0A')
    : T('مرحبا إمكان (استفسار تجريبي)', 'Hello EMKAN (demo inquiry)');
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
  if (!cart.length){ toast(T('السلة فاضية — ضيف منتج الأول', 'Cart is empty — add a product first')); return; }
  toast(T('الدفع مقفول عن قصد في العرض التفاعلي ده', 'Checkout is intentionally disabled in this demo'));
});

/* ---------------- search overlay ---------------- */
const so = $('#searchOverlay'), soInput = $('#searchOverlayInput');
function openSearch(){ openOverlay(so); setTimeout(() => soInput.focus(), 80); renderSearch(''); }
$('#searchBtn').addEventListener('click', openSearch);
function renderSearch(q){
  const list = q
    ? PRODUCTS.filter(p => haystack(p).includes(q.toLowerCase()))
    : PRODUCTS.slice(0, 6);
  $('#searchResults').innerHTML = list.length
    ? list.map(p => `
      <button class="sr-item" data-quick="${p.id}">
        <span class="sr-thumb">${VIS.productScene(p, 0)}</span>
        <span><span class="sr-name">${p.name}</span><br><span class="sr-cat">${lbl('category', p.category)} · ${lbl('room', p.room)}</span></span>
        <span class="sr-price">${fmt(p.price)}</span>
      </button>`).join('')
    : `<p class="sr-empty">${T('مفيش منتجات مطابقة للبحث ده.', 'No products match that search.')}</p>`;
}
let sTimer;
soInput.addEventListener('input', e => {
  clearTimeout(sTimer);
  sTimer = setTimeout(() => renderSearch(e.target.value.trim()), 180);
});
$('#searchResults').addEventListener('click', e => {
  if (e.target.closest('[data-quick]')) closeOverlay(so);
});

/* ---------------- IDEA scroll story ---------------- */
const ideaTrack = $('#ideaTrack');
const ideaFrames = [0, 1, 2].map(i => {
  const d = document.createElement('div');
  d.className = 'idea-frame' + (i === 0 ? ' on' : '');
  d.dataset.f = i;
  d.innerHTML = VIS.ideaFrame(i);
  $('#ideaVisual').appendChild(d);
  return d;
});
let ideaStep = -1, ideaRaf = 0;
function setIdeaStep(i){
  if (i === ideaStep) return;
  ideaStep = i;
  const s = I18N.IDEA[i];
  $('#ideaTitle').textContent = T(s.title.ar, s.title.en);
  $('#ideaLine').textContent = T(s.line.ar, s.line.en);
  $$('#ideaSteps li').forEach(li => li.classList.toggle('on', +li.dataset.step === i));
  ideaFrames.forEach(f => f.classList.toggle('on', +f.dataset.f === i));
}
function ideaTick(){
  ideaRaf = 0;
  const rect = ideaTrack.getBoundingClientRect();
  const total = ideaTrack.offsetHeight - innerHeight;
  let p;
  if (total > 0) p = clamp((-rect.top) / total, 0, 1);
  else p = clamp((innerHeight - rect.top) / Math.max(rect.height, 1), 0, 1);
  $('#ideaBar').style.width = (p * 100).toFixed(1) + '%';
  setIdeaStep(p < .34 ? 0 : p < .68 ? 1 : 2);
}
window.addEventListener('scroll', () => { if (!ideaRaf) ideaRaf = requestAnimationFrame(ideaTick); }, { passive:true });
window.addEventListener('resize', ideaTick);

/* ---------------- product story ---------------- */
const storyKinds = ['material', 'detail', 'craft', 'comfort'];
$('#storyVisual').innerHTML = storyKinds
  .map((k, i) => `<div class="story-frame ${i === 0 ? 'on' : ''}" data-f="${i}">${VIS.storyFrame(k)}</div>`).join('');

const stepIO = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const i = +e.target.dataset.step;
    $$('.story-step').forEach(s => s.classList.toggle('on', +s.dataset.step === i));
    $$('.story-frame').forEach(f => f.classList.toggle('on', +f.dataset.f === i));
  });
}, { threshold:0, rootMargin:'-40% 0px -45% 0px' });
$$('.story-step').forEach(s => stepIO.observe(s));
$$('.story-step')[0].classList.add('on');

/* ---------------- before / after slider ---------------- */
(() => {
  const ba = $('#ba'), before = $('#baBefore'), handle = $('#baHandle');
  let dragging = false;
  const set = pct => {
    pct = clamp(pct, 6, 94);
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
    handle.setAttribute('aria-valuenow', Math.round(pct));
  };
  const fromEvent = e => {
    const r = ba.getBoundingClientRect();
    const x = e.clientX ?? (e.touches && e.touches[0].clientX);
    set((x - r.left) / r.width * 100);
  };
  ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); fromEvent(e); });
  ba.addEventListener('pointermove', e => { if (dragging) fromEvent(e); });
  ba.addEventListener('pointerup', () => dragging = false);
  ba.addEventListener('pointercancel', () => dragging = false);
  handle.addEventListener('keydown', e => {
    const cur = +handle.getAttribute('aria-valuenow');
    if (e.key === 'ArrowLeft')  { set(cur - 4); e.preventDefault(); }
    if (e.key === 'ArrowRight') { set(cur + 4); e.preventDefault(); }
  });
  set(50);
})();

/* ---------------- personalization mini products ---------------- */
$('#pzProd').innerHTML = PRODUCTS.filter(p => p.feature).slice(0, 3)
  .map(p => `<span class="pzp">${VIS.productScene(p, 0)}</span>`).join('');

/* ---------------- DEMO MODE ---------------- */
const demoFab = $('#demoFab'), demoPanel = $('#demoPanel');
let demoIdx = 0, demoOn = false;

/* section markers */
$$('[data-demo]').forEach(sec => {
  const noteIdx = DEMO_NOTES.findIndex(n => n.id === sec.dataset.demo);
  if (noteIdx < 0) return;
  const b = document.createElement('button');
  b.className = 'demo-mark';
  b.dataset.note = noteIdx;
  b.addEventListener('click', ev => { ev.stopPropagation(); showNote(noteIdx, true); });
  const host = sec.querySelector('.idea-pin') || sec;
  host.appendChild(b);
});

function renderDemoUI(){
  const n = DEMO_NOTES[demoIdx];
  $('#popQ').textContent = T(n.title.ar, n.title.en);
  $('#popA').textContent = T(n.text.ar, n.text.en);
  $('#popProg').textContent = `${demoIdx + 1}/${DEMO_NOTES.length}`;
  $('#demoLabelTxt').textContent = T(n.label.ar, n.label.en);
  $('#demoTitle').textContent = T(n.title.ar, n.title.en);
  $('#demoQ').textContent = T(n.text.ar, n.text.en);
  $('#demoA').textContent = T(n.hint.ar, n.hint.en);
  $('#demoProg').textContent = `${String(demoIdx + 1).padStart(2, '0')} / ${DEMO_NOTES.length}`;
  $('#demoPrev').disabled = demoIdx === 0;
  $('#demoNext').disabled = demoIdx === DEMO_NOTES.length - 1;
  $$('.demo-mark').forEach(m => {
    const note = DEMO_NOTES[+m.dataset.note];
    m.textContent = `${T(note.label.ar, note.label.en)} · ${String(+m.dataset.note + 1).padStart(2, '0')}`;
  });
}
function showNote(i, openPanel){
  demoIdx = (i + DEMO_NOTES.length) % DEMO_NOTES.length;
  renderDemoUI();
  if (openPanel){
    demoPanel.classList.add('open');
    demoPanel.setAttribute('aria-hidden', 'false');
    tick(620);
  }
}
function closeDemo(){ demoPanel.classList.remove('open'); demoPanel.setAttribute('aria-hidden', 'true'); }

demoFab.addEventListener('click', () => {
  demoOn = !demoOn;
  document.body.classList.toggle('demo-on', demoOn);
  demoFab.classList.toggle('on', demoOn);
  demoFab.setAttribute('aria-pressed', demoOn);
  if (demoOn){
    renderDemoUI();
    toast(T('وضع الشرح شغّال — أي قسم بتشوفه ليه شرح مرقّم', 'Demo annotations ON — every section carries its numbered note'));
    tick(740);
  } else closeDemo();
});
$('#demoClose').addEventListener('click', closeDemo);
$('#demoPrev').addEventListener('click', () => showNote(demoIdx - 1));
$('#demoNext').addEventListener('click', () => showNote(demoIdx + 1));
$('#popPrev').addEventListener('click', () => showNote(demoIdx - 1));
$('#popNext').addEventListener('click', () => showNote(demoIdx + 1));

/* scroll-linked pop: which section am I looking at? */
const demoIO = new IntersectionObserver(es => {
  if (!demoOn) return;
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const idx = DEMO_NOTES.findIndex(n => n.id === e.target.dataset.demo);
    if (idx >= 0 && idx !== demoIdx) showNote(idx);
  });
}, { threshold:0, rootMargin:'-45% 0px -45% 0px' });
$$('[data-demo]').forEach(s => demoIO.observe(s));

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
  toast(T('ديمو — مفيش بيانات اتبعتت. في التنفيذ الحقيقي الطلب ده بيوصل كـLead.',
           'Demo form — nothing was sent. In production this creates a real lead.'));
});

/* ---------------- language ---------------- */
$('#langBtn').addEventListener('click', () => {
  I18N.setLang(I18N.lang === 'ar' ? 'en' : 'ar');
  tick(600);
});

/* re-render every dynamic (non data-i18n) string */
function renderDynamic(){
  renderCatGrid(); observeReveals($('#catGrid'));
  renderFeat();
  renderFilterChips();
  renderCatalog();
  renderCart();
  renderDemoUI();
  ideaStep = -1; ideaTick();
  if (pdp.product && pdpEl.classList.contains('open')) renderPDP();
  if (so.classList.contains('open')) renderSearch(soInput.value.trim());
}
document.addEventListener('langchange', renderDynamic);

/* ---------------- escape handling ---------------- */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  $$('.modal.open, .drawer.open, .search-overlay.open').forEach(closeOverlay);
  if (mMenu.classList.contains('open')) toggleMenu(false);
  if (filtersPanel.classList.contains('open')) closeFilters();
  if (demoPanel.classList.contains('open')) closeDemo();
});

/* ---------------- boot ---------------- */
I18N.init();
renderDynamic();
observeReveals();
ideaTick();
})();
