export const renderGoods = goods => {
  const goodsContainer = document.querySelector('.long-goods-list');
  goodsContainer.textContent = '';
  goods.forEach(good => {
    const goodBlock = document.createElement('div');
    goodBlock.className = 'col-lg-3 col-sm-6';
    goodBlock.innerHTML = `
      <div class="goods-card">
        <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
        <img src="db/${good.img}" alt="image: ${good.name}" class="goods-image" />
        <h3 class="goods-title">${good.name}</h3>
        <p class="goods-description">${good.description}</p>
        <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
          <span class="button-price">$${good.price}</span>
        </button>
      </div>
    `;
    goodsContainer.append(goodBlock);
  });
};

const getGoods = () => {
  'use strict';
  const links = document.querySelectorAll('.navigation-link');
  const viewAll = document.querySelector('.more');

  const getData = (value, category) => {
    fetch('https://wildberris-js-default-rtdb.firebaseio.com/db.json')
      .then(response => response.json())
      .then(data => {
        const array = category ? data.filter(item => item[category] === value) : data;
        localStorage.setItem('goods', JSON.stringify(array));
        if (!window.location.pathname.includes('goods.html')) {
          window.location.href = 'goods.html';
        } else {
          renderGoods(array);
        }
      })
      .catch(err => console.error(err));
  };

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const linkValue = link.textContent;
      const category = link.dataset.field;
      getData(linkValue, category);
    });
    const data = JSON.parse(localStorage.getItem('goods'));
    if (data && window.location.pathname.includes('goods.html')) {
      renderGoods(data);
    }
  });

  try {
    viewAll.addEventListener('click', event => {
      event.preventDefault();
      getData();
    });
  } catch (error) {
    //console.error(error.message);
    console.log('There is no link here View All');
  }
};

export default getGoods;
