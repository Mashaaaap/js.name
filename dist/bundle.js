/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("let Pwelcome = document.querySelector(\"#Pwelcome\");\r\nlet inputName = document.querySelector(\"#inputName\")\r\nlet nameCookies = document.cookie.match(/username(.+?)(;|$)/);\r\nif(nameCookies == null) {\r\n    Pwelcome.innerHTML = \"Welcome Stranger!)\"\r\n} else {\r\n    let username = nameCookies[1].substring(1);\r\n    Pwelcome.innerHTML = `Welcome ${username}!`\r\n}\r\n\r\ninputName.addEventListener('change', () => {\r\n    document.cookie = `username${inputName.value}`;\r\n    Pwelcome.innerHTML = `Welcome ${inputName.value}!`;\r\n})\n\n//# sourceURL=webpack://js.name/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;