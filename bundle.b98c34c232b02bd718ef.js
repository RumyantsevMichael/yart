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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ExamplePackage/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableCell.pcss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/ExamplePackage/components/CustomTableCell.pcss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CustomTableCell__component___7LWmU {\n    width: 100%;\n    height: 100%;\n    font-size: 0.875rem;\n    padding: 0.625rem;\n    border-left: 0.0625rem solid #AAAAAA;\n    border-bottom: 0.0625rem solid #AAAAAA;\n    background-color: #FFFFFF;\n\n    display: flex;\n    align-items: center;\n    justify-content: left;\n}\n\n.CustomTableCell__component___7LWmU > input[type=\"text\"] {\n    width: 100%;\n    height: 1.75rem;\n    font-size: 0.875rem;\n    font-family: inherit;\n    padding: 0.1875rem 0.375rem;\n    border: 0.0625rem solid #EEEEEE;\n    box-sizing: border-box;\n}\n\n.CustomTableCell__component___7LWmU > select {\n    width: 100%;\n    height: 1.75rem;\n    font-size: 0.875rem;\n    font-family: inherit;\n    padding: 0.1875rem 0.375rem;\n    border: 0.0625rem solid #EEEEEE;\n    box-sizing: border-box;\n}\n\n.CustomTableCell__component___7LWmU > input[type=\"checkbox\"] {\n    width: 1rem;\n    height: 1rem;\n    margin: 0;\n    border: 0.0625rem solid #EEEEEE;\n    box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"component": "CustomTableCell__component___7LWmU"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableHeadCell.pcss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/ExamplePackage/components/CustomTableHeadCell.pcss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CustomTableHeadCell__component___3vqq3 {\n    width: 100%;\n    height: 100%;\n    padding: 0.625rem;\n    font-size: 0.875rem;\n    border-left: 0.0625rem solid #AAAAAA;\n    border-bottom: 0.0625rem solid #AAAAAA;\n    background-color: #333333;\n    color: #FFFFFF;\n\n    display: flex;\n    align-items: center;\n    justify-content: left;\n}\n", ""]);

// exports
exports.locals = {
	"component": "CustomTableHeadCell__component___3vqq3"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableShowcase.pcss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/ExamplePackage/components/CustomTableShowcase.pcss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CustomTableShowcase__tableWrapper___B6zfW {\n    max-width: 700px;\n    border-top: 0.0625rem solid #AAAAAA;\n    border-right: 0.0625rem solid #AAAAAA;\n}\n", ""]);

// exports
exports.locals = {
	"tableWrapper": "CustomTableShowcase__tableWrapper___B6zfW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/containers/Example.pcss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/ExamplePackage/containers/Example.pcss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Example__container___2oNOZ {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    padding: 1.25rem 0.625rem;\n}\n\n.Example__resizableCard___21yGB {\n    width: 43.75rem;\n    background-color: #ffffff;\n    border-radius: 0.25rem;\n    box-shadow: 0 0.0625rem 0.125rem hsla(0, 0%, 0%, 0.12);\n    padding: 1.25rem;\n    resize: both;\n    overflow: auto;\n    margin-bottom: 1.25rem;\n}\n\n.Example__cardTitle___1Mzar {\n    font-size: 1rem;\n    font-weight: bold;\n    margin-bottom: 1.25rem;\n}\n\n", ""]);

// exports
exports.locals = {
	"container": "Example__container___2oNOZ",
	"resizableCard": "Example__resizableCard___21yGB",
	"cardTitle": "Example__cardTitle___1Mzar"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/index.pcss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/ExamplePackage/index.pcss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n    background-color: var(--color-background);\n\n    font-family: 'Segoe UI', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Cell.pcss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/GridTablePackage/MainModule/components/Cell.pcss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Cell__component___1uEVY {\n\n}\n", ""]);

// exports
exports.locals = {
	"component": "Cell__component___1uEVY"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Header.pcss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/GridTablePackage/MainModule/components/Header.pcss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Header__component___hHWiJ {\n    display: flex;\n\n    flex-direction: row;\n}\n\n.Header__columnsPinned___17KfQ {\n    position: sticky;\n    z-index: 2;\n    display: flex;\n}\n\n.Header__columnsPinnedLeft___Fwvqa {\n    left: 0;\n}\n\n.Header__columnsPinnedRight___1M4-1 {\n    right: 0;\n}\n", ""]);

// exports
exports.locals = {
	"component": "Header__component___hHWiJ",
	"columnsPinned": "Header__columnsPinned___17KfQ",
	"columnsPinnedLeft": "Header__columnsPinnedLeft___Fwvqa Header__columnsPinned___17KfQ",
	"columnsPinnedRight": "Header__columnsPinnedRight___1M4-1 Header__columnsPinned___17KfQ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Row.pcss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/GridTablePackage/MainModule/components/Row.pcss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Row__component___11efe {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n}\n\n.Row__columnsPinned___3fG3H {\n    position: sticky;\n    z-index: 2;\n    display: flex;\n}\n\n.Row__columnsPinnedLeft___1sDtC {\n    left: 0;\n}\n\n.Row__columnsPinnedRight___2pSID {\n    right: 0;\n}\n", ""]);

// exports
exports.locals = {
	"component": "Row__component___11efe",
	"columnsPinned": "Row__columnsPinned___3fG3H",
	"columnsPinnedLeft": "Row__columnsPinnedLeft___1sDtC Row__columnsPinned___3fG3H",
	"columnsPinnedRight": "Row__columnsPinnedRight___2pSID Row__columnsPinned___3fG3H"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Table.pcss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/GridTablePackage/MainModule/components/Table.pcss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Table__component___ud1uZ {\n    overflow: overlay;\n\n    display: grid;\n}\n\n.Table__columns___2Pohx {\n    position: relative;\n}\n\n.Table__inner___1ccrR {\n    position: relative;\n}\n\n.Table__header___3o0mW {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.Table__footer___2a6mj {\n    position: sticky;\n    bottom: 0;\n    z-index: 1;\n}\n", ""]);

// exports
exports.locals = {
	"component": "Table__component___ud1uZ",
	"columns": "Table__columns___2Pohx",
	"inner": "Table__inner___1ccrR",
	"header": "Table__header___3o0mW",
	"footer": "Table__footer___2a6mj"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/index.pcss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./src/index.pcss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n    --color-background: #EFF3F6;\n    --color-surface: #FFFFFF;\n    --color-surface-dark: #0F1922;\n    --color-surface-light-dark: #1D2B36;\n\n    --color-primary-light: #3296B9;\n    --color-primary: #2387AA;\n    --color-primary-dark: #005578;\n\n    --color-success: #1BB934;\n    --color-error: #d4595d;\n    --color-error-bg: #FBEAE5;\n    --color-error-text: #BD000A;\n\n    --color-on-primary: #FFFFFF;\n    --color-on-background: #2D373C;\n    --color-on-surface: #606060;\n\n    --color-hint: #7F8FA4;\n    --color-divider: #DFE2E5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendor_e22f1c6462583c0c3b15 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_e22f1c6462583c0c3b15 */ "dll-reference vendor_e22f1c6462583c0c3b15"))(4);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor_e22f1c6462583c0c3b15 ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_e22f1c6462583c0c3b15 */ "dll-reference vendor_e22f1c6462583c0c3b15"))(0);

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableCell.pcss":
/*!************************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableCell.pcss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/lib??ref--5-2!./CustomTableCell.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableCell.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableCell.tsx":
/*!***********************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableCell.tsx ***!
  \***********************************************************/
/*! exports provided: CustomTableCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableCell", function() { return CustomTableCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomTableCell_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTableCell.pcss */ "./src/ExamplePackage/components/CustomTableCell.pcss");
/* harmony import */ var _CustomTableCell_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CustomTableCell_pcss__WEBPACK_IMPORTED_MODULE_1__);


class CustomTableCell extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { align, background } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CustomTableCell_pcss__WEBPACK_IMPORTED_MODULE_1__["component"], style: {
                justifyContent: align === undefined ? undefined : align,
                background: background === undefined ? undefined : background,
            } }, this.props.children));
    }
    ;
}


/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableHeadCell.pcss":
/*!****************************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableHeadCell.pcss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/lib??ref--5-2!./CustomTableHeadCell.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableHeadCell.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableHeadCell.tsx":
/*!***************************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableHeadCell.tsx ***!
  \***************************************************************/
/*! exports provided: CustomTableHeadCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableHeadCell", function() { return CustomTableHeadCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomTableHeadCell_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTableHeadCell.pcss */ "./src/ExamplePackage/components/CustomTableHeadCell.pcss");
/* harmony import */ var _CustomTableHeadCell_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CustomTableHeadCell_pcss__WEBPACK_IMPORTED_MODULE_1__);


class CustomTableHeadCell extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { align, background } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CustomTableHeadCell_pcss__WEBPACK_IMPORTED_MODULE_1__["component"], style: {
                justifyContent: align === undefined ? undefined : align,
                background: background === undefined ? undefined : background,
            } }, this.props.children));
    }
    ;
}


/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableShowcase.pcss":
/*!****************************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableShowcase.pcss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/lib??ref--5-2!./CustomTableShowcase.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/components/CustomTableShowcase.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ExamplePackage/components/CustomTableShowcase.tsx":
/*!***************************************************************!*\
  !*** ./src/ExamplePackage/components/CustomTableShowcase.tsx ***!
  \***************************************************************/
/*! exports provided: CustomTableShowcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableShowcase", function() { return CustomTableShowcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GridTablePackage */ "./src/GridTablePackage/index.ts");
/* harmony import */ var _CustomTableHeadCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTableHeadCell */ "./src/ExamplePackage/components/CustomTableHeadCell.tsx");
/* harmony import */ var _CustomTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTableCell */ "./src/ExamplePackage/components/CustomTableCell.tsx");
/* harmony import */ var _types_ContentAligment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/ContentAligment */ "./src/ExamplePackage/types/ContentAligment.ts");
/* harmony import */ var _CustomTableShowcase_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomTableShowcase.pcss */ "./src/ExamplePackage/components/CustomTableShowcase.pcss");
/* harmony import */ var _CustomTableShowcase_pcss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CustomTableShowcase_pcss__WEBPACK_IMPORTED_MODULE_5__);






class CustomTableShowcase extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            tableData: [
                {
                    name: 'John',
                    country: 'USA',
                    age: '32',
                    hasDog: true,
                },
                {
                    name: 'Michael',
                    country: 'Australia',
                    age: '24',
                    hasDog: true,
                },
                {
                    name: 'Sophie',
                    country: 'France',
                    age: '24',
                    hasDog: true,
                },
            ],
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CustomTableShowcase_pcss__WEBPACK_IMPORTED_MODULE_5__["tableWrapper"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Table"], { data: this.state.tableData, rowKeys: this.state.tableData.map((item, index) => index) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Name', field: 'name', minWidth: '100px', renderHead: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableHeadCell__WEBPACK_IMPORTED_MODULE_2__["CustomTableHeadCell"], null, props.name)), renderCell: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableCell__WEBPACK_IMPORTED_MODULE_3__["CustomTableCell"], { background: '#EEEEEE' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", value: props.value }))), pinned: _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["PinnedPlacement"].left }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Age', field: 'age', width: '80px', renderHead: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableHeadCell__WEBPACK_IMPORTED_MODULE_2__["CustomTableHeadCell"], { align: _types_ContentAligment__WEBPACK_IMPORTED_MODULE_4__["ContentAligment"].center }, props.name)), renderCell: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableCell__WEBPACK_IMPORTED_MODULE_3__["CustomTableCell"], { align: _types_ContentAligment__WEBPACK_IMPORTED_MODULE_4__["ContentAligment"].center }, props.value)) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Country', field: 'country', minWidth: '100px', renderHead: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableHeadCell__WEBPACK_IMPORTED_MODULE_2__["CustomTableHeadCell"], null, props.name)), renderCell: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableCell__WEBPACK_IMPORTED_MODULE_3__["CustomTableCell"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: props.value },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", null, "USA"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", null, "France"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", null, "Australia")))) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Has Dog', field: 'hasDog', maxWidth: '100px', renderHead: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableHeadCell__WEBPACK_IMPORTED_MODULE_2__["CustomTableHeadCell"], { align: _types_ContentAligment__WEBPACK_IMPORTED_MODULE_4__["ContentAligment"].center }, props.name)), renderCell: (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomTableCell__WEBPACK_IMPORTED_MODULE_3__["CustomTableCell"], { align: _types_ContentAligment__WEBPACK_IMPORTED_MODULE_4__["ContentAligment"].center, background: '#EEEEEE' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: props.value }))), pinned: _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["PinnedPlacement"].right }))));
    }
}


/***/ }),

/***/ "./src/ExamplePackage/components/TableShowcase.tsx":
/*!*********************************************************!*\
  !*** ./src/ExamplePackage/components/TableShowcase.tsx ***!
  \*********************************************************/
/*! exports provided: TableShowcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableShowcase", function() { return TableShowcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GridTablePackage */ "./src/GridTablePackage/index.ts");


class TableShowcase extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            tableData: [
                {
                    name: 'John',
                    country: 'USA',
                    age: '32',
                    phone: '+1(345)345-456-45',
                    address: '1562 Fulton St Brooklyn, NY 11213',
                    job: 'Teacher'
                },
                {
                    name: 'Michael',
                    country: 'Australia',
                    age: '32',
                    phone: '+61(45)222-56-12',
                    address: '200 Castlereagh Street Sydney NSW 2000 GPO Box 4288',
                    job: 'Engineer'
                },
                {
                    name: 'Sophie',
                    country: 'France',
                    age: '32',
                    phone: '+33(122)780-12-12',
                    address: '43 Rue de Miromesnil, 75008 Paris',
                    job: 'Designer'
                },
            ]
        };
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Table"], { data: this.state.tableData, rowKeys: [0, 1, 2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Name', field: 'name', pinned: _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["PinnedPlacement"].left }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Age', field: 'age' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Phone Number', field: 'phone' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Address', field: 'address' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["Column"], { name: 'Job', field: 'job', pinned: _GridTablePackage__WEBPACK_IMPORTED_MODULE_1__["PinnedPlacement"].right })));
    }
}


/***/ }),

/***/ "./src/ExamplePackage/containers/Example.pcss":
/*!****************************************************!*\
  !*** ./src/ExamplePackage/containers/Example.pcss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/lib??ref--5-2!./Example.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/containers/Example.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ExamplePackage/containers/Example.tsx":
/*!***************************************************!*\
  !*** ./src/ExamplePackage/containers/Example.tsx ***!
  \***************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Example_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example.pcss */ "./src/ExamplePackage/containers/Example.pcss");
/* harmony import */ var _Example_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Example_pcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TableShowcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableShowcase */ "./src/ExamplePackage/components/TableShowcase.tsx");
/* harmony import */ var _components_CustomTableShowcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomTableShowcase */ "./src/ExamplePackage/components/CustomTableShowcase.tsx");




class Example extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Example_pcss__WEBPACK_IMPORTED_MODULE_1__["container"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Example_pcss__WEBPACK_IMPORTED_MODULE_1__["resizableCard"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Example_pcss__WEBPACK_IMPORTED_MODULE_1__["cardTitle"] }, "Table with default cells"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_TableShowcase__WEBPACK_IMPORTED_MODULE_2__["TableShowcase"], null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Example_pcss__WEBPACK_IMPORTED_MODULE_1__["resizableCard"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Example_pcss__WEBPACK_IMPORTED_MODULE_1__["cardTitle"] }, "Table with custom cells"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_CustomTableShowcase__WEBPACK_IMPORTED_MODULE_3__["CustomTableShowcase"], null))));
    }
}


/***/ }),

/***/ "./src/ExamplePackage/index.pcss":
/*!***************************************!*\
  !*** ./src/ExamplePackage/index.pcss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!./index.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/ExamplePackage/index.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ExamplePackage/index.ts":
/*!*************************************!*\
  !*** ./src/ExamplePackage/index.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Example */ "./src/ExamplePackage/containers/Example.tsx");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./src/ExamplePackage/index.pcss");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_pcss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../index.pcss */ "./src/index.pcss");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_pcss__WEBPACK_IMPORTED_MODULE_4__);





react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_containers_Example__WEBPACK_IMPORTED_MODULE_2__["Example"]), document.querySelector('#app'));


/***/ }),

/***/ "./src/ExamplePackage/types/ContentAligment.ts":
/*!*****************************************************!*\
  !*** ./src/ExamplePackage/types/ContentAligment.ts ***!
  \*****************************************************/
/*! exports provided: ContentAligment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAligment", function() { return ContentAligment; });
var ContentAligment;
(function (ContentAligment) {
    ContentAligment["left"] = "left";
    ContentAligment["right"] = "right";
    ContentAligment["center"] = "center";
})(ContentAligment || (ContentAligment = {}));


/***/ }),

/***/ "./src/GridTablePackage/MainModule/common/classList.ts":
/*!*************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/common/classList.ts ***!
  \*************************************************************/
/*! exports provided: classList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return classList; });
const classList = (list) => {
    return Object.keys(list)
        .filter(className => list[className] === true)
        .join(' ');
};


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Cell.pcss":
/*!**************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Cell.pcss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/lib??ref--5-2!./Cell.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Cell.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Cell.tsx":
/*!*************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Cell.tsx ***!
  \*************************************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cell_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell.pcss */ "./src/GridTablePackage/MainModule/components/Cell.pcss");
/* harmony import */ var _Cell_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cell_pcss__WEBPACK_IMPORTED_MODULE_1__);


class Cell extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Cell_pcss__WEBPACK_IMPORTED_MODULE_1__["component"] }, this.props.value));
    }
}


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Column.tsx":
/*!***************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Column.tsx ***!
  \***************************************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./src/GridTablePackage/MainModule/components/Head.tsx");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/GridTablePackage/MainModule/components/Cell.tsx");



class Column extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return null;
    }
}
Column.defaultProps = {
    renderHead: (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Head__WEBPACK_IMPORTED_MODULE_1__["Head"], Object.assign({}, props)),
    renderCell: (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Cell__WEBPACK_IMPORTED_MODULE_2__["Cell"], Object.assign({}, props)),
};


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Head.tsx":
/*!*************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Head.tsx ***!
  \*************************************************************/
/*! exports provided: Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Head extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, this.props.name));
    }
}


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Header.pcss":
/*!****************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Header.pcss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/lib??ref--5-2!./Header.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Header.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Header.tsx":
/*!***************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Header.tsx ***!
  \***************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.pcss */ "./src/GridTablePackage/MainModule/components/Header.pcss");
/* harmony import */ var _Header_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_pcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/classList */ "./src/GridTablePackage/MainModule/common/classList.ts");
/* harmony import */ var _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/PinnedPlacement */ "./src/GridTablePackage/MainModule/types/PinnedPlacement.ts");




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return this.props.columns.map((column, columnIndex) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: columnIndex, className: Object(_common_classList__WEBPACK_IMPORTED_MODULE_2__["classList"])({
                [_Header_pcss__WEBPACK_IMPORTED_MODULE_1__["columnsPinnedLeft"]]: column.pinned === _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__["PinnedPlacement"].left,
                [_Header_pcss__WEBPACK_IMPORTED_MODULE_1__["columnsPinnedRight"]]: column.pinned === _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__["PinnedPlacement"].right,
            }) }, column.renderHead(column))));
    }
}


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/List.tsx":
/*!*************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/List.tsx ***!
  \*************************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/GridTablePackage/MainModule/components/Row.tsx");


class List extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { data, rowKeys, rowComponent: Row, columns } = this.props;
        return rowKeys.map((key, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Row, { key: key, rowKey: key, index: index, datum: data[key], columns: columns })));
    }
}
List.defaultProps = {
    rowComponent: _Row__WEBPACK_IMPORTED_MODULE_1__["Row"],
};


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Row.pcss":
/*!*************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Row.pcss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/lib??ref--5-2!./Row.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Row.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Row.tsx":
/*!************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Row.tsx ***!
  \************************************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row.pcss */ "./src/GridTablePackage/MainModule/components/Row.pcss");
/* harmony import */ var _Row_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Row_pcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/classList */ "./src/GridTablePackage/MainModule/common/classList.ts");
/* harmony import */ var _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/PinnedPlacement */ "./src/GridTablePackage/MainModule/types/PinnedPlacement.ts");




class Row extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { datum, rowKey, index: rowIndex, columns } = this.props;
        return columns.map((column, columnIndex) => {
            const value = datum === undefined ? undefined : datum[column.field];
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: columnIndex, className: Object(_common_classList__WEBPACK_IMPORTED_MODULE_2__["classList"])({
                    [_Row_pcss__WEBPACK_IMPORTED_MODULE_1__["component"]]: true,
                    [_Row_pcss__WEBPACK_IMPORTED_MODULE_1__["columnsPinnedLeft"]]: column.pinned === _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__["PinnedPlacement"].left,
                    [_Row_pcss__WEBPACK_IMPORTED_MODULE_1__["columnsPinnedRight"]]: column.pinned === _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_3__["PinnedPlacement"].right,
                }) }, column.renderCell({
                rowKey: rowKey,
                rowIndex: rowIndex,
                value: value,
            })));
        });
    }
}


/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Table.pcss":
/*!***************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Table.pcss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/lib??ref--5-2!./Table.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/GridTablePackage/MainModule/components/Table.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/GridTablePackage/MainModule/components/Table.tsx":
/*!**************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/components/Table.tsx ***!
  \**************************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/GridTablePackage/MainModule/components/Row.tsx");
/* harmony import */ var _Table_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.pcss */ "./src/GridTablePackage/MainModule/components/Table.pcss");
/* harmony import */ var _Table_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Table_pcss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/GridTablePackage/MainModule/components/Header.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./src/GridTablePackage/MainModule/components/List.tsx");





class Table extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            prevChildren: [],
            columns: [],
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.children !== prevState.prevChildren) {
            const children = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(nextProps.children);
            const columnProps = children.map(Table.getProps);
            return {
                prevChildren: nextProps.children,
                columns: columnProps,
            };
        }
        return null;
    }
    static getProps(column) {
        return column.props;
    }
    render() {
        const { data, rowKeys, rowComponent: Row, maxHeight } = this.props;
        const columns = this.state.columns;
        let gridTemplateColumnsValue = '';
        columns.forEach((column) => {
            if (column.width !== undefined) {
                gridTemplateColumnsValue += `${column.width} `;
            }
            else {
                const minWidth = column.minWidth === undefined ? 'min-content' : column.minWidth;
                const maxWidth = column.maxWidth === undefined ? 'auto' : column.maxWidth;
                gridTemplateColumnsValue += `minmax(${minWidth}, ${maxWidth}) `;
            }
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Table_pcss__WEBPACK_IMPORTED_MODULE_2__["component"], style: {
                maxHeight: maxHeight,
                gridTemplateColumns: gridTemplateColumnsValue,
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], { columns: columns }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_List__WEBPACK_IMPORTED_MODULE_4__["List"], { data: data, rowKeys: rowKeys, rowComponent: Row, columns: columns })));
    }
}
Table.defaultProps = {
    rowComponent: _Row__WEBPACK_IMPORTED_MODULE_1__["Row"],
};


/***/ }),

/***/ "./src/GridTablePackage/MainModule/index.ts":
/*!**************************************************!*\
  !*** ./src/GridTablePackage/MainModule/index.ts ***!
  \**************************************************/
/*! exports provided: Table, Column, PinnedPlacement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Table */ "./src/GridTablePackage/MainModule/components/Table.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _components_Table__WEBPACK_IMPORTED_MODULE_0__["Table"]; });

/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Column */ "./src/GridTablePackage/MainModule/components/Column.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _components_Column__WEBPACK_IMPORTED_MODULE_1__["Column"]; });

/* harmony import */ var _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/PinnedPlacement */ "./src/GridTablePackage/MainModule/types/PinnedPlacement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinnedPlacement", function() { return _types_PinnedPlacement__WEBPACK_IMPORTED_MODULE_2__["PinnedPlacement"]; });






/***/ }),

/***/ "./src/GridTablePackage/MainModule/types/PinnedPlacement.ts":
/*!******************************************************************!*\
  !*** ./src/GridTablePackage/MainModule/types/PinnedPlacement.ts ***!
  \******************************************************************/
/*! exports provided: PinnedPlacement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinnedPlacement", function() { return PinnedPlacement; });
var PinnedPlacement;
(function (PinnedPlacement) {
    PinnedPlacement["left"] = "left";
    PinnedPlacement["right"] = "right";
})(PinnedPlacement || (PinnedPlacement = {}));


/***/ }),

/***/ "./src/GridTablePackage/index.ts":
/*!***************************************!*\
  !*** ./src/GridTablePackage/index.ts ***!
  \***************************************/
/*! exports provided: Table, Column, PinnedPlacement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainModule */ "./src/GridTablePackage/MainModule/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _MainModule__WEBPACK_IMPORTED_MODULE_0__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _MainModule__WEBPACK_IMPORTED_MODULE_0__["Column"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinnedPlacement", function() { return _MainModule__WEBPACK_IMPORTED_MODULE_0__["PinnedPlacement"]; });




/***/ }),

/***/ "./src/index.pcss":
/*!************************!*\
  !*** ./src/index.pcss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/postcss-loader/lib??ref--5-2!./index.pcss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/index.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "dll-reference vendor_e22f1c6462583c0c3b15":
/*!**********************************************!*\
  !*** external "vendor_e22f1c6462583c0c3b15" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_e22f1c6462583c0c3b15;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvRXhhbXBsZVBhY2thZ2UvY29tcG9uZW50cy9DdXN0b21UYWJsZUNlbGwucGNzcyIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvRXhhbXBsZVBhY2thZ2UvY29tcG9uZW50cy9DdXN0b21UYWJsZUhlYWRDZWxsLnBjc3MiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvQ3VzdG9tVGFibGVTaG93Y2FzZS5wY3NzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9FeGFtcGxlUGFja2FnZS9jb250YWluZXJzL0V4YW1wbGUucGNzcyIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvRXhhbXBsZVBhY2thZ2UvaW5kZXgucGNzcyIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2NvbXBvbmVudHMvQ2VsbC5wY3NzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvY29tcG9uZW50cy9IZWFkZXIucGNzcyIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2NvbXBvbmVudHMvUm93LnBjc3MiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL1RhYmxlLnBjc3MiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL2luZGV4LnBjc3MiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L2RlbGVnYXRlZCA0IGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTIyZjFjNjQ2MjU4M2MwYzNiMTUiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3QvZGVsZWdhdGVkIDAgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMjJmMWM2NDYyNTgzYzBjM2IxNSIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZVBhY2thZ2UvY29tcG9uZW50cy9DdXN0b21UYWJsZUNlbGwucGNzcz9lZmYzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9FeGFtcGxlUGFja2FnZS9jb21wb25lbnRzL0N1c3RvbVRhYmxlQ2VsbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvQ3VzdG9tVGFibGVIZWFkQ2VsbC5wY3NzPzZkMTYiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvQ3VzdG9tVGFibGVIZWFkQ2VsbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvQ3VzdG9tVGFibGVTaG93Y2FzZS5wY3NzPzI2YzMiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvQ3VzdG9tVGFibGVTaG93Y2FzZS50c3giLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL2NvbXBvbmVudHMvVGFibGVTaG93Y2FzZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVQYWNrYWdlL2NvbnRhaW5lcnMvRXhhbXBsZS5wY3NzP2QzOGIiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL2NvbnRhaW5lcnMvRXhhbXBsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVQYWNrYWdlL2luZGV4LnBjc3M/NzBkZSIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvRXhhbXBsZVBhY2thZ2UvaW5kZXgudHMiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0V4YW1wbGVQYWNrYWdlL3R5cGVzL0NvbnRlbnRBbGlnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2NvbW1vbi9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL0NlbGwucGNzcz84MzVkIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvY29tcG9uZW50cy9DZWxsLnRzeCIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2NvbXBvbmVudHMvQ29sdW1uLnRzeCIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2NvbXBvbmVudHMvSGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL0hlYWRlci5wY3NzP2ViYjkiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL0hlYWRlci50c3giLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvY29tcG9uZW50cy9Sb3cucGNzcz80MjgxIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvY29tcG9uZW50cy9Sb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvY29tcG9uZW50cy9UYWJsZS5wY3NzPzYxMTAiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3Qvc3JjL0dyaWRUYWJsZVBhY2thZ2UvTWFpbk1vZHVsZS9jb21wb25lbnRzL1RhYmxlLnRzeCIsImZpbGU6Ly8vL2hvbWUvY2lyY2xlY2kvcHJvamVjdC9zcmMvR3JpZFRhYmxlUGFja2FnZS9NYWluTW9kdWxlL2luZGV4LnRzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9HcmlkVGFibGVQYWNrYWdlL01haW5Nb2R1bGUvdHlwZXMvUGlubmVkUGxhY2VtZW50LnRzIiwiZmlsZTovLy8vaG9tZS9jaXJjbGVjaS9wcm9qZWN0L3NyYy9HcmlkVGFibGVQYWNrYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5wY3NzPzU1ZjAiLCJmaWxlOi8vLy9ob21lL2NpcmNsZWNpL3Byb2plY3QvZXh0ZXJuYWwgXCJ2ZW5kb3JfZTIyZjFjNjQ2MjU4M2MwYzNiMTVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx3Q0FBd0Msa0JBQWtCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLDJDQUEyQyw2Q0FBNkMsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsNEJBQTRCLEdBQUcsZ0VBQWdFLGtCQUFrQixzQkFBc0IsMEJBQTBCLDJCQUEyQixrQ0FBa0Msc0NBQXNDLDZCQUE2QixHQUFHLGtEQUFrRCxrQkFBa0Isc0JBQXNCLDBCQUEwQiwyQkFBMkIsa0NBQWtDLHNDQUFzQyw2QkFBNkIsR0FBRyxvRUFBb0Usa0JBQWtCLG1CQUFtQixnQkFBZ0Isc0NBQXNDLDZCQUE2QixHQUFHOztBQUV4aEM7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNWQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDRDQUE0QyxrQkFBa0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsMkNBQTJDLDZDQUE2QyxnQ0FBZ0MscUJBQXFCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLEdBQUc7O0FBRXRYO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDVkEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUywrQ0FBK0MsdUJBQXVCLDBDQUEwQyw0Q0FBNEMsR0FBRzs7QUFFdEw7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNWQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxvQkFBb0Isc0JBQXNCLDZCQUE2QixnQ0FBZ0MsR0FBRyxxQ0FBcUMsc0JBQXNCLGdDQUFnQyw2QkFBNkIsNkRBQTZELHVCQUF1QixtQkFBbUIscUJBQXFCLDZCQUE2QixHQUFHLGlDQUFpQyxzQkFBc0Isd0JBQXdCLDZCQUE2QixHQUFHOztBQUVwaUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDWkEsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxTQUFTLGdEQUFnRCw0Q0FBNEMsR0FBRyxPQUFPLDZCQUE2QixHQUFHOztBQUV0Szs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMsc0dBQXFEO0FBQ3hGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsS0FBSzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNWQSwyQkFBMkIsbUJBQU8sQ0FBQyxzR0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLCtCQUErQixvQkFBb0IsNEJBQTRCLEdBQUcsb0NBQW9DLHVCQUF1QixpQkFBaUIsb0JBQW9CLEdBQUcsd0NBQXdDLGNBQWMsR0FBRyx5Q0FBeUMsZUFBZSxHQUFHOztBQUVoVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2JBLDJCQUEyQixtQkFBTyxDQUFDLHNHQUFxRDtBQUN4Rjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLDZCQUE2QixHQUFHLGlDQUFpQyx1QkFBdUIsaUJBQWlCLG9CQUFvQixHQUFHLHFDQUFxQyxjQUFjLEdBQUcsc0NBQXNDLGVBQWUsR0FBRzs7QUFFelc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNiQSwyQkFBMkIsbUJBQU8sQ0FBQyxzR0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4Qix3QkFBd0Isc0JBQXNCLEdBQUcsNkJBQTZCLHlCQUF5QixHQUFHLDJCQUEyQix5QkFBeUIsR0FBRyw0QkFBNEIsdUJBQXVCLGFBQWEsaUJBQWlCLEdBQUcsNEJBQTRCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUc7O0FBRWpZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNkQSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsa0NBQWtDLCtCQUErQixvQ0FBb0MsMENBQTBDLHVDQUF1QywrQkFBK0Isb0NBQW9DLGlDQUFpQyw2QkFBNkIsZ0NBQWdDLGtDQUFrQyxvQ0FBb0MscUNBQXFDLGtDQUFrQyw4QkFBOEIsK0JBQStCLEdBQUc7O0FBRXJrQjs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBLHdJOzs7Ozs7Ozs7OztBQ0FBLHdJOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBLGNBQWMsbUJBQU8sQ0FBQyxtUUFBMEk7O0FBRWhLLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDZTtBQVN2QyxNQUFNLGVBQWdCLFNBQVEsbURBQTBCO0lBQzNELE1BQU07UUFDRixNQUFNLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdkMsT0FBTyxDQUNILDZEQUNJLFNBQVMsRUFBRSwrREFBYSxFQUN4QixLQUFLLEVBQUU7Z0JBQ0gsY0FBYyxFQUFFLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDdkQsVUFBVSxFQUFFLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVTthQUNoRSxJQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUNUO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7OztBQ3pCRCxjQUFjLG1CQUFPLENBQUMsMlFBQThJOztBQUVwSyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ21CO0FBUzNDLE1BQU0sbUJBQW9CLFNBQVEsbURBQTBCO0lBQy9ELE1BQU07UUFDRixNQUFNLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdkMsT0FBTyxDQUNILDZEQUNJLFNBQVMsRUFBRSxtRUFBYSxFQUN4QixLQUFLLEVBQUU7Z0JBQ0gsY0FBYyxFQUFFLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDdkQsVUFBVSxFQUFFLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVTthQUNoRSxJQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUNUO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7OztBQ3pCRCxjQUFjLG1CQUFPLENBQUMsMlFBQThJOztBQUVwSyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDeUM7QUFDWjtBQUNSO0FBQ087QUFDVDtBQWUzQyxNQUFNLG1CQUFvQixTQUFRLG1EQUFpQztJQUExRTs7UUFDYSxVQUFLLEdBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxLQUFLO29CQUNkLEdBQUcsRUFBRSxJQUFJO29CQUNULE1BQU0sRUFBRSxJQUFJO2lCQUNmO2dCQUNEO29CQUNJLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxXQUFXO29CQUNwQixHQUFHLEVBQUUsSUFBSTtvQkFDVCxNQUFNLEVBQUUsSUFBSTtpQkFDZjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsUUFBUTtvQkFDakIsR0FBRyxFQUFFLElBQUk7b0JBQ1QsTUFBTSxFQUFFLElBQUk7aUJBQ2Y7YUFDSjtTQUNKLENBQUM7SUF5Rk4sQ0FBQztJQXZGRyxNQUFNO1FBQ0YsT0FBTyxDQUNILDZEQUFLLFNBQVMsRUFBRSxzRUFBZ0I7WUFDNUIsb0RBQUMsdURBQUssSUFDRixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBRXpELG9EQUFDLHdEQUFNLElBQ0gsSUFBSSxFQUFFLE1BQU0sRUFDWixLQUFLLEVBQUUsTUFBTSxFQUNiLFFBQVEsRUFBRSxPQUFPLEVBQ2pCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDbkIsb0RBQUMsd0VBQW1CLFFBQUUsS0FBSyxDQUFDLElBQUksQ0FBdUIsQ0FDMUQsRUFDRCxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ25CLG9EQUFDLGdFQUFlLElBQ1osVUFBVSxFQUFFLFNBQVM7d0JBRXJCLCtEQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FDMUIsQ0FDckIsRUFDRCxNQUFNLEVBQUUsaUVBQWUsQ0FBQyxJQUFJLEdBQzlCO2dCQUVGLG9EQUFDLHdEQUFNLElBQ0gsSUFBSSxFQUFFLEtBQUssRUFDWCxLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxNQUFNLEVBQ2IsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNuQixvREFBQyx3RUFBbUIsSUFDaEIsS0FBSyxFQUFFLHNFQUFlLENBQUMsTUFBTSxJQUU1QixLQUFLLENBQUMsSUFBSSxDQUNPLENBQ3pCLEVBQ0QsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNuQixvREFBQyxnRUFBZSxJQUNaLEtBQUssRUFBRSxzRUFBZSxDQUFDLE1BQU0sSUFFNUIsS0FBSyxDQUFDLEtBQUssQ0FDRSxDQUNyQixHQUNIO2dCQUVGLG9EQUFDLHdEQUFNLElBQ0gsSUFBSSxFQUFFLFNBQVMsRUFDZixLQUFLLEVBQUUsU0FBUyxFQUNoQixRQUFRLEVBQUUsT0FBTyxFQUNqQixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ25CLG9EQUFDLHdFQUFtQixRQUFFLEtBQUssQ0FBQyxJQUFJLENBQXVCLENBQzFELEVBQ0QsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNuQixvREFBQyxnRUFBZTt3QkFDWixnRUFBUSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7NEJBQ3RCLDBFQUFvQjs0QkFDcEIsNkVBQXVCOzRCQUN2QixnRkFBMEIsQ0FDckIsQ0FDSyxDQUNyQixHQUNIO2dCQUVGLG9EQUFDLHdEQUFNLElBQ0gsSUFBSSxFQUFFLFNBQVMsRUFDZixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxPQUFPLEVBQ2pCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDbkIsb0RBQUMsd0VBQW1CLElBQ2hCLEtBQUssRUFBRSxzRUFBZSxDQUFDLE1BQU0sSUFFNUIsS0FBSyxDQUFDLElBQUksQ0FDTyxDQUN6QixFQUNELFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDbkIsb0RBQUMsZ0VBQWUsSUFDWixLQUFLLEVBQUUsc0VBQWUsQ0FBQyxNQUFNLEVBQzdCLFVBQVUsRUFBRSxTQUFTO3dCQUVyQiwrREFBTyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQ2xDLENBQ3JCLEVBQ0QsTUFBTSxFQUFFLGlFQUFlLENBQUMsS0FBSyxHQUMvQixDQUNFLENBQ04sQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDbklEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDeUM7QUFpQmpFLE1BQU0sYUFBYyxTQUFRLG1EQUFpQztJQUFwRTs7UUFDYSxVQUFLLEdBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxLQUFLO29CQUNkLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxtQkFBbUI7b0JBQzFCLE9BQU8sRUFBRSxtQ0FBbUM7b0JBQzVDLEdBQUcsRUFBRSxTQUFTO2lCQUNqQjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsV0FBVztvQkFDcEIsR0FBRyxFQUFFLElBQUk7b0JBQ1QsS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsT0FBTyxFQUFFLHFEQUFxRDtvQkFDOUQsR0FBRyxFQUFFLFVBQVU7aUJBQ2xCO2dCQUNEO29CQUNJLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO29CQUNqQixHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsbUJBQW1CO29CQUMxQixPQUFPLEVBQUUsbUNBQW1DO29CQUM1QyxHQUFHLEVBQUUsVUFBVTtpQkFDbEI7YUFDSjtTQUNKLENBQUM7SUFxQ04sQ0FBQztJQW5DRyxNQUFNO1FBQ0YsT0FBTyxDQUNILG9EQUFDLHVEQUFLLElBQ0YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMxQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVsQixvREFBQyx3REFBTSxJQUNILElBQUksRUFBRSxNQUFNLEVBQ1osS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsaUVBQWUsQ0FBQyxJQUFJLEdBQzlCO1lBRUYsb0RBQUMsd0RBQU0sSUFDSCxJQUFJLEVBQUUsS0FBSyxFQUNYLEtBQUssRUFBRSxLQUFLLEdBQ2Q7WUFFRixvREFBQyx3REFBTSxJQUNILElBQUksRUFBRSxjQUFjLEVBQ3BCLEtBQUssRUFBRSxPQUFPLEdBQ2hCO1lBRUYsb0RBQUMsd0RBQU0sSUFDSCxJQUFJLEVBQUUsU0FBUyxFQUNmLEtBQUssRUFBRSxTQUFTLEdBQ2xCO1lBRUYsb0RBQUMsd0RBQU0sSUFDSCxJQUFJLEVBQUUsS0FBSyxFQUNYLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLGlFQUFlLENBQUMsS0FBSyxHQUMvQixDQUNFLENBQ1gsQ0FBQztJQUNOLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2xGRCxjQUFjLG1CQUFPLENBQUMsbVBBQWtJOztBQUV4Siw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNPO0FBQ3NCO0FBQ1k7QUFLakUsTUFBTSxPQUFRLFNBQVEsbURBQWlDO0lBRTFELE1BQU07UUFDRixPQUFPLENBQ0gsNkRBQUssU0FBUyxFQUFFLHVEQUFhO1lBQ3pCLDZEQUFLLFNBQVMsRUFBRSwyREFBaUI7Z0JBQzdCLDZEQUFLLFNBQVMsRUFBRSx1REFBYSwrQkFBZ0M7Z0JBQzdELG9EQUFDLHVFQUFhLE9BQUcsQ0FDZjtZQUNOLDZEQUFLLFNBQVMsRUFBRSwyREFBaUI7Z0JBQzdCLDZEQUFLLFNBQVMsRUFBRSx1REFBYSw4QkFBK0I7Z0JBQzVELG9EQUFDLG1GQUFtQixPQUFHLENBQ3JCLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJELGNBQWMsbUJBQU8sQ0FBQyw4TkFBMEg7O0FBRWhKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNPO0FBQ1M7QUFDekI7QUFDRztBQUV6QixnREFBZSxDQUNYLG1EQUFtQixDQUFDLDJEQUFPLENBQUMsRUFDNUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FDakMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1RGO0FBQUE7QUFBQSxJQUFZLGVBSVg7QUFKRCxXQUFZLGVBQWU7SUFDdkIsZ0NBQWE7SUFDYixrQ0FBZTtJQUNmLG9DQUFpQjtBQUNyQixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQU8sTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFlLEVBQUUsRUFBRTtJQUN6QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUM7U0FDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0xGLGNBQWMsbUJBQU8sQ0FBQyxnUUFBcUk7O0FBRTNKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0R0FBeUQ7O0FBRTlFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFSTtBQUs1QixNQUFNLElBQXlDLFNBQVEsbURBQWdDO0lBQzFGLE1BQU07UUFDRixPQUFPLENBQ0gsNkRBQUssU0FBUyxFQUFFLG9EQUFhLElBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNmLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNEO0FBQ0E7QUFPdkIsTUFBTSxNQUEyQyxTQUFRLG1EQUFnQztJQU01RixNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7QUFQc0IsbUJBQVksR0FBRztJQUNsQyxVQUFVLEVBQUUsQ0FBcUMsS0FBd0IsRUFBRSxFQUFFLENBQUMsb0RBQUMsMENBQUksb0JBQUssS0FBSyxFQUFHO0lBQ2hHLFVBQVUsRUFBRSxDQUFxQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxvREFBQywwQ0FBSSxvQkFBSyxLQUFLLEVBQUc7Q0FDakcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JOO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBTXhCLE1BQU0sSUFBeUMsU0FBUSwrQ0FBNEI7SUFDdEYsTUFBTTtRQUNGLE9BQU8sQ0FDSCxpRUFDSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDZCxDQUNULENBQUM7SUFDTixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNiRCxjQUFjLG1CQUFPLENBQUMsb1FBQXVJOztBQUU3Siw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUdNO0FBQ1c7QUFDVztBQU1wRCxNQUFNLE1BQXdCLFNBQVEsbURBQTZCO0lBQ3RFLE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQ25ELDZEQUNJLEdBQUcsRUFBRSxXQUFXLEVBQ2hCLFNBQVMsRUFBRSxtRUFBUyxDQUFDO2dCQUNqQixDQUFDLDhEQUFxQixDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sS0FBSyxzRUFBZSxDQUFDLElBQUk7Z0JBQy9ELENBQUMsK0RBQXNCLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxLQUFLLHNFQUFlLENBQUMsS0FBSzthQUNwRSxDQUFDLElBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDeEIsQ0FDVCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNXO0FBWW5DLE1BQU0sSUFBc0IsU0FBUSxtREFBNkI7SUFLcEUsTUFBTTtRQUNGLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUMvQixvREFBQyxHQUFHLElBQ0EsR0FBRyxFQUFFLEdBQUcsRUFDUixNQUFNLEVBQUUsR0FBRyxFQUNYLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDaEIsT0FBTyxFQUFFLE9BQU8sR0FDbEIsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDOztBQWhCc0IsaUJBQVksR0FBRztJQUNsQyxZQUFZLEVBQUUsd0NBQVU7Q0FDM0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZOLGNBQWMsbUJBQU8sQ0FBQyw4UEFBb0k7O0FBRTFKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0R0FBeUQ7O0FBRTlFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBR0c7QUFDYztBQUNXO0FBSXBELE1BQU0sR0FBcUIsU0FBUSxtREFBeUM7SUFDL0UsTUFBTTtRQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUvRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBFLE9BQU8sQ0FDSCw2REFDSSxHQUFHLEVBQUUsV0FBVyxFQUNoQixTQUFTLEVBQUUsbUVBQVMsQ0FBQztvQkFDakIsQ0FBQyxtREFBYSxDQUFDLEVBQUUsSUFBSTtvQkFDckIsQ0FBQywyREFBcUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEtBQUssc0VBQWUsQ0FBQyxJQUFJO29CQUMvRCxDQUFDLDREQUFzQixDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sS0FBSyxzRUFBZSxDQUFDLEtBQUs7aUJBQ3BFLENBQUMsSUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNmLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FDQSxDQUNULENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2xDRCxjQUFjLG1CQUFPLENBQUMsa1FBQXNJOztBQUU1Siw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1c7QUFJTjtBQUNGO0FBQ0o7QUFpQnZCLE1BQU0sS0FBdUIsU0FBUSxtREFBdUM7SUFBbkY7O1FBMEJhLFVBQUssR0FBYTtZQUN2QixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFzQ04sQ0FBQztJQTlEVyxNQUFNLENBQUMsd0JBQXdCLENBQ25DLFNBQW1CLEVBQ25CLFNBQW1CO1FBRW5CLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQy9DLE1BQU0sUUFBUSxHQUF1Qiw4Q0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFRLENBQUM7WUFDdkYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFakQsT0FBTztnQkFDSCxZQUFZLEVBQUUsU0FBUyxDQUFDLFFBQVE7Z0JBQ2hDLE9BQU8sRUFBRSxXQUFXO2FBQ3ZCLENBQUM7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxNQUFNLENBQUMsUUFBUSxDQUFrQixNQUF3QjtRQUM3RCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQU9ELE1BQU07UUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSx3QkFBd0IsR0FBVyxFQUFFLENBQUM7UUFFMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzVCLHdCQUF3QixJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ2pGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRTFFLHdCQUF3QixJQUFJLFVBQVUsUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQ0gsNkRBQ0ksU0FBUyxFQUFFLHFEQUFhLEVBQ3hCLEtBQUssRUFBRTtnQkFDSCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsbUJBQW1CLEVBQUUsd0JBQXdCO2FBQ2hEO1lBRUQsb0RBQUMsOENBQU0sSUFDSCxPQUFPLEVBQUUsT0FBTyxHQUNsQjtZQUNGLG9EQUFDLDBDQUFJLElBQ0QsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsT0FBTyxFQUNoQixZQUFZLEVBQUUsR0FBRyxFQUNqQixPQUFPLEVBQUUsT0FBTyxHQUNsQixDQUNBLENBQ1QsQ0FBQztJQUNOLENBQUM7O0FBakVzQixrQkFBWSxHQUFHO0lBQ2xDLFlBQVksRUFBRSx3Q0FBVTtDQUMzQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0M7QUFDSTs7Ozs7Ozs7Ozs7OztBQ0Z4QztBQUFBO0FBQUEsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3ZCLGdDQUFhO0lBQ2Isa0NBQWU7QUFDbkIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCOzs7Ozs7Ozs7Ozs7O0FDSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7Ozs7Ozs7Ozs7OztBQ0M3QixjQUFjLG1CQUFPLENBQUMseU1BQW9IOztBQUUxSSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZiw2QyIsImZpbGUiOiJidW5kbGUuYjk4YzM0YzIzMmIwMmJkNzE4ZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0V4YW1wbGVQYWNrYWdlL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQ3VzdG9tVGFibGVDZWxsX19jb21wb25lbnRfX183TFdtVSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xcbiAgICBib3JkZXItbGVmdDogMC4wNjI1cmVtIHNvbGlkICNBQUFBQUE7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCAjQUFBQUFBO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5DdXN0b21UYWJsZUNlbGxfX2NvbXBvbmVudF9fXzdMV21VID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjM3NXJlbTtcXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI0VFRUVFRTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLkN1c3RvbVRhYmxlQ2VsbF9fY29tcG9uZW50X19fN0xXbVUgPiBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuMzc1cmVtO1xcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjRUVFRUVFO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uQ3VzdG9tVGFibGVDZWxsX19jb21wb25lbnRfX183TFdtVSA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNFRUVFRUU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbXBvbmVudFwiOiBcIkN1c3RvbVRhYmxlQ2VsbF9fY29tcG9uZW50X19fN0xXbVVcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DdXN0b21UYWJsZUhlYWRDZWxsX19jb21wb25lbnRfX18zdnFxMyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgICBib3JkZXItbGVmdDogMC4wNjI1cmVtIHNvbGlkICNBQUFBQUE7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCAjQUFBQUFBO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb21wb25lbnRcIjogXCJDdXN0b21UYWJsZUhlYWRDZWxsX19jb21wb25lbnRfX18zdnFxM1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkN1c3RvbVRhYmxlU2hvd2Nhc2VfX3RhYmxlV3JhcHBlcl9fX0I2emZXIHtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIHNvbGlkICNBQUFBQUE7XFxuICAgIGJvcmRlci1yaWdodDogMC4wNjI1cmVtIHNvbGlkICNBQUFBQUE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRhYmxlV3JhcHBlclwiOiBcIkN1c3RvbVRhYmxlU2hvd2Nhc2VfX3RhYmxlV3JhcHBlcl9fX0I2emZXXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuRXhhbXBsZV9fY29udGFpbmVyX19fMm9OT1oge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMC42MjVyZW07XFxufVxcblxcbi5FeGFtcGxlX19yZXNpemFibGVDYXJkX19fMjF5R0Ige1xcbiAgICB3aWR0aDogNDMuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMTI1cmVtIGhzbGEoMCwgMCUsIDAlLCAwLjEyKTtcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXG4gICAgcmVzaXplOiBib3RoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLkV4YW1wbGVfX2NhcmRUaXRsZV9fXzFNemFyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRXhhbXBsZV9fY29udGFpbmVyX19fMm9OT1pcIixcblx0XCJyZXNpemFibGVDYXJkXCI6IFwiRXhhbXBsZV9fcmVzaXphYmxlQ2FyZF9fXzIxeUdCXCIsXG5cdFwiY2FyZFRpdGxlXCI6IFwiRXhhbXBsZV9fY2FyZFRpdGxlX19fMU16YXJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DZWxsX19jb21wb25lbnRfX18xdUVWWSB7XFxuXFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbXBvbmVudFwiOiBcIkNlbGxfX2NvbXBvbmVudF9fXzF1RVZZXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyX19jb21wb25lbnRfX19oSFdpSiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5IZWFkZXJfX2NvbHVtbnNQaW5uZWRfX18xN0tmUSB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5IZWFkZXJfX2NvbHVtbnNQaW5uZWRMZWZ0X19fRnd2cWEge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uSGVhZGVyX19jb2x1bW5zUGlubmVkUmlnaHRfX18xTTQtMSB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb21wb25lbnRcIjogXCJIZWFkZXJfX2NvbXBvbmVudF9fX2hIV2lKXCIsXG5cdFwiY29sdW1uc1Bpbm5lZFwiOiBcIkhlYWRlcl9fY29sdW1uc1Bpbm5lZF9fXzE3S2ZRXCIsXG5cdFwiY29sdW1uc1Bpbm5lZExlZnRcIjogXCJIZWFkZXJfX2NvbHVtbnNQaW5uZWRMZWZ0X19fRnd2cWEgSGVhZGVyX19jb2x1bW5zUGlubmVkX19fMTdLZlFcIixcblx0XCJjb2x1bW5zUGlubmVkUmlnaHRcIjogXCJIZWFkZXJfX2NvbHVtbnNQaW5uZWRSaWdodF9fXzFNNC0xIEhlYWRlcl9fY29sdW1uc1Bpbm5lZF9fXzE3S2ZRXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuUm93X19jb21wb25lbnRfX18xMWVmZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5Sb3dfX2NvbHVtbnNQaW5uZWRfX18zZkczSCB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5Sb3dfX2NvbHVtbnNQaW5uZWRMZWZ0X19fMXNEdEMge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uUm93X19jb2x1bW5zUGlubmVkUmlnaHRfX18ycFNJRCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb21wb25lbnRcIjogXCJSb3dfX2NvbXBvbmVudF9fXzExZWZlXCIsXG5cdFwiY29sdW1uc1Bpbm5lZFwiOiBcIlJvd19fY29sdW1uc1Bpbm5lZF9fXzNmRzNIXCIsXG5cdFwiY29sdW1uc1Bpbm5lZExlZnRcIjogXCJSb3dfX2NvbHVtbnNQaW5uZWRMZWZ0X19fMXNEdEMgUm93X19jb2x1bW5zUGlubmVkX19fM2ZHM0hcIixcblx0XCJjb2x1bW5zUGlubmVkUmlnaHRcIjogXCJSb3dfX2NvbHVtbnNQaW5uZWRSaWdodF9fXzJwU0lEIFJvd19fY29sdW1uc1Bpbm5lZF9fXzNmRzNIXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuVGFibGVfX2NvbXBvbmVudF9fX3VkMXVaIHtcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5UYWJsZV9fY29sdW1uc19fXzJQb2h4IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uVGFibGVfX2lubmVyX19fMWNjclIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5UYWJsZV9faGVhZGVyX19fM28wbVcge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5UYWJsZV9fZm9vdGVyX19fMmE2bWoge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbXBvbmVudFwiOiBcIlRhYmxlX19jb21wb25lbnRfX191ZDF1WlwiLFxuXHRcImNvbHVtbnNcIjogXCJUYWJsZV9fY29sdW1uc19fXzJQb2h4XCIsXG5cdFwiaW5uZXJcIjogXCJUYWJsZV9faW5uZXJfX18xY2NyUlwiLFxuXHRcImhlYWRlclwiOiBcIlRhYmxlX19oZWFkZXJfX18zbzBtV1wiLFxuXHRcImZvb3RlclwiOiBcIlRhYmxlX19mb290ZXJfX18yYTZtalwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICNFRkYzRjY7XFxuICAgIC0tY29sb3Itc3VyZmFjZTogI0ZGRkZGRjtcXG4gICAgLS1jb2xvci1zdXJmYWNlLWRhcms6ICMwRjE5MjI7XFxuICAgIC0tY29sb3Itc3VyZmFjZS1saWdodC1kYXJrOiAjMUQyQjM2O1xcblxcbiAgICAtLWNvbG9yLXByaW1hcnktbGlnaHQ6ICMzMjk2Qjk7XFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzIzODdBQTtcXG4gICAgLS1jb2xvci1wcmltYXJ5LWRhcms6ICMwMDU1Nzg7XFxuXFxuICAgIC0tY29sb3Itc3VjY2VzczogIzFCQjkzNDtcXG4gICAgLS1jb2xvci1lcnJvcjogI2Q0NTk1ZDtcXG4gICAgLS1jb2xvci1lcnJvci1iZzogI0ZCRUFFNTtcXG4gICAgLS1jb2xvci1lcnJvci10ZXh0OiAjQkQwMDBBO1xcblxcbiAgICAtLWNvbG9yLW9uLXByaW1hcnk6ICNGRkZGRkY7XFxuICAgIC0tY29sb3Itb24tYmFja2dyb3VuZDogIzJEMzczQztcXG4gICAgLS1jb2xvci1vbi1zdXJmYWNlOiAjNjA2MDYwO1xcblxcbiAgICAtLWNvbG9yLWhpbnQ6ICM3RjhGQTQ7XFxuICAgIC0tY29sb3ItZGl2aWRlcjogI0RGRTJFNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTIyZjFjNjQ2MjU4M2MwYzNiMTUgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMjJmMWM2NDYyNTgzYzBjM2IxNVwiKSkoNCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JfZTIyZjFjNjQ2MjU4M2MwYzNiMTUgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcl9lMjJmMWM2NDYyNTgzYzBjM2IxNVwiKSkoMCk7IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL0N1c3RvbVRhYmxlQ2VsbC5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DdXN0b21UYWJsZUNlbGwucGNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL0N1c3RvbVRhYmxlQ2VsbC5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gJy4vQ3VzdG9tVGFibGVDZWxsLnBjc3MnO1xuaW1wb3J0IHsgQ29udGVudEFsaWdtZW50IH0gZnJvbSAnLi4vdHlwZXMvQ29udGVudEFsaWdtZW50JztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBhbGlnbj86IENvbnRlbnRBbGlnbWVudDtcbiAgICBiYWNrZ3JvdW5kPyA6IHN0cmluZztcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVRhYmxlQ2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthbGlnbiwgYmFja2dyb3VuZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuY29tcG9uZW50fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBhbGlnbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYWxpZ24sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vQ3VzdG9tVGFibGVIZWFkQ2VsbC5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DdXN0b21UYWJsZUhlYWRDZWxsLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DdXN0b21UYWJsZUhlYWRDZWxsLnBjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSAnLi9DdXN0b21UYWJsZUhlYWRDZWxsLnBjc3MnO1xuaW1wb3J0IHsgQ29udGVudEFsaWdtZW50IH0gZnJvbSAnLi4vdHlwZXMvQ29udGVudEFsaWdtZW50JztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBhbGlnbj86IENvbnRlbnRBbGlnbWVudDtcbiAgICBiYWNrZ3JvdW5kPyA6IHN0cmluZztcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVRhYmxlSGVhZENlbGwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWxpZ24sIGJhY2tncm91bmR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogYWxpZ24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFsaWduLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBiYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vQ3VzdG9tVGFibGVTaG93Y2FzZS5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DdXN0b21UYWJsZVNob3djYXNlLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DdXN0b21UYWJsZVNob3djYXNlLnBjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2x1bW4sIFBpbm5lZFBsYWNlbWVudCwgVGFibGUgfSBmcm9tICcuLi8uLi9HcmlkVGFibGVQYWNrYWdlJztcbmltcG9ydCB7IEN1c3RvbVRhYmxlSGVhZENlbGwgfSBmcm9tICcuL0N1c3RvbVRhYmxlSGVhZENlbGwnO1xuaW1wb3J0IHsgQ3VzdG9tVGFibGVDZWxsIH0gZnJvbSAnLi9DdXN0b21UYWJsZUNlbGwnO1xuaW1wb3J0IHsgQ29udGVudEFsaWdtZW50IH0gZnJvbSAnLi4vdHlwZXMvQ29udGVudEFsaWdtZW50JztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL0N1c3RvbVRhYmxlU2hvd2Nhc2UucGNzcyc7XG5cbnR5cGUgVGFibGVEYXRhID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgYWdlOiBzdHJpbmc7XG4gICAgaGFzRG9nOiBib29sZWFuO1xufTtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG50eXBlIFN0YXRlID0ge1xuICAgIHRhYmxlRGF0YTogVGFibGVEYXRhW107XG59O1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVGFibGVTaG93Y2FzZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gICAgcmVhZG9ubHkgc3RhdGU6IFN0YXRlID0ge1xuICAgICAgICB0YWJsZURhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSm9obicsXG4gICAgICAgICAgICAgICAgY291bnRyeTogJ1VTQScsXG4gICAgICAgICAgICAgICAgYWdlOiAnMzInLFxuICAgICAgICAgICAgICAgIGhhc0RvZzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwnLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICdBdXN0cmFsaWEnLFxuICAgICAgICAgICAgICAgIGFnZTogJzI0JyxcbiAgICAgICAgICAgICAgICBoYXNEb2c6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTb3BoaWUnLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICdGcmFuY2UnLFxuICAgICAgICAgICAgICAgIGFnZTogJzI0JyxcbiAgICAgICAgICAgICAgICBoYXNEb2c6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRhYmxlV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlPFRhYmxlRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS50YWJsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgIHJvd0tleXM9e3RoaXMuc3RhdGUudGFibGVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW48VGFibGVEYXRhLCAnbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsnTmFtZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17J25hbWUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9eycxMDBweCd9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJIZWFkPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFibGVIZWFkQ2VsbD57cHJvcHMubmFtZX08L0N1c3RvbVRhYmxlSGVhZENlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbD17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnI0VFRUVFRSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMudmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0N1c3RvbVRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e1Bpbm5lZFBsYWNlbWVudC5sZWZ0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eydBZ2UnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eydhZ2UnfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyc4MHB4J31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckhlYWQ9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21UYWJsZUhlYWRDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtDb250ZW50QWxpZ21lbnQuY2VudGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXN0b21UYWJsZUhlYWRDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGw9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21UYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e0NvbnRlbnRBbGlnbWVudC5jZW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXN0b21UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW48VGFibGVEYXRhLCAnY291bnRyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsnQ291bnRyeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17J2NvdW50cnknfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9eycxMDBweCd9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJIZWFkPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFibGVIZWFkQ2VsbD57cHJvcHMubmFtZX08L0N1c3RvbVRhYmxlSGVhZENlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbD17KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMudmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0E8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RnJhbmNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkF1c3RyYWxpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0N1c3RvbVRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbjxUYWJsZURhdGEsICdoYXNEb2cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17J0hhcyBEb2cnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eydoYXNEb2cnfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9eycxMDBweCd9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJIZWFkPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFibGVIZWFkQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17Q29udGVudEFsaWdtZW50LmNlbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ3VzdG9tVGFibGVIZWFkQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsPXsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtDb250ZW50QWxpZ21lbnQuY2VudGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXsnI0VFRUVFRSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17J2NoZWNrYm94J30gY2hlY2tlZD17cHJvcHMudmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0N1c3RvbVRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e1Bpbm5lZFBsYWNlbWVudC5yaWdodH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sdW1uLCBQaW5uZWRQbGFjZW1lbnQsIFRhYmxlIH0gZnJvbSAnLi4vLi4vR3JpZFRhYmxlUGFja2FnZSc7XG5cbnR5cGUgVGFibGVEYXRhID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgYWdlOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgam9iOiBzdHJpbmc7XG59O1xuXG50eXBlIFByb3BzID0ge307XG5cbnR5cGUgU3RhdGUgPSB7XG4gICAgdGFibGVEYXRhOiBUYWJsZURhdGFbXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVNob3djYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICByZWFkb25seSBzdGF0ZTogU3RhdGUgPSB7XG4gICAgICAgIHRhYmxlRGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiAnVVNBJyxcbiAgICAgICAgICAgICAgICBhZ2U6ICczMicsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcrMSgzNDUpMzQ1LTQ1Ni00NScsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJzE1NjIgRnVsdG9uIFN0IEJyb29rbHluLCBOWSAxMTIxMycsXG4gICAgICAgICAgICAgICAgam9iOiAnVGVhY2hlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01pY2hhZWwnLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICdBdXN0cmFsaWEnLFxuICAgICAgICAgICAgICAgIGFnZTogJzMyJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJys2MSg0NSkyMjItNTYtMTInLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcyMDAgQ2FzdGxlcmVhZ2ggU3RyZWV0IFN5ZG5leSBOU1cgMjAwMCBHUE8gQm94IDQyODgnLFxuICAgICAgICAgICAgICAgIGpvYjogJ0VuZ2luZWVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU29waGllJyxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiAnRnJhbmNlJyxcbiAgICAgICAgICAgICAgICBhZ2U6ICczMicsXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcrMzMoMTIyKTc4MC0xMi0xMicsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJzQzIFJ1ZSBkZSBNaXJvbWVzbmlsLCA3NTAwOCBQYXJpcycsXG4gICAgICAgICAgICAgICAgam9iOiAnRGVzaWduZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZTxUYWJsZURhdGE+XG4gICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS50YWJsZURhdGF9XG4gICAgICAgICAgICAgICAgcm93S2V5cz17WzAsIDEsIDJdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J05hbWUnfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZD17J25hbWUnfVxuICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e1Bpbm5lZFBsYWNlbWVudC5sZWZ0fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydBZ2UnfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZD17J2FnZSd9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J1Bob25lIE51bWJlcid9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkPXsncGhvbmUnfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydBZGRyZXNzJ31cbiAgICAgICAgICAgICAgICAgICAgZmllbGQ9eydhZGRyZXNzJ31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnSm9iJ31cbiAgICAgICAgICAgICAgICAgICAgZmllbGQ9eydqb2InfVxuICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e1Bpbm5lZFBsYWNlbWVudC5yaWdodH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vRXhhbXBsZS5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9FeGFtcGxlLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9FeGFtcGxlLnBjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSAnLi9FeGFtcGxlLnBjc3MnO1xuaW1wb3J0IHsgVGFibGVTaG93Y2FzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGVTaG93Y2FzZSc7XG5pbXBvcnQgeyBDdXN0b21UYWJsZVNob3djYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21UYWJsZVNob3djYXNlJztcblxudHlwZSBQcm9wcyA9IHt9O1xudHlwZSBTdGF0ZSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yZXNpemFibGVDYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jYXJkVGl0bGV9PlRhYmxlIHdpdGggZGVmYXVsdCBjZWxsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVTaG93Y2FzZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucmVzaXphYmxlQ2FyZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY2FyZFRpdGxlfT5UYWJsZSB3aXRoIGN1c3RvbSBjZWxsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFibGVTaG93Y2FzZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LnBjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9pbmRleC5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEV4YW1wbGUgfSBmcm9tICcuL2NvbnRhaW5lcnMvRXhhbXBsZSc7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5pbXBvcnQgJy4vLi4vaW5kZXgucGNzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEV4YW1wbGUpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSxcbik7XG4iLCJleHBvcnQgZW51bSBDb250ZW50QWxpZ21lbnQge1xuICAgIGxlZnQgPSAnbGVmdCcsXG4gICAgcmlnaHQgPSAncmlnaHQnLFxuICAgIGNlbnRlciA9ICdjZW50ZXInLFxufVxuIiwidHlwZSBDbGFzc0xpc3QgPSB7IFtjbGFzc05hbWU6IHN0cmluZ106IGJvb2xlYW4gfTtcblxuZXhwb3J0IGNvbnN0IGNsYXNzTGlzdCA9IChsaXN0OiBDbGFzc0xpc3QpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGlzdClcbiAgICAgICAgLmZpbHRlcihjbGFzc05hbWUgPT4gbGlzdFtjbGFzc05hbWVdID09PSB0cnVlKVxuICAgICAgICAuam9pbignICcpO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9DZWxsLnBjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL0NlbGwucGNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL0NlbGwucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENlbGxQcm9wcyB9IGZyb20gJy4uL3R5cGVzL0NlbGxQcm9wcyc7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSAnLi9DZWxsLnBjc3MnO1xuaW1wb3J0IHsgRGF0dW0gfSBmcm9tICcuLi90eXBlcy9EYXR1bSc7XG5cbnR5cGUgUHJvcHM8RCBleHRlbmRzIERhdHVtLCBGIGV4dGVuZHMga2V5b2YgRD4gPSBDZWxsUHJvcHM8RCwgRj47XG5cbmV4cG9ydCBjbGFzcyBDZWxsPEQgZXh0ZW5kcyBEYXR1bSwgRiBleHRlbmRzIGtleW9mIEQ+IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wczxELCBGPj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29tcG9uZW50fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlYWQgfSBmcm9tICcuL0hlYWQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5pbXBvcnQgeyBEYXR1bSB9IGZyb20gJy4uL3R5cGVzL0RhdHVtJztcbmltcG9ydCB7IENvbHVtblByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ29sdW1uUHJvcHMnO1xuaW1wb3J0IHsgQ2VsbFByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2VsbFByb3BzJztcblxudHlwZSBQcm9wczxEIGV4dGVuZHMgRGF0dW0sIEYgZXh0ZW5kcyBrZXlvZiBEPiA9IENvbHVtblByb3BzPEQsIEY+O1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uPEQgZXh0ZW5kcyBEYXR1bSwgRiBleHRlbmRzIGtleW9mIEQ+IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wczxELCBGPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZW5kZXJIZWFkOiA8RCBleHRlbmRzIERhdHVtLCBGIGV4dGVuZHMga2V5b2YgRD4ocHJvcHM6IENvbHVtblByb3BzPEQsIEY+KSA9PiA8SGVhZCB7Li4ucHJvcHN9Lz4sXG4gICAgICAgIHJlbmRlckNlbGw6IDxEIGV4dGVuZHMgRGF0dW0sIEYgZXh0ZW5kcyBrZXlvZiBEPihwcm9wczogQ2VsbFByb3BzPEQsIEY+KSA9PiA8Q2VsbCB7Li4ucHJvcHN9Lz4sXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0dW0gfSBmcm9tICcuLi90eXBlcy9EYXR1bSc7XG5pbXBvcnQgeyBDb2x1bW5Qcm9wcyB9IGZyb20gJy4uL3R5cGVzL0NvbHVtblByb3BzJztcblxudHlwZSBQcm9wczxEIGV4dGVuZHMgRGF0dW0sIEYgZXh0ZW5kcyBrZXlvZiBEPiA9IENvbHVtblByb3BzPEQsIEY+O1xuXG5leHBvcnQgY2xhc3MgSGVhZDxEIGV4dGVuZHMgRGF0dW0sIEYgZXh0ZW5kcyBrZXlvZiBEPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wczxELCBGPj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9IZWFkZXIucGNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vSGVhZGVyLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9IZWFkZXIucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdHVtIH0gZnJvbSAnLi4vdHlwZXMvRGF0dW0nO1xuaW1wb3J0IHsgQ29sdW1uUHJvcHMgfSBmcm9tICcuLi90eXBlcy9Db2x1bW5Qcm9wcyc7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSAnLi9IZWFkZXIucGNzcyc7XG5pbXBvcnQgeyBjbGFzc0xpc3QgfSBmcm9tICcuLi9jb21tb24vY2xhc3NMaXN0JztcbmltcG9ydCB7IFBpbm5lZFBsYWNlbWVudCB9IGZyb20gJy4uL3R5cGVzL1Bpbm5lZFBsYWNlbWVudCc7XG5cbnR5cGUgUHJvcHM8RCBleHRlbmRzIERhdHVtPiA9IHtcbiAgICBjb2x1bW5zOiBBcnJheTxDb2x1bW5Qcm9wczxELCBrZXlvZiBEPj47XG59O1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyPEQgZXh0ZW5kcyBEYXR1bT4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPEQ+PiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc0xpc3Qoe1xuICAgICAgICAgICAgICAgICAgICBbY3NzLmNvbHVtbnNQaW5uZWRMZWZ0XTogY29sdW1uLnBpbm5lZCA9PT0gUGlubmVkUGxhY2VtZW50LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIFtjc3MuY29sdW1uc1Bpbm5lZFJpZ2h0XTogY29sdW1uLnBpbm5lZCA9PT0gUGlubmVkUGxhY2VtZW50LnJpZ2h0LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVySGVhZChjb2x1bW4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdyBhcyBEZWZhdWx0Um93IH0gZnJvbSAnLi9Sb3cnO1xuaW1wb3J0IHsgRGF0dW0gfSBmcm9tICcuLi90eXBlcy9EYXR1bSc7XG5pbXBvcnQgeyBSb3dQcm9wcyB9IGZyb20gJy4uL3R5cGVzL1Jvd1Byb3BzJztcbmltcG9ydCB7IENvbHVtblByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ29sdW1uUHJvcHMnO1xuXG50eXBlIFByb3BzPEQgZXh0ZW5kcyBEYXR1bT4gPSB7XG4gICAgZGF0YTogRFtdO1xuICAgIHJvd0tleXM6IG51bWJlcltdO1xuICAgIHJvd0NvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxSb3dQcm9wczxEPj47XG4gICAgY29sdW1uczogQ29sdW1uUHJvcHM8RCwga2V5b2YgRD5bXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBMaXN0PEQgZXh0ZW5kcyBEYXR1bT4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPEQ+PiB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJvd0NvbXBvbmVudDogRGVmYXVsdFJvdyxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRhdGEsIHJvd0tleXMsIHJvd0NvbXBvbmVudDogUm93LCBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiByb3dLZXlzLm1hcCgoa2V5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFJvd1xuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIHJvd0tleT17a2V5fVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBkYXR1bT17ZGF0YVtrZXldfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApKTtcbiAgICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vUm93LnBjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL1Jvdy5wY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vUm93LnBjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3dQcm9wcyB9IGZyb20gJy4uL3R5cGVzL1Jvd1Byb3BzJztcbmltcG9ydCB7IERhdHVtIH0gZnJvbSAnLi4vdHlwZXMvRGF0dW0nO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gJy4vUm93LnBjc3MnO1xuaW1wb3J0IHsgY2xhc3NMaXN0IH0gZnJvbSAnLi4vY29tbW9uL2NsYXNzTGlzdCc7XG5pbXBvcnQgeyBQaW5uZWRQbGFjZW1lbnQgfSBmcm9tICcuLi90eXBlcy9QaW5uZWRQbGFjZW1lbnQnO1xuXG5leHBvcnQgdHlwZSBSb3dDb21wb25lbnRQcm9wczxEIGV4dGVuZHMgRGF0dW0+ID0gUm93UHJvcHM8RD47XG5cbmV4cG9ydCBjbGFzcyBSb3c8RCBleHRlbmRzIERhdHVtPiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Um93Q29tcG9uZW50UHJvcHM8RD4+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0dW0sIHJvd0tleSwgaW5kZXg6IHJvd0luZGV4LCBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiBjb2x1bW5zLm1hcCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXR1bSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZGF0dW1bY29sdW1uLmZpZWxkXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NMaXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjc3MuY29tcG9uZW50XTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjc3MuY29sdW1uc1Bpbm5lZExlZnRdOiBjb2x1bW4ucGlubmVkID09PSBQaW5uZWRQbGFjZW1lbnQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjc3MuY29sdW1uc1Bpbm5lZFJpZ2h0XTogY29sdW1uLnBpbm5lZCA9PT0gUGlubmVkUGxhY2VtZW50LnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk6IHJvd0tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9UYWJsZS5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9UYWJsZS5wY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4vVGFibGUucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdyBhcyBEZWZhdWx0Um93IH0gZnJvbSAnLi9Sb3cnO1xuaW1wb3J0IHsgRGF0dW0gfSBmcm9tICcuLi90eXBlcy9EYXR1bSc7XG5pbXBvcnQgeyBSb3dQcm9wcyB9IGZyb20gJy4uL3R5cGVzL1Jvd1Byb3BzJztcbmltcG9ydCB7IENvbHVtblByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ29sdW1uUHJvcHMnO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gJy4vVGFibGUucGNzcyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0JztcblxudHlwZSBDb2x1bW5FbGVtZW50PEQgZXh0ZW5kcyBEYXR1bT4gPSBSZWFjdC5SZWFjdEVsZW1lbnQ8Q29sdW1uUHJvcHM8RCwga2V5b2YgRD4+O1xuXG50eXBlIFByb3BzPEQgZXh0ZW5kcyBEYXR1bT4gPSB7XG4gICAgZGF0YTogRFtdO1xuICAgIHJvd0tleXM6IG51bWJlcltdO1xuICAgIGNoaWxkcmVuOiBBcnJheTxDb2x1bW5FbGVtZW50PEQ+PjtcbiAgICByb3dDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8Um93UHJvcHM8RD4+O1xuICAgIG1heEhlaWdodD86IG51bWJlcjtcbn07XG5cbnR5cGUgU3RhdGU8RCBleHRlbmRzIERhdHVtPiA9IHtcbiAgICBwcmV2Q2hpbGRyZW46IEFycmF5PENvbHVtbkVsZW1lbnQ8RD4+O1xuICAgIGNvbHVtbnM6IEFycmF5PENvbHVtblByb3BzPEQsIGtleW9mIEQ+Pjtcbn07XG5cbmV4cG9ydCBjbGFzcyBUYWJsZTxEIGV4dGVuZHMgRGF0dW0+IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wczxEPiwgU3RhdGU8RD4+IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcm93Q29tcG9uZW50OiBEZWZhdWx0Um93LFxuICAgIH07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM8RCBleHRlbmRzIERhdHVtPihcbiAgICAgICAgbmV4dFByb3BzOiBQcm9wczxEPixcbiAgICAgICAgcHJldlN0YXRlOiBTdGF0ZTxEPixcbiAgICApOiBQYXJ0aWFsPFN0YXRlPEQ+PiB8IG51bGwge1xuICAgICAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICE9PSBwcmV2U3RhdGUucHJldkNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbjogQ29sdW1uRWxlbWVudDxEPltdID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pIGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gY2hpbGRyZW4ubWFwKFRhYmxlLmdldFByb3BzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmV2Q2hpbGRyZW46IG5leHRQcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRQcm9wczxEIGV4dGVuZHMgRGF0dW0+KGNvbHVtbjogQ29sdW1uRWxlbWVudDxEPikge1xuICAgICAgICByZXR1cm4gY29sdW1uLnByb3BzO1xuICAgIH1cblxuICAgIHJlYWRvbmx5IHN0YXRlOiBTdGF0ZTxEPiA9IHtcbiAgICAgICAgcHJldkNoaWxkcmVuOiBbXSxcbiAgICAgICAgY29sdW1uczogW10sXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhLCByb3dLZXlzLCByb3dDb21wb25lbnQ6IFJvdywgbWF4SGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgICAgICBsZXQgZ3JpZFRlbXBsYXRlQ29sdW1uc1ZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uc1ZhbHVlICs9IGAke2NvbHVtbi53aWR0aH0gYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluV2lkdGggPSBjb2x1bW4ubWluV2lkdGggPT09IHVuZGVmaW5lZCA/ICdtaW4tY29udGVudCcgOiBjb2x1bW4ubWluV2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBjb2x1bW4ubWF4V2lkdGggPT09IHVuZGVmaW5lZCA/ICdhdXRvJyA6IGNvbHVtbi5tYXhXaWR0aDtcblxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnNWYWx1ZSArPSBgbWlubWF4KCR7bWluV2lkdGh9LCAke21heFdpZHRofSkgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdyaWRUZW1wbGF0ZUNvbHVtbnNWYWx1ZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIZWFkZXI8RD5cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0PEQ+XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIHJvd0tleXM9e3Jvd0tleXN9XG4gICAgICAgICAgICAgICAgICAgIHJvd0NvbXBvbmVudD17Um93fVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL0NvbHVtbic7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzL1Bpbm5lZFBsYWNlbWVudCc7XG4iLCJleHBvcnQgZW51bSBQaW5uZWRQbGFjZW1lbnQge1xuICAgIGxlZnQgPSAnbGVmdCcsXG4gICAgcmlnaHQgPSAncmlnaHQnXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL01haW5Nb2R1bGUnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LnBjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuL2luZGV4LnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTIhLi9pbmRleC5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfZTIyZjFjNjQ2MjU4M2MwYzNiMTU7Il0sInNvdXJjZVJvb3QiOiIifQ==