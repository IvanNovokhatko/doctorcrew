import axios from 'axios';

//DOM elements=========================================

const overlay = document.querySelector('.modal-overlay');
const closeBTN = document.querySelector('[data-order-modal-close]');
const form = document.querySelector('.modal-form');
const nameINP = document.querySelector('[name="user-name"]');
const nameErr = nameINP.nextElementSibling;
const phone = document.querySelector('[name="user-phone"]');
const phoneErr = phone.nextElementSibling;
const comment = document.querySelector('[name="user-comment"]');
const commentErr = comment.nextElementSibling;
const takeHomeBTN = document.querySelector('.take-home-btn'); //перевірити чи знаходить

//Global================================================

let nameIsValid;
let phoneIsValid;
let commentIsValid;
const url = 'https://paw-hut.b.goit.study/api/orders';

//Block body scroll====================================

document.body.classList.add('no-scroll');

//Close options========================================

function closeModal() {
  overlay.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

closeBTN.addEventListener('click', closeModal);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

overlay.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

//Submit=============================================

form.addEventListener('submit', async event => {
  event.preventDefault();
  const userName = nameINP.value.trim();
  const userPhone = phone.value.trim();
  let userComment = comment.value.trim();
  if (userComment === '') {
    userComment = 'коментар відсутній';
  }
  const petID = takeHomeBTN.dataset.id; //перевірити чи знаходить

  console.log(userName, userPhone, userComment);
  validateName(userName);
  validatePhone(userPhone);
  validateComment(userComment);

  if (nameIsValid && phoneIsValid && commentIsValid) {
    const order = {
      name: userName,
      phone: userPhone,
      animalId: petID,
      comment: userComment,
    };
    try {
      const res = await axios.post(url, order);
      console.log(
        `Ваше замовлення успішно збережено під номером ${res.data.orderNum}` // замінити на пуш сповіщення
      );
      console.log(res.data);
    } catch (error) {
      console.log('Вибачте сталася помилка при надсиланні запиту'); // замінити на пуш сповіщення
    } finally {
      event.target.reset();
      closeModal();
    }
  }
});

//Validation functions========================================

function validateName(userName) {
  const setError = message => {
    nameErr.classList.add('show-error');
    nameINP.classList.add('error-border');
    nameErr.innerHTML = `${message}`;
    nameIsValid = false;
  };
  if (userName === '') {
    setError(`Поле "Ім'я" обов'язкове до заповнення`);
  } else if (userName.length > 32) {
    setError(`Ім'я не повинно перевищувати 32 символи`);
  } else if (/\d/.test(userName)) {
    setError(`Ім'я не повинно містити цифр`);
  } else {
    nameErr.classList.remove('show-error');
    nameINP.classList.remove('error-border');
    nameErr.innerHTML = '';
    nameIsValid = true;
  }
}

function validatePhone(userPhone) {
  const pattern = /^380\d{9}$/;
  if (!pattern.test(userPhone)) {
    phoneErr.classList.add('show-error');
    phone.classList.add('error-border');
    phoneErr.innerHTML = `Введіть телефон у форматі 380XXXXXXXXX`;
    phoneIsValid = false;
  } else {
    phoneErr.classList.remove('show-error');
    phone.classList.remove('error-border');
    phoneErr.innerHTML = '';
    phoneIsValid = true;
  }
}

function validateComment(userComment) {
  if (userComment.length > 500) {
    commentErr.classList.add('show-error');
    comment.classList.add('error-border');
    commentErr.innerHTML = `Коментар не повинен перевищувати 500 символів`;
    commentIsValid = false;
  } else {
    commentErr.classList.remove('show-error');
    comment.classList.remove('error-border');
    commentErr.innerHTML = '';
    commentIsValid = true;
  }
}
