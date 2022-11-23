'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const closeModalBtn = document.querySelector('.close-modal');

const openModalBtns = document.querySelectorAll('.show-modal');

//function to open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//open modal for each modal button
for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', openModal);
}

//close modal when x clicked and when overlay clicked
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//if the modal is open & then the esc key is pressed, close the modal
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
