import Swal from 'sweetalert2';

const loader = document.querySelector('#global-loader');
let activeLoaderCount = 0;

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

function showToast({ icon, title, text }) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon,
    title,
    text,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: '#fff',
    color: '#1b1e22',
  });
}

export function showError(message = 'Сталася помилка. Спробуйте пізніше.') {
  showToast({ icon: 'error', title: 'Помилка', text: message });
}

export function showSuccess(message = 'Операцію виконано успішно.') {
  showToast({ icon: 'success', title: 'Успіх', text: message });
}
