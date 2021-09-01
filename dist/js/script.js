/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_changecolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changecolor */ "./src/js/modules/changecolor.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_changecolor__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const carousel = () => {
  const width = window.getComputedStyle(document.querySelector('.carousel__inner')).width,
        slides = document.querySelectorAll('.carousel__item'),
        slidesField = document.querySelector('.carousel__slides'),
        dots = document.querySelectorAll('.carousel__indicators li');
  slidesField.style.width = 50 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  let offset = 0;
  /* переменная отвечает за смещение главного блока slidesField */

  let slideIndex = 0;
  /* активный слайд */
  // const sliderId = document.getAttribute('id');

  dots.forEach(item => {
    item.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') / 2 * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      slidesField.style.transition = `0.5s all`;
      dots.forEach(dot => dot.classList.remove('active-dots'));
      dots[slideIndex].classList.add('active-dots');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/modules/changecolor.js":
/*!***************************************!*\
  !*** ./src/js/modules/changecolor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const changeColor = () => {
  const block = document.querySelectorAll('.services__block');
  let images = {
    web: 'assets/img/web_dev.jpg',
    product: 'assets/img/product_brand.jpg',
    website: 'assets/img/website_sol.jpg',
    clean: 'assets/img/clean_code.jpg',
    digital: 'assets/img/digital.jpg',
    support: 'assets/img/support.jpg'
  };
  block.forEach(item => {
    item.style.cssText = `background: rgba(0, 0, 0, 0.6)`;
  });

  function mouseOver() {
    block.forEach((item, i) => {
      item.addEventListener('mouseover', () => {
        switch (i) {
          case 0:
            item.style.cssText = `background-image: url(${images.web});
                        `;
            break;

          case 1:
            item.style.cssText = `background-image: url(${images.product})`;
            break;

          case 2:
            item.style.cssText = `background-image: url(${images.website})`;
            break;

          case 3:
            item.style.cssText = `background-image: url(${images.clean})`;
            break;

          case 4:
            item.style.cssText = `background-image: url(${images.digital})`;
            break;

          case 5:
            item.style.cssText = `background-image: url(${images.support})`;
            break;
        }
      });
    });
  }

  mouseOver();
  block.forEach(item => {
    item.addEventListener('mouseout', () => {
      item.style.cssText = `background: rgba(0, 0, 0, 0.6)`;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (changeColor);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const header = document.querySelector('.tabs'),
        tabs = document.querySelectorAll('li'),
        content = document.querySelectorAll('.tabs__wrapper');
  header.addEventListener('click', e => {
    let target = e.target;
    /* тот элемент на котором происходит событие (клик) */

    if (target && target.tagName === 'LI') {
      /* Если тот элемент на который кликнули существует и это тэг li */
      tabs.forEach(btn => btn.classList.remove('active'));
      /* Убираем класс активности со всех элементов в меню */

      target.classList.add('active');
      /* А элементу на котором происходит событие (клик) добавляем класс активности */

      content.forEach(item => item.classList.toggle('flex'));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map