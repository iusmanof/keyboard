import { doc } from "prettier";
import en from "./en.js";
import ru from "./ru.js";
let isCaps = false;
let isShift = false;
let langKeys = en;
let input = document.querySelector(" .input");
let KeysInArray = [];
let sound = true;

function transformKeysInArray() {
  langKeys.forEach((row) => {
    row.forEach((element) => {
      if (element.hasOwnProperty("shift")) {
        KeysInArray.push(element);
      }
    });
  });
}

function showHideKeyboard() {
  document.onkeydown = function (e) {
    e = e || window.event;

    // show / hide keyboard
    if (e.shiftKey && e.which === 9) {
      toggleKeyboard();
    }

    if (e.ctrlKey && e.altKey) {
      toggleLanguage();
    }
    return true;
  };
}

function toggleKeyboard() {
  let keyboard = document.querySelector(".keyboard");
  keyboard.style.display = keyboard.style.display === "none" ? "block" : "none";
}

function toggleLanguage() {
  langKeys === en ? _en() : _ru();
}

// need refactor
function initKeyboard() {

  window.onload = () => {
    document.querySelector(".input").value = "";
  };
  
  document.addEventListener("keydown", _keyDown);
  showHideKeyboard();
  transformKeysInArray();
  sound = true;

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");

  langKeys.forEach((line) => {
    const row = document.createElement("div");
    row.classList.add("row");
    line.forEach((element) => {
      const button = document.createElement("button");
      button.innerText = element.key;
      button.setAttribute("id", element.code);
      button.setAttribute("class", "button");

      // Listener: Mouse click on virtual button
      if (!element.fnKey) {
        button.addEventListener("click", (e) => {
          input.focus();
          input.setRangeText(
            e.target.textContent,
            input.selectionStart,
            input.selectionEnd,
            "end"
          );
          keyClickSound();
        });
      }
      // Listener: Click fnKey
      else {
        // add sound to all fnkeys
        button.addEventListener("click", fnClickSound);

        switch (element.code) {
          // Implement FnKey
          case "CapsLock":
            button.addEventListener("click", _Caps);
            let toggleCaps = document.createElement("div");
            toggleCaps.setAttribute("class", "togglePointer");
            button.appendChild(toggleCaps);
            break;

          case "Backspace":
            button.addEventListener("click", _Backspace);
            break;

          case "Enter":
            button.addEventListener("click", _Enter);
            break;

          case "ShiftLeft":
          case "ShiftRight":
            button.addEventListener("click", _Shift);
            let toggleShift = document.createElement("div");
            toggleShift.setAttribute("class", "togglePointer");
            button.appendChild(toggleShift);
            break;
          case "en":
            button.addEventListener("click", _en);
            break;
          case "ru":
            button.addEventListener("click", _ru);
            break;
          case "ArrowLeft":
            button.addEventListener("click", _Left);
            break;
          case "ArrowRight":
            button.addEventListener("click", _Right);
            break;
          case "Sound":
            button.innerHTML =
              '<img id="sound" src="./assets/sound-img/soundOn.svg" alt="sound">';
            button.addEventListener("click", _Sound);
            break;
        }
      }
      row.append(button);
    });
    keyboard.appendChild(row);
  });
  document.body.appendChild(keyboard);
}

function _Sound() {
  let soundSrc = document.getElementById("sound").getAttribute("src");
  if (soundSrc === "./assets/sound-img/soundOn.svg") {
    document.getElementById("sound").src = "./assets/sound-img/soundOff.svg";
    sound = false;
  } else {
    document.getElementById("sound").src = "./assets/sound-img/soundOn.svg";
    sound = true;
  }
}

function keyClickSound() {
  if (sound) {
    var audio = new Audio();
    audio.src =
      langKeys === en
        ? "./assets/sound/enKeyClick.mp3"
        : "./assets/sound/ruKeySound.mp3";
    audio.autoplay = true;
  }
}

function fnClickSound() {
  if (sound) {
    var audio = new Audio();
    audio.src = "./assets/sound/fn_click.mp3";
    audio.autoplay = true;
  }
}

function _Backspace() {
  input.value = input.value.slice(0, -1);
}

function _Enter() {
  input.value += "\n";
}

function _Shift() {
  let btn = document.querySelectorAll(" .button");
  for (const property in btn) {
    let buttonText = btn[property].textContent;
    if (buttonText != undefined && isAnyNonWhiteSpaceCharacter(buttonText)) {
      btn[property].textContent = !isShift
        ? getShift(buttonText)
        : getUnShift(buttonText);
    }
  }
  isShift = !isShift;
  statusShift();
}

function getShift(buttonText) {
  let shiftKey;
  KeysInArray.find((obj) => {
    if (isCaps && isLetter(buttonText)) {
      shiftKey = buttonText.toLowerCase();
    }
    if (obj.key === buttonText) {
      shiftKey = obj.shift;
    }
  });
  return shiftKey;
}

function getUnShift(buttonText) {
  let shiftKey;
  KeysInArray.find((obj) => {
    if (isCaps && isLetter(buttonText)) {
      shiftKey = buttonText.toUpperCase();
    }
    if (obj.shift === buttonText) shiftKey = obj.key;
  });
  return shiftKey;
}

function _Caps() {
  let btn = document.querySelectorAll(" .button");
  for (const property in btn) {
    let buttonText = btn[property].textContent;

    if (buttonText != undefined && isLetter(buttonText)) {
      btn[property].textContent = isCaps
        ? buttonText.toLowerCase()
        : buttonText.toUpperCase();
    }
    if (buttonText != undefined && isShift && isLetter(buttonText)) {
      if (isCaps) {
        btn[property].textContent = buttonText.toUpperCase();
      } else {
        btn[property].textContent = buttonText.toLowerCase();
      }
    }
  }
  isCaps = !isCaps;
  statusCaps();
}

function statusCaps() {
  let toggle = document.getElementsByClassName("togglePointer")[0];
  toggle.classList.toggle("togglePointer-active");
}

function statusShift() {
  let toggle1 = document.getElementsByClassName("togglePointer")[1];
  let toggle2 = document.getElementsByClassName("togglePointer")[2];

  toggle1.classList.toggle("togglePointer-active");
  toggle2.classList.toggle("togglePointer-active");
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-zа-ё]/i);
}

function isAnyNonWhiteSpaceCharacter(str) {
  return str.length === 1 && str.match(/[\S]/i);
}

function _Left() {
  let textarea = document.querySelector(".input");
  textarea.focus();
  textarea.selectionEnd--;
}

function _Right() {
  let textarea = document.querySelector(".input");
  textarea.focus();
  let cursor = textarea.selectionStart;
  textarea.selectionStart++;
}

function _en() {
  let keyboard = document.querySelector(" .keyboard");
  keyboard.remove();
  langKeys = ru;
  initKeyboard(langKeys);

  window.onlanguagechange = function (event) {
    console.log("languagechange event detected!");
  };
}

function _ru() {
  let keyboard = document.querySelector(" .keyboard");
  keyboard.remove();
  langKeys = en;
  initKeyboard(langKeys);
}

function _keyDown(e) {
  let textarea = document.querySelector(" .input");
  textarea.focus();
  // console.log(` ${e.code}`);
  let pressedKey = document.getElementById(`${e.code}`);

  pressedKey.className += " active";
  setTimeout(() => {
    pressedKey.className = pressedKey.className.replace(" active", "");
  }, 200);

  if (e.code === "CapsLock") _Caps();
  if (e.code === "ShiftLeft" || e.code === "ShiftRight") _Shift();
}

export { initKeyboard };
