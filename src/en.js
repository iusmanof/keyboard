const en = [
    // row - 1
    [
        { code: 'Backquote', key: '`', shift: '~' },
        { code: 'Digit1', key: '1', shift: '!' },
        { code: 'Digit2', key: '2', shift: '@' },
        { code: 'Digit3', key: '3', shift: '#' },
        { code: 'Digit4', key: '4', shift: '$' },
        { code: 'Digit5', key: '5', shift: '%' },
        { code: 'Digit6', key: '6', shift: '^' },
        { code: 'Digit7', key: '7', shift: '&' },
        { code: 'Digit8', key: '8', shift: '*' },
        { code: 'Digit9', key: '9', shift: '(' },
        { code: 'Digit0', key: '0', shift: ')' },
        { code: 'Minus', key: '-', shift: '_' },
        { code: 'Equal', key: '=', shift: '+' },
        { code: 'Backspace', key: 'Backspace', fnKey: true},
    ],
    // row - 2
    [
        { code: 'Tab', key: 'Tab', fnKey: true},
        { code: 'KeyQ', key: 'q', shift: 'Q'},
        { code: 'KeyW', key: 'w', shift: 'W'},
        { code: 'KeyE', key: 'e', shift: 'E'},
        { code: 'KeyR', key: 'r', shift: 'R'},
        { code: 'KeyT', key: 't', shift: 'T'},
        { code: 'KeyY', key: 'y', shift: 'Y'},
        { code: 'KeyU', key: 'u', shift: 'U'},
        { code: 'KeyI', key: 'i', shift: 'I'},
        { code: 'KeyO', key: 'o', shift: 'O'},
        { code: 'KeyP', key: 'p', shift: 'P'},
        { code: 'BracketLeft', key: '[', shift: '{'},
        { code: 'BracketRight', key: ']', shift: '}'},
        { code: 'Backslash', key: '\\', shift: '|'},
    ],
  
    // 3 row
    [
        { code: 'CapsLock', key: 'Caps', fnKey: true },
        { code: 'KeyA', key: 'a', shift: 'A',},
        { code: 'KeyS', key: 's', shift: 'S',},
        { code: 'KeyD', key: 'd', shift: 'D',},
        { code: 'KeyF', key: 'f', shift: 'F',},
        { code: 'KeyG', key: 'g', shift: 'G',},
        { code: 'KeyH', key: 'h', shift: 'H',},
        { code: 'KeyJ', key: 'j', shift: 'J',},
        { code: 'KeyK', key: 'k', shift: 'K',},
        { code: 'KeyL', key: 'l', shift: 'L',},
        { code: 'Semicolon', key: ';', shift: ':',},
        { code: 'Quote', key: '\'', shift: '\"',},
        { code: 'Enter', key: 'Enter', fnKey: true },

    ],
      
    // row - 4
    [
        { code: 'ShiftLeft', key: 'Shift', fnKey: true },
        { code: 'KeyZ', key: 'z', shift: 'Z',},
        { code: 'KeyX', key: 'x', shift: 'X',},
        { code: 'KeyC', key: 'c', shift: 'C',},
        { code: 'KeyV', key: 'v', shift: 'V',},
        { code: 'KeyB', key: 'b', shift: 'B',},
        { code: 'KeyN', key: 'n', shift: 'N',},
        { code: 'KeyM', key: 'm', shift: 'M',},
        { code: 'Comma', key: ',', shift: '<',},
        { code: 'Period', key: '.', shift: '>',},
        { code: 'Slash', key: '/', shift: '?',},
        { code: 'ArrowUp', key: '', fnKey: true },
        { code: 'ShiftRight', key: 'Shift', fnKey: true },
    ],

    // row - 5 
    [
        { code: 'ControlLeft', key: 'Ctrl', fnKey: true },
        { code: 'AltLeft', key: 'Alt', fnKey: true },
        { code: 'Space', key: ' '},
        { code: 'ControlRight', key: 'Ctrl', fnKey: true },
        { code: 'AltRight', key: 'Alt', fnKey: true },
        { code: 'ArrowLeft', key: '', fnKey: true },
        { code: 'ArrowDown', key: '', fnKey: true },
        { code: 'ArrowRight', key: '', fnKey: true }
    ]
]

export default en;