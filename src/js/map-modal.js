(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-map-modal-open'),
    closeModalBtn: document.querySelector('.js-map-modal-close'),
    modal: document.querySelector('.js-map-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();