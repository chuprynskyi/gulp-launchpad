/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/glitch.js":
/*!*********************************!*\
  !*** ./src/assets/js/glitch.js ***!
  \*********************************/
/***/ (function() {

eval("let glitch = document.querySelectorAll('.glitch');\r\nlet line = document.querySelectorAll('.line');\r\n\r\nlet count = 8;\r\n\r\nfor (let i = 0; i < count; i++) {\r\n  glitch.forEach((item, idx) => {\r\n    divClone = line[idx].cloneNode(true);\r\n    item.appendChild(divClone);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/glitch.js?");

/***/ }),

/***/ "./src/assets/js/loadPage.js":
/*!***********************************!*\
  !*** ./src/assets/js/loadPage.js ***!
  \***********************************/
/***/ (function() {

eval("// /*---------- Animate fadeInUp --------------*/\r\n\r\nconst sectionQuestion = document.querySelector('.section__question');\r\nconst question = document.querySelector('.section__question>h2');\r\n\r\nconst sectionSupport = document.querySelector('.section__support');\r\n\r\nconst footerLogo = document.querySelector('.footer__logo');\r\nconst footerTitle = document.querySelectorAll('.footer__list-title');\r\nconst footerLink = document.querySelectorAll('.footer__link');\r\nconst copy = document.querySelector('.copy');\r\n\r\nwindow.addEventListener('scroll', () => {\r\n\r\n  if (document.documentElement.scrollTop > 200) {\r\n    sectionQuestion.classList.add('visible');\r\n    question.classList.add('animate__fadeInUp');\r\n  }\r\n\r\n  if (document.documentElement.scrollTop > 2650) {\r\n    sectionSupport.classList.add('visible');\r\n    sectionSupport.classList.add('animate__fadeInUp');\r\n  }\r\n\r\n  if (document.documentElement.scrollTop > 3420) {\r\n    footerLogo.classList.add('visible');\r\n    footerLogo.classList.add('animate__fadeInUp');\r\n\r\n    footerTitle.forEach((item) => {\r\n      item.classList.add('visible');\r\n      item.classList.add('animate__fadeInUp');\r\n    });\r\n  }\r\n\r\n  if (document.documentElement.scrollTop > 3550) {\r\n    footerLink.forEach((item) => {\r\n      item.classList.add('visible');\r\n      item.classList.add('animate__animated');\r\n      item.classList.add('animate__fadeInUp');\r\n    });\r\n  }\r\n\r\n   if (document.documentElement.scrollTop > 3700) {\r\n     copy.classList.add('visible');\r\n     copy.classList.add('animate__animated');\r\n     copy.classList.add('animate__fadeInUp');\r\n   }\r\n   \r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/loadPage.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("/*---------------- Scroll --------------*/\r\n\r\nconst first = document.querySelector('.first');\r\nconst second = document.querySelector('.second');\r\nconst last = document.querySelector('.last');\r\n\r\nconst text = document.querySelector('.scroll__text');\r\n\r\nconst firstImg = document.querySelector('.scroll__img img:first-child');\r\nconst secondImg = document.querySelector('.scroll__img img:nth-child(2)');\r\nconst lastImg = document.querySelector('.scroll__img img:last-child');\r\n\r\nconst scrollVertical = document.querySelector('.scroll__vertical');\r\n\r\nwindow.addEventListener('scroll', () => {\r\n  if (document.documentElement.scrollTop < 1299) {\r\n    first.classList.remove('small');\r\n    second.classList.add('small');\r\n\r\n    text.classList.remove('t0');\r\n\r\n    firstImg.classList.add('displayed');\r\n    scrollVertical.classList.remove('t0');\r\n  }\r\n  if (\r\n    document.documentElement.scrollTop > 1300 &&\r\n    document.documentElement.scrollTop < 1999\r\n  ) {\r\n    first.classList.add('small');\r\n    second.classList.remove('small');\r\n    last.classList.add('small');\r\n\r\n    text.classList.remove('t-24');\r\n    text.classList.add('t0');\r\n\r\n    firstImg.classList.remove('displayed');\r\n    secondImg.classList.add('displayed');\r\n    \r\n    scrollVertical.classList.remove('t-34');\r\n    scrollVertical.classList.add('t0');\r\n  }\r\n  if (document.documentElement.scrollTop > 2000) {\r\n    second.classList.add('small');\r\n    last.classList.remove('small');\r\n\r\n    text.classList.add('t-24');\r\n\r\n    secondImg.classList.remove('displayed');\r\n    lastImg.classList.add('displayed');\r\n    \r\n    scrollVertical.classList.remove('t0');\r\n    scrollVertical.classList.add('t-34');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("/*---------- Slider -------------*/\r\n\r\nconst first = document.querySelector('.first-box');\r\nconst second = document.querySelector('.second-box');\r\nconst last = document.querySelector('.last-box');\r\n\r\nfirst.addEventListener('click', function (event) {\r\n\t// console.log(event.target);\r\n\r\n  if (event.target.closest('.prev')) {\r\n    first.classList.remove('prev');\r\n    second.classList.add('next');\r\n    last.classList.remove('next');\r\n    last.classList.add('next__after');\r\n  }\r\n  if (event.target.closest('.prev__after')) {\r\n    first.classList.remove('prev__after');\r\n    second.classList.remove('prev');\r\n    second.classList.add('next');\r\n    last.classList.add('next__after');\r\n  }\r\n\r\n  if (event.target.closest('.arrow__next')) {\r\n    first.classList.add('prev');\r\n    second.classList.remove('next');\r\n    last.classList.remove('next__after');\r\n    last.classList.add('next');\r\n  }\r\n});\r\n\r\nsecond.addEventListener('click', function (event) {\r\n  if (event.target.closest('.next')) {\r\n    first.classList.add('prev');\r\n    second.classList.remove('next');\r\n    last.classList.remove('next__after');\r\n    last.classList.add('next');\r\n  }\r\n  if (event.target.closest('.prev')) {\r\n    first.classList.remove('prev__after');\r\n    first.classList.add('prev');\r\n    second.classList.remove('prev');\r\n    last.classList.add('next');\r\n  }\r\n\r\n  if (event.target.closest('.arrow__prev')) {\r\n    first.classList.remove('prev');\r\n    second.classList.add('next');\r\n    last.classList.remove('next');\r\n    last.classList.add('next__after');\r\n  }\r\n  if (event.target.closest('.arrow__next')) {\r\n    first.classList.remove('prev');\r\n    first.classList.add('prev__after');\r\n    second.classList.add('prev');\r\n    last.classList.remove('next');\r\n  }\r\n});\r\n\r\nlast.addEventListener('click', function (event) {\r\n  if (event.target.closest('.next')) {\r\n    first.classList.remove('prev');\r\n    first.classList.add('prev__after');\r\n    second.classList.add('prev');\r\n    last.classList.remove('next');\r\n  }\r\n  if (event.target.closest('.next__after')) {\r\n    first.classList.add('prev__after');\r\n    second.classList.remove('next');\r\n    second.classList.add('prev');\r\n    last.classList.remove('next__after');\r\n  }\r\n\r\n  if (event.target.closest('.arrow__prev')) {\r\n    first.classList.remove('prev__after');\r\n    first.classList.add('prev');\r\n    second.classList.remove('prev');\r\n    last.classList.add('next');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/glitch.js"]();
/******/ 	__webpack_modules__["./src/assets/js/loadPage.js"]();
/******/ 	__webpack_modules__["./src/assets/js/scroll.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	
/******/ })()
;