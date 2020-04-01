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
    this.language = localStorage.getItem("language") || "en";
    this.key = [];
    this.keys = {
      keyArrEn: [["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"], ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "DEL"], ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"], ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "shift"], ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]],
      keyArrEnShift: [["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"], ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "DEL"], ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "|", "Enter"], ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "shift"], ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]],
      keyArrRu: [["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"], ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"], ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "Enter"], ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "shift"], ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]],
      keyArrRuShift: [["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"], ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"], ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "/", "Enter"], ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "shift"], ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]]
    };
  }

  _createClass(Keyboard, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.wrapper.addEventListener("click", function (e) {
        return _this.onClickHandle(e);
      });
      this.wrapper.addEventListener("mousedown", function (e) {
        return _this.onMouseDown(e);
      });
      this.wrapper.addEventListener("mouseup", function (e) {
        return _this.onMouseUp(e);
      });
      document.addEventListener("keydown", function (e) {
        return _this.onKeyDown(e);
      });
      document.addEventListener("keyup", function (e) {
        return _this.onKeyUp(e);
      });
      document.addEventListener("keydown", function (e) {
        return _this.onShiftStart(e);
      });
      document.addEventListener("keyup", function (e) {
        return _this.onShiftEnd(e);
      });
      document.addEventListener("keydown", function (e) {
        return _this.setCapsState(e);
      });
    }
  }, {
    key: "removeCapsState",
    value: function removeCapsState() {
      this.key.forEach(function (el) {
        el.classList.remove("upper");
      });
    }
  }, {
    key: "setCapsState",
    value: function setCapsState(e) {
      if (e.which === 20) {
        document.querySelector(".caps").classList.add("active");
        this.setUpperKeys();
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
      if (e.which === 16) {
        document.querySelector(".key-overlay").remove();
        this.renderKeys(this.keys.keyArrEn);
        this.key.forEach(function (el) {
          el.classList.remove("upper");
        });
      }
    }
  }, {
    key: "onShiftStart",
    value: function onShiftStart(e) {
      if (e.which === 16) {
        document.querySelector(".key-overlay").remove();
        this.renderKeys(this.keys.keyArrEnShift);
        document.querySelector(".shift").classList.add("active");
        this.key.forEach(function (el) {
          if (el.innerText.length === 1) {
            el.classList.add("upper");
          }
        });
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.key.forEach(function (el) {
        if (e.key === el.innerText.toLowerCase() && e.which !== 20) {
          el.classList.remove("active");
        }
      });

      if (e.code === "Space") {
        document.querySelector(".space").classList.remove("active");
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var caps = document.querySelector(".caps");

      if (e.which === 20 && caps.classList.contains("active")) {
        caps.classList.remove("active");
        this.removeCapsState();
      }

      this.key.forEach(function (el) {
        if (e.key === el.innerText.toLowerCase()) {
          el.classList.add("active");
        }
      });

      if (e.code === "Space") {
        document.querySelector(".space").classList.add("active");
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (e.target.classList.contains("key") && this.wrapper && !e.target.classList.contains("caps")) {
        e.target.classList.remove("active");
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      if (e.target.classList.contains("key") && this.wrapper && !e.target.classList.contains("caps")) {
        e.target.classList.add("active");
      }
    }
  }, {
    key: "onClickHandle",
    value: function onClickHandle(e) {
      var keyboard = document.querySelector(".key-overlay");

      if (e.target.classList.contains("caps")) {
        e.target.classList.toggle("active");
        this.setUpperKeys();
      }

      if (e.target.classList.contains("key") && e.target.innerText.length === 1) {
        this.input.value += e.target.innerText;
      }

      if (e.target.classList.contains("space")) {
        this.input.value += " ";
      }

      if (e.target.innerText === "Ру") {
        keyboard.remove();
        this.renderKeys(this.keys.keyArrRu);
        localStorage.setItem("language", "ru");
      }

      if (e.target.innerText === "En") {
        keyboard.remove();
        this.renderKeys(this.keys.keyArrEn);
        localStorage.setItem("language", "en");
      }

      if (e.target.innerText === "Backspace") {
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
      }

      if (e.target.innerText === "CapsLock" && !e.target.classList.contains("active")) {
        this.removeCapsState();
      }

      if (e.target.innerText === "Tab") {
        this.input.value += "    ";
      }
    }
  }, {
    key: "renderKeyboardTemplate",
    value: function renderKeyboardTemplate() {
      this.wrapper.classList.add("keyboard-wrapper");
      this.input.classList.add("input");
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

      for (var i = 0; i < lang.length; i += 1) {
        var keyWrapper = document.createElement("div");
        keyWrapper.classList.add("keyWrapper");
        keyOverlay.append(keyWrapper);

        for (var j = 0; j < lang[i].length; j += 1) {
          var div = document.createElement("div");
          div.innerText = "".concat(lang[i][j]);
          div.classList.add("key");
          keyWrapper.append(div);
          this.key.push(div);

          if (lang[i][j].length > 4) {
            div.classList.add("key-large");
          }

          if (lang[i][j] === " ") {
            div.classList.add("space");
          }

          if (lang[i][j] === "Tab") {
            div.classList.add("tab");
          }

          if (lang[i][j] === "CapsLock") {
            div.classList.add("caps");
          }

          if (lang[i][j] === "Shift") {
            div.classList.add("shift");
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
/* harmony import */ var _keyboardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardView */ "./src/keyboardView.js");

var keyboard = new _keyboardView__WEBPACK_IMPORTED_MODULE_0__["default"]();
keyboard.renderKeyboardTemplate();

if (localStorage.language === "en") {
  keyboard.renderKeys(keyboard.keys.keyArrEn);
} else {
  keyboard.renderKeys(keyboard.keys.keyArrRu);
}

keyboard.bindEvents();

if (keyboard.caps) {
  keyboard.setUpperKeys();
}

if (!keyboard.caps) {
  document.querySelector(".caps").classList.remove("active");
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map