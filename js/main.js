(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  const close = () => { nav.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'メニューを開く'); };
  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', opening);
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'メニューを閉じる' : 'メニューを開く');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !button.contains(event.target)) close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1050) close(); });
})();
