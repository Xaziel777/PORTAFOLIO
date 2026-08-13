document.addEventListener('DOMContentLoaded', () => {
  /* ---------- MENÚ MÓVIL ---------- */
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  const openClasses = ['max-h-96', 'opacity-100', 'border-line'];
  const closedClasses = ['max-h-0', 'opacity-0', 'border-transparent'];

  const closeMenu = () => {
    menu.classList.remove(...openClasses);
    menu.classList.add(...closedClasses);
    btn.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    menu.classList.remove(...closedClasses);
    menu.classList.add(...openClasses);
    btn.setAttribute('aria-expanded', 'true');
  };

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- LINK ACTIVO EN EL NAV ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('text-ink', 'font-semibold');
      link.classList.remove('text-ink-soft');
    }
  });
});
