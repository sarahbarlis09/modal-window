'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hiddenModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', hiddenModal);
overlay.addEventListener('click', hiddenModal);

document.addEventListener('keydown', function (esc) {
  if (esc.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      hiddenModal();
    }
  }
});
