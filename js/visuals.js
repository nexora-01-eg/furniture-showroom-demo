/* ============================================================
   EMKAN DEMO — generated SVG imagery
   Every product "photo" is drawn locally as inline SVG so the
   demo has zero external image dependencies and never shows a
   broken asset. Production replaces these with real photography.
   ============================================================ */

const VIS = (() => {
  let uid = 0;

  const PAL = {
    beige   :{ base:'#D8C7AE', dark:'#B9A488', light:'#EBE2D2' },
    grey    :{ base:'#A5A19A', dark:'#84807A', light:'#C4C0B8' },
    brown   :{ base:'#7E6047', dark:'#5E4736', light:'#9C7E60' },
    charcoal:{ base:'#4C4B47', dark:'#373633', light:'#64635D' },
    green   :{ base:'#6F7B62', dark:'#566049', light:'#8B967C' },
    black   :{ base:'#33322F', dark:'#212120', light:'#4A4945' }
  };
  const WALLS = ['#EFE9DF','#E9E1D3','#EDE8E0','#E7E0D2'];
  const FLOOR = '#D9CDBA';
  const FLOOR_2 = '#CEC0AA';
  const BOOK  = ['#8C7048','#5E6B57','#B7A98F','#4C4B47','#A98B5D'];

  /* ---------------- furniture drawings (800×600 stage, floor y=430) ------------- */
  function f(type, p){
    const sh = (x,y,rx,ry,fill,op) =>
      `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#1F1E1B" opacity="${op||.10}"/>`;
    const r = (x,y,w,h,rx,fill,extra) =>
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${extra||''}/>`;

    switch(type){

      case 'sofa': return `
        ${sh(400,436,196,15)}
        ${r(254,404,13,32,4,p.dark)}${r(533,404,13,32,4,p.dark)}
        ${r(240,270,320,102,22,p.dark)}
        ${r(228,314,48,104,22,p.dark)}${r(524,314,48,104,22,p.dark)}
        ${r(240,352,320,66,16,p.base)}
        ${r(278,356,118,54,14,p.light)}${r(404,356,118,54,14,p.light)}
        ${r(258,296,64,64,16,p.light,` transform="rotate(-9 290 328)"`)}
        ${r(482,296,64,64,16,p.base,` transform="rotate(8 514 328)"`)}`;

      case 'sectional': return `
        ${sh(410,438,258,16)}
        ${r(186,406,13,30,4,p.dark)}${r(470,406,13,30,4,p.dark)}${r(636,406,13,30,4,p.dark)}
        ${r(170,270,330,102,22,p.dark)}
        ${r(452,286,212,86,20,p.dark)}
        ${r(162,314,48,104,22,p.dark)}
        ${r(178,352,314,66,16,p.base)}
        ${r(440,338,224,80,18,p.base)}
        ${r(212,356,126,54,14,p.light)}${r(346,356,126,54,14,p.light)}
        ${r(456,344,194,58,14,p.light)}
        ${r(196,300,60,60,15,p.light,` transform="rotate(-8 226 330)"`)}`;

      case 'lounge': return `
        ${sh(400,436,118,13)}
        ${r(306,406,12,32,4,p.dark,` transform="rotate(9 312 420)"`)}
        ${r(482,406,12,32,4,p.dark,` transform="rotate(-9 488 420)"`)}
        ${r(318,284,164,116,20,p.dark)}
        ${r(292,328,42,90,18,p.dark)}${r(466,328,42,90,18,p.dark)}
        ${r(300,354,200,64,18,p.base)}
        ${r(322,358,156,50,14,p.light)}
        ${r(334,304,72,70,16,p.light,` transform="rotate(-7 370 338)"`)}
        ${r(404,318,54,54,14,p.base,` transform="rotate(10 431 345)"`)}`;

      case 'dchair': return `
        ${sh(400,434,84,10)}
        ${r(356,368,8,66,3,p.dark,` transform="rotate(5 360 400)"`)}
        ${r(436,368,8,66,3,p.dark,` transform="rotate(-5 440 400)"`)}
        ${r(350,374,9,60,3,p.dark)}${r(441,374,9,60,3,p.dark)}
        ${r(352,250,96,118,24,p.base)}
        ${r(364,264,72,60,20,p.light)}
        ${r(338,360,124,18,9,p.light)}`;

      case 'task': return `
        ${sh(400,444,112,13)}
        <g stroke="${p.dark}" stroke-width="9" stroke-linecap="round">
          <path d="M400 424 322 448"/><path d="M400 424 478 448"/>
          <path d="M400 424 350 462"/><path d="M400 424 450 462"/><path d="M400 424 400 466"/>
        </g>
        <circle cx="322" cy="450" r="7" fill="${p.dark}"/><circle cx="478" cy="450" r="7" fill="${p.dark}"/>
        <circle cx="350" cy="464" r="7" fill="${p.dark}"/><circle cx="450" cy="464" r="7" fill="${p.dark}"/>
        <circle cx="400" cy="468" r="7" fill="${p.dark}"/>
        ${r(393,384,14,42,5,p.dark)}
        ${r(334,356,132,28,14,p.base)}
        ${r(348,242,104,122,22,p.light,` stroke="${p.dark}" stroke-width="3"`)}
        <g stroke="${p.dark}" stroke-width="2" opacity=".3">
          <path d="M358 276h84M358 306h84M358 336h84"/>
        </g>
        ${r(324,330,30,11,5,p.dark)}${r(446,330,30,11,5,p.dark)}`;

      case 'ottoman': return `
        ${sh(400,434,110,12)}
        ${r(326,412,11,26,4,p.dark,` transform="rotate(-9 331 425)"`)}
        ${r(463,412,11,26,4,p.dark,` transform="rotate(9 468 425)"`)}
        ${r(312,348,176,74,30,p.base)}
        ${r(326,356,148,34,18,p.light)}
        <ellipse cx="400" cy="356" rx="16" ry="6" fill="${p.dark}" opacity=".35"/>`;

      case 'coffee': return `
        ${sh(400,436,182,13)}
        ${r(318,388,11,48,4,p.dark,` opacity=".7"`)}
        ${r(472,388,11,48,4,p.dark,` opacity=".7"`)}
        ${r(236,366,328,24,9,p.base)}
        ${r(236,382,328,8,4,p.dark,` opacity=".3"`)}
        ${r(258,390,13,46,4,p.dark)}${r(529,390,13,46,4,p.dark)}
        ${r(296,352,74,13,3,'#E9E2D4')}${r(304,344,58,10,3,'#C9B79B')}
        <circle cx="452" cy="356" r="13" fill="#EBE2D2"/>
        ${r(447,344,10,14,3,p.dark)}`;

      case 'dining': return `
        ${sh(400,438,246,15)}
        ${r(262,352,15,80,5,p.dark,` opacity=".65"`)}
        ${r(523,352,15,80,5,p.dark,` opacity=".65"`)}
        ${r(172,332,456,24,9,p.base)}
        ${r(172,350,456,8,4,p.dark,` opacity=".3"`)}
        ${r(200,354,17,82,5,p.dark)}${r(583,354,17,82,5,p.dark)}
        ${r(217,402,366,9,4,p.dark,` opacity=".8"`)}
        <ellipse cx="400" cy="328" rx="42" ry="13" fill="${p.light}"/>
        <ellipse cx="400" cy="324" rx="42" ry="12" fill="#EBE2D2"/>
        <circle cx="374" cy="318" r="11" fill="#B98A6A"/><circle cx="398" cy="312" r="12" fill="#C9977A"/>`;

      case 'desk': return `
        ${sh(400,438,224,14)}
        ${r(320,244,180,112,8,'#1E1E1C')}
        ${r(328,252,164,96,5,'#33322F')}
        <path d="M328 300 492 268v80H328Z" fill="#4A4945" opacity=".5"/>
        ${r(404,356,12,16,3,p.dark)}${r(368,370,84,9,4,p.dark)}
        ${r(196,340,408,22,8,p.base)}
        ${r(196,356,408,7,3,p.dark,` opacity=".3"`)}
        ${r(206,360,15,76,4,p.dark)}${r(244,360,15,76,4,p.dark,` opacity=".8"`)}
        ${r(258,362,246,46,5,p.base,` opacity=".75"`)}
        ${r(496,360,92,76,7,p.base)}
        <g stroke="${p.dark}" stroke-width="2.5" opacity=".55">
          <path d="M504 386h76M504 412h76"/>
        </g>
        <circle cx="542" cy="374" r="4" fill="${p.dark}"/><circle cx="542" cy="399" r="4" fill="${p.dark}"/>
        ${r(300,326,150,12,4,p.dark,` opacity=".7"`)}
        ${r(316,312,70,8,4,p.light,` opacity=".8"`)}
        ${r(470,300,10,26,4,p.dark)}<ellipse cx="475" cy="296" rx="17" ry="9" fill="${p.light}"/>`;

      case 'console': return `
        ${sh(400,436,162,12)}
        ${r(300,386,10,50,4,p.dark,` opacity=".7"`)}
        ${r(490,386,10,50,4,p.dark,` opacity=".7"`)}
        ${r(252,350,296,18,7,p.base)}
        ${r(252,362,296,6,3,p.dark,` opacity=".3"`)}
        ${r(266,368,10,68,4,p.dark)}${r(524,368,10,68,4,p.dark)}
        ${r(288,408,224,9,4,p.base)}
        <ellipse cx="336" cy="350" rx="20" ry="7" fill="${p.dark}" opacity=".5"/>
        ${r(330,318,12,32,5,'#C9B79B')}<path d="M328 318h16l-4-14h-8Z" fill="#8B967C"/>
        ${r(404,338,58,12,3,'#EBE2D2')}${r(412,330,42,9,3,'#C9B79B')}`;

      case 'nightstand': return `
        ${sh(400,432,116,11)}
        ${r(322,414,11,24,4,p.dark,` transform="rotate(-10 327 426)"`)}
        ${r(467,414,11,24,4,p.dark,` transform="rotate(10 472 426)"`)}
        ${r(312,344,176,80,10,p.base)}
        ${r(306,334,188,14,7,p.light)}
        ${r(322,354,156,36,7,p.dark,` opacity=".22"`)}
        <circle cx="400" cy="372" r="6" fill="${p.dark}"/>
        ${r(322,396,156,22,6,p.dark,` opacity=".16"`)}
        ${r(344,306,7,30,3,p.dark)}
        <path d="M330 306h36l-8-26h-20Z" fill="#EBE2D2"/>
        <path d="M330 306h36l-3-9h-30Z" fill="${p.dark}" opacity=".25"/>`;

      case 'bed': return `
        ${sh(400,440,244,16)}
        ${r(210,414,15,24,5,p.dark)}${r(575,414,15,24,5,p.dark)}
        ${r(214,228,372,130,20,p.dark)}
        ${r(232,242,158,102,14,p.base,` opacity=".55"`)}
        ${r(410,242,158,102,14,p.base,` opacity=".55"`)}
        ${r(198,364,404,58,12,p.base)}
        ${r(204,332,392,54,14,'#F1ECE2')}
        ${r(236,294,140,48,18,'#FBF8F1')}${r(392,294,140,48,18,'#FBF8F1')}
        ${r(204,366,392,44,10,p.base)}
        ${r(204,366,392,10,5,p.light,` opacity=".7"`)}
        ${r(524,344,66,66,8,p.dark,` opacity=".85"`)}
        ${r(524,344,66,12,5,p.light,` opacity=".5"`)}`;

      case 'wardrobe': return `
        ${sh(400,436,172,12)}
        ${r(264,420,13,18,4,p.dark)}${r(523,420,13,18,4,p.dark)}
        ${r(244,164,312,18,7,p.dark)}
        ${r(252,182,296,242,9,p.base)}
        <rect x="266" y="196" width="126" height="106" rx="7" fill="none" stroke="${p.dark}" stroke-width="2.5" opacity=".35"/>
        <rect x="266" y="316" width="126" height="94" rx="7" fill="none" stroke="${p.dark}" stroke-width="2.5" opacity=".35"/>
        <rect x="408" y="196" width="126" height="106" rx="7" fill="none" stroke="${p.dark}" stroke-width="2.5" opacity=".35"/>
        <rect x="408" y="316" width="126" height="94" rx="7" fill="none" stroke="${p.dark}" stroke-width="2.5" opacity=".35"/>
        <path d="M400 182v242" stroke="${p.dark}" stroke-width="3" opacity=".5"/>
        ${r(386,272,5,60,3,p.dark)}${r(409,272,5,60,3,p.dark)}`;

      case 'tv': return `
        ${sh(400,436,196,13)}
        ${r(226,368,348,56,9,p.base)}
        <path d="M344 368v56M458 368v56" stroke="${p.dark}" stroke-width="3" opacity=".45"/>
        <circle cx="392" cy="396" r="4.5" fill="${p.dark}"/><circle cx="410" cy="396" r="4.5" fill="${p.dark}"/>
        ${r(240,424,14,20,4,p.dark,` transform="rotate(-10 247 434)"`)}
        ${r(546,424,14,20,4,p.dark,` transform="rotate(10 553 434)"`)}
        ${r(274,208,254,152,9,'#171715')}
        <rect x="282" y="216" width="238" height="136" rx="5" fill="url(#scr${uid})"/>
        ${r(392,356,18,14,3,p.dark)}`;

      case 'sideboard': return `
        ${sh(400,436,196,13)}
        ${r(244,404,12,32,4,p.dark,` transform="rotate(-12 250 420)"`)}
        ${r(544,404,12,32,4,p.dark,` transform="rotate(12 550 420)"`)}
        ${r(224,300,352,18,8,p.light)}
        ${r(232,318,336,94,9,p.base)}
        <path d="M344 318v94M456 318v94" stroke="${p.dark}" stroke-width="3" opacity=".45"/>
        ${r(268,332,44,5,3,p.dark)}${r(380,332,44,5,3,p.dark)}${r(492,332,44,5,3,p.dark)}
        <ellipse cx="340" cy="300" rx="26" ry="9" fill="${p.dark}" opacity=".4"/>
        <path d="M316 300c0-22 10-34 24-34s24 12 24 34Z" fill="${p.light}"/>
        ${r(470,278,70,22,4,'#EBE2D2')}${r(478,264,54,16,4,'#C9B79B')}
        <path d="M540 264c8 0 12 8 12 18s-6 18-12 18" fill="none" stroke="${p.dark}" stroke-width="4"/>`;

      case 'bookcase': {
        let books = '';
        const rows = [176, 230, 284, 338];
        rows.forEach((y, ri) => {
          let x = 288;
          let i = ri;
          while (x < 502) {
            const w = 13 + ((i * 7) % 12);
            const h = 34 + ((i * 11) % 14);
            const lean = (i % 9 === 7) ? ` transform="rotate(-8 ${x + w / 2} ${y})"` : '';
            books += `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="2" fill="${BOOK[i % BOOK.length]}" opacity="${.55 + (i % 4) * .12}"${lean}/>`;
            x += w + 4; i++;
          }
        });
        return `
        ${sh(400,436,150,12)}
        ${r(286,420,13,18,4,p.dark)}${r(501,420,13,18,4,p.dark)}
        ${r(274,166,252,258,9,p.base)}
        ${r(284,176,232,240,5,'#E7E0D2')}
        ${books}
        ${r(282,222,236,9,3,p.dark)}${r(282,276,236,9,3,p.dark)}${r(282,330,236,9,3,p.dark)}${r(282,384,236,9,3,p.dark)}`;
      }

      default: return '';
    }
  }

  /* ---------------- decor ---------------- */
  function art(x, y, tone){
    return `
      <g opacity=".9">
        <rect x="${x}" y="${y}" width="120" height="88" rx="4" fill="#FBF8F1" stroke="#B9A488" stroke-width="3"/>
        <circle cx="${x + 46}" cy="${y + 44}" r="22" fill="${tone}" opacity=".75"/>
        <path d="M${x + 66} ${y + 68} L${x + 98} ${y + 24} L${x + 106} ${y + 68}Z" fill="#7E6047" opacity=".55"/>
      </g>`;
  }
  function plant(x, y){
    return `
      <g>
        <path d="M${x - 30} ${y} L${x + 30} ${y} L${x + 21} ${y - 52} L${x - 21} ${y - 52}Z" fill="#B98A6A"/>
        <rect x="${x - 33}" y="${y - 62}" width="66" height="14" rx="6" fill="#C9977A"/>
        <g stroke="#57614C" stroke-width="5" fill="none" stroke-linecap="round">
          <path d="M${x} ${y - 62} C ${x - 8} ${y - 130}, ${x - 44} ${y - 150}, ${x - 52} ${y - 196}"/>
          <path d="M${x} ${y - 62} C ${x + 10} ${y - 140}, ${x + 40} ${y - 160}, ${x + 54} ${y - 214}"/>
          <path d="M${x} ${y - 62} C ${x - 2} ${y - 150}, ${x + 6} ${y - 190}, ${x + 4} ${y - 236}"/>
        </g>
        <g fill="#6F7B62">
          <ellipse cx="${x - 54}" cy="${y - 204}" rx="26" ry="14" transform="rotate(-34 ${x - 54} ${y - 204})"/>
          <ellipse cx="${x + 56}" cy="${y - 222}" rx="27" ry="14" transform="rotate(30 ${x + 56} ${y - 222})"/>
          <ellipse cx="${x + 4}" cy="${y - 244}" rx="24" ry="13"/>
          <ellipse cx="${x - 34}" cy="${y - 154}" rx="22" ry="12" transform="rotate(-20 ${x - 34} ${y - 154})"/>
          <ellipse cx="${x + 38}" cy="${y - 160}" rx="22" ry="12" transform="rotate(24 ${x + 38} ${y - 160})"/>
        </g>
        <g fill="#8B967C" opacity=".85">
          <ellipse cx="${x - 20}" cy="${y - 216}" rx="18" ry="10" transform="rotate(-50 ${x - 20} ${y - 216})"/>
          <ellipse cx="${x + 24}" cy="${y - 200}" rx="18" ry="10" transform="rotate(46 ${x + 24} ${y - 200})"/>
        </g>
      </g>`;
  }
  function rug(cx, cy, rx){
    return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.22}" fill="#C9B79B" opacity=".5"/>
            <ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.82}" ry="${rx * 0.18}" fill="none" stroke="#B9A488" stroke-width="3" opacity=".5"/>`;
  }

  /* ---------------- scene composer ---------------- */
  function scene(o = {}){
    const u = ++uid;
    const p = PAL[o.color] || PAL.beige;
    const v = o.variant || 0;
    const wall = o.wall || WALLS[v % WALLS.length];
    const type = o.type || 'sofa';

    let cam = '';
    if (v === 1) cam = ` transform="translate(400 350) scale(1.34) translate(-400 -350)"`;
    if (v === 2) cam = ` transform="translate(360 380) scale(2.05) translate(-360 -380)"`;

    const decor = v === 1
      ? art(560, 96, '#C9B79B') + (type === 'tv' || type === 'wardrobe' ? '' : plant(150, 430))
      : v === 2
        ? ''
        : art(110, 92, '#C9B79B') + plant(668, 430);

    return `<svg class="${o.cls || ''}" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${o.alt || 'Furniture visual'}">
      <defs>
        <linearGradient id="w${u}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${wall}"/><stop offset="1" stop-color="${shadeHex(wall, -10)}"/>
        </linearGradient>
        <linearGradient id="fl${u}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${FLOOR}"/><stop offset="1" stop-color="${FLOOR_2}"/>
        </linearGradient>
        <radialGradient id="lt${u}" cx="0.26" cy="0.12" r="0.75">
          <stop offset="0" stop-color="#FFFDF5" stop-opacity=".65"/>
          <stop offset="1" stop-color="#FFFDF5" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="vg${u}" cx="0.5" cy="0.46" r="0.78">
          <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity=".16"/>
        </radialGradient>
        <linearGradient id="scr${u}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3A4452"/><stop offset="0.5" stop-color="#20242B"/><stop offset="1" stop-color="#14161A"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#w${u})"/>
      <rect y="430" width="800" height="170" fill="url(#fl${u})"/>
      <rect y="430" width="800" height="9" fill="#C4B49B"/>
      <g opacity=".5" stroke="#00000012" stroke-width="2">
        <path d="M0 486h800M0 542h800"/>
        <path d="M140 430v170" opacity=".45"/><path d="M420 430v170" opacity=".45"/><path d="M660 430v170" opacity=".45"/>
      </g>
      <g${cam}>
        ${decor}
        ${rug(400, 470, 300)}
        ${f(type, p)}
      </g>
      <rect width="800" height="600" fill="url(#lt${u})"/>
      <rect width="800" height="600" fill="url(#vg${u})"/>
    </svg>`;
  }

  /* hero — custom wide living room (1000×760) */
  function heroScene(){
    const u = ++uid;
    const sofa = PAL.beige, tbl = PAL.brown;
    return `<svg viewBox="0 0 1000 760" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EMKAN living room with Haven sofa">
      <defs>
        <linearGradient id="hw${u}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#EDE7DC"/><stop offset="1" stop-color="#DED4C4"/>
        </linearGradient>
        <linearGradient id="hf${u}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#D6C9B4"/><stop offset="1" stop-color="#C2B29A"/>
        </linearGradient>
        <radialGradient id="hl${u}" cx="0.3" cy="0.1" r="0.8">
          <stop offset="0" stop-color="#FFFCEF" stop-opacity=".75"/>
          <stop offset="1" stop-color="#FFFCEF" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="hv${u}" cx="0.5" cy="0.45" r="0.8">
          <stop offset="0.5" stop-color="#000" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity=".22"/>
        </radialGradient>
        <linearGradient id="hs${u}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3B4552"/><stop offset="1" stop-color="#171A1F"/>
        </linearGradient>
      </defs>
      <rect width="1000" height="760" fill="url(#hw${u})"/>
      <rect y="540" width="1000" height="220" fill="url(#hf${u})"/>
      <rect y="540" width="1000" height="11" fill="#BCAB90"/>
      <g opacity=".5" stroke="#00000012" stroke-width="2">
        <path d="M0 610h1000M0 688h1000"/><path d="M180 540v220" opacity=".4"/><path d="M540 540v220" opacity=".4"/><path d="M820 540v220" opacity=".4"/>
      </g>
      <g opacity=".92">
        <rect x="118" y="96" width="168" height="122" rx="5" fill="#FBF8F1" stroke="#B9A488" stroke-width="4"/>
        <circle cx="176" cy="158" r="30" fill="#C9B79B" opacity=".8"/>
        <path d="M204 200 L252 128 L270 200Z" fill="#7E6047" opacity=".6"/>
        <rect x="332" y="120" width="128" height="94" rx="4" fill="#FBF8F1" stroke="#B9A488" stroke-width="4"/>
        <path d="M352 196c22-42 44-42 66 0" fill="none" stroke="#6F7B62" stroke-width="7" stroke-linecap="round"/>
        <circle cx="428" cy="154" r="17" fill="#A98B5D" opacity=".7"/>
      </g>
      <ellipse cx="500" cy="620" rx="390" ry="76" fill="#C9B79B" opacity=".55"/>
      <ellipse cx="500" cy="620" rx="320" ry="62" fill="none" stroke="#B9A488" stroke-width="4" opacity=".5"/>
      <g transform="translate(70 96)">
        <ellipse cx="430" cy="454" rx="212" ry="17" fill="#1F1E1B" opacity=".12"/>
        <rect x="284" y="418" width="14" height="36" rx="5" fill="${sofa.dark}"/>
        <rect x="563" y="418" width="14" height="36" rx="5" fill="${sofa.dark}"/>
        <rect x="268" y="272" width="344" height="110" rx="24" fill="${sofa.dark}"/>
        <rect x="256" y="322" width="52" height="112" rx="24" fill="${sofa.dark}"/>
        <rect x="572" y="322" width="52" height="112" rx="24" fill="${sofa.dark}"/>
        <rect x="268" y="362" width="344" height="72" rx="17" fill="${sofa.base}"/>
        <rect x="308" y="366" width="128" height="58" rx="15" fill="${sofa.light}"/>
        <rect x="444" y="366" width="128" height="58" rx="15" fill="${sofa.light}"/>
        <rect x="286" y="302" width="70" height="70" rx="17" fill="${sofa.light}" transform="rotate(-9 321 337)"/>
        <rect x="518" y="302" width="70" height="70" rx="17" fill="#6F7B62" transform="rotate(8 553 337)"/>
        <rect x="368" y="330" width="104" height="46" rx="14" fill="#EDE5D6" transform="rotate(4 420 353)"/>
      </g>
      <g transform="translate(0 0)">
        <ellipse cx="520" cy="700" rx="180" ry="16" fill="#1F1E1B" opacity=".1"/>
        <rect x="368" y="568" width="10" height="52" rx="4" fill="${tbl.dark}" opacity=".7"/>
        <rect x="662" y="568" width="10" height="52" rx="4" fill="${tbl.dark}" opacity=".7"/>
        <rect x="350" y="542" width="340" height="26" rx="10" fill="${tbl.base}"/>
        <rect x="350" y="560" width="340" height="8" rx="4" fill="${tbl.dark}" opacity=".3"/>
        <rect x="374" y="572" width="14" height="50" rx="5" fill="${tbl.dark}"/>
        <rect x="652" y="572" width="14" height="50" rx="5" fill="${tbl.dark}"/>
        <rect x="420" y="526" width="84" height="15" rx="3" fill="#E9E2D4"/>
        <rect x="428" y="517" width="68" height="11" rx="3" fill="#C9B79B"/>
        <path d="M556 542c0-26 12-40 28-40s28 14 28 40Z" fill="#EDE5D6"/>
        <g stroke="#57614C" stroke-width="6" fill="none" stroke-linecap="round">
          <path d="M584 504c-6-52-30-70-40-112"/><path d="M584 504c6-60 26-76 44-118"/><path d="M584 504c0-60 4-84 2-120"/>
        </g>
        <g fill="#6F7B62">
          <ellipse cx="540" cy="384" rx="26" ry="14" transform="rotate(-34 540 384)"/>
          <ellipse cx="632" cy="380" rx="27" ry="14" transform="rotate(30 632 380)"/>
          <ellipse cx="586" cy="378" rx="24" ry="13"/>
          <ellipse cx="556" cy="440" rx="22" ry="12" transform="rotate(-24 556 440)"/>
          <ellipse cx="618" cy="444" rx="22" ry="12" transform="rotate(26 618 444)"/>
        </g>
        <rect x="836" y="300" width="9" height="250" rx="4" fill="#33322F"/>
        <path d="M806 300h70l-14-56h-42Z" fill="#EBE2D2"/>
        <path d="M806 300h70l-5-16h-60Z" fill="#33322F" opacity=".25"/>
        <ellipse cx="841" cy="556" rx="46" ry="10" fill="#33322F" opacity=".5"/>
      </g>
      <rect width="1000" height="760" fill="url(#hl${u})"/>
      <rect width="1000" height="760" fill="url(#hv${u})"/>
    </svg>`;
  }

  /* ---------------- product story frames ---------------- */
  function storyFrame(kind){
    const u = ++uid;
    if (kind === 'material') return `
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="Fabric close-up">
        <defs>
          <linearGradient id="m${u}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#E4DAC8"/><stop offset="1" stop-color="#CFC0A6"/>
          </linearGradient>
          <pattern id="weave${u}" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="none"/>
            <path d="M0 3.5h14M0 10.5h14" stroke="#8B7A5E" stroke-width="1.4" opacity=".32"/>
            <path d="M3.5 0v14M10.5 0v14" stroke="#8B7A5E" stroke-width="1.4" opacity=".22"/>
          </pattern>
          <radialGradient id="ml${u}" cx=".3" cy=".15" r=".9">
            <stop offset="0" stop-color="#FFFDF5" stop-opacity=".7"/><stop offset="1" stop-color="#FFFDF5" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="#DED4C4"/>
        <g transform="rotate(-5 400 300)">
          <rect x="-40" y="60" width="900" height="520" rx="46" fill="url(#m${u})"/>
          <rect x="-40" y="60" width="900" height="520" rx="46" fill="url(#weave${u})"/>
          <path d="M60 470c180 40 460 44 700 4" stroke="#F4EEE2" stroke-width="5" stroke-dasharray="18 14" fill="none" opacity=".9"/>
          <path d="M60 496c180 40 460 44 700 4" stroke="#8B7A5E" stroke-width="2.5" stroke-dasharray="6 12" fill="none" opacity=".6"/>
          <rect x="70" y="110" width="190" height="66" rx="14" fill="#1F1E1B" opacity=".78"/>
          <text x="95" y="152" font-family="Inter, sans-serif" font-size="26" font-weight="600" fill="#F5F1E9" letter-spacing="4">LINEN BLEND</text>
        </g>
        <rect width="800" height="600" fill="url(#ml${u})"/>
      </svg>`;

    if (kind === 'craft') return `
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="Construction detail">
        <defs>
          <linearGradient id="c${u}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#9C7E60"/><stop offset="1" stop-color="#6B5138"/>
          </linearGradient>
          <radialGradient id="cl${u}" cx=".28" cy=".12" r=".9">
            <stop offset="0" stop-color="#FFFDF5" stop-opacity=".65"/><stop offset="1" stop-color="#FFFDF5" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="#E7E0D2"/>
        <rect x="0" y="420" width="800" height="180" fill="#D4C7B2"/>
        <rect x="0" y="420" width="800" height="10" fill="#C2B29A"/>
        <g>
          <rect x="90" y="250" width="620" height="72" rx="16" fill="url(#c${u})"/>
          <g stroke="#5E4736" stroke-width="3" opacity=".5" fill="none">
            <path d="M120 268c60 18 140-16 200 6s150-12 220 10 130-6 170 4"/>
            <path d="M120 306c70 14 130-12 210 6s140-10 210 8 130-4 170 2"/>
          </g>
          <rect x="150" y="322" width="70" height="180" rx="14" fill="#7E6047"/>
          <rect x="580" y="322" width="70" height="180" rx="14" fill="#7E6047"/>
          <rect x="150" y="322" width="70" height="14" rx="7" fill="#9C7E60"/>
          <rect x="580" y="322" width="70" height="14" rx="7" fill="#9C7E60"/>
          <circle cx="185" cy="366" r="13" fill="#EDE5D6"/><circle cx="185" cy="366" r="6" fill="#C9B79B"/>
          <circle cx="615" cy="366" r="13" fill="#EDE5D6"/><circle cx="615" cy="366" r="6" fill="#C9B79B"/>
          <path d="M170 452h190" stroke="#F4EEE2" stroke-width="5" stroke-dasharray="16 12"/>
          <rect x="430" y="440" width="200" height="56" rx="12" fill="#1F1E1B" opacity=".8"/>
          <text x="454" y="477" font-family="Inter, sans-serif" font-size="24" font-weight="600" fill="#D8C7AE" letter-spacing="3">REINFORCED</text>
        </g>
        <rect width="800" height="600" fill="url(#cl${u})"/>
      </svg>`;

    if (kind === 'comfort') return `
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="Foam layers">
        <defs>
          <radialGradient id="kf${u}" cx=".3" cy=".1" r=".9">
            <stop offset="0" stop-color="#FFFDF5" stop-opacity=".7"/><stop offset="1" stop-color="#FFFDF5" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="#EDE7DB"/>
        <rect y="430" width="800" height="170" fill="#D9CDBA"/>
        <g transform="translate(0 30)">
          <rect x="120" y="380" width="560" height="70" rx="24" fill="#B9A488"/>
          <rect x="120" y="322" width="560" height="72" rx="26" fill="#DED4C4"/>
          <rect x="120" y="256" width="560" height="76" rx="30" fill="#F1ECE2"/>
          <path d="M120 268c120-26 320-26 440 0M120 300c140 22 320 22 440 0" stroke="#DCD3C3" stroke-width="4" fill="none"/>
          <g font-family="Inter, sans-serif" font-size="21" font-weight="600" fill="#4A3B2E">
            <rect x="596" y="240" width="150" height="40" rx="20" fill="#1F1E1B"/>
            <text x="618" y="267" fill="#F5F1E9">FIBER TOP</text>
            <rect x="596" y="330" width="150" height="40" rx="20" fill="#1F1E1B"/>
            <text x="612" y="357" fill="#F5F1E9">SOFT FOAM</text>
            <rect x="596" y="406" width="150" height="40" rx="20" fill="#1F1E1B"/>
            <text x="600" y="433" fill="#F5F1E9">CORE FOAM</text>
          </g>
          <g stroke="#A98B5D" stroke-width="3">
            <path d="M596 260H480"/><path d="M596 350H470"/><path d="M596 426H466"/>
          </g>
        </g>
        <rect width="800" height="600" fill="url(#kf${u})"/>
      </svg>`;

    /* dimensions */
    const p = PAL.beige;
    return `
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="Dimensions drawing">
        <rect width="800" height="600" fill="#F1ECE2"/>
        <g opacity=".5" stroke="#C9B79B" stroke-width="1">
          <path d="M0 60h800M0 140h800M0 220h800M0 300h800M0 380h800M0 460h800M0 540h800"/>
          <path d="M60 0v600M140 0v600M220 0v600M300 0v600M380 0v600M460 0v600M540 0v600M620 0v600M700 0v600M780 0v600"/>
        </g>
        <rect y="470" width="800" height="130" fill="#E4DCCB"/>
        <g transform="translate(0 -8) scale(1.06) translate(-24 -14)">
          ${f('sofa', p)}
        </g>
        <g stroke="#1F1E1B" stroke-width="2.5" font-family="Inter, sans-serif">
          <path d="M240 502h320"/>
          <path d="M240 492v20M560 492v20"/>
          <path d="m240 502 14-7M240 502l14 7M560 502l-14-7M560 502l-14 7" fill="#1F1E1B"/>
          <rect x="352" y="486" width="96" height="32" rx="16" fill="#1F1E1B"/>
          <text x="374" y="508" font-size="21" font-weight="600" fill="#F5F1E9" stroke="none">220 cm</text>

          <path d="M614 270v164"/>
          <path d="M604 270h20M604 434h20"/>
          <path d="m614 270-7 14M614 270l7 14M614 434l-7-14M614 434l7-14" fill="#1F1E1B"/>
          <rect x="590" y="332" width="76" height="32" rx="16" fill="#1F1E1B"/>
          <text x="608" y="354" font-size="21" font-weight="600" fill="#F5F1E9" stroke="none">85 cm</text>

          <path d="M148 434 232 356"/>
          <path d="m148 434 3-16M148 434l16-2M232 356l-16 4M232 356l-4 15" fill="#1F1E1B"/>
          <rect x="86" y="374" width="94" height="32" rx="16" fill="#1F1E1B"/>
          <text x="104" y="396" font-size="21" font-weight="600" fill="#F5F1E9" stroke="none">95 cm</text>
        </g>
      </svg>`;
  }

  /* ---------------- helpers ---------------- */
  function shadeHex(hex, amt){
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  }

  /* product → scene shorthand */
  function productScene(product, variant = 0, cls = ''){
    return scene({ type: product.scene, color: product.color, variant, cls, alt: product.name });
  }

  return { scene, heroScene, storyFrame, productScene };
})();
