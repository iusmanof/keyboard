import {
    doc
} from 'prettier';
import enKeys from './enKeys.js'
import ruKeys from './ruKeys.js'
const keys__content = document.querySelector('.keys__content');
let isCaps = false;
let isShift = false;
let lang = enKeys;


function main() {
    document.addEventListener('keydown', logKey);

    initHeader();
    initInput();
    initKeyboard(enKeys);
}

function initKeyboard(lang) {

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardClose = document.createElement('div');
    keyboardClose.classList.add('keyboard__close');
    const keyboardCloseBtn = document.createElement('span');
    keyboardCloseBtn.classList.add('keyboard__close-btn');

    const keyboardContent = document.createElement('div');
    keyboardContent.classList.add('keyboard__content');
    const keys = document.createElement('div');
    keys.classList.add('keys');
    const keysContent = document.createElement('div');
    keysContent.classList.add('keys__content');

    keyboard.appendChild(keyboardClose);
    keyboard.appendChild(keyboardContent);
    keyboardClose.appendChild(keyboardCloseBtn);
    keyboardContent.appendChild(keys);
    keys.appendChild(keysContent);

    lang.forEach(key => {
        let text = document.createTextNode(`${key.key}`);
        let button = document.createElement("button");
        let span = document.createElement("span");
        span.appendChild(text);
        button.appendChild(span);
        button.classList.add('btn');
        button.setAttribute('id', key.code);
       
        if (key.fnKey) {
            button.classList += ' fnKey';
        } else {
            button.addEventListener('click', inputFunc);
        }
        keysContent.appendChild(button);


        if (key.key === 'space') {
            button.addEventListener('click', _Space);
        }
        if (key.key === 'backspace') {
            button.addEventListener('click', _Backspace);
        }
        if (key.key === 'enter') {
            button.addEventListener('click', _Enter);
        }
        if (key.key === 'caps') {
            button.addEventListener('click', _Caps);
        }
        if (key.key === 'shift') {
            button.addEventListener('click', _Shift);
        }
        if (key.key === 'en') {
            button.addEventListener('click', _en);
        }
        if (key.key === 'ru') {
            button.addEventListener('click', _ru);
        }

        if (key.key === 'up'){
            span.innerHTML = '<img class="right-btn" src="./assets/up.svg" alt="right">'
            button.addEventListener('click', _Up);
        }
        if (key.key === 'left'){
            span.innerHTML = '<img class="right-btn" src="./assets/left.svg" alt="right">'
            button.addEventListener('click', _Left);
        }
        if (key.key === 'down'){
            span.innerHTML = '<img class="right-btn" src="./assets/down.svg" alt="right">'
            button.addEventListener('click', _Down);
        }
        if (key.key === 'right'){
            span.innerHTML = '<img class="right-btn" src="./assets/right.svg" alt="right">'
            button.addEventListener('click', _Right);
        }
            
    })

    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(keyboard);
}

function _Left(){
    let textarea = document.querySelector(' .input__content');
    textarea.focus();
    textarea.selectionEnd--;
}

function _Right(){
    let textarea = document.querySelector(' .input__content');
    textarea.focus();
    let cursor = textarea.selectionStart;
        textarea.selectionStart++;
}

function _Up(){
  console.log('Implement up move cursor. I don\'t know how to do it yet');
}

function _Down(){
    console.log('Implement down move cursor. I don\'t know how to do it yet');
}

function _en() {
    let keyboard = document.querySelector(' .keyboard');
    keyboard.remove();
    lang = ruKeys;
    initKeyboard(lang);
}

function _ru() {
    let keyboard = document.querySelector(' .keyboard');
    keyboard.remove();
    lang = enKeys;
    initKeyboard(lang);
}


function _Enter() {
    let input = document.querySelector(' .input__content');
    input.value += '\n';
}

function _Backspace() {
    let input = document.querySelector(' .input__content');
    input.value = input.value.slice(0, -1);
}

function _Space() {
    let input = document.querySelector(' .input__content');
    input.value += ' ';
}

function inputFunc(e) {
    let input = document.querySelector(' .input__content');
    input.focus();
    input.setRangeText(e.target.textContent, input.selectionStart, input.selectionEnd, "end");
}

function _Caps() {
    let btn = document.querySelectorAll(' .btn');
    if (isShift) {
        lang.forEach((e, index) => {
            // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
            lang.forEach((e, index) => {
                // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
                if (e.shift != false) {
                    if (e.code.match(/^[Key]+/)) {
                        btn[index].innerHTML = e.key;
                    } else {
                        btn[index].innerHTML = e.shift;
                    }
                }
            })
        })
    } else {
        if (!isCaps) {
            lang.forEach((e, index) => {
                if (e.caps != false) {
                    btn[index].innerHTML = e.caps;
                }
            })
        } else {
            lang.forEach((e, index) => {
                if (e.caps != false) {
                    btn[index].innerHTML = e.key;
                }
            })
        }
        isCaps = !isCaps;
    }
    // Object.values(enKeys).forEach(value => {
    //     let text = document.createTextNode(`${value}`);
    //     let span = document.getElementsByTagName('span');
    //     console.log(span[1].textContent);
    // })
}

function _Shift() {
    let btn = document.querySelectorAll(' .btn');
    // Caps = true
    if (isCaps) {
        lang.forEach((e, index) => {
            // only for letter where can shift letter  NOT CAPS NOT ENTER etc - buttons 
            if (e.shift != false) {
                if (e.code.match(/^[Key]+/)) {
                    btn[index].innerHTML = e.key;
                } else {
                    btn[index].innerHTML = e.shift;
                }
            }
        })
    }
    // Shift = true, Caps = false
    else {
        if (!isShift) {
            lang.forEach((e, index) => {
                if (e.shift != false) {
                    btn[index].innerHTML = e.shift;
                }
            })
        } else {
            lang.forEach((e, index) => {
                if (e.shift != false) {
                    btn[index].innerHTML = e.key;
                }
            })
        }
        isShift = !isShift;
    }

}

function initInput() {
    const input = document.createElement('div');
    input.classList.add('input');
    const input__content = document.createElement('textarea');
    input__content.classList.add('input__content');
    input__content.setAttribute('name', 'textarea');
    input__content.setAttribute('cols', '30');
    input__content.setAttribute('rows', '10');
    input__content.setAttribute('placeholder', 'Use virtual keyboard ... ');
    input__content.setAttribute('wrap', 'hard');
    input.appendChild(input__content);

    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(input);
}

function initHeader() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const header = document.createElement('header');
    const header__title = document.createElement('h1');
    const text = document.createTextNode('Virtual Keyboard');
    header__title.classList.add('header__title');
    header__title.appendChild(text);
    header.appendChild(header__title);
    wrapper.appendChild(header);
}


function logKey(e) {
    console.log(` ${e.code}`);
}

export {
    main
};


// let input = document.querySelector(' .input__content');         - rebuild
// DocumentFragment вставляет пачку DOM элементов или append/prepend
// create line * 5 in html (0-`1234 1-qwerty 2-asdfg 3-zxcvb 4 ctrl space)
// in js code rename textarea or input variables

//task with *   up and down cursor    think !!!
