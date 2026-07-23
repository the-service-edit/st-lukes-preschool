/* St Luke's Preschool, playful "sticker" system
   Injects a reusable SVG sprite (paper plane, crown, star, pencil, palette, sun),
   gives each a white die-cut border + soft shadow via one SVG filter,
   and tastefully scatters them across pages. aria-hidden, reduced-motion aware. */
(function () {
  'use strict';

  // ---- 1. Styles ----
  var css = '\
.sticker{display:inline-block;line-height:0}\
.sticker svg{display:block;width:100%;height:100%;overflow:visible}\
.sticker--abs{position:absolute;z-index:3;pointer-events:none}\
.s-sm{width:60px;height:60px}.s-md{width:88px;height:88px}.s-lg{width:128px;height:128px}.s-xl{width:172px;height:172px}\
.sticker--spin{animation:stkFloat 6s ease-in-out infinite}\
.sticker--spin.b{animation-duration:7.4s;animation-delay:-2s}\
.sticker--spin.c{animation-duration:8.6s;animation-delay:-4s}\
@keyframes stkFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-11px) rotate(4deg)}}\
@media (prefers-reduced-motion:reduce){.sticker--spin{animation:none}}\
@media (max-width:760px){.sticker--abs.hide-sm{display:none!important}.s-xl{width:116px;height:116px}.s-lg{width:96px;height:96px}.s-md{width:70px;height:70px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---- 2. Sprite (filter + symbols) ----
  var ink = '#26342C';
  var sprite = '\
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">\
<defs>\
<filter id="stk" x="-35%" y="-35%" width="170%" height="180%">\
  <feMorphology in="SourceAlpha" operator="dilate" radius="5" result="d"/>\
  <feFlood flood-color="#ffffff" result="w"/>\
  <feComposite in="w" in2="d" operator="in" result="b"/>\
  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>\
  <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="rgba(38,52,44,0.30)"/>\
</filter>\
</defs>\
<symbol id="st-plane" viewBox="0 0 120 120"><g filter="url(#stk)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <path d="M10 62 L110 16 L48 66 Z" fill="#d6f04e"/>\
  <path d="M48 66 L110 16 L72 100 Z" fill="#bcd92f"/>\
  <path d="M48 66 L88 40" fill="none" stroke-linecap="round"/></g></symbol>\
<symbol id="st-crown" viewBox="0 0 120 120"><g filter="url(#stk)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <path d="M16 88 L26 42 L48 66 L60 30 L72 66 L94 42 L104 88 Z" fill="#ffc803"/>\
  <path d="M22 88 H98" fill="none" stroke-linecap="round"/>\
  <circle cx="26" cy="40" r="6" fill="#ffc803"/><circle cx="60" cy="28" r="6" fill="#ffc803"/><circle cx="94" cy="40" r="6" fill="#ffc803"/></g></symbol>\
<symbol id="st-star" viewBox="0 0 120 120"><g filter="url(#stk)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <path d="M60 10 L74 44 L112 46 L82 70 L92 108 L60 86 L28 108 L38 70 L8 46 L46 44 Z" fill="#ed3252"/></g></symbol>\
<symbol id="st-pencil" viewBox="0 0 120 120"><g filter="url(#stk)" transform="rotate(-20 60 60)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <path d="M14 60 L30 50 L30 70 Z" fill="#3A4A40"/>\
  <path d="M30 50 H40 V70 H30 Z" fill="#E7C98C"/>\
  <path d="M40 50 H92 V70 H40 Z" fill="#71a5b9"/>\
  <path d="M92 50 H100 V70 H92 Z" fill="#9AA0A6"/>\
  <path d="M100 50 H108 a3 3 0 0 1 3 3 V67 a3 3 0 0 1 -3 3 H100 Z" fill="#E79AA0"/>\
  <path d="M48 57 H86 M48 63 H86" fill="none" stroke-width="2" opacity="0.45"/></g></symbol>\
<symbol id="st-palette" viewBox="0 0 120 120"><g filter="url(#stk)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <path d="M44 26 C18 30 12 64 32 80 C49 93 86 90 98 69 C106 54 99 33 76 27 C65 24 54 24 44 26 Z" fill="#ed3252"/>\
  <circle cx="47" cy="74" r="8" fill="#EEE7D9"/>\
  <circle cx="42" cy="47" r="4.6" fill="#ffc803" stroke="none"/><circle cx="58" cy="40" r="4.6" fill="#d6f04e" stroke="none"/>\
  <circle cx="76" cy="44" r="4.6" fill="#71a5b9" stroke="none"/><circle cx="84" cy="62" r="4.6" fill="#3A4A40" stroke="none"/></g></symbol>\
<symbol id="st-sun" viewBox="0 0 120 120"><g filter="url(#stk)" stroke="'+ink+'" stroke-width="3.2" stroke-linejoin="round">\
  <g fill="#ffc803">\
    <path d="M60 4 L67 26 L53 26 Z"/><path d="M60 4 L67 26 L53 26 Z" transform="rotate(45 60 60)"/>\
    <path d="M60 4 L67 26 L53 26 Z" transform="rotate(90 60 60)"/><path d="M60 4 L67 26 L53 26 Z" transform="rotate(135 60 60)"/>\
    <path d="M60 4 L67 26 L53 26 Z" transform="rotate(180 60 60)"/><path d="M60 4 L67 26 L53 26 Z" transform="rotate(225 60 60)"/>\
    <path d="M60 4 L67 26 L53 26 Z" transform="rotate(270 60 60)"/><path d="M60 4 L67 26 L53 26 Z" transform="rotate(315 60 60)"/>\
  </g>\
  <circle cx="60" cy="60" r="25" fill="#ffd84d"/>\
  <circle cx="52" cy="58" r="2.8" fill="'+ink+'" stroke="none"/><circle cx="68" cy="58" r="2.8" fill="'+ink+'" stroke="none"/>\
  <path d="M51 67 Q60 76 69 67" fill="none" stroke-linecap="round"/></g></symbol>\
</svg>';
  var holder = document.createElement('div');
  holder.innerHTML = sprite; holder.style.position = 'absolute'; holder.style.width = '0'; holder.style.height = '0'; holder.style.overflow = 'hidden';
  document.body.appendChild(holder);

  // expose a helper
  function make(type, classes, style) {
    var s = document.createElement('span');
    s.className = 'sticker ' + (classes || '');
    s.setAttribute('aria-hidden', 'true');
    if (style) s.setAttribute('style', style);
    s.innerHTML = '<svg viewBox="0 0 120 120"><use href="#st-' + type + '"/></svg>';
    return s;
  }
  window.StLukeStickers = { make: make };

  // ---- 3. Auto-scatter (inner pages only; any homepage places its own) ----
  // Restrained per premium brief: one small accent in the hero, one near the first heading.
  if (/home/.test(document.body.className)) return;

  var hero = document.querySelector('.page-hero, .hero');
  if (hero) {
    hero.style.position = 'relative';
    hero.appendChild(make('star', 'sticker--abs s-sm sticker--spin hide-sm', 'top:96px;right:6%;z-index:4;opacity:.92'));
  }

  var rotation = ['sun', 'palette', 'crown', 'plane', 'pencil', 'star'];
  var head = document.querySelector('.section-head');
  if (head) {
    var sec = head.closest('section') || head.parentElement;
    if (sec) {
      var idx = Math.floor(Math.random() * rotation.length);
      if (window.getComputedStyle(sec).position === 'static') sec.style.position = 'relative';
      sec.appendChild(make(rotation[idx], 'sticker--abs s-sm sticker--spin b hide-sm', 'top:22px;right:24px;opacity:.92'));
    }
  }
})();
