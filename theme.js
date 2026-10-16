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
