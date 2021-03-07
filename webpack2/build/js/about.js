(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyLib", [], factory);
	else if(typeof exports === 'object')
		exports["MyLib"] = factory();
	else
		root["MyLib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/about.js ***!
  \*********************/
document.write("Hello, from about");
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=about.js.map