(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-open-menu"),
    openHome: document.querySelector(".js-home"),
    openAbout: document.querySelector(".js-about"),
    openHow: document.querySelector(".js-how"),
    openOur: document.querySelector(".js-our"),
    openContact: document.querySelector(".js-contact"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
    menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.openHome.addEventListener('click', toggleMenu);
  refs.openAbout.addEventListener('click', toggleMenu);
  refs.openHow.addEventListener('click', toggleMenu);
  refs.openOur.addEventListener('click', toggleMenu);
  refs.openContact.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();