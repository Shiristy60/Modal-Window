'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalBtn = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

for (let i = 0; i < modalBtn.length; i++)
  modalBtn[i].addEventListener('click', showModal);

overlay.addEventListener('click', hideModal);
closeModal.addEventListener('click', hideModal);
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && !modal.classList.contains('hidden')) hideModal();
});

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
