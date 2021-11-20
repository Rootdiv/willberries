const getGoods = () => {
  'use strict'
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://wildberris-js-default-rtdb.firebaseio.com/db.json')
      .then(response => response.json())
      .then(data => localStorage.setItem('goods', JSON.stringify(data)))
      .catch(err => console.error(err));
  }

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      getData();
      const data = JSON.parse(localStorage.getItem('goods'));
      console.log('data: ', data);
    })
  });

}

getGoods();
