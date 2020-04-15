import Keyboard from "./keyboardView.js";

const keyboard = new Keyboard();

document.body.append(keyboard.mainWrapper);

keyboard.renderKeyboardTemplate();
if (localStorage.language === "en") {
  keyboard.renderKeys(keyboard.keys.keyArrEn);
} else {
  keyboard.renderKeys(keyboard.keys.keyArrRu);
}
keyboard.bindEvents();
