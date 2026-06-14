import { createOrder } from './paw-hut-api.js';
import { showError, showSuccess } from './sweetalert2.js';

const orderModal = document.querySelector('#order-modal');

let animalIdForOrder = null;

export function openOrderModal(id) {
  animalIdForOrder = id;

  orderModal.innerHTML = `
    <div class="order-modal-wrapper">
      <button type="button" class="modal-close-btn" aria-label="Закрити">✕</button>

      <h2>Залишіть заявку на знайомство</h2>

      <form id="order-form" class="order-form">
        <label class="order-field">
          <span>Ім'я*</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Андрій"
          />
        </label>

        <label class="order-field">
          <span>Телефон*</span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="380955559922"
          />
        </label>

        <label class="order-field">
          <span>Коментар</span>
          <textarea
            name="comment"
            placeholder="Напишіть ваш коментар"
            rows="5"
          ></textarea>
        </label>

        <button type="submit" class="order-submit-btn">
          Надіслати
        </button>
      </form>
    </div>
  `;

  orderModal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  const orderForm = orderModal.querySelector('#order-form');
  const closeBtn = orderModal.querySelector('.modal-close-btn');

  orderForm.addEventListener('submit', submitOrder);
  closeBtn.addEventListener('click', closeOrderModal);

  orderModal.addEventListener('click', event => {
    if (event.target === orderModal) {
      closeOrderModal();
    }
  });
}

export function closeOrderModal() {
  orderModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

async function submitOrder(event) {
  event.preventDefault();

  const formData = {
    name: event.target.elements.name.value.trim(),
    phone: event.target.elements.phone.value.trim(),
    comment: event.target.elements.comment.value.trim(),
    animalId: animalIdForOrder,
  };

  try {
    await createOrder(formData);
    showSuccess("Заявку відправлено. Ми зв'яжемося з вами найближчим часом.");
    closeOrderModal();
  } catch (error) {
    console.error(error);
    showError('Не вдалося відправити заявку. Спробуйте пізніше.');
  }
}
