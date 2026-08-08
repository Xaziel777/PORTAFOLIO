document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---------- MENÚ MÓVIL ---------- */
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  const openClasses = ['max-h-96', 'opacity-100', 'border-zinc-800'];
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
      link.classList.add('text-white', 'font-semibold');
      link.classList.remove('text-zinc-300');
    }
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  if (prefersReducedMotion) {
    revealEls.forEach((el) => {
      el.classList.remove('opacity-0', 'translate-y-8');
      el.classList.add('opacity-100', 'translate-y-0');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
});
