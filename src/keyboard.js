import {
    doc
} from 'prettier';
import enKeys from './enKeys.js'
const keys__content = document.querySelector('.keys__content');


function main() {

    document.addEventListener('keydown', logKey);
    initKeyboard();
    // <button class="btn-6"><span>`</span></button>
}


function initKeyboard() {
    for (const key in enKeys) {
        const text = document.createTextNode(`${key}`);
        const button = document.createElement("button");
        const span = document.createElement("span");
        span.appendChild(text);
        button.appendChild(span);
        button.classList.add('btn');
        keys__content.appendChild(button);
    };
}

function logKey(e) {
    console.log(` ${e.code}`);
}

export {
    main
};