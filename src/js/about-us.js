import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});