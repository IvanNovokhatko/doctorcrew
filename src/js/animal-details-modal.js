import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import Accordion from 'accordion-js';
import { closeOrderModal } from './order-modal.js';

const animalModal = document.querySelector('#animal-modal');
const animalContent = document.querySelector('.animal-content');

let selectedAnimalId = null;

// open modal when an animal is clicked

export function openAnimalModal(animal) {
  selectedAnimalId = animal._id;

  animalContent.innerHTML = createAnimalMarkup(animal);

  animalModal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  initAccordion();
  initSwiper();

  const closeBtn = animalContent.querySelector('.modal-close-btn');

  closeBtn.addEventListener('click', closeAnimalModal);
}

// close modal when the close button is clicked

export function closeAnimalModal() {
  animalModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

// create the markup for the animal details modal

function createAnimalMarkup(animal) {
  return `
    <button class="modal-close-btn" type="button">
      ✕
    </button>

    <div class="swiper animal-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="${animal.image}" alt="${animal.name}">
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>

    <h2>${animal.name}</h2>

    <p>${animal.species}</p>
    <p>Age: ${animal.age}</p>
    <p>Sex: ${animal.sex}</p>
    <p>${animal.comment}</p>

    <div class="accordion">
      <div class="ac">
        <h3 class="ac-header">
          <button class="ac-trigger">
            Health
          </button>
        </h3>

        <div class="ac-panel">
          <p>${animal.health}</p>
        </div>
      </div>

      <div class="ac">
        <h3 class="ac-header">
          <button class="ac-trigger">
            Behavior
          </button>
        </h3>

        <div class="ac-panel">
          <p>${animal.behavior}</p>
        </div>
      </div>
    </div>

    <button
      class="take-home-btn"
      data-id="${animal._id}"
      type="button"
    >
      Take me home
    </button>
  `;
}

//  Swiper

function initSwiper() {
  new Swiper('.animal-swiper', {
    modules: [Navigation, Pagination],

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// Accordion

function initAccordion() {
  new Accordion('.accordion');
}

// close  backdrop

if (animalModal) {
  animalModal.addEventListener('click', e => {
    if (e.target === animalModal) {
      closeAnimalModal();
    }
  });
}

// close Escape

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAnimalModal();
    closeOrderModal();
  }
});

import { openOrderModal } from './order-modal.js';

animalContent.addEventListener('click', e => {
  if (!e.target.classList.contains('take-home-btn')) {
    return;
  }

  closeAnimalModal();
  openOrderModal(selectedAnimalId);
});
