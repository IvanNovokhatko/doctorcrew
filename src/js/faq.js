import Accordion from 'accordion-js';



const items = document.querySelectorAll('.ac');

items.forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      const icon = item.querySelector('.faq-icon use');

      if (item.classList.contains('is-active')) {
        icon.setAttribute('href', '/img/icons.svg#close');
      } else {
        icon.setAttribute('href', '/img/icons.svg#add');
      }
    }, 0);
  });
});



new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
});