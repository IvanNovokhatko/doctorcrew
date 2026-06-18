import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import axios from "axios";

const petsList = document.querySelector(".pets-section__pets-list");
let limit = 8;
let categoryId;


const renderAnimals = (animals) => {
    const markup = [...animals]
        .map((animal) => {
      return `<li class="pets-list__item">
      <img src="${animal.image}" alt="${animal.name}" class="pets-list__image" />
      <p class="pets-list__species">${animal.species}</p>
      <p class="pets-list__name">${animal.name}</p>

      <ul class="pets-list__filter-marks">
        ${animal.categories.map((category) => {
            return `<li class="filter-marks__item">
          <p class="filter-marks__text-content">${category.name}</p>
        </li>`
        }).join("")}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${animal.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${animal.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${animal.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${animal._id} data-description="${animal.description}" data-health="${animal.healthStatus}" data-behavior="${animal.behavior}">Дізнатись більше</button>
    </li>`;
    })
        .join("");
    
    petsList.insertAdjacentHTML("beforeend", markup);
}

const getAnimals = async (object) => {
  try {
    const response = await axios.get("https://paw-hut.b.goit.study/api/animals",  object);
    
      petsList.innerHTML = "";
      renderAnimals(response.data.animals);
  } catch (error) {
    console.error(error);
  }
};

const onDocumentContentLoaded = (e) => { 
    if (window.matchMedia("(min-width: 1440px)").matches) {
        limit = 9;
} else {
    limit = 8;
    }

    getAnimals(
        {params: {
          limit: limit,
        },})
        .catch(error => {
            console.log(error);
        });
};

document.addEventListener('DOMContentLoaded', onDocumentContentLoaded);