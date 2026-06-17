//swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


async function fetchFeedbacks() {
  const res = await fetch(
    'https://paw-hut.b.goit.study/api/feedbacks?limit=10&page=1'
  );

  const data = await res.json();

  return data.feedbacks;
}


// STAR RENDER
function getStarsHTML(rate) {
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars += `
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-filled"></use>
          </svg>
        </li>
      `;
    } else if (rate >= i - 0.5) {
      stars += `
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-half"></use>
          </svg>
        </li>
      `;
    } else {
      stars += `
        <li class="star">
          <svg width="24" height="24">
            <use href="/img/icons.svg#star-outline"></use>
          </svg>
        </li>
      `;
    }
  }

  return `<ul class="stars-feedback">${stars}</ul>`;
}


// SLIDE
function createSlide(item) {
  return `
    <div class="swiper-slide">
      <div class="swiper-feedback">

        ${getStarsHTML(Number(item.rate))}

        <p class="feedback-text">${item.description}</p>

        <p class="feedback-author">${item.author}</p>

      </div>
    </div>
  `;
}


// RENDER
async function renderFeedbacks() {
  const feedbacks = await fetchFeedbacks();

  const container = document.querySelector('#feedbacks-list');
  container.innerHTML = feedbacks.map(createSlide).join('');
}


// INIT
document.addEventListener('DOMContentLoaded', async () => {
  await renderFeedbacks();

  new Swiper('.swiper__success-swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.success-swiper__button-next',
      prevEl: '.success-swiper__button-prev',
    },

    pagination: {
      el: '.success-swiper__pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
    },
  });
});