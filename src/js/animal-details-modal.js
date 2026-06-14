import { openOrderModal } from './order-modal.js';
import { closeOrderModal } from './order-modal.js';
import {
  getAnimalById,
  findCachedAnimalById,
  getAnimals,
} from './paw-hut-api.js';
import { showError } from './sweetalert2.js';
const animalModal = document.querySelector('#animal-modal');
const animalContent = document.querySelector('.animal-content');

// open modal when an animal is clicked

export async function openAnimalModal(id) {
  // show local skeleton immediately
  animalContent.innerHTML = createSkeletonMarkup();
  animalModal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  // try local cache first
  const cached = findCachedAnimalById(id);
  if (cached) {
    animalContent.innerHTML = createAnimalMarkup(cached);
    const closeBtnCached = animalContent.querySelector('.modal-close-btn');
    if (closeBtnCached)
      closeBtnCached.addEventListener('click', closeAnimalModal);
    return;
  }

  // fallback: fetch larger animals list (limit=100) to refresh cache and try again
  try {
    await getAnimals({ params: { limit: 100 } });
    const afterFetch = findCachedAnimalById(id);
    if (afterFetch) {
      animalContent.innerHTML = createAnimalMarkup(afterFetch);
      const closeBtnFetched = animalContent.querySelector('.modal-close-btn');
      if (closeBtnFetched)
        closeBtnFetched.addEventListener('click', closeAnimalModal);
      return;
    }
  } catch (err) {
    console.error('Fallback animals list fetch error', err);
    // continue to attempt single fetch below (will likely 404)
  }

  try {
    const animal = await getAnimalById(id);
    animalContent.innerHTML = createAnimalMarkup(animal);
  } catch (error) {
    console.error('openAnimalModal error', error);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
    showError('Не вдалося завантажити дані про тварину. Спробуйте пізніше.');
    closeAnimalModal();
    return;
  }

  const closeBtn = animalContent.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeAnimalModal);
}

// close modal when the close button is clicked

export function closeAnimalModal() {
  animalModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

// create the markup for the animal details modal

function createAnimalMarkup(animal) {
  return `
    <button
      class="modal-close-btn"
      type="button"
    >
      ×
    </button>

    <img
      src="${animal.image || ''}"
      alt="${animal.name || ''}"
      class="modal-image"
    >

    <div class="modal-info">
      <p class="modal-species">${animal.species || ''}</p>
      
      <h2 class="modal-name">${animal.name || ''}</h2>
      
      <div class="modal-meta">
        <span>${animal.age || ''}</span>
        <span>${animal.gender || ''}</span>
      </div>

      <div class="modal-section">
        <h3>Опис:</h3>
        <p>${animal.description || animal.shortDescription || ''}</p>
      </div>

      <div class="modal-section">
        <h3>Здоров'я:</h3>
        <p>${animal.healthStatus || ''}</p>
      </div>

      <div class="modal-section">
        <h3>Поведінка:</h3>
        <p>${animal.behavior || ''}</p>
      </div>

      <button
        class="take-home-btn"
        data-id="${animal._id}"
        type="button"
      >
        Взяти додому
      </button>
    </div>
  `;
}

function createSkeletonMarkup() {
  return `
    <button
      class="modal-close-btn"
      type="button"
    >
      ×
    </button>

    <div class="skeleton-img"></div>

    <h2 class="skeleton-line skeleton-title"></h2>

    <p class="skeleton-line skeleton-short"></p>

    <ul class="skeleton-list">
      <li class="skeleton-line"></li>
      <li class="skeleton-line"></li>
      <li class="skeleton-line"></li>
      <li class="skeleton-line"></li>
    </ul>

    <p class="skeleton-line skeleton-long"></p>

    <h3 class="skeleton-line skeleton-subtitle"></h3>

    <p class="skeleton-line skeleton-long"></p>

    <h3 class="skeleton-line skeleton-subtitle"></h3>

    <p class="skeleton-line skeleton-long"></p>

    <button
      class="take-home-btn"
      type="button"
      disabled
    >
      Loading...
    </button>
  `;
}

// close  backdrop

animalContent.addEventListener('click', e => {
  const btn = e.target.closest('.take-home-btn');

  if (!btn) return;

  closeAnimalModal();
  openOrderModal(btn.dataset.id);
});

// close Escape

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAnimalModal();
    closeOrderModal();
  }
});
