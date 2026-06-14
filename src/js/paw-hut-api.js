import axios from 'axios';
import { showLoader, hideLoader } from './sweetalert2.js';

const instance = axios.create({
  baseURL: 'https://paw-hut.b.goit.study/api',
});

instance.interceptors.request.use(
  config => {
    showLoader();
    return config;
  },
  error => {
    hideLoader();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    hideLoader();
    return response;
  },
  error => {
    hideLoader();
    return Promise.reject(error);
  }
);

export async function getCategories() {
  const { data } = await instance.get('/categories');
  return data;
}

export async function getAnimals(params) {
  const { data } = await instance.get('/animals', params);
  // cache last fetched animals list for local lookup
  animalsCache = data && data.animals ? data.animals : [];
  return data;
}

export async function getAnimalById(id) {
  const safeId = encodeURIComponent(id);
  const url = `/animals/${safeId}`;
  const { data } = await instance.get(url);
  return data;
}

// simple in-memory cache and lookup
let animalsCache = [];

export function findCachedAnimalById(id) {
  if (!animalsCache || !animalsCache.length) return null;
  return animalsCache.find(a => a._id === id) || null;
}

export async function createOrder(body) {
  const { data } = await instance.post('/orders', body);
  return data;
}
