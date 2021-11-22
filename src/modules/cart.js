const cart = () => {
  'use strict';

  const cartBtn = document.querySelector('.button-cart');
  const cartModal = document.getElementById('modal-cart');
  const closeBtn = cartModal.querySelector('.modal-close');
  const goodsContainer = document.querySelector('.long-goods-list');
  const cartTable = document.querySelector('.cart-table__goods');
  const modalForm = cartModal.querySelector('.modal-form');
  const cartTotal = document.querySelector('.card-table__total');
  const nameCustomer = modalForm.querySelector('[name="nameCustomer"]');
  const phoneCustomer = modalForm.querySelector('[name="phoneCustomer"]');

  const resetCart = () => {
    cartTable.textContent = '';
    localStorage.removeItem('cart');
    cartModal.removeAttribute('style');
    nameCustomer.value = '';
    phoneCustomer.value = '';
  };

  const priceTotal = cart => {
    const totalPrice = cart.reduce((res, item) => res + (parseFloat(item.price) * item.count), 0);
    cartTotal.textContent = totalPrice + ' $';
  };

  const deleteCartItem = id => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter(good => good.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    renderCartGoods(newCart);
    priceTotal(newCart);
  };

  const plusCartItem = id => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map(good => {
      if (good.id === id) {
        good.count++;
      }
      return good;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    renderCartGoods(newCart);
    priceTotal(newCart);
  };

  const minusCartItem = id => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map(good => {
      if (good.id === id) {
        good.count = good.count > 0 ? good.count - 1 : 0;
      }
      return good;
    });
    const newCartFiltered = newCart.filter(elem => elem.count !== 0);
    if (newCartFiltered.length) {
      localStorage.setItem('cart', JSON.stringify(newCartFiltered));
      renderCartGoods(newCartFiltered);
    } else {
      resetCart();
    }
    priceTotal(newCart);
  };

  const addToCart = id => {
    const goods = JSON.parse(localStorage.getItem('goods'));
    const clickedGood = goods.find(good => good.id === id);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.some(good => good.id === clickedGood.id)) {
      cart.map(good => {
        if (good.id === clickedGood.id) {
          good.count++;
        }
        return good;
      });
    } else {
      clickedGood.count = 1;
      cart.push(clickedGood);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  function renderCartGoods(goods) {
    cartTable.textContent = '';
    goods.forEach(good => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${good.name}</td>
        <td>${good.price}$</td>
        <td><button class="cart-btn-minus">-</button></td>
        <td>${good.count}</td>
        <td><button class="cart-btn-plus">+</button></td>
        <td>${+good.price * +good.count}$</td>
        <td><button class="cart-btn-delete">x</button></td>
      `;
      cartTable.append(tr);
      tr.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('cart-btn-minus')) {
          minusCartItem(good.id);
        } else if (target.classList.contains('cart-btn-plus')) {
          plusCartItem(good.id);
        } else if (target.classList.contains('cart-btn-delete')) {
          deleteCartItem(good.id);
        }
      });
    });
  }

  modalForm.addEventListener('submit', event => {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        cart,
        name: nameCustomer.value,
        phone: phoneCustomer.value,
      }),
    }).then(response => {
      if (response.ok) {
        resetCart();
      }
    }).catch(error => console.error(error));
  });


  cartModal.addEventListener('click', event => {
    const target = event.target;
    if (!target.closest('.modal') && target.classList.contains('overlay')) {
      cartModal.removeAttribute('style');
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      cartModal.removeAttribute('style');
    }
  });

  cartBtn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCartGoods(cart);
    cartModal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    cartModal.removeAttribute('style');
  });

  goodsContainer.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.add-to-cart')) {
      const button = target.closest('.add-to-cart');
      const goodId = button.dataset.id;
      addToCart(goodId);
    }
  });
};

export default cart;
