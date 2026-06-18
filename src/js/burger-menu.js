const burgerBtn = document.querySelector('.burger-btn');
const navWrapper = document.querySelector('.nav-wrapper');
const menuOverlay = document.querySelector('.menu-overlay');

if (burgerBtn && navWrapper) {
  const openMenu = () => {
    burgerBtn.classList.add('is-open');
    navWrapper.classList.add('is-open');
    menuOverlay?.classList.add('is-open');

    burgerBtn.setAttribute('aria-expanded', 'true');

    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    burgerBtn.classList.remove('is-open');
    navWrapper.classList.remove('is-open');
    menuOverlay?.classList.remove('is-open');

    burgerBtn.setAttribute('aria-expanded', 'false');

    document.body.style.overflow = '';
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.contains('is-open')
      ? closeMenu()
      : openMenu();
  });

  navWrapper
    .querySelectorAll('.nav-link, .header-btn')
    .forEach(link => {
      link.addEventListener('click', closeMenu);
    });

  menuOverlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', e => {
    if (
      e.key === 'Escape' &&
      burgerBtn.classList.contains('is-open')
    ) {
      closeMenu();
      burgerBtn.focus();
    }
  });
}