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
