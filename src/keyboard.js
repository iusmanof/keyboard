import en from './en.js'
import ruKeys from './ruKeys.js'
const keys__content = document.querySelector('.keys__content');
let isCaps = false;
let isShift = false;
let langKeys = en;
let input = document.querySelector(' .input');


function main() {
    document.addEventListener('keydown', _keyDown);
    initKeyboard(langKeys);
    showKeyboard();
}

function showKeyboard() {

    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.shiftKey && e.which == 9) {
            toggleKeyboard();
        }
        return true;
    }
}

function toggleKeyboard() {
    let keyboard = document.querySelector('.keyboard')
    if (keyboard.style.display === "none") {
        keyboard.style.display = "block";
    } else {
        keyboard.style.display = "none";
    }
}

function initKeyboard(langKeys) {

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    langKeys.forEach((line) => {
        const row = document.createElement('div');
        row.classList.add('row');
        line.forEach((element) => {
            const button = document.createElement('button');
            button.innerText = element.key;
            button.setAttribute('id', element.code);
            button.setAttribute('class', 'button');

            // Listener: Mouse click on virtual button
            if (!element.fnKey) {
                button.addEventListener('click', (e) => {
                    input.focus();
                    input.setRangeText(e.target.textContent, input.selectionStart, input.selectionEnd, "end");
                });
            }
            // Listener: Click fnKey
            else {
                switch (element.code) {

                    // Implement FnKey 
                    case 'CapsLock':
                        button.addEventListener('click', _Caps);
                        const toggleCaps = document.createElement('div');
                        toggleCaps.setAttribute('id', 'toggleCaps');
                        button.appendChild(toggleCaps);
                        break;

                    case 'Backspace':
                        button.addEventListener('click', _Backspace);
                        break;

                    case 'Enter':
                        button.addEventListener('click', _Enter);
                        break;

                    case 'ShiftLeft':
                    case 'ShiftRight':
                        button.addEventListener('click', _Shift);
                        break;
                        //Unimplement FnKey
                    case 'Tab':
                        button.addEventListener('click', _Tab);
                        break;

                }
            }
            row.append(button);
        });
        keyboard.appendChild(row);
    });
    document.body.appendChild(keyboard);
}


function _Backspace() {
    input.value = input.value.slice(0, -1);
}

function _Enter() {
    input.value += '\n';
}

function _Shift() {
    let btn = document.querySelectorAll(' .button');

    for (const property in btn) {
        let buttonText = btn[property].textContent;
        if (buttonText != undefined && buttonText.length <= 1) {
            btn[property].textContent = findShiftElement(buttonText);
        }
    }

    isShift = !isShift;
}

function findShiftElement(btnText) {
    let shiftElement;

    if (!isShift) {
        langKeys.forEach((row) => {
            row.forEach((element) => {
                if (element.hasOwnProperty('shift')) {
                    for (const property in element) {
                        if (btnText === element['key']) {
                            shiftElement = element['shift'];
                        }
                    }
                }

            })
        });
    } else {
        langKeys.forEach((row) => {
            row.forEach((element) => {
                if (element.hasOwnProperty('shift')) {
                    for (const property in element) {
                        if (btnText === element['shift']) {
                            shiftElement = element['key'];
                        }
                    }
                }
            })
        });
    }

    return shiftElement;
}

function _Tab() {
    console.log('Tab click implement in next version')
}

function _Caps() {
    let btn = document.querySelectorAll(' .button');

    for (const property in btn) {
        let buttonText = btn[property].textContent;
        if (buttonText != undefined && isLetter(buttonText)) {
            btn[property].textContent = isCaps ? btn[property].textContent = btn[property].textContent.toLowerCase() :
                btn[property].textContent = btn[property].textContent.toUpperCase();
        }
    }
    isCaps = !isCaps;
    statusCaps();
}

function statusCaps() {
    let toggleCaps = document.getElementById('toggleCaps');
    toggleCaps.classList.toggle('toggleCaps-active');
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

// function _Left(){
//     let textarea = document.querySelector(' .input__content');
//     textarea.focus();
//     textarea.selectionEnd--;
// }

// function _Right(){
//     let textarea = document.querySelector(' .input__content');
//     textarea.focus();
//     let cursor = textarea.selectionStart;
//         textarea.selectionStart++;
// }

// function _Up(){
//   console.log('Implement up move cursor. I don\'t know how to do it yet');
// }

// function _Down(){
//     console.log('Implement down move cursor. I don\'t know how to do it yet');
// }

// function _en() {
//     let keyboard = document.querySelector(' .keyboard');
//     keyboard.remove();
//     lang = ruKeys;
//     initKeyboard(lang);
// }

// function _ru() {
//     let keyboard = document.querySelector(' .keyboard');
//     keyboard.remove();
//     lang = enKeys;
//     initKeyboard(lang);
// }


// function _Enter() {
//     let input = document.querySelector(' .input__content');
//     input.value += '\n';
// }


// function _Space() {
//     let input = document.querySelector(' .input__content');
//     input.value += ' ';
// }

// function inputFunc(e) {
//     let input = document.querySelector(' .input__content');
//     input.focus();
//     input.setRangeText(e.target.textContent, input.selectionStart, input.selectionEnd, "end");
// }


// if (langKeys.code.property {
//     btn[index].innerHTML = e.key;
// }
// if (isShift) {
//     langKeys.forEach((e, index) => {
//         // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
//         langKeys.forEach((e, index) => {
//             // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
//             if (e.shift != false) {
//                 if (e.code.match(/^[Key]+/)) {
//                     btn[index].innerHTML = e.key;
//                 } else {
//                     btn[index].innerHTML = e.shift;
//                 }
//             }
//         })
//     })
// } else {
// if (!isCaps) {
//     langKeys.forEach((e, index) => {
//         if (e.caps != false) {
//             btn[index].innerHTML = e.caps;
//         }
//     })
// } else {
// langKeys.forEach((e, index) => {
//     if (e.caps != false) {
//         btn[index].innerHTML = e.key;
//     }
// })
// }\
// isCaps = !isCaps;
// }
// Object.values(enKeys).forEach(value => {
//     let text = document.createTextNode(`${value}`);
//     let span = document.getElementsByTagName('span');
//     console.log(span[1].textContent);
// })


// function _Shift() {
//     let btn = document.querySelectorAll(' .btn');
//     // Caps = true
//     if (isCaps) {
//         lang.forEach((e, index) => {
//             // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
//             if (e.shift != false) {
//                 if (e.code.match(/^[Key]+/)) {
//                     btn[index].innerHTML = e.key;
//                 } else {
//                     btn[index].innerHTML = e.shift;
//                 }
//             }
//         })
//     }
//     // Shift = true, Caps = false
//     else {
//         if (!isShift) {
//             lang.forEach((e, index) => {
//                 if (e.shift != false) {
//                     btn[index].innerHTML = e.shift;
//                 }
//             })
//         } else {
//             lang.forEach((e, index) => {
//                 if (e.shift != false) {
//                     btn[index].innerHTML = e.key;
//                 }
//             })
//         }
//     }
//     isShift = !isShift;

// }

function _keyDown(e) {
    let textarea = document.querySelector(' .input');
    textarea.focus();
    // console.log(` ${e.key}`);
    let pressedKey = document.getElementById(`${e.code}`);
    pressedKey.className += " active";
    setTimeout(() => {
        pressedKey.className = pressedKey.className.replace(" active", "");
    }, 200);
}

export {
    main
};


// let input = document.querySelector(' .input__content');         - rebuild
// DocumentFragment вставляет пачку DOM элементов или append/prepend
// create line * 5 in html (0-`1234 1-qwerty 2-asdfg 3-zxcvb 4 ctrl space)
// in js code rename textarea or input variables

//task with *   up and down cursor    think !!!