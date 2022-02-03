
(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-franchise-modal-open'),
    closeModalBtn: document.querySelector('.js-franchise-modal-close'),
    modal: document.querySelector('.js-franchise-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();