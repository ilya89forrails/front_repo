/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var element = '\t<div class="' + _app2.default.profile + '">\n\t\t<img class="' + _app2.default.profile__image + '" src="https://s3.eu-central-1.amazonaws.com/assets-mkdev/courses/frontend/person-userpic.png">\n\t\t\t<h3>Kirsten McKellar</h3>\n\t\t\t<label class="' + _app2.default.profile__location + '">Cape Town, RSA</label>\n\t\t\t<hr>\n\t\t<table class="' + _app2.default.profile_info + '">\n\t\t\t<tr>\n\t\t\t\t<td class="' + _app2.default.profile_info__title + '">Nickname:</td>\n\t\t\t\t<td class="' + _app2.default.profile_info__descr + '">Killa Kella</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class="' + _app2.default.profile_info__title + '">Tel:</td>\n\t\t\t\t<td class="' + _app2.default.profile_info__descr + '">072 143 9920</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class="' + _app2.default.profile_info__title + '">Date Of Birth:</td>\n\t\t\t\t<td class="' + _app2.default.profile_info__descr + '">July 12, 1988</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class="' + _app2.default.profile_info__title + '">Gender:</td>\n\t\t\t\t<td class="' + _app2.default.profile_info__descr + '">Female</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class="' + _app2.default.profile_info__title + '">Language:</td>\n\t\t\t\t<td class="' + _app2.default.profile_info__descr + '">English</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n';

	document.write(element);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"profile":"app__profile___2XNad","profile__image":"app__profile__image___e5qj3","profile__location":"app__profile__location___rtSB8","profile_info":"app__profile_info___39e1d","profile_info__title":"app__profile_info__title___2UFuw","profile_info__descr":"app__profile_info__descr___4iuoP"};

/***/ }
/******/ ]);