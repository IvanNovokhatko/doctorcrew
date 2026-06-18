// Remove axios and izitoast imports
// Replace requests with import backend functions
// Import render functions
// ADD A LOADER (after team create it)



// #region Imports

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// axios
import axios from "axios";
// #endregion Imports


// Variables

const petsList = document.querySelector(".pets-section__pets-list");
const loadMoreBtn = document.querySelector(".pets-section__button");
let filterButton = document.querySelector(".filter-list__button.is-active");
let limit = 8;
let categoryId = filterButton.dataset.id;
let page = 1;
let totalPages;
let cardHeight = 500;

// Render Functions (replace)

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


// BackEnd Functions (Replace)

const getAnimals = async (object) => {
  try {
    const response = await axios.get("https://paw-hut.b.goit.study/api/animals",  object);
    
      totalPages = Math.ceil(response.data.totalItems / limit);
      renderAnimals(response.data.animals);
  } catch (error) {
    console.error(error);
  }
};


// EventListener Functions

const onLoadMoreBtnClick = (e) => {
    filterButton = document.querySelector(".filter-list__button.is-active");

    if (window.matchMedia("(min-width: 1440px)").matches) {
        limit = 9;
} else {
    limit = 8;
    }

    if (filterButton.dataset.id !== categoryId) {
        page = 1;
        categoryId = filterButton.dataset.id;
    };

    page += 1;

    if (categoryId === "all") {
        getAnimals(
        {params: {
            limit: limit,
            page: page,
        },})
        .catch(error => {
            console.log(error);
        })
            .finally(() => {
                if (page >= totalPages) {
                    loadMoreBtn.classList.add("is-hidden");
                };
                
                window.scrollBy({
                top: cardHeight * 2,
                left: 0,
                behavior: "smooth",
            });
            });
    } else {
        getAnimals(
        {params: {
          limit: limit,
          categoryId: categoryId,
          page: page,
        },})
        .catch(error => {
                console.log(error);
        })
            .finally(() => {
                if (page >= totalPages) {
                    loadMoreBtn.classList.add("is-hidden");
                };
                window.scrollBy({
                top: cardHeight * 2,
                left: 0,
                behavior: "smooth",
            });
            });
    };
};

const onWindowResize = (e) => {
    filterButton = document.querySelector(".filter-list__button.is-active");

    if (window.matchMedia("(min-width: 1440px)").matches) {
        limit = 9;
} else {
    limit = 8;
    }

    page = 1;
    categoryId = filterButton.dataset.id;
};
    

// EventListeners
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
window.addEventListener('resize', onWindowResize);