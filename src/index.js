import 'normalize.css'
import './style.sass'
import * as keyboard from '../src/keyboard'
keyboard.main();



// import {en} from './keys/enKeys.js';
// import {ru} from './keys/ruKeys.js';

// let layout = document.createElement("div");
// let header = document.createElement("h1");
// let output = document.createElement("textarea");
// let input = document.createElement("div");


// layout.classList.add("layout");

// header.innerHTML = "Virtual KeyBoard";

// input.classList.add('keyboard');

// layout.append(header, output, input);

// function init(keys){
//       keys.forEach((rows) => {
//               rows.forEach((i) =>{
//                         let key = document.createElement("div");

//                         key.classList.add("key");
                        
//                         key.innerHTML = i[0];
                        
//                     switch (i[0]){
//                             case "enter":
//                                     key.classList.add("enter");
//                                 break;
//                                 case "space":
//                                     key.classList.add("space")
//                                 break;
//                                 case "":
//                                       key.classList.remove("key");
//                                       key.classList.add("empty");
//                                 break;
//                                 case "caps":
//                                      key.addEventListener("caps", _toggleCapsLock);
//                                 break;
//                                 default:
//                                      key.addEventListener("click", outputValue);
                                    
//                                 break;
//                                 }

//                     input.append(key);
                        
//                     })
//               });
// }

// function outputValue(event){
//         output.innerHTML += event.target.innerHTML;
//         console.log(event.target.innerHTML);
// }

// function _toggleCapsLock(){
//          keys.forEach((rows) => {
//                         rows.forEach((i) =>{

//                                     if (i[0] !== null){
//                                                  let key = document.createElement("div");
//                                                  key.classList.add("key");
//                                                  key.innerHTML = i[0];
//                                                 }
                                    
//                                     input.append(key);
                                    
//                                 })
//                  });
// }

// init(ru);



// document.body.prepend(layout);