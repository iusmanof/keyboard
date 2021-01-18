import 'normalize.css'
import './style.sass'
import * as keyboard from '../src/keyboard'
keyboard.main();

window.onload = init;

function init() {
    document.querySelector(".input").value = "";
}
