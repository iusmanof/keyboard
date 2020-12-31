/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.sass */ "./src/style.sass");
/* harmony import */ var _src_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/test */ "./src/test.js");



_src_test__WEBPACK_IMPORTED_MODULE_2__.main(); // import {en} from './keys/enKeys.js';
// import {ru} from './keys/ruKeys.js';
// let layout = document.createElement("div");
// let header = document.createElement("h1");
// let output = document.createElement("textarea");
// let input = document.createElement("div");
// layout.classList.add("layout");
// header.innerHTML = "Virtual KeyBoard";
// input.classList.add('keyboard');
// layout.append(header, output, input);
// function init(keys){
//       keys.forEach((rows) => {
//               rows.forEach((i) =>{
//                         let key = document.createElement("div");
//                         key.classList.add("key");
//                         key.innerHTML = i[0];
//                     switch (i[0]){
//                             case "enter":
//                                     key.classList.add("enter");
//                                 break;
//                                 case "space":
//                                     key.classList.add("space")
//                                 break;
//                                 case "":
//                                       key.classList.remove("key");
//                                       key.classList.add("empty");
//                                 break;
//                                 case "caps":
//                                      key.addEventListener("caps", _toggleCapsLock);
//                                 break;
//                                 default:
//                                      key.addEventListener("click", outputValue);
//                                 break;
//                                 }
//                     input.append(key);
//                     })
//               });
// }
// function outputValue(event){
//         output.innerHTML += event.target.innerHTML;
//         console.log(event.target.innerHTML);
// }
// function _toggleCapsLock(){
//          keys.forEach((rows) => {
//                         rows.forEach((i) =>{
//                                     if (i[0] !== null){
//                                                  let key = document.createElement("div");
//                                                  key.classList.add("key");
//                                                  key.innerHTML = i[0];
//                                                 }
//                                     input.append(key);
//                                 })
//                  });
// }
// init(ru);
// document.body.prepend(layout);

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": function() { return /* binding */ main; }
/* harmony export */ });
function main() {
  console.log("test ...");
}



/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlib2FyZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXlib2FyZC8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovL2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz9kMTJjIiwid2VicGFjazovL2tleWJvYXJkLy4vc3JjL3N0eWxlLnNhc3M/NzUyMiIsIndlYnBhY2s6Ly9rZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tleWJvYXJkL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJUZXN0IiwibWFpbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0FBLDJDQUFBLEcsQ0FFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBLGlDOzs7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTQyxJQUFULEdBQWU7QUFDZEMsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9zdHlsZS5zYXNzJ1xuaW1wb3J0ICogYXMgVGVzdCBmcm9tICcuLi9zcmMvdGVzdCdcblRlc3QubWFpbigpO1xuXG4vLyBpbXBvcnQge2VufSBmcm9tICcuL2tleXMvZW5LZXlzLmpzJztcbi8vIGltcG9ydCB7cnV9IGZyb20gJy4va2V5cy9ydUtleXMuanMnO1xuXG4vLyBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4vLyBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXG4vLyBsYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcblxuLy8gaGVhZGVyLmlubmVySFRNTCA9IFwiVmlydHVhbCBLZXlCb2FyZFwiO1xuXG4vLyBpbnB1dC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xuXG4vLyBsYXlvdXQuYXBwZW5kKGhlYWRlciwgb3V0cHV0LCBpbnB1dCk7XG5cbi8vIGZ1bmN0aW9uIGluaXQoa2V5cyl7XG4vLyAgICAgICBrZXlzLmZvckVhY2goKHJvd3MpID0+IHtcbi8vICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKChpKSA9Pntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChcImtleVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAga2V5LmlubmVySFRNTCA9IGlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpWzBdKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW50ZXJcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwiZW50ZXJcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3BhY2VcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwic3BhY2VcIilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5yZW1vdmUoXCJrZXlcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2Fwc1wiOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2Fwc1wiLCBfdG9nZ2xlQ2Fwc0xvY2spO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlucHV0LmFwcGVuZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBvdXRwdXRWYWx1ZShldmVudCl7XG4vLyAgICAgICAgIG91dHB1dC5pbm5lckhUTUwgKz0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlubmVySFRNTCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIF90b2dnbGVDYXBzTG9jaygpe1xuLy8gICAgICAgICAga2V5cy5mb3JFYWNoKChyb3dzKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLmZvckVhY2goKGkpID0+e1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVswXSAhPT0gbnVsbCl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoXCJrZXlcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LmlubmVySFRNTCA9IGlbMF07XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmFwcGVuZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgIH0pO1xuLy8gfVxuXG4vLyBpbml0KHJ1KTtcblxuXG5cbi8vIGRvY3VtZW50LmJvZHkucHJlcGVuZChsYXlvdXQpOyIsImZ1bmN0aW9uIG1haW4oKXtcblx0Y29uc29sZS5sb2coXCJ0ZXN0IC4uLlwiKTtcbn1cbmV4cG9ydCB7XG4gICAgbWFpblxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==