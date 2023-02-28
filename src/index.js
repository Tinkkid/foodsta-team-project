import './js/modal.js';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');
  };

  closeMenuBtn.addEventListener('click', toggleMenu);
  openMenuBtn.addEventListener('click', toggleMenu);
})();