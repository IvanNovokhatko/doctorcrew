import Swal from "sweetalert2";

const orderModal = document.querySelector("#order-modal");

let animalIdForOrder = null;

export function openOrderModal(id) {
  animalIdForOrder = id;

  orderModal.innerHTML = `
    <div class="modal-content">
      <button type="button" class="modal-close-btn">✕</button>

      <h2>Take me home</h2>

      <form id="order-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            required
            placeholder="+48 123 456 789"
          />
        </label>

        <label>
          Comment
          <textarea
            name="comment"
            placeholder="Additional information"
          ></textarea>
        </label>

        <button type="submit">
          Send
        </button>
      </form>
    </div>
  `;

  orderModal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");

  const orderForm = document.querySelector("#order-form");
  const closeBtn = document.querySelector(".modal-close-btn");

  orderForm.addEventListener("submit", submitOrder);
  closeBtn.addEventListener("click", closeOrderModal);
}

export function closeOrderModal() {
  orderModal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
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
    const response = await fetch(
      "https://paw-hut.b.goit.study/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    Swal.fire({
      icon: "success",
      title: "Заявку відправлено",
      text: "Ми зв'яжемося з вами найближчим часом",
    });

    closeOrderModal();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Помилка",
      text: "Не вдалося відправити заявку",
    });
  }
}