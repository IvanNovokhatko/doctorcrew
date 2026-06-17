// Remove axios and izitoast imports
// Replace requests with import backend functions
// Import render functions
// ADD A LOADER (after team create it)

// #region Imports

import api from './paw-hut-api.js';
// #endregion Imports

// Variables

const filterList = document.querySelector('.pets-section__filter-list');
const petsList = document.querySelector('.pets-section__pets-list');
const myCustomOrder = [
  'Собаки',
  'Коти',
  'Кролики',
  'Гризуни',
  'Птахи',
  'Тварини з особливими потребами',
  'Терміново шукають дім',
];
let limit = 8;
let categoryId;

// Render Functions (Replace)

const renderCategories = categories => {
  const markup = [...categories]
    .sort((a, b) => {
      return myCustomOrder.indexOf(a.name) - myCustomOrder.indexOf(b.name);
    })
    .map(category => {
      return `<li class="filter-list__item">
      <button class="filter-list__button" data-id="${category._id}">${category.name}</button>
    </li>`;
    })
    .join('');

  filterList.insertAdjacentHTML('beforeend', markup);
};

const renderAnimals = animals => {
  const markup = [...animals]
    .map(animal => {
      return `<li class="pets-list__item">
      <img src="${animal.image}" alt="${animal.name}" class="pets-list__image" />
      <p class="pets-list__species">${animal.species}</p>
      <p class="pets-list__name">${animal.name}</p>

      <ul class="pets-list__filter-marks">
        ${animal.categories
          .map(category => {
            return `<li class="filter-marks__item">
          <p class="filter-marks__text-content">${category.name}</p>
        </li>`;
          })
          .join('')}
      </ul>

      <div class="pets-list__wrapper">
        <p class="pets-list__age pets-list__wrapper-content">${animal.age}</p>
        <p class="pets-list__gender pets-list__wrapper-content">${animal.gender}</p>
      </div>

      <p class="pets-list__descriprion">
        ${animal.shortDescription}
      </p>
      <button class="pets-list__button" type="button" data-id=${animal._id}>Дізнатись більше</button>
    </li>`;
    })
    .join('');

  petsList.insertAdjacentHTML('beforeend', markup);
};

// BackEnd Functions (Replace)

const getCategories = async () => {
  try {
    const response = await api.get('/categories');

    renderCategories(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getAnimals = async object => {
  try {
    const response = await api.get('/animals', object);

    petsList.innerHTML = '';
    renderAnimals(response.data.animals);
  } catch (error) {
    console.error(error);
  }
};

// EventListener Functions

const onDocumentContentLoaded = e => {
  getCategories();
};

const onButtonClick = e => {
  if (!e.target.classList.contains('filter-list__button')) {
    return;
  }

  filterList.querySelectorAll('.filter-list__button').forEach(button => {
    button.classList.remove('is-active');
  });

  if (window.matchMedia('(min-width: 1440px)').matches) {
    limit = 9;
  } else {
    limit = 8;
  }

  e.target.classList.add('is-active');

  categoryId = e.target.dataset.id;

  if (categoryId === 'all') {
    getAnimals({
      params: {
        limit: limit,
      },
    });
  } else {
    getAnimals({
      params: {
        limit: limit,
        categoryId: categoryId,
      },
    });
  }
};

const onWindowResize = e => {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    limit = 9;
  } else {
    limit = 8;
  }

  if (categoryId === 'all') {
    getAnimals({
      params: {
        limit: limit,
      },
    });
  } else {
    getAnimals({
      params: {
        limit: limit,
        categoryId: categoryId,
      },
    });
  }
};

// EventListeners
document.addEventListener('DOMContentLoaded', onDocumentContentLoaded);
filterList.addEventListener('click', onButtonClick);
window.addEventListener('resize', onWindowResize);
