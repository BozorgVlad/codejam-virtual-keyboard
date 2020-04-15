export default class Keyboard {
  constructor() {
    this.mainWrapper = document.createElement("div");
    this.input = document.createElement("textarea");
    this.wrapper = document.createElement("div");
    this.language = localStorage.getItem("language");
    this.key = [];
    this.keys = {
      keyArrEn: [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"],
        ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"],
      ],
      keyArrEnShift: [
        ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "Shift"],
        ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"],
      ],
      keyArrRu: [
        ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\"],
        ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
        ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift"],
        ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"],
      ],
      keyArrRuShift: [
        ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/"],
        ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
        ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift"],
        ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"],
      ],
      arrCode: [
        ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
        ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
        ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
        ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
        ["ControlLeft", "AltLeft", "Space", "AltRight", "MetaRight", "ArrowLeft", "ArrowDown", "ArrowRight"],
      ],
    };
  }

  bindEvents() {
    this.wrapper.addEventListener("mousedown", (e) => this.onClickHandle(e));
    this.wrapper.addEventListener("mouseup", (e) => this.onMouseUp(e));
    document.addEventListener("keydown", (e) => this.changeLanguageOnShortCut(e));
    document.addEventListener("keydown", (e) => this.onKeyDown(e));
    document.addEventListener("keyup", (e) => this.onKeyUp(e));
  }

  removeShiftOnClick(e) {
    if ((e.target.id === "ShiftLeft" || e.target.id === "ShiftRight") && e.target.classList.contains("active")) {
      this.isNotShift();
    }
  }

  addShiftClick(e) {
    if ((e.target.id === "ShiftLeft" || e.target.id === "ShiftRight") && !e.target.classList.contains("active")) {
      this.renderShiftState();
      document.querySelector("#ShiftLeft").classList.add("active");
    }
  }

  changeLang(language, keys) {
    const keyboard = document.querySelector(".key-overlay");
    this.language = language;
    localStorage.removeItem("language");
    localStorage.setItem("language", language);
    keyboard.remove();
    this.renderKeys(keys);
  }

  changeLanguageOnShortCut(e) {
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

  removeUpperCase() {
    this.key.forEach((el) => {
      el.classList.remove("upper");
    });
  }

  setCapsState(e) {
    if (e.key === "CapsLock") {
      this.setUpperKeys();
      if (!document.querySelector("#CapsLock").classList.contains("active")) {
        this.removeUpperCase();
      }
    }
  }

  setUpperKeys() {
    this.key.forEach((el) => {
      if (el.innerText.length === 1) {
        el.classList.add("upper");
      }
    });
  }

  onShiftEnd(e) {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      this.isNotShift();
    }
  }

  renderShiftState() {
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

  isNotShift() {
    this.key = [];
    document.querySelector(".key-overlay").remove();
    if (this.language === "en") {
      this.renderKeys(this.keys.keyArrEn);
    } else {
      this.renderKeys(this.keys.keyArrRu);
    }
    this.removeUpperCase();
  }

  onShiftStart(e) {
    if ((e.code === "ShiftLeft" || e.code === "ShiftRight") && !e.repeat) {
      this.key = [];
      this.renderShiftState();
    }
  }

  onKeyUp(e) {
    this.key.forEach((el) => {
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

  onKeyDown(e) {
    e.preventDefault();
    this.key.forEach((el) => {
      if (e.code === el.id) {
        if (el.id !== "CapsLock") {
          el.classList.add("active");
          if (el.innerText.length === 1) {
            this.input.focus();
            this.input.setRangeText(el.innerText, this.input.selectionStart, this.input.selectionEnd, "end");
          }
        }
        if (el.id === "CapsLock" && !e.repeat) {
          el.classList.toggle("active");
        }
      }
    });
    this.setCapsState(e);
    switch (e.code) {
      case "Space":
        document.querySelector("#Space").classList.add("active");
        this.input.setRangeText(" ", this.input.selectionStart, this.input.selectionEnd, "end");
        break;
      case "Tab":
        e.preventDefault();
        this.input.setRangeText("    ", this.input.selectionStart, this.input.selectionEnd, "end");
        break;
      case "Backspace":
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
        break;
      case "Enter":
        this.input.setRangeText("\n", this.input.selectionStart, this.input.selectionEnd, "end");
        break;
      default:
    }
    this.onShiftStart(e);
  }

  onMouseUp(e) {
    if (e.target.classList.contains("key") && this.wrapper && e.target.id !== "CapsLock" && e.target.id !== "ShiftLeft" && e.target.id !== "ShiftRight") {
      e.target.classList.remove("active");
    }
  }

  onMouseDown(e) {
    if (e.target.classList.contains("key") && this.wrapper && e.target.id !== "CapsLock" && e.target.id !== "ShiftLeft" && e.target.id !== "ShiftRight") {
      e.target.classList.add("active");
    }
  }

  fixActiveClass() {
    this.key.forEach((el) => {
      if (el.id !== "ShiftLeft" && el.id !== "CapsLock") {
        el.classList.remove("active");
      }
    });
  }

  onClickHandle(e) {
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
    if (e.target.innerText === "Ру") {
      this.changeLang("ru", this.keys.keyArrRu);
    }
    if (e.target.innerText === "En") {
      this.changeLang("en", this.keys.keyArrEn);
    }
    switch (e.target.id) {
      case "Space":
        this.input.setRangeText(" ", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
        break;
      case "Backspace":
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
        this.input.focus();
        break;
      case "Tab":
        this.input.setRangeText("    ", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
        break;
      case "Enter":
        this.input.setRangeText("\n", this.input.selectionStart, this.input.selectionEnd, "end");
        this.input.focus();
        break;
      default:
    }
  }

  renderKeyboardTemplate() {
    this.mainWrapper.classList.add("wrapper");
    this.wrapper.classList.add("keyboard-wrapper");
    this.input.classList.add("input");
    this.input.placeholder = "change language: Alt + Ctrl";
    this.input.autofocus = true;
    this.mainWrapper.append(this.input);
    this.mainWrapper.append(this.wrapper);
  }

  renderKeys(lang) {
    const keyOverlay = document.createElement("div");
    keyOverlay.classList.add("key-overlay");
    this.wrapper.append(keyOverlay);
    this.key = [];
    for (let i = 0; i < lang.length; i += 1) {
      const keyWrapper = document.createElement("div");
      keyWrapper.className = `keyWrapper key-wrapper-${i}`;
      keyOverlay.append(keyWrapper);
      for (let j = 0; j < lang[i].length; j += 1) {
        const div = document.createElement("div");
        div.innerText = `${lang[i][j]}`;
        div.classList.add("key");
        div.id = `${this.keys.arrCode[i][j]}`;
        keyWrapper.append(div);
        this.key.push(div);
        if (lang[i][j].length > 4) {
          div.classList.add("key-large");
        }
      }
    }
  }
}
