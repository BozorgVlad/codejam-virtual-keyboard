import Keyboard from "./keyboardView";

let keyboard = new Keyboard();

keyboard.renderKeyboardTemplate();
if (localStorage.language === "en") {
    keyboard.renderKeys(keyboard.keys.keyArrEn);
} else {
    keyboard.renderKeys(keyboard.keys.keyArrRu);
}
keyboard.bindEvents();
