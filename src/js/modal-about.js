(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-about-modal-open'),
    closeModalBtn: document.querySelector('.js-about-modal-close'),
    modal: document.querySelector('.js-about-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();