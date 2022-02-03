(() => {
  const refs = {
    openModalBtn: document.querySelector(".modal-button"),
    openHeaderBtn: document.querySelector(".header-button"),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeBtn: document.querySelector(".close-button"),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openHeaderBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();