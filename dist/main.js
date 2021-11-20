(()=>{"use strict";var __webpack_modules__={728:()=>{eval("\n;// CONCATENATED MODULE: ./src/modules/cart.js\nconst cart = () => {\n  'use strict';\n\n  const cartBtn = document.querySelector('.button-cart');\n  const cartModal = document.getElementById('modal-cart');\n  const closeBtn = cartModal.querySelector('.modal-close');\n\n  cartBtn.addEventListener('click', () => {\n    cartModal.style.display = 'flex';\n  });\n\n  closeBtn.addEventListener('click', () => {\n    cartModal.removeAttribute('style');\n  });\n};\n\n/* harmony default export */ const modules_cart = (cart);\n\n;// CONCATENATED MODULE: ./src/modules/search.js\nconst search = () => {\n  'use strict';\n\n  const input = document.querySelector('.search-block > input');\n  const searchBtn = document.querySelector('.search-block > button');\n\n  searchBtn.addEventListener('click', () => {\n    console.log('input.value: ', input.value);\n  });\n};\n\n/* harmony default export */ const modules_search = (search);\n\n;// CONCATENATED MODULE: ./src/modules/getGoods.js\nconst getGoods = () => {\n  'use strict';\n  const links = document.querySelectorAll('.navigation-link');\n\n  const getData = () => {\n    fetch('https://wildberris-js-default-rtdb.firebaseio.com/db.json')\n      .then(response => response.json())\n      .then(data => localStorage.setItem('goods', JSON.stringify(data)))\n      .catch(err => console.error(err));\n  };\n\n  links.forEach(link => {\n    link.addEventListener('click', event => {\n      event.preventDefault();\n      getData();\n      const data = JSON.parse(localStorage.getItem('goods'));\n      console.log('data: ', data);\n    });\n  });\n\n};\n\n/* harmony default export */ const modules_getGoods = (getGoods);\n\n;// CONCATENATED MODULE: ./src/main.js\n\n\n\n\nmodules_cart();\nmodules_search();\nmodules_getGoods();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzI4LmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtREFBZSxJQUFJLEVBQUM7OztBQ2hCcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEscURBQWUsTUFBTSxFQUFDOzs7QUNYdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQSx1REFBZSxRQUFRLEVBQUM7OztBQ3RCVTtBQUNJO0FBQ0k7O0FBRTFDLFlBQUk7QUFDSixjQUFNO0FBQ04sZ0JBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxkYmVycmlzLWpzLy4vc3JjL21vZHVsZXMvY2FydC5qcz9hYzBlIiwid2VicGFjazovL3dpbGRiZXJyaXMtanMvLi9zcmMvbW9kdWxlcy9zZWFyY2guanM/ZTA3NSIsIndlYnBhY2s6Ly93aWxkYmVycmlzLWpzLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSIsIndlYnBhY2s6Ly93aWxkYmVycmlzLWpzLy4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJ0ID0gKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FydCcpO1xuICBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FydCcpO1xuICBjb25zdCBjbG9zZUJ0biA9IGNhcnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcblxuICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjYXJ0TW9kYWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnQ7XG4iLCJjb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBpbnB1dCcpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gYnV0dG9uJyk7XG5cbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnB1dC52YWx1ZTogJywgaW5wdXQudmFsdWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsImNvbnN0IGdldEdvb2RzID0gKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tbGluaycpO1xuXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsZGJlcnJpcy1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZ2V0RGF0YSgpO1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpO1xuICAgICAgY29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0R29vZHM7XG4iLCJpbXBvcnQgY2FyZCBmcm9tICcuL21vZHVsZXMvY2FydCc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuaW1wb3J0IGdldEdvb2RzIGZyb20gJy4vbW9kdWxlcy9nZXRHb29kcyc7XG5cbmNhcmQoKTtcbnNlYXJjaCgpO1xuZ2V0R29vZHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///728\n")}},__webpack_exports__={};__webpack_modules__[728]()})();