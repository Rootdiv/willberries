/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUNJO0FBQ0k7QUFDUTs7QUFFbEQseURBQUk7QUFDSiwyREFBTTtBQUNOLDZEQUFRO0FBQ1IsaUVBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxkYmVycmlzLWpzLy4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FyZCBmcm9tICcuL21vZHVsZXMvY2FydCc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuaW1wb3J0IGdldEdvb2RzIGZyb20gJy4vbW9kdWxlcy9nZXRHb29kcyc7XG5pbXBvcnQgc21vb3RoU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zbW9vdGhTY3JvbGwnO1xuXG5jYXJkKCk7XG5zZWFyY2goKTtcbmdldEdvb2RzKCk7XG5zbW9vdGhTY3JvbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\n  'use strict';\n\n  const cartBtn = document.querySelector('.button-cart');\n  const cartModal = document.getElementById('modal-cart');\n  const closeBtn = cartModal.querySelector('.modal-close');\n\n  cartModal.addEventListener('click', event => {\n    const target = event.target;\n    if (!target.closest('.modal')) {\n      cartModal.removeAttribute('style');\n    }\n  });\n\n  window.addEventListener('keydown', event => {\n    if (event.key === 'Escape') {\n      cartModal.removeAttribute('style');\n    }\n  });\n\n  cartBtn.addEventListener('click', () => {\n    cartModal.style.display = 'flex';\n  });\n\n  closeBtn.addEventListener('click', () => {\n    cartModal.removeAttribute('style');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWxkYmVycmlzLWpzLy4vc3JjL21vZHVsZXMvY2FydC5qcz9hYzBlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcnQgPSAoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zdCBjYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJ0Jyk7XG4gIGNvbnN0IGNhcnRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jYXJ0Jyk7XG4gIGNvbnN0IGNsb3NlQnRuID0gY2FydE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZScpO1xuXG4gIGNhcnRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLm1vZGFsJykpIHtcbiAgICAgIGNhcnRNb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgY2FydE1vZGFsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhcnRNb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FydDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoods\": () => (/* binding */ renderGoods),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = goods => {\n  const goodsContainer = document.querySelector('.long-goods-list');\n  goodsContainer.textContent = '';\n  goods.forEach(good => {\n    const goodBlock = document.createElement('div');\n    goodBlock.className = 'col-lg-3 col-sm-6';\n    goodBlock.innerHTML = `\n      <div class=\"goods-card\">\n        <span class=\"label ${good.label ? null : 'd-none'}\">${good.label}</span>\n        <img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\" />\n        <h3 class=\"goods-title\">${good.name}</h3>\n        <p class=\"goods-description\">${good.description}</p>\n        <button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\n          <span class=\"button-price\">$${good.price}</span>\n        </button>\n      </div>\n    `;\n    goodsContainer.append(goodBlock);\n  });\n};\n\nconst getGoods = () => {\n  'use strict';\n  const links = document.querySelectorAll('.navigation-link');\n  const viewAll = document.querySelector('.more');\n\n  const getData = (value, category) => {\n    fetch('https://wildberris-js-default-rtdb.firebaseio.com/db.json')\n      .then(response => response.json())\n      .then(data => {\n        const array = category ? data.filter(item => item[category] === value) : data;\n        localStorage.setItem('goods', JSON.stringify(array));\n        if (!window.location.pathname.includes('goods.html')) {\n          window.location.href = 'goods.html';\n        } else {\n          renderGoods(array);\n        }\n      })\n      .catch(err => console.error(err));\n  };\n\n  links.forEach(link => {\n    link.addEventListener('click', event => {\n      event.preventDefault();\n      const linkValue = link.textContent;\n      const category = link.dataset.field;\n      getData(linkValue, category);\n    });\n    const data = JSON.parse(localStorage.getItem('goods'));\n    if (data && window.location.pathname.includes('goods.html')) {\n      renderGoods(data);\n    }\n  });\n\n  try {\n    viewAll.addEventListener('click', event => {\n      event.preventDefault();\n      getData();\n    });\n  } catch (error) {\n    //console.error(error.message);\n    console.log('There is no link here View All');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoods);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkJBQTZCLElBQUksV0FBVztBQUN6RSx1QkFBdUIsU0FBUyxnQkFBZ0IsVUFBVTtBQUMxRCxrQ0FBa0MsVUFBVTtBQUM1Qyx1Q0FBdUMsaUJBQWlCO0FBQ3hELHFFQUFxRSxRQUFRO0FBQzdFLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaXMtanMvLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcz9kNTlhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZW5kZXJHb29kcyA9IGdvb2RzID0+IHtcbiAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZy1nb29kcy1saXN0Jyk7XG4gIGdvb2RzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGdvb2RzLmZvckVhY2goZ29vZCA9PiB7XG4gICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ29vZEJsb2NrLmNsYXNzTmFtZSA9ICdjb2wtbGctMyBjb2wtc20tNic7XG4gICAgZ29vZEJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJnb29kcy1jYXJkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgJHtnb29kLmxhYmVsID8gbnVsbCA6ICdkLW5vbmUnfVwiPiR7Z29vZC5sYWJlbH08L3NwYW4+XG4gICAgICAgIDxpbWcgc3JjPVwiZGIvJHtnb29kLmltZ31cIiBhbHQ9XCJpbWFnZTogJHtnb29kLm5hbWV9XCIgY2xhc3M9XCJnb29kcy1pbWFnZVwiIC8+XG4gICAgICAgIDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJnb29kcy1kZXNjcmlwdGlvblwiPiR7Z29vZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gZ29vZHMtY2FyZC1idG4gYWRkLXRvLWNhcnRcIiBkYXRhLWlkPVwiJHtnb29kLmlkfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLXByaWNlXCI+JCR7Z29vZC5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBnb29kc0NvbnRhaW5lci5hcHBlbmQoZ29vZEJsb2NrKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRHb29kcyA9ICgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpbmsnKTtcbiAgY29uc3Qgdmlld0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlJyk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9ICh2YWx1ZSwgY2F0ZWdvcnkpID0+IHtcbiAgICBmZXRjaCgnaHR0cHM6Ly93aWxkYmVycmlzLWpzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi5qc29uJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IGNhdGVnb3J5ID8gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtW2NhdGVnb3J5XSA9PT0gdmFsdWUpIDogZGF0YTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvb2RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2dvb2RzLmh0bWwnKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2dvb2RzLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlckdvb2RzKGFycmF5KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGlua1ZhbHVlID0gbGluay50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gbGluay5kYXRhc2V0LmZpZWxkO1xuICAgICAgZ2V0RGF0YShsaW5rVmFsdWUsIGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSk7XG4gICAgaWYgKGRhdGEgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdnb29kcy5odG1sJykpIHtcbiAgICAgIHJlbmRlckdvb2RzKGRhdGEpO1xuICAgIH1cbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICB2aWV3QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGdldERhdGEoKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvL2NvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIGxpbmsgaGVyZSBWaWV3IEFsbCcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRHb29kcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGoods */ \"./src/modules/getGoods.js\");\n\n\nconst search = () => {\n  'use strict';\n\n  const input = document.querySelector('.search-block > input');\n  const searchBtn = document.querySelector('.search-block > button');\n\n  const getData = value => {\n    fetch('https://wildberris-js-default-rtdb.firebaseio.com/db.json')\n      .then(response => response.json())\n      .then(data => {\n        const array = data.filter(good => good.name.toLocaleString().includes(value.toLocaleString()));\n        localStorage.setItem('goods', JSON.stringify(array));\n        if (!window.location.pathname.includes('goods.html')) {\n          window.location.href = 'goods.html';\n        } else {\n          (0,_getGoods__WEBPACK_IMPORTED_MODULE_0__.renderGoods)(array);\n        }\n      })\n      .catch(err => console.error(err));\n  };\n\n  searchBtn.addEventListener('click', () => {\n    getData(input.value);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFb0I7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVUsc0RBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaXMtanMvLi9zcmMvbW9kdWxlcy9zZWFyY2guanM/ZTA3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICByZW5kZXJHb29kc1xufSBmcm9tICcuL2dldEdvb2RzJztcblxuY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gaW5wdXQnKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ibG9jayA+IGJ1dHRvbicpO1xuXG4gIGNvbnN0IGdldERhdGEgPSB2YWx1ZSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vd2lsZGJlcnJpcy1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRhLmZpbHRlcihnb29kID0+IGdvb2QubmFtZS50b0xvY2FsZVN0cmluZygpLmluY2x1ZGVzKHZhbHVlLnRvTG9jYWxlU3RyaW5nKCkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvb2RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2dvb2RzLmh0bWwnKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2dvb2RzLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlckdvb2RzKGFycmF5KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2V0RGF0YShpbnB1dC52YWx1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/search.js\n");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\n  const links = document.querySelectorAll('.scroll-link');\n  links.forEach(link => {\n    link.addEventListener('click', event => {\n      event.preventDefault();\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth',\n      });\n    });\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbW9vdGhTY3JvbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUEsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lsZGJlcnJpcy1qcy8uL3NyYy9tb2R1bGVzL3Ntb290aFNjcm9sbC5qcz9jMDExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNtb290aFNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLWxpbmsnKTtcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbW9vdGhTY3JvbGw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/smoothScroll.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;