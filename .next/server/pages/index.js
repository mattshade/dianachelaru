module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/components/Footer.js\";\n\nfunction Footer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"jsx-4108580678\",\n      children: [\"\\xA9 \", new Date().getFullYear(), \" diana chelaru\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"4108580678\",\n      children: \"footer.jsx-4108580678{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.jsx-4108580678{height:1em;margin:5px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMjA2MDgwNzMxL1BFUlNPTkFML0NMSUVOVFMvRElBTkEvV0VCU0lURS9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHc0IsQUFTQSxXQVJFLEFBU0YsV0FDYixFQVQrQiw2QkFDaEIsMEVBQ1UsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hMjA2MDgwNzMxL1BFUlNPTkFML0NMSUVOVFMvRElBTkEvV0VCU0lURS9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cblxuXG4gIHJldHVybiAoXG4gIDw+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGRpYW5hIGNoZWxhcnVcbiAgICAgICAgXG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\\n/*@ sourceURL=/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/components/Footer.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtlLFNBQVNBLE1BQVQsR0FBa0I7QUFJL0Isc0JBQ0E7QUFBQSw0QkFDSTtBQUFBO0FBQUEsMEJBQ1EsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQTtBQXVCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcblxuXG5cbiAgcmV0dXJuIChcbiAgPD5cbiAgICAgIDxmb290ZXI+XG4gICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gZGlhbmEgY2hlbGFydVxuICAgICAgICBcbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/components/Header.js\";\nfunction Header() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    className: \"title\",\n    children: \"diana chelaru\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixzQkFBTztBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+ZGlhbmEgY2hlbGFydTwvaDE+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./node_modules/lightgallery/css/lg-thumbnail.css":
/*!********************************************************!*\
  !*** ./node_modules/lightgallery/css/lg-thumbnail.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvY3NzL2xnLXRodW1ibmFpbC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/lightgallery/css/lg-thumbnail.css\n");

/***/ }),

/***/ "./node_modules/lightgallery/css/lg-zoom.css":
/*!***************************************************!*\
  !*** ./node_modules/lightgallery/css/lg-zoom.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvY3NzL2xnLXpvb20uY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/lightgallery/css/lg-zoom.css\n");

/***/ }),

/***/ "./node_modules/lightgallery/css/lightgallery.css":
/*!********************************************************!*\
  !*** ./node_modules/lightgallery/css/lightgallery.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvY3NzL2xpZ2h0Z2FsbGVyeS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/lightgallery/css/lightgallery.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_contentfulPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/contentfulPosts */ \"./utils/contentfulPosts.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lightgallery/css/lightgallery.css */ \"./node_modules/lightgallery/css/lightgallery.css\");\n/* harmony import */ var lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lightgallery/css/lg-zoom.css */ \"./node_modules/lightgallery/css/lg-zoom.css\");\n/* harmony import */ var lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lightgallery/css/lg-thumbnail.css */ \"./node_modules/lightgallery/css/lg-thumbnail.css\");\n/* harmony import */ var lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lightgallery/plugins/thumbnail */ \"lightgallery/plugins/thumbnail\");\n/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lightgallery/plugins/zoom */ \"lightgallery/plugins/zoom\");\n/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _jsxFileName = \"/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/pages/index.js\";\n\n\n\n\n\n\n\nconst LightGallery = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lightgallery/react */ \"lightgallery/react\", 7)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! lightgallery/react */ \"lightgallery/react\")],\n    modules: ['lightgallery/react']\n  }\n}); // import styles\n\n\n\n\n\n\nfunction Home({\n  posts\n}) {\n  const paintingsHolder = [];\n  const paintings = posts[0].artwork.map((p, i) => {\n    // console.log('paintings: ', p.fields)\n    return paintingsHolder.push({\n      src: `https:${p.fields.file.url}`,\n      thumb: `https:${p.fields.file.url}?w=600`,\n      responsive: `https:${p.fields.file.url}`,\n      title: `${p.fields.title}`\n    });\n  }); // console.log('paintingsHolder: ', paintingsHolder)\n  // console.log('lg: ', LightGallery)\n\n  const onInit = () => {// console.log('lightGallery has been initialized');\n  };\n\n  const {\n    0: items\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(paintingsHolder);\n  const getItems = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(() => {\n    return items.map((item, i) => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"data-lg-size\": item.size,\n        className: \"gallery-item\",\n        \"data-src\": item.src,\n        \"data-sub-html\": item.title,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"img-responsive\",\n          src: item.thumb\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 19\n        }, this)\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }, this);\n    });\n  }, [items]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1012281984\" + \" \" + \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-1012281984\",\n        children: \"diana chelaru | fine art\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\",\n        className: \"jsx-1012281984\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\",\n        className: \"jsx-1012281984\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossorigin: true,\n        className: \"jsx-1012281984\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\",\n        rel: \"stylesheet\",\n        className: \"jsx-1012281984\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"jsx-1012281984\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"jsx-1012281984\" + \" \" + \"gallery-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LightGallery, {\n          id: \"animated-thumbnails\",\n          onInit: onInit,\n          speed: 500,\n          plugins: [lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_11___default.a, lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_12___default.a],\n          thumbnail: false,\n          licenseKey: 'F216EF00-0E0049AE-8C365905-B584B23C',\n          animateThumb: false,\n          zoomFromOrigin: false,\n          allowMediaOverlap: true,\n          toggleThumb: true,\n          children: getItems()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1486862249\",\n      children: \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMjA2MDgwNzMxL1BFUlNPTkFML0NMSUVOVFMvRElBTkEvV0VCU0lURS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCIiwiZmlsZSI6Ii9Vc2Vycy9hMjA2MDgwNzMxL1BFUlNPTkFML0NMSUVOVFMvRElBTkEvV0VCU0lURS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGZldGNoRW50cmllcyB9IGZyb20gJ0B1dGlscy9jb250ZW50ZnVsUG9zdHMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgTGlnaHRHYWxsZXJ5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2xpZ2h0Z2FsbGVyeS9yZWFjdCcpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG4vLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJ2xpZ2h0Z2FsbGVyeS9jc3MvbGlnaHRnYWxsZXJ5LmNzcyc7XG5pbXBvcnQgJ2xpZ2h0Z2FsbGVyeS9jc3MvbGctem9vbS5jc3MnO1xuaW1wb3J0ICdsaWdodGdhbGxlcnkvY3NzL2xnLXRodW1ibmFpbC5jc3MnO1xuXG5pbXBvcnQgbGdUaHVtYm5haWwgZnJvbSAnbGlnaHRnYWxsZXJ5L3BsdWdpbnMvdGh1bWJuYWlsJztcbmltcG9ydCBsZ1pvb20gZnJvbSAnbGlnaHRnYWxsZXJ5L3BsdWdpbnMvem9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Bvc3RzfSkge1xuY29uc3QgcGFpbnRpbmdzSG9sZGVyID0gW11cbiAgY29uc3QgcGFpbnRpbmdzID0gcG9zdHNbMF0uYXJ0d29yay5tYXAoKHAsIGkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncGFpbnRpbmdzOiAnLCBwLmZpZWxkcylcbiAgICByZXR1cm4ocGFpbnRpbmdzSG9sZGVyLnB1c2goe3NyYzogYGh0dHBzOiR7cC5maWVsZHMuZmlsZS51cmx9YCx0aHVtYjogYGh0dHBzOiR7cC5maWVsZHMuZmlsZS51cmx9P3c9NjAwYCxyZXNwb25zaXZlOiBgaHR0cHM6JHtwLmZpZWxkcy5maWxlLnVybH1gLCB0aXRsZTogYCR7cC5maWVsZHMudGl0bGV9YCB9KSl9KVxuICBcbiAgLy8gY29uc29sZS5sb2coJ3BhaW50aW5nc0hvbGRlcjogJywgcGFpbnRpbmdzSG9sZGVyKVxuICAvLyBjb25zb2xlLmxvZygnbGc6ICcsIExpZ2h0R2FsbGVyeSlcbiAgY29uc3Qgb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWdodEdhbGxlcnkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQnKTtcbn07XG5cbiAgICBjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUocGFpbnRpbmdzSG9sZGVyKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtbGctc2l6ZT17aXRlbS5zaXplfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgIGRhdGEtc3ViLWh0bWw9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9e2l0ZW0udGh1bWJ9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbaXRlbXNdKTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5kaWFuYSBjaGVsYXJ1IHwgZmluZSBhcnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+ICAgXG4gICAgICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT17XCJnYWxsZXJ5LWNvbnRhaW5lclwifT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPExpZ2h0R2FsbGVyeVxuICAgICAgICAgIGlkPXtcImFuaW1hdGVkLXRodW1ibmFpbHNcIn1cbiAgICAgICAgICBvbkluaXQ9e29uSW5pdH1cbiAgICAgICAgICBzcGVlZD17NTAwfVxuICAgICAgICAgIHBsdWdpbnM9e1tsZ1RodW1ibmFpbCwgbGdab29tXX1cbiAgICAgICAgICB0aHVtYm5haWw9e2ZhbHNlfVxuICAgICAgICAgIGxpY2Vuc2VLZXk9eydGMjE2RUYwMC0wRTAwNDlBRS04QzM2NTkwNS1CNTg0QjIzQyd9XG4gICAgICAgICAgYW5pbWF0ZVRodW1iPXtmYWxzZX1cbiAgICAgICAgICB6b29tRnJvbU9yaWdpbj17ZmFsc2V9XG4gICAgICAgICAgYWxsb3dNZWRpYU92ZXJsYXA9e3RydWV9XG4gICAgICAgICAgdG9nZ2xlVGh1bWI9e3RydWV9XG4gICAgPlxuICAgICAge2dldEl0ZW1zKCl9XG4gICAgICA8L0xpZ2h0R2FsbGVyeT5cbiAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSxcbiAgICAgICAgICAgIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5nYWxsZXJ5LWl0ZW0geyBcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuZ2FsbGVyeS1pdGVtIGltZyB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgYXNwZWN0LXJhdGlvOiB1bnNldDtcbiAgICAgICAgICBhc3BlY3QtcmF0aW86MS8xO1xuICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIgLmxnLXJlYWN0LWVsZW1lbnQgIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hFbnRyaWVzKClcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMubWFwKChwKSA9PiB7XG4gICAgcmV0dXJuIHAuZmllbGRzXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfVxufVxuIl19 */\\n/*@ sourceURL=/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/pages/index.js */\"\n    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2734041600\",\n      children: \"html,body{padding:0;margin:0;font-family:'Playfair Display',serif,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu, Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}h1{display:block;}ul{list-style:none;}.gallery-item{cursor:pointer;padding:3px 5px;}.gallery-item img{object-fit:cover;aspect-ratio:unset;aspect-ratio:1/1;height:20vh;}.gallery-container .lg-react-element{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hMjA2MDgwNzMxL1BFUlNPTkFML0NMSUVOVFMvRElBTkEvV0VCU0lURS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRnlCLEFBSXFCLEFBT1ksQUFHUixBQUdFLEFBR0QsQUFLRSxBQU9KLFVBM0JKLElBVVgsQ0FNa0IsQ0FIbEIsQ0FRcUIsRUFuQjJDLEdBS2hFLFNBV0EsS0FJa0IsaUJBQ0osWUFFZCxTQUdpQix5REFDSixXQUNiLG1DQTNCQSIsImZpbGUiOiIvVXNlcnMvYTIwNjA4MDczMS9QRVJTT05BTC9DTElFTlRTL0RJQU5BL1dFQlNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBmZXRjaEVudHJpZXMgfSBmcm9tICdAdXRpbHMvY29udGVudGZ1bFBvc3RzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdAY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmNvbnN0IExpZ2h0R2FsbGVyeSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdsaWdodGdhbGxlcnkvcmVhY3QnKSwge1xuICBzc3I6IGZhbHNlXG59KVxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0ICdsaWdodGdhbGxlcnkvY3NzL2xpZ2h0Z2FsbGVyeS5jc3MnO1xuaW1wb3J0ICdsaWdodGdhbGxlcnkvY3NzL2xnLXpvb20uY3NzJztcbmltcG9ydCAnbGlnaHRnYWxsZXJ5L2Nzcy9sZy10aHVtYm5haWwuY3NzJztcblxuaW1wb3J0IGxnVGh1bWJuYWlsIGZyb20gJ2xpZ2h0Z2FsbGVyeS9wbHVnaW5zL3RodW1ibmFpbCc7XG5pbXBvcnQgbGdab29tIGZyb20gJ2xpZ2h0Z2FsbGVyeS9wbHVnaW5zL3pvb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwb3N0c30pIHtcbmNvbnN0IHBhaW50aW5nc0hvbGRlciA9IFtdXG4gIGNvbnN0IHBhaW50aW5ncyA9IHBvc3RzWzBdLmFydHdvcmsubWFwKChwLCBpKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3BhaW50aW5nczogJywgcC5maWVsZHMpXG4gICAgcmV0dXJuKHBhaW50aW5nc0hvbGRlci5wdXNoKHtzcmM6IGBodHRwczoke3AuZmllbGRzLmZpbGUudXJsfWAsdGh1bWI6IGBodHRwczoke3AuZmllbGRzLmZpbGUudXJsfT93PTYwMGAscmVzcG9uc2l2ZTogYGh0dHBzOiR7cC5maWVsZHMuZmlsZS51cmx9YCwgdGl0bGU6IGAke3AuZmllbGRzLnRpdGxlfWAgfSkpfSlcbiAgXG4gIC8vIGNvbnNvbGUubG9nKCdwYWludGluZ3NIb2xkZXI6ICcsIHBhaW50aW5nc0hvbGRlcilcbiAgLy8gY29uc29sZS5sb2coJ2xnOiAnLCBMaWdodEdhbGxlcnkpXG4gIGNvbnN0IG9uSW5pdCA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnbGlnaHRHYWxsZXJ5IGhhcyBiZWVuIGluaXRpYWxpemVkJyk7XG59O1xuXG4gICAgY29uc3QgW2l0ZW1zXSA9IHVzZVN0YXRlKHBhaW50aW5nc0hvbGRlcik7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBkYXRhLWxnLXNpemU9e2l0ZW0uc2l6ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdhbGxlcnktaXRlbVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXNyYz17aXRlbS5zcmN9XG4gICAgICAgICAgICAgICAgICBkYXRhLXN1Yi1odG1sPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgc3JjPXtpdGVtLnRodW1ifSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgfSwgW2l0ZW1zXSk7XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+ZGlhbmEgY2hlbGFydSB8IGZpbmUgYXJ0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPiAgIFxuICAgICAgICBcbiAgICAgIDx1bCBjbGFzc05hbWU9e1wiZ2FsbGVyeS1jb250YWluZXJcIn0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxMaWdodEdhbGxlcnlcbiAgICAgICAgICBpZD17XCJhbmltYXRlZC10aHVtYm5haWxzXCJ9XG4gICAgICAgICAgb25Jbml0PXtvbkluaXR9XG4gICAgICAgICAgc3BlZWQ9ezUwMH1cbiAgICAgICAgICBwbHVnaW5zPXtbbGdUaHVtYm5haWwsIGxnWm9vbV19XG4gICAgICAgICAgdGh1bWJuYWlsPXtmYWxzZX1cbiAgICAgICAgICBsaWNlbnNlS2V5PXsnRjIxNkVGMDAtMEUwMDQ5QUUtOEMzNjU5MDUtQjU4NEIyM0MnfVxuICAgICAgICAgIGFuaW1hdGVUaHVtYj17ZmFsc2V9XG4gICAgICAgICAgem9vbUZyb21PcmlnaW49e2ZhbHNlfVxuICAgICAgICAgIGFsbG93TWVkaWFPdmVybGFwPXt0cnVlfVxuICAgICAgICAgIHRvZ2dsZVRodW1iPXt0cnVlfVxuICAgID5cbiAgICAgIHtnZXRJdGVtcygpfVxuICAgICAgPC9MaWdodEdhbGxlcnk+XG4gICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsXG4gICAgICAgICAgICBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZ2FsbGVyeS1pdGVtIHsgXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmdhbGxlcnktaXRlbSBpbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGFzcGVjdC1yYXRpbzogdW5zZXQ7XG4gICAgICAgICAgYXNwZWN0LXJhdGlvOjEvMTtcbiAgICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmdhbGxlcnktY29udGFpbmVyIC5sZy1yZWFjdC1lbGVtZW50ICB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRW50cmllcygpXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLm1hcCgocCkgPT4ge1xuICAgIHJldHVybiBwLmZpZWxkc1xuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH1cbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/a206080731/PERSONAL/CLIENTS/DIANA/WEBSITE/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps() {\n  const res = await Object(_utils_contentfulPosts__WEBPACK_IMPORTED_MODULE_4__[\"fetchEntries\"])();\n  const posts = await res.map(p => {\n    return p.fields;\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxpZ2h0R2FsbGVyeSIsImR5bmFtaWMiLCJzc3IiLCJIb21lIiwicG9zdHMiLCJwYWludGluZ3NIb2xkZXIiLCJwYWludGluZ3MiLCJhcnR3b3JrIiwibWFwIiwicCIsImkiLCJwdXNoIiwic3JjIiwiZmllbGRzIiwiZmlsZSIsInVybCIsInRodW1iIiwicmVzcG9uc2l2ZSIsInRpdGxlIiwib25Jbml0IiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImdldEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJpdGVtIiwic2l6ZSIsImxnVGh1bWJuYWlsIiwibGdab29tIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaEVudHJpZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxZQUFZLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwwSEFBUCxFQUFxQztBQUMvREMsS0FBRyxFQUFFLEtBRDBEO0FBQUE7QUFBQSx3Q0FBdkIsOENBQXVCO0FBQUEsY0FBdkIsb0JBQXVCO0FBQUE7QUFBQSxDQUFyQyxDQUE1QixDLENBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNDLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBdUI7QUFDdEMsUUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0UsUUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLE9BQVQsQ0FBaUJDLEdBQWpCLENBQXFCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQy9DO0FBQ0EsV0FBT0wsZUFBZSxDQUFDTSxJQUFoQixDQUFxQjtBQUFDQyxTQUFHLEVBQUcsU0FBUUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLElBQVQsQ0FBY0MsR0FBSSxFQUFqQztBQUFtQ0MsV0FBSyxF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RyxHQUFHLE1BQU1DLDJFQUFZLEVBQTlCO0FBQ0EsUUFBTTFCLEtBQUssR0FBRyxNQUFNeUIsR0FBRyxDQUFDckIsR0FBSixDQUFTQyxDQUFELElBQU87QUFDakMsV0FBT0EsQ0FBQyxDQUFDSSxNQUFUO0FBQ0QsR0FGbUIsQ0FBcEI7QUFJQSxTQUFPO0FBQ0xrQixTQUFLLEVBQUU7QUFDTDNCO0FBREs7QUFERixHQUFQO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGZldGNoRW50cmllcyB9IGZyb20gJ0B1dGlscy9jb250ZW50ZnVsUG9zdHMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgTGlnaHRHYWxsZXJ5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2xpZ2h0Z2FsbGVyeS9yZWFjdCcpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG4vLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJ2xpZ2h0Z2FsbGVyeS9jc3MvbGlnaHRnYWxsZXJ5LmNzcyc7XG5pbXBvcnQgJ2xpZ2h0Z2FsbGVyeS9jc3MvbGctem9vbS5jc3MnO1xuaW1wb3J0ICdsaWdodGdhbGxlcnkvY3NzL2xnLXRodW1ibmFpbC5jc3MnO1xuXG5pbXBvcnQgbGdUaHVtYm5haWwgZnJvbSAnbGlnaHRnYWxsZXJ5L3BsdWdpbnMvdGh1bWJuYWlsJztcbmltcG9ydCBsZ1pvb20gZnJvbSAnbGlnaHRnYWxsZXJ5L3BsdWdpbnMvem9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Bvc3RzfSkge1xuY29uc3QgcGFpbnRpbmdzSG9sZGVyID0gW11cbiAgY29uc3QgcGFpbnRpbmdzID0gcG9zdHNbMF0uYXJ0d29yay5tYXAoKHAsIGkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncGFpbnRpbmdzOiAnLCBwLmZpZWxkcylcbiAgICByZXR1cm4ocGFpbnRpbmdzSG9sZGVyLnB1c2goe3NyYzogYGh0dHBzOiR7cC5maWVsZHMuZmlsZS51cmx9YCx0aHVtYjogYGh0dHBzOiR7cC5maWVsZHMuZmlsZS51cmx9P3c9NjAwYCxyZXNwb25zaXZlOiBgaHR0cHM6JHtwLmZpZWxkcy5maWxlLnVybH1gLCB0aXRsZTogYCR7cC5maWVsZHMudGl0bGV9YCB9KSl9KVxuICBcbiAgLy8gY29uc29sZS5sb2coJ3BhaW50aW5nc0hvbGRlcjogJywgcGFpbnRpbmdzSG9sZGVyKVxuICAvLyBjb25zb2xlLmxvZygnbGc6ICcsIExpZ2h0R2FsbGVyeSlcbiAgY29uc3Qgb25Jbml0ID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWdodEdhbGxlcnkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQnKTtcbn07XG5cbiAgICBjb25zdCBbaXRlbXNdID0gdXNlU3RhdGUocGFpbnRpbmdzSG9sZGVyKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtbGctc2l6ZT17aXRlbS5zaXplfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgIGRhdGEtc3ViLWh0bWw9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9e2l0ZW0udGh1bWJ9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9LCBbaXRlbXNdKTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5kaWFuYSBjaGVsYXJ1IHwgZmluZSBhcnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+ICAgXG4gICAgICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT17XCJnYWxsZXJ5LWNvbnRhaW5lclwifT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPExpZ2h0R2FsbGVyeVxuICAgICAgICAgIGlkPXtcImFuaW1hdGVkLXRodW1ibmFpbHNcIn1cbiAgICAgICAgICBvbkluaXQ9e29uSW5pdH1cbiAgICAgICAgICBzcGVlZD17NTAwfVxuICAgICAgICAgIHBsdWdpbnM9e1tsZ1RodW1ibmFpbCwgbGdab29tXX1cbiAgICAgICAgICB0aHVtYm5haWw9e2ZhbHNlfVxuICAgICAgICAgIGxpY2Vuc2VLZXk9eydGMjE2RUYwMC0wRTAwNDlBRS04QzM2NTkwNS1CNTg0QjIzQyd9XG4gICAgICAgICAgYW5pbWF0ZVRodW1iPXtmYWxzZX1cbiAgICAgICAgICB6b29tRnJvbU9yaWdpbj17ZmFsc2V9XG4gICAgICAgICAgYWxsb3dNZWRpYU92ZXJsYXA9e3RydWV9XG4gICAgICAgICAgdG9nZ2xlVGh1bWI9e3RydWV9XG4gICAgPlxuICAgICAge2dldEl0ZW1zKCl9XG4gICAgICA8L0xpZ2h0R2FsbGVyeT5cbiAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSxcbiAgICAgICAgICAgIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5nYWxsZXJ5LWl0ZW0geyBcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuZ2FsbGVyeS1pdGVtIGltZyB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgYXNwZWN0LXJhdGlvOiB1bnNldDtcbiAgICAgICAgICBhc3BlY3QtcmF0aW86MS8xO1xuICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuZ2FsbGVyeS1jb250YWluZXIgLmxnLXJlYWN0LWVsZW1lbnQgIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hFbnRyaWVzKClcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMubWFwKChwKSA9PiB7XG4gICAgcmV0dXJuIHAuZmllbGRzXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/contentfulPosts.js":
/*!**********************************!*\
  !*** ./utils/contentfulPosts.js ***!
  \**********************************/
/*! exports provided: fetchEntries, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchEntries\", function() { return fetchEntries; });\nconst space = 'raaqi4zh67uq';\nconst accessToken = '6L3NAIGC33wGiPPyy_yfLIZngTuCNILmAzvZ7Xm6C54';\n\nconst client = __webpack_require__(/*! contentful */ \"contentful\").createClient({\n  space: space,\n  accessToken: accessToken\n});\n\nasync function fetchEntries() {\n  const entries = await client.getEntries();\n  if (entries.items) return entries.items;\n  console.log(`Error getting Entries for ${contentType.name}.`);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  fetchEntries\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb250ZW50ZnVsUG9zdHMuanM/YTBhNiJdLCJuYW1lcyI6WyJzcGFjZSIsImFjY2Vzc1Rva2VuIiwiY2xpZW50IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsImZldGNoRW50cmllcyIsImVudHJpZXMiLCJnZXRFbnRyaWVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHLGNBQWQ7QUFDQSxNQUFNQyxXQUFXLEdBQUcsNkNBQXBCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREosT0FBSyxFQUFFQSxLQUR5QztBQUVoREMsYUFBVyxFQUFFQTtBQUZtQyxDQUFuQyxDQUFmOztBQUtPLGVBQWVJLFlBQWYsR0FBOEI7QUFDbkMsUUFBTUMsT0FBTyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssVUFBUCxFQUF0QjtBQUNBLE1BQUlELE9BQU8sQ0FBQ0UsS0FBWixFQUFtQixPQUFPRixPQUFPLENBQUNFLEtBQWY7QUFDbkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLDZCQUE0QkMsV0FBVyxDQUFDQyxJQUFLLEdBQTFEO0FBQ0Q7QUFFYztBQUFFUDtBQUFGLENBQWYiLCJmaWxlIjoiLi91dGlscy9jb250ZW50ZnVsUG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGFjZSA9ICdyYWFxaTR6aDY3dXEnO1xuY29uc3QgYWNjZXNzVG9rZW4gPSAnNkwzTkFJR0MzM3dHaVBQeXlfeWZMSVpuZ1R1Q05JTG1BenZaN1htNkM1NCc7XG5cbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogc3BhY2UsXG4gIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEVudHJpZXMoKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcygpXG4gIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgZmV0Y2hFbnRyaWVzIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/contentfulPosts.js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

/***/ }),

/***/ "lightgallery/plugins/thumbnail":
/*!*************************************************!*\
  !*** external "lightgallery/plugins/thumbnail" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lightgallery/plugins/thumbnail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWdodGdhbGxlcnkvcGx1Z2lucy90aHVtYm5haWxcIj82MDU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxpZ2h0Z2FsbGVyeS9wbHVnaW5zL3RodW1ibmFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxpZ2h0Z2FsbGVyeS9wbHVnaW5zL3RodW1ibmFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lightgallery/plugins/thumbnail\n");

/***/ }),

/***/ "lightgallery/plugins/zoom":
/*!********************************************!*\
  !*** external "lightgallery/plugins/zoom" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lightgallery/plugins/zoom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWdodGdhbGxlcnkvcGx1Z2lucy96b29tXCI/ZjMwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJsaWdodGdhbGxlcnkvcGx1Z2lucy96b29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGlnaHRnYWxsZXJ5L3BsdWdpbnMvem9vbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lightgallery/plugins/zoom\n");

/***/ }),

/***/ "lightgallery/react":
/*!*************************************!*\
  !*** external "lightgallery/react" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lightgallery/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWdodGdhbGxlcnkvcmVhY3RcIj9jMDM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxpZ2h0Z2FsbGVyeS9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxpZ2h0Z2FsbGVyeS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lightgallery/react\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });