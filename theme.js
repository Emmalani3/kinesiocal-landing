/* Dark-mode toggle: OS preference by default, user choice persisted in
   localStorage ("kc-theme"). The pre-paint snippet in each page's <head>
   sets data-theme before first render; this wires up the button. */
(function () {
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('kc-theme', next); } catch (e) { /* private mode */ }
  });
})();

// Copyright year stays current automatically (Emma 2026-09-26).
document.querySelectorAll('.kc-year').forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

// Photo carousel on the About section (scroll-snap track + buttons + dots).
document.querySelectorAll('.mkt-carousel').forEach(function (root) {
  var track = root.querySelector('.mkt-carousel-track');
  var slides = Array.prototype.slice.call(track.querySelectorAll('.mkt-carousel-slide'));
  var dots = root.querySelector('.mkt-carousel-dots');
  if (!track || !slides.length) return;
  function index() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }
  function go(i) {
    var n = (i + slides.length) % slides.length;
    track.scrollTo({ left: n * track.clientWidth, behavior: 'smooth' });
  }
  slides.forEach(function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', 'Photo ' + (i + 1));
    b.addEventListener('click', function () { go(i); });
    dots.appendChild(b);
  });
  function paint() {
    var cur = index();
    Array.prototype.forEach.call(dots.children, function (d, i) {
      d.classList.toggle('active', i === cur);
      d.setAttribute('aria-selected', i === cur ? 'true' : 'false');
    });
  }
  root.querySelector('.prev').addEventListener('click', function () { go(index() - 1); });
  root.querySelector('.next').addEventListener('click', function () { go(index() + 1); });
  track.addEventListener('scroll', function () { window.requestAnimationFrame(paint); });
  paint();
});

// Image lightbox: click any product screenshot or photo to view it full
// screen. Close with the X, by clicking the image or backdrop, or Escape.
(function () {
  var targets = document.querySelectorAll('.mkt-img, .mkt-carousel-slide img, .mkt-headshot');
  if (!targets.length) return;
  var box = document.createElement('div');
  box.className = 'mkt-lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Image viewer');
  box.innerHTML =
    '<button class="mkt-lightbox-close" type="button" aria-label="Close">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '</button><img alt=""><p class="mkt-lightbox-caption"></p>';
  document.body.appendChild(box);
  var img = box.querySelector('img');
  var cap = box.querySelector('.mkt-lightbox-caption');
  var lastFocus = null;
  function open(src, alt, caption) {
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    cap.textContent = caption || '';
    box.classList.add('open');
    document.body.classList.add('mkt-lightbox-open');
    box.querySelector('.mkt-lightbox-close').focus();
  }
  function close() {
    box.classList.remove('open');
    document.body.classList.remove('mkt-lightbox-open');
    img.src = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  Array.prototype.forEach.call(targets, function (el) {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    function trigger() {
      var wrap = el.closest('figure') || el.parentElement;
      var capEl = wrap && (wrap.querySelector('figcaption') || wrap.querySelector('.mkt-img-caption'));
      open(el.currentSrc || el.src, el.alt, capEl ? capEl.textContent : '');
    }
    el.addEventListener('click', trigger);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
    });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();
