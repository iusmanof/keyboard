const enKeys = [{
        key: '`',
        caps: '`',
        shift: '~',
        code: 'Backquote',
        fnKey: false
    },
    {
        key: '1',
        caps: '1',
        shift: '!',
        code: 'Digit1',
        fnKey: false

    },
    {
        key: '2',
        caps: '2',
        shift: '@',
        code: 'Digit2',
        fnKey: false
    },
    {
        key: '3',
        caps: '3',
        shift: '#',
        code: 'Digit3',
        fnKey: false
    },
    {
        key: '4',
        caps: '4',
        shift: '$',
        code: 'Digit4',
        fnKey: false
    },
    {
        key: '5',
        caps: '5',
        shift: '%',
        code: 'Digit5',
        fnKey: false
    },
    {
        key: '6',
        caps: '6',
        shift: '^',
        code: 'Digit6',
        fnKey: false
    },
    {
        key: '7',
        caps: '7',
        shift: '&',
        code: 'Digit7',
        fnKey: false
    },
    {
        key: '8',
        caps: '8',
        shift: '*',
        code: 'Digit8',
        fnKey: false
    },
    {
        key: '9',
        caps: '9',
        shift: '(',
        code: 'Digit9',
        fnKey: false
    },
    {
        key: '0',
        caps: '0',
        shift: ')',
        code: 'Digit0',
        fnKey: false
    },
    {
        key: '-',
        caps: '-',
        shift: '-',
        code: 'Minus',
        fnKey: false
    },
    {
        key: '=',
        caps: '=',
        shift: '+',
        code: 'Equal',
        fnKey: false
    },
    {
        key: 'backspace',
        caps: 'backspace',
        shift: 'backspace',
        code: 'Backspace',
        fnKey: true
    },
    {
        key: 'tab',
        caps: false,
        shift: false,
        code: 'tab',
        fnKey: true
    },
    {
        key: 'q',
        caps: 'Q',
        shift: 'Q',
        code: 'KeyQ',
        fnKey: false
    },
    {
        key: 'w',
        caps: 'W',
        shift: 'W',
        code: 'KeyW',
        fnKey: false
    }, 
    {
        key: 'e',
        caps: 'E',
        shift: 'E',
        code: 'KeyE',
        fnKey: false
    }, 
    {
        key: 'r',
        caps: 'R',
        shift: 'R',
        code: 'KeyR',
        fnKey: false
    }, 
    {
        key: 't',
        caps: 'T',
        shift: 'T',
        code: 'KeyT',
        fnKey: false
    }, 
    {
        key: 'y',
        caps: 'Y',
        shift: 'Y',
        code: 'KeyY',
        fnKey: false
    }, 
    {
        key: 'u',
        caps: 'U',
        shift: 'U',
        code: 'KeyU',
        fnKey: false
    }, 
    {
        key: 'i',
        caps: 'I',
        shift: 'I',
        code: 'KeyI',
        fnKey: false
    }, 
    {
        key: 'o',
        caps: 'O',
        shift: 'O',
        code: 'KeyO',
        fnKey: false
    }, 
    {
        key: 'p',
        caps: 'P',
        shift: 'P',
        code: 'KeyP'
    }, 
    {
        key: 'enter',
        caps: false,
        shift: false,
        code: 'Enter',
        fnKey: true
    }, 
    {
        key: 'shift',
        caps: false,
        shift: false,
        code: 'Shift',
        fnKey: true
    },
    {
        key: 'caps',
        caps: false,
        shift: false,
        code: 'CapsLock',
        fnKey: true
    },
    {
        key: 'space',
        caps: false,
        shift: false,
        code: 'Space',
        fnKey: true
    },
    {
        key: 'ctrl',
        caps: false,
        shift: false,
        code: 'ctrl',
        fnKey: true
    },
    {
        key: 'en',
        caps: false,
        shift: false,
        code: 'lang',
        fnKey: true
    },
    {
        key: 'up',
        caps: false,
        shift: false,
        code: 'ArrowUp',
        fnKey: true
    },
    {
        key: 'down',
        caps: false,
        shift: false,
        code: 'ArrowDown',
        fnKey: true
    },
    {
        key: 'left',
        caps: false,
        shift: false,
        code: 'ArrowLeft',
        fnKey: true
    },
    {
        key: 'right',
        caps: false,
        shift: false,
        code: 'ArrowRight',
        fnKey: true
    }
]


//     "`": "~",
//     " 1": "!",
//     " 2": "@",
//     " 3": "#",
//     " 4": "$",
//     " 5": "%",
//     " 6": "^",
//     " 7": "&",
//     " 8": "*",
//     " 9": "(",
//     " 0": ")",
//     "-": "_",
//     "=": "+",
//     "backspace": "backspace",

//     "tab": "tab",
//     "q": "!",
//     "w": "!",
//     "e": "!",
//     "r": "!",
//     "t": "!",
//     "y": "!",
//     "u": "!",
//     "i": "!",
//     "o": "!",
//     "p": "!",
//     "[": "!",
//     "]": "!",
//     "\\": "!",

//     "caps lock": "CAPS LOCk",
//     "a": "A",
//     "d": "D",
//     "f": "F",
//     "g": "G",
//     "h": "H",
//     "j": "J",
//     "k": "K",
//     "l": "L",
//     ";": ":",
//     "'": "\"",
//     "enter": "enter",

//     "shift": "shift",
//     "z": "shift",
//     "x": "L",
//     "c": "L",
//     "v": "L",
//     "b": "L",
//     "n": "L",
//     "m": "L",
//     ",": "L",
//     ".": "L",
//     "/": "L",
//     "up": "up",

//     "ctrl": "ctrl",
//     "en": "en",
//     "space": "space",
//     "left": "left",
//     "down": "down",
//     "right": "right",
// }


// const ker = {
//     key1 = {
//         key: '1',
//         caps: '1',
//         shift: '!',
//         isCaps: false,
//         isShift: false
//     }
// }


export default enKeys;