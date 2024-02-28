/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutPage);\n\nfunction createAboutPage() {\n\tconst content = document.querySelector(\"#content\");\n\tconst pageContent = document.createElement(\"div\");\n\tpageContent.classList.add(\"page-content\");\n\n\tconst aboutH2 = document.createElement(\"h2\");\n\taboutH2.classList.add(\"about-title\");\n\taboutH2.innerText = \"About Us\";\n\n\tconst aboutP = document.createElement(\"p\");\n\taboutP.classList.add(\"about-paragraph\");\n\taboutP.innerText = \"Best restaurant in the block, fresh caught fish served daily in delicious plates combined with local veggies, in order to create a light and healthy meal.\";\n\n\tconst header = document.createElement(\"header\");\n\theader.appendChild(aboutH2);\n\theader.appendChild(aboutP);\n\n\tpageContent.appendChild(header);\n\n\tcontent.appendChild(pageContent);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\nfunction createMenuPage() {\n\tconst content = document.querySelector(\"#content\");\n\tconst pageContent = document.createElement(\"div\");\n\tpageContent.classList.add(\"page-content\");\n\n\tconst heading = document.createElement(\"h1\");\n\tconst menuList = document.createElement(\"ul\");\n\n\tconst menuItem1 = createLi();\n\tconst menuItem2 = createLi();\n\tconst menuItem3 = createLi();\n\n\theading.innerText = \"Menu\";\n\tmenuItem1.innerText = \"Bacalhau a bras\";\n\tmenuItem2.innerText = \"King crab salad\";\n\tmenuItem3.innerText = \"Bitoque de atum\";\n\n\tmenuList.appendChild(menuItem1);\n\tmenuList.appendChild(menuItem2);\n\tmenuList.appendChild(menuItem3);\n\n\tconst header = document.createElement(\"header\");\n\theader.appendChild(heading);\n\theader.appendChild(menuList);\n\n\tpageContent.appendChild(header);\n\n\tcontent.appendChild(pageContent);\n}\n\nfunction createLi() {\n\treturn document.createElement(\"li\");\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction initalLoad() {\n\t(0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t(0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initalLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () => {\n\t//Content div\n\tconst content = document.querySelector(\"#content\");\n\tconst pageContent = document.createElement(\"div\");\n\tpageContent.classList.add(\"page-content\");\n\n\t//Image\n\t// const image = document.createElement(\"img\");\n\t// image.src = \"https://vistapointe.net/images/restaurant-3.jpg\";\n\n\t// pageContent.appendChild(image);\n\n\t//Headline Element\n\tconst headline = document.createElement(\"h1\");\n\theadline.textContent = \"Sea Breeze\";\n\n\t//Paragraph Element\n\tconst subText = document.createElement(\"p\");\n\tsubText.textContent = \"Traditional Portuguese seafood restaurant, in an upscale venue\";\n\n\t//Header element\n\tconst header = document.createElement(\"header\");\n\n\theader.appendChild(headline);\n\theader.appendChild(subText);\n\tpageContent.appendChild(header);\n\n\tcontent.appendChild(pageContent);\n\tcontent.classList.add(\"content\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\nfunction createTabs() {\n\tconst content = document.querySelector(\"#content\");\n\tconst tabDiv = document.createElement(\"div\");\n\tconst div1 = document.createElement(\"div\");\n\tconst div2 = document.createElement(\"div\");\n\tconst div3 = document.createElement(\"div\");\n\n\tdiv1.setAttribute(\"id\", \"home-btn\");\n\tdiv2.setAttribute(\"id\", \"menu-btn\");\n\tdiv3.setAttribute(\"id\", \"about-btn\");\n\n\tdiv1.classList.add(\"tab\");\n\tdiv2.classList.add(\"tab\");\n\tdiv3.classList.add(\"tab\");\n\ttabDiv.classList.add(\"tabDiv\");\n\n\tdiv1.textContent = \"Home\";\n\tdiv2.textContent = \"Menu\";\n\tdiv3.textContent = \"About\";\n\n\ttabDiv.appendChild(div1);\n\ttabDiv.appendChild(div2);\n\ttabDiv.appendChild(div3);\n\n\tcontent.appendChild(tabDiv);\n\n\tdiv1.addEventListener(\"click\", () => {\n\t\tclearContent();\n\t\t(0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t});\n\n\tdiv2.addEventListener(\"click\", () => {\n\t\tclearContent();\n\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t});\n\n\tdiv3.addEventListener(\"click\", () => {\n\t\tclearContent();\n\t\t(0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t});\n}\n\nfunction clearContent() {\n\tconst content = document.querySelector(\"#content\");\n\tconst pageContent = document.querySelector(\".page-content\");\n\tif (pageContent) {\n\t\tcontent.removeChild(pageContent);\n\t}\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;