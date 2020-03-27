import "../style.css";

function createTextarea() {
    const input = document.createElement("input");
    const body = document.querySelector("body");

    body.append(input);
    input.classList.add("input");
}

createTextarea();

function renderKeyboardTemplate() {
    const body = document.querySelector("body");
    const wrapper = document.createElement("div");

    body.append(wrapper);
    wrapper.classList.add("keyboard-wrapper");
}

renderKeyboardTemplate();

const keys = {
    keyArrEn: [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "DEL"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
        ["Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "shift"],
        ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
    ],
    keyArrEnShift: [
        ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "DEL"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "|", "Enter"],
        ["Shift", "|", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "shift"],
        ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→"]
    ],
    keyArrRu: [
        ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"],
        ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "Enter"],
        ["Shift", "\\", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "shift"],
        ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]
    ],
    keyArrRuShift: [
        ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "DEL"],
        ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "/", "Enter"],
        ["Shift", "/", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "shift"],
        ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→"]
    ]

};

function renderKeys(lang) {
    const keyboard = document.querySelector(".keyboard-wrapper");

    for (let i = 0; i < lang.length; i += 1) {
        let keyWrapper = document.createElement("div");

        keyboard.append(keyWrapper);

        for (let j = 0; j < lang[i].length; j += 1) {
            let div = document.createElement("div");
            div.innerText = `${lang[i][j]}`;
            keyWrapper.append(div);
            keyWrapper.classList.add("keyWrapper");
            div.classList.add("key");
            if (lang[i][j].length > 4) {
                div.classList.add("key-large");
            }
            if (lang[i][j] === " ") {
                div.classList.add("space");
            }
            if (lang[i][j] === "Tab") {
                div.classList.add("tab");
            }
        }
    }
}

renderKeys(keys.keyArrEn);

function addClickKeyHandler() {
    const keyboard = document.querySelector(".keyboard-wrapper");
    const input = document.querySelector(".input");
    keyboard.addEventListener("click", (e) => {
        if (e.target.classList.contains("key") && e.target.innerText.length < 2) {
            input.value += e.target.innerText;
        }
        if (e.target.classList.contains("space")) {
            input.value += " ";
        }
        if (e.target.innerText === "Ру") {
            keyboard.remove();
            renderKeyboardTemplate();
            renderKeys(keys.keyArrRu);
            addClickKeyHandler();
        }
        if (e.target.innerText === "En") {
            keyboard.remove();
            renderKeyboardTemplate();
            renderKeys(keys.keyArrEn);
            addClickKeyHandler();
        }
        if (e.target.innerText === "Backspace") {
            input.value = input.value.substring(0, input.value.length - 1);
        }
    });

    keyboard.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("key")) {
            e.target.classList.add("active");
        }
    });

    keyboard.addEventListener("mouseup", (e) => {
        if (e.target.classList.contains("key")) {
            e.target.classList.remove("active");
        }
    });
}

addClickKeyHandler();

function addKeyboardHandler() {
    document.addEventListener("keydown", (e) => {
        const keyses = document.querySelectorAll(".key");
        keyses.forEach(el => {
            if (e.key.toString() === el.innerText) {
                el.classList.add("active");
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.add("active");
        }
    });
    document.addEventListener("keyup", (e) => {
        const keyses = document.querySelectorAll(".key");
        keyses.forEach(el => {
            if (e.key.toString() === el.innerText) {
                el.classList.remove("active");
            }
        });
        if (e.code === "Space") {
            document.querySelector(".space").classList.remove("active");
        }
    });
}

addKeyboardHandler();

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

function addStateHandlers() {
    let state = {
        capslock: false,
        language: "ru"
    };
    document.addEventListener("keyup", (e) => {
        if (e.which === 20) {
            state.capslock = true;
            let letters = document.querySelectorAll(".key");
            letters.forEach((el) => {
                if (isLetter(el.innerText) && el.innerText.length < 2) {
                    el.classList.add("upper");
                }
            });
        }
    });
}

addStateHandlers();
