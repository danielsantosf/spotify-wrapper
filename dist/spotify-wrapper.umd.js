(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return getAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return getAlbumTracks; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* global fetch */


var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(id)).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/?ids=").concat(ids)).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(id, "/tracks")).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'https://api.spotify.com/v1';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlaylists, getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["searchArtists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["searchAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["searchTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["searchPlaylists"]; });

/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ "./src/album.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return _album__WEBPACK_IMPORTED_MODULE_1__["getAlbumTracks"]; });





/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return searchAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return searchPlaylists; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


var search = function search(query, type) {
  return fetch("https://api.spotify.com/v1/search?q=".concat(query, "&type=").concat(type)).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};
var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
var toJSON = function toJSON(data) {
  return data.json();
};

/***/ })

/******/ });
});
//# sourceMappingURL=spotify-wrapper.umd.js.map