(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["polygon-utils"] = factory();
	else
		root["polygon-utils"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/polygon-utils.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";

/***/ }),

/***/ "./src/polygon-utils.ts":
/*!******************************!*\
  !*** ./src/polygon-utils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./src sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // https://stackoverflow.com/questions/2792443/finding-the-centroid-of-a-polygon
    // https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
    /**
     * Calculates the centroid of a polygon from a list of [x,y] coordinates.
     * @param vertices List of [x,y] coordinates.
     * @return Returns the centroid as [x,y] coordinates eg. [23.5960126585797, 63.19228972849327].
     */
    function centroid(vertices) {
        var centroid = [0, 0];
        var signedArea = 0;
        for (var i = 0; i < vertices.length - 1; i += 1) {
            var x0 = vertices[i][0];
            var y0 = vertices[i][1];
            var x1 = vertices[i + 1][0];
            var y1 = vertices[i + 1][1];
            var a_1 = x0 * y1 - x1 * y0;
            signedArea += a_1;
            centroid[0] += (x0 + x1) * a_1;
            centroid[1] += (y0 + y1) * a_1;
        }
        var firstVertex = vertices[0];
        var lastVertex = vertices[vertices.length - 1];
        var a = firstVertex[0] * lastVertex[1] - lastVertex[0] * firstVertex[1];
        signedArea += a;
        centroid[0] += (firstVertex[0] + lastVertex[0]) * a;
        centroid[1] += (firstVertex[1] + lastVertex[1]) * a;
        signedArea *= 0.5;
        centroid[0] /= (6.0 * signedArea);
        centroid[1] /= (6.0 * signedArea);
        return centroid;
    }
    exports.centroid = centroid;
    /**
     * Calculates the bounding box area of a polygon.
     * @param vertices List of [x,y] coordinates.
     * @return Area as floating number eg. 0.21966561631020753.
     */
    function boundingBoxArea(vertices) {
        var maxX = 0;
        var maxY = 0;
        var minX = vertices[0][0];
        var minY = vertices[0][1];
        for (var i = 0; i < vertices.length; i += 1) {
            var x = vertices[i][0];
            var y = vertices[i][1];
            if (x > maxX)
                maxX = x;
            if (x < minX)
                minX = x;
            if (y > maxY)
                maxY = y;
            if (y < minY)
                minY = y;
        }
        return (maxX - minX) * (maxY - minY);
    }
    exports.boundingBoxArea = boundingBoxArea;
});


/***/ })

/******/ });
});
//# sourceMappingURL=polygon-utils.js.map