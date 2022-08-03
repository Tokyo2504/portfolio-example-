import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const closeMenu = document?.querySelector('[data-close-menu]');

  burger?.addEventListener('click', (e) => {
    menu?.classList.add('menu--active');
    overlay?.classList.add('overlay--active');
    enableScroll();
  });

  closeMenu?.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    overlay?.classList.remove('overlay--active');
    enableScroll();
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    menu.classList.remove('menu--active');
    overlay?.classList.remove('overlay--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      menu.classList.remove('menu--active');
      overlay?.classList.remove('overlay--active');
      enableScroll();
    });
  });
})();
