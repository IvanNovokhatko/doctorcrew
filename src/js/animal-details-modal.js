// Remove axios and izitoast imports
// Replace requests with import backend functions
// Import render functions
// ADD A LOADER (after team create it)

// #region Imports

// Sprite
import sprite from '../img/icons.svg';

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// axios
import axios from "axios";
// #endregion Imports


// Variables
const orderModal = document.querySelector('.modal-overlay');
const petsList = document.querySelector(".pets-section__pets-list");
const body = document.querySelector("body");
const animalModal = document.querySelector(".animal-modal");
const animalBackdrop = document.querySelector(".animal-modal-backdrop");
let animalCard;
const limit = 1;
let categoryId;


// Other Functions
const closeModal = () => {
    body.classList.remove("no-scroll");
    animalBackdrop.classList.remove("is-open");
    setTimeout(() => {
    animalModal.innerHTML = "";
    }, 250)
};


// Render Functions (Replace)

const renderAnimal = () => {

    const markup = () => {
      return `<button class="animal-modal__animal-close-button is-animal-close-button">
      <svg class="animal-close-button__icon is-animal-close-button" width="24" height="24">
        <use class="is-animal-close-button" href="${sprite}#close"></use>
      </svg>
    </button>

    <div class="animal-modal__wrapper">
      <img class="animal-modal__image" src="${animalCard.querySelector(".pets-list__image").src}" alt="dog" />

      <div class="animal-modal__content-wrapper">
        <p class="animal-modal__species">${animalCard.querySelector(".pets-list__species").textContent}</p>
        <h2 class="animal-modal__name">${animalCard.querySelector(".pets-list__name").textContent}</h2>
        <div class="animal-modal__age-gender-wrapper">
          <p class="animal-modal__age">${animalCard.querySelector(".pets-list__age").textContent}</p>
          <p class="animal-modal__gender">${animalCard.querySelector(".pets-list__gender").textContent}</p>
        </div>
        <h3 class="animal-modal__description-title">Опис:</h3>
        <p class="animal-modal__description">
          ${animalCard.querySelector(".pets-list__button").dataset.description}
        </p>
        <h3 class="animal-modal__health-title">Здоров’я:</h3>
        <p class="animal-modal__health">
          ${animalCard.querySelector(".pets-list__button").dataset.health}
        </p>
        <h3 class="animal-modal__behavior-title">Поведінка:</h3>
        <p class="animal-modal__behavior">
          ${animalCard.querySelector(".pets-list__button").dataset.behavior}
        </p>
        <button class="take-home-btn" data-id="${animalCard.querySelector(".pets-list__button").dataset.id}">Взяти додому</button>
      </div>
    </div>`;
    }

    animalModal.insertAdjacentHTML("beforeend", markup());
}
    

// EventListener Functions
const onFindOutMoreClick = (e) => {
    if (!e.target.classList.contains('pets-list__button')) { return };

    categoryId = e.target.dataset.id;
    animalBackdrop.classList.add("is-open");
    body.classList.add("no-scroll")

    animalCard = e.target.closest(".pets-list__item");

    renderAnimal();
}

const onAnimalCloseBtnClick = (e) => {
    if (!e.target.classList.contains('is-animal-close-button')) { return };
    closeModal();
}

const onTakeMeHomeClick = (e) => {
    if (!e.target.classList.contains('take-home-btn')) { return };
    orderModal.classList.add('is-open');
    closeModal();
}


// EventListeners
petsList.addEventListener('click', onFindOutMoreClick);
animalBackdrop.addEventListener('click', onAnimalCloseBtnClick);
animalBackdrop.addEventListener('click', onTakeMeHomeClick);

// For closeModal()
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
animalBackdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});