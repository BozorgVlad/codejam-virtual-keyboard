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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/keyboardView.js":
/*!*****************************!*\
  !*** ./src/keyboardView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    this.input = document.createElement("textarea");
    this.wrapper = document.createElement("div");
    this.language = localStorage.getItem("language");
    this.key = [];
    this.keys = {
      keyArrEn: [["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"], ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"], ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"], ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"], ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"]],
      keyArrEnShift: [["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"], ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|"], ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter"], ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "Shift"], ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"]],
      keyArrRu: [["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"], ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\"], ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"], ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift"], ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"]],
      keyArrRuShift: [["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"], ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/"], ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"], ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift"], ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"]],
      arrCode: [["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"], ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"], ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"], ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"], ["ControlLeft", "AltLeft", "Space", "AltRight", "MetaRight", "ArrowLeft", "ArrowDown", "ArrowRight"]]
    };
  }

  _createClass(Keyboard, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.wrapper.addEventListener("mousedown", function (e) {
        return _this.onClickHandle(e);
      });
      this.wrapper.addEventListener("mouseup", function (e) {
        return _this.onMouseUp(e);
      });
      document.addEventListener("keydown", function (e) {
        return _this.changeLanguageOnShortCut(e);
      });
      document.addEventListener("keydown", function (e) {
        return _this.onKeyDown(e);
      });
      document.addEventListener("keyup", function (e) {
        return _this.onKeyUp(e);
      });
    }
  }, {
    key: "removeShiftOnClick",
    value: function removeShiftOnClick(e) {
      if ((e.target.id === "ShiftLeft" || e.target.id === "ShiftRight") && e.target.classList.contains("active")) {
        this.isNotShift();
      }
    }
  }, {
    key: "addShiftClick",
    value: function addShiftClick(e) {
      if ((e.target.id === "ShiftLeft" || e.target.id === "ShiftRight") && !e.target.classList.contains("active")) {
        this.isShift();
        document.querySelector("#Shift").classList.add("active");
      }
    }
  }, {
    key: "changeLang",
    value: function changeLang(language, keys) {
      var keyboard = document.querySelector(".key-overlay");
      this.language = language;
      localStorage.removeItem("language");
      localStorage.setItem("language", language);
      keyboard.remove();
      this.renderKeys(keys);
    }
  }, {
    key: "changeLanguageOnShortCut",
    value: function changeLanguageOnShortCut(e) {
      e.preventDefault();

      if (e.key === "Control" && e.altKey) {
        if (this.language === "en" && !e.repeat) {
          this.changeLang("ru", this.keys.keyArrRu);
          document.querySelector("#AltLeft").classList.add("active");
        } else if (this.language === "ru" && !e.repeat) {
          this.changeLang("en", this.keys.keyArrEn);
          document.querySelector("#AltLeft").classList.add("active");
        }
      }
    }
  }, {
    key: "removeUpperCase",
    value: function removeUpperCase() {
      this.key.forEach(function (el) {
        el.classList.remove("upper");
      });
    }
  }, {
    key: "setCapsState",
    value: function setCapsState(e) {
      if (e.key === "CapsLock") {
        this.setUpperKeys();

        if (!document.querySelector("#CapsLock").classList.contains("active")) {
          this.removeUpperCase();
        }
      }
    }
  }, {
    key: "setUpperKeys",
    value: function setUpperKeys() {
      this.key.forEach(function (el) {
        if (el.innerText.length === 1) {
          el.classList.add("upper");
        }
      });
    }
  }, {
    key: "onShiftEnd",
    value: function onShiftEnd(e) {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        this.isNotShift();
      }
    }
  }, {
    key: "isShift",
    value: function isShift() {
      document.querySelector(".key-overlay").remove();

      if (this.language === "en") {
        this.renderKeys(this.keys.keyArrEnShift);
      } else {
        this.renderKeys(this.keys.keyArrRuShift);
      }

      this.setUpperKeys();
      document.querySelector("#ShiftLeft").classList.add("active");
      document.querySelector("#ShiftRight").classList.add("active");
    }
  }, {
    key: "isNotShift",
    value: function isNotShift() {
      this.key = [];
      document.querySelector(".key-overlay").remove();

      if (this.language === "en") {
        this.renderKeys(this.keys.keyArrEn);
      } else {
        this.renderKeys(this.keys.keyArrRu);
      }

      this.removeUpperCase();
    }
  }, {
    key: "onShiftStart",
    value: function onShiftStart(e) {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        this.key = [];
        this.isShift();
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.key.forEach(function (el) {
        if (e.code === el.id) {
          if (el.id !== "CapsLock") {
            el.classList.remove("active");
          }
        }
      });

      if (e.code === "Space") {
        document.querySelector("#Space").classList.remove("active");
      }

      this.onShiftEnd(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this2 = this;

      e.preventDefault();
      this.key.forEach(function (el) {
        if (e.code === el.id) {
          if (el.id !== "CapsLock") {
            el.classList.add("active");

            if (el.innerText.length === 1) {
              _this2.input.focus();

              _this2.input.setRangeText(el.innerText, _this2.input.selectionStart, _this2.input.selectionEnd, "end");
            }
          }

          if (el.id === "CapsLock") {
            el.classList.toggle("active");
          }
        }
      });
      this.setCapsState(e);

      if (e.code === "Space") {
        document.querySelector("#Space").classList.add("active");
        this.input.setRangeText(" ", this.input.selectionStart, this.input.selectionEnd, "end");
      }

      if (e.code === "Tab") {
        e.preventDefault();
        this.input.setRangeText("    ", this.input.selectionStart, this.input.selectionEnd, "end");
      }

      if (e.code === "Backspace") {
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
      }

      if (e.code === "Enter") {
        this.input.setRangeText("\n", this.input.selectionStart, this.input.selectionEnd, "end");
      }

      this.onShiftStart(e);
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (e.target.classList.contains("key") && this.wrapper && e.target.id !== "CapsLock" && e.target.id !== "ShiftLeft" && e.target.id !== "ShiftRight") {
        e.target.classList.remove("active");
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      if (e.target.classList.contains("key") && this.wrapper && e.target.id !== "CapsLock" && e.target.id !== "ShiftLeft" && e.target.id !== "ShiftRight") {
        e.target.classList.add("active");
      }
    }
  }, {
    key: "fixActiveClass",
    value: function fixActiveClass() {
      this.key.forEach(function (el) {
        if (el.id !== "ShiftLeft" && el.id !== "CapsLock") {
          el.classList.remove("active");
        }
      });
    }
  }, {
    key: "onClickHandle",
    value: function onClickHandle(e) {
      this.fixActiveClass();
      this.onMouseDown(e);

      if (e.target.id === "CapsLock") {
        e.target.classList.toggle("active");

        if (document.querySelector("#ShiftLeft").classList.contains("active")) {
          this.isNotShift();
          document.querySelector("#ShiftLeft").classList.remove("active");
        }

        if (e.target.classList.contains("active")) {
          this.setUpperKeys();
        } else {
          this.removeUpperCase();
          document.querySelector("#ShiftLeft").classList.remove("active");
        }
      }

      this.addShiftClick(e);
      this.removeShiftOnClick(e);

      if (e.target.classList.contains("key") && e.target.innerText.length === 1) {
        this.input.setRangeText(e.target.innerText, this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
      }

      if (e.target.id === "Space") {
        this.input.setRangeText(" ", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
      }

      if (e.target.innerText === "Ру") {
        this.changeLang("ru", this.keys.keyArrRu);
      }

      if (e.target.innerText === "En") {
        this.changeLang("en", this.keys.keyArrEn);
      }

      if (e.target.id === "Backspace") {
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
        this.input.focus();
      }

      if (e.target.id === "Tab") {
        this.input.setRangeText("    ", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
      }

      if (e.target.id === "Enter") {
        this.input.setRangeText("\n", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
      }
    }
  }, {
    key: "renderKeyboardTemplate",
    value: function renderKeyboardTemplate() {
      this.wrapper.classList.add("keyboard-wrapper");
      this.input.classList.add("input");
      this.input.placeholder = "change language: Alt + Ctrl";
      this.input.autofocus = true;
      document.querySelector("body").append(this.input);
      document.body.append(this.wrapper);
    }
  }, {
    key: "renderKeys",
    value: function renderKeys(lang) {
      var keyOverlay = document.createElement("div");
      keyOverlay.classList.add("key-overlay");
      this.wrapper.append(keyOverlay);
      this.key = [];

      for (var i = 0; i < lang.length; i += 1) {
        var keyWrapper = document.createElement("div");
        keyWrapper.className = "keyWrapper key-wrapper-".concat(i);
        keyOverlay.append(keyWrapper);

        for (var j = 0; j < lang[i].length; j += 1) {
          var div = document.createElement("div");
          div.innerText = "".concat(lang[i][j]);
          div.classList.add("key");
          div.id = "".concat(this.keys.arrCode[i][j]);
          keyWrapper.append(div);
          this.key.push(div);

          if (lang[i][j].length > 4) {
            div.classList.add("key-large");
          }
        }
      }
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboardView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardView.js */ "./src/keyboardView.js");

var keyboard = new _keyboardView_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
keyboard.renderKeyboardTemplate();

if (localStorage.language === "en") {
  keyboard.renderKeys(keyboard.keys.keyArrEn);
} else {
  keyboard.renderKeys(keyboard.keys.keyArrRu);
}

keyboard.bindEvents();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map