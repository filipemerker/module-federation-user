/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_basic_host_remote_app2"] = self["webpackChunk_basic_host_remote_app2"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react_react"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _UserCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCard */ \"./src/UserCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Basic Host-Remote\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, \"App 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UserCard__WEBPACK_IMPORTED_MODULE_0__.default, null));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://@basic-host-remote/app2/./src/App.js?");

/***/ }),

/***/ "./src/UserCard.js":
/*!*************************!*\
  !*** ./src/UserCard.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nconst UserCard = ({\n  name,\n  picture,\n  address,\n  about\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Picture, {\n  src: picture\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Info, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Subtitle, null, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About, null, about)));\n\nconst About = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p`\n  margin-top: 1em;\n`;\nconst Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p`\n  font-style: italic;\n  color: gray;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h1`\n  font-weight: 900;\n`;\nconst Info = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 2em 1em;\n  flex: 2;\n`;\nconst Picture = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img`\n  width: 80px;\n  border: #903931 2px solid;\n  border-radius: 50%;\n`;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.header`\n  flex: 1;\n  background: linear-gradient(#dE685E, #EE786E);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n`;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.article`\n  max-width: 450px;\n  background-color: #fff;\n  background: linear-gradient(#f8f8f8, #fff);\n  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);\n  border-radius: 6px;\n  overflow: hidden;\n  position: relative;\n  margin: 1.5rem;\n  display: flex;\n  flex-direction: row;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCard);\n\n//# sourceURL=webpack://@basic-host-remote/app2/./src/UserCard.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://@basic-host-remote/app2/./src/bootstrap.js?");

/***/ })

}]);