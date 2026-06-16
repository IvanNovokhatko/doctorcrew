import Accordion from 'accordion-js';




function switchIcons() {
  document.querySelectorAll('.ac').forEach(item => {
    const icon = item.querySelector('.faq-icon use');

    if (item.classList.contains('is-active')) {
      icon.setAttribute('href', '/img/icons.svg#close');
    } else {
      icon.setAttribute('href', '/img/icons.svg#add');
    }
  });
}

document.querySelectorAll('.ac').forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(updateIcons, 0);
  });
});

switchIcons();

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
});