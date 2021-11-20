const cart = () => {
  'use strict';

  const cartBtn = document.querySelector('.button-cart');
  const cartModal = document.getElementById('modal-cart');
  const closeBtn = cartModal.querySelector('.modal-close');

  cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    cartModal.removeAttribute('style');
  });
};

export default cart;
