const cart = () => {
  'use strict';

  const cartBtn = document.querySelector('.button-cart');
  const cartModal = document.getElementById('modal-cart');
  const closeBtn = cartModal.querySelector('.modal-close');

  cartModal.addEventListener('click', event => {
    const target = event.target;
    if (!target.closest('.modal')) {
      cartModal.removeAttribute('style');
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      cartModal.removeAttribute('style');
    }
  });

  cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    cartModal.removeAttribute('style');
  });
};

export default cart;
