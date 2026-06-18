import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('#global-loader');

let activeLoaderCount = 0;

//  Loader 

export function showLoader() {
  if (!loader) return;

  activeLoaderCount += 1;
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  if (!loader) return;

  activeLoaderCount = Math.max(activeLoaderCount - 1, 0);

  if (activeLoaderCount === 0) {
    loader.classList.add('is-hidden');
  }
}

// Success

export function showSuccess(
  message = 'Операцію виконано успішно.'
) {
  iziToast.success({
    title: 'Успіх',
    message,

    position: 'topRight',
    timeout: 3000,

    backgroundColor: '#08AA83',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    progressBarColor: '#FFFFFF',

    iconColor: '#FFFFFF',

    closeOnClick: true,
    progressBar: true,

    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
}

//  Error 

export function showError(
  message = 'Сталася помилка. Спробуйте пізніше.'
) {
  iziToast.error({
    title: 'Помилка',
    message,

    position: 'topRight',
    timeout: 4000,

    backgroundColor: '#EF4040',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    progressBarColor: '#FFFFFF',

    iconColor: '#FFFFFF',

    closeOnClick: true,
    progressBar: true,

    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
}

// Info 

export function showInfo(message) {
  iziToast.info({
    title: 'Інформація',
    message,

    position: 'topRight',
    timeout: 3000,

    backgroundColor: '#F6B83D',
    titleColor: '#262626',
    messageColor: '#262626',
    progressBarColor: '#262626',

    iconColor: '#262626',

    closeOnClick: true,
    progressBar: true,

    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
}

//  Warning 

export function showWarning(message) {
  iziToast.warning({
    title: 'Увага',
    message,

    position: 'topRight',
    timeout: 3500,

    backgroundColor: '#FFF4DF',
    titleColor: '#262626',
    messageColor: '#262626',
    progressBarColor: '#F6B83D',

    iconColor: '#F6B83D',

    closeOnClick: true,
    progressBar: true,

    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
}

//  Test

// showSuccess('Тест успішного повідомлення');
// showError('Тест помилки');
// showInfo('Тест інформації');
// showWarning('Тест попередження');

