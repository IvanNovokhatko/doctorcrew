import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
  onOpen(item) {
    item.querySelector('.faq-icon use')
      .setAttribute('href', '/img/icons.svg#close');
  },

  onClose(item) {
    item.querySelector('.faq-icon use')
      .setAttribute('href', '/img/icons.svg#add');
  }
});