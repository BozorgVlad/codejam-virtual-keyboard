export default class Keyboard {
    constructor() {
        this.input = document.createElement("textarea");
        this.wrapper = document.createElement("div");
        this.language = localStorage.getItem("language") || "en";
        this.key = [];
        this.keys = {
            keyArrEn: [
                ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
                ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "DEL"],
                ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
                ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "shift"],
                ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
            ],
            keyArrEnShift: [
                ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
                ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "DEL"],
                ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "|", "Enter"],
                ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "shift"],
                ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
            ],
            keyArrRu: [
                ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
                ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"],
                ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "Enter"],
                ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "shift"],
                ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]
            ],
            keyArrRuShift: [
                ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
                ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"],
                ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "/", "Enter"],
                ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "shift"],
                ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]
            ]
        };
    }

    bindEvents() {
        this.wrapper.addEventListener("click", (e) => this.onClickHandle(e));
        this.wrapper.addEventListener("mousedown", (e) => this.onMouseDown(e));
        this.wrapper.addEventListener("mouseup", (e) => this.onMouseUp(e));
        document.addEventListener("keydown", (e) => this.onKeyDown(e));
        document.addEventListener("keyup", (e) => this.onKeyUp(e));
        document.addEventListener("keydown", (e) => this.onShiftStart(e));
        document.addEventListener("keyup", e => this.onShiftEnd(e));
        document.addEventListener("keydown", e => this.setCapsState(e));
    }

    removeCapsState() {
        this.key.forEach(el => {
            el.classList.remove("upper");
        });
    }

    setCapsState(e) {
        if (e.which === 20) {
            document.querySelector(".caps").classList.add("active");
            this.setUpperKeys();
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
            document.querySelector(".key-overlay").remove();
            this.renderKeys(this.keys.keyArrEn);
            this.key.forEach(el => {
                el.classList.remove("upper");
            });
        }
    }

    onShiftStart(e) {
        if (e.which === 16) {
            document.querySelector(".key-overlay").remove();
            this.renderKeys(this.keys.keyArrEnShift);
            document.querySelector(".shift").classList.add("active");
            this.key.forEach(el => {
                if (el.innerText.length === 1) {
                    el.classList.add("upper");
                }
            });
        }
    }

    onKeyUp(e) {
        this.key.forEach(el => {
            if (e.key === el.innerText.toLowerCase() && e.which !== 20) {
                el.classList.remove("active");
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.remove("active");
        }
    }

    onKeyDown(e) {
        let caps = document.querySelector(".caps");
        if (e.which === 20 && caps.classList.contains("active")) {
            caps.classList.remove("active");
            this.removeCapsState();
        }
        this.key.forEach(el => {
            if (e.key === el.innerText.toLowerCase()) {
                el.classList.add("active");
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.add("active");
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
        for (let i = 0; i < lang.length; i += 1) {
            let keyWrapper = document.createElement("div");
            keyWrapper.classList.add("keyWrapper");
            keyOverlay.append(keyWrapper);
            for (let j = 0; j < lang[i].length; j += 1) {
                let div = document.createElement("div");
                div.innerText = `${lang[i][j]}`;
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
}
