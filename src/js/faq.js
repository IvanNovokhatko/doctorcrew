

import Accordion from 'accordion-js';
import sprite from '../img/icons.svg';

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,

  onOpen(currentItem) {
    const icon = currentItem.querySelector('.faq-icon use');
    icon.setAttribute('href', `${sprite}#close`);
  },

  onClose(currentItem) {
    const icon = currentItem.querySelector('.faq-icon use');
    icon.setAttribute('href', `${sprite}#add`);
  },
});