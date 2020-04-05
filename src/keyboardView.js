export default class Keyboard {
    constructor() {
        this.input = document.createElement("textarea");
        this.wrapper = document.createElement("div");
        this.language = localStorage.getItem("language");
        this.key = [];
        this.keys = {
            keyArrEn: [
                ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
                ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
                ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
                ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "shift"],
                ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
            ],
            keyArrEnShift: [
                ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
                ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}"],
                ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "|", "Enter"],
                ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "shift"],
                ["Ctrl", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
            ],
            keyArrRu: [
                ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
                ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
                ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "Enter"],
                ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "shift"],
                ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"]
            ],
            keyArrRuShift: [
                ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
                ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
                ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "/", "Enter"],
                ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "shift"],
                ["Ctrl", "Alt", " ", "alt", "En", "←", "↓", "→"]
            ],
            arrCode: [
                ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
                ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight"],
                ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"],
                ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
                ["ControlLeft", "AltLeft", "Space", "AltRight", "MetaRight", "ArrowLeft", "ArrowDown", "ArrowRight"]
            ]
        };
    }

    bindEvents() {
        this.wrapper.addEventListener("mousedown", (e) => this.onClickHandle(e));
        this.wrapper.addEventListener("mousedown", (e) => this.onMouseDown(e));
        this.wrapper.addEventListener("mouseup", (e) => this.onMouseUp(e));
        document.addEventListener("keydown", e => this.changeLanguage(e));
        document.addEventListener("keydown", (e) => this.onKeyDown(e));
        document.addEventListener("keyup", (e) => this.onKeyUp(e));
        document.addEventListener("keydown", (e) => this.onShiftStart(e));
        document.addEventListener("keyup", e => this.onShiftEnd(e));
        document.addEventListener("keydown", e => this.setCapsState(e));
    }

    changeLanguage(e) {
        e.preventDefault();
        let keyboard = document.querySelector(".key-overlay");
        if (e.key === "Control" && e.altKey) {
            if (this.language === "en") {
                this.language = "ru";
                localStorage.removeItem("language");
                localStorage.setItem("language", "ru");
                keyboard.remove();
                this.renderKeys(this.keys.keyArrRu);
            } else if (this.language === "ru") {
                this.language = "en";
                localStorage.removeItem("language");
                localStorage.setItem("language", "en");
                keyboard.remove();
                this.renderKeys(this.keys.keyArrEn);
            }
            console.log(this.language);
        }
    }

    removeUpperCase() {
        this.key.forEach(el => {
            el.classList.remove("upper");
        });
    }

    setCapsState(e) {
        if (e.which === 20) {
            this.setUpperKeys();
            if (!document.querySelector(".caps").classList.contains("active")) {
                this.removeUpperCase();
            }
        }
    }

    setUpperKeys() {
        this.key.forEach(el => {
            if (el.innerText.length === 1) {
                el.classList.add("upper");
            }
        });
    }

    onShiftEnd(e) {
        if (e.which === 16) {
            this.key = [];
            document.querySelector(".key-overlay").remove();
            if (this.language === "en") {
                this.renderKeys(this.keys.keyArrEn);
            } else {
                this.renderKeys(this.keys.keyArrRu);
            }
            this.removeUpperCase();
        }
    }

    onShiftStart(e) {
        if (e.which === 16) {
            this.key = [];
            document.querySelector(".key-overlay").remove();
            if (this.language === "en") {
                this.renderKeys(this.keys.keyArrEnShift);
            } else {
                this.renderKeys(this.keys.keyArrRuShift);
            }
            this.setUpperKeys();
            document.querySelector(".shift").classList.add("active");
        }
    }

    onKeyUp(e) {
        this.key.forEach(el => {
            if (e.code === el.id) {
                if (!el.classList.contains("caps")) {
                    el.classList.remove("active");
                }
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.remove("active");
        }
    }

    onKeyDown(e) {
        console.log(e.key.toString().toLowerCase());
        e.preventDefault();
        this.key.forEach(el => {
            if (e.code === el.id) {
                if (!el.classList.contains("caps")) {
                    el.classList.add("active");
                    if (el.innerText.length === 1) {
                        this.input.focus();
                        this.input.value += el.innerText;
                    }
                }
                if (el.classList.contains("caps")) {
                    el.classList.toggle("active");
                }
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.add("active");
            this.input.value += " ";
        }
        if (e.code === "Tab") {
            e.preventDefault();
            this.input.value += "    ";
        }
        if (e.code === "Backspace") {
            this.input.value = this.input.value.substring(0, this.input.value.length - 1);
        }
        if (e.code === "Enter") {
            this.input.value += "\n";
        }
    }

    onMouseUp(e) {
        if (e.target.classList.contains("key") && this.wrapper && !e.target.classList.contains("caps")) {
            e.target.classList.remove("active");
        }
    }

    onMouseDown(e) {
        if (e.target.classList.contains("key") && this.wrapper && !e.target.classList.contains("caps")) {
            e.target.classList.add("active");
        }
    }

    onClickHandle(e) {
        let keyboard = document.querySelector(".key-overlay");
        if (e.target.classList.contains("caps")) {
            e.target.classList.toggle("active");
            if (e.target.classList.contains("active")) {
                this.setUpperKeys();
            } else {
                this.removeUpperCase();
            }
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
            this.language = "ru";
        }
        if (e.target.innerText === "En") {
            keyboard.remove();
            this.renderKeys(this.keys.keyArrEn);
            localStorage.setItem("language", "en");
            this.language = "en";
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

    renderKeyboardTemplate() {
        this.wrapper.classList.add("keyboard-wrapper");
        this.input.classList.add("input");
        this.input.autofocus = true;
        document.querySelector("body").append(this.input);
        document.body.append(this.wrapper);
    }

    renderKeys(lang) {
        const keyOverlay = document.createElement("div");
        keyOverlay.classList.add("key-overlay");
        this.wrapper.append(keyOverlay);
        this.key = [];
        for (let i = 0; i < lang.length; i += 1) {
            let keyWrapper = document.createElement("div");
            keyWrapper.className = `keyWrapper key-wrapper-${i}`;
            keyOverlay.append(keyWrapper);
            for (let j = 0; j < lang[i].length; j += 1) {
                let div = document.createElement("div");
                div.innerText = `${lang[i][j]}`;
                div.classList.add("key");
                div.id = `${this.keys.arrCode[i][j]}`;
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
                if (lang[i][j] === "shift") {
                    div.classList.add("rshift");
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
}
