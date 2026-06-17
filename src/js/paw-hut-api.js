import axios from 'axios';

import { showLoader, hideLoader, showError } from './mistakes.js';

const instance = axios.create({
  baseURL: 'https://paw-hut.b.goit.study/api',
});

instance.interceptors.request.use(config => {
  showLoader();
  return config;
});

instance.interceptors.response.use(
  response => {
    hideLoader();
    return response;
  },
  error => {
    hideLoader();

    showError('Помилка завантаження даних');

    return Promise.reject(error);
  }
);

export default instance;

// test

// instance.get('/categories')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));

// instance.interceptors.request.use(config => {
//   showLoader();

//   return new Promise(resolve => {
//     setTimeout(() => resolve(config), 2000);
//   });
// });
