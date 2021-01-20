const ru = [
    // row - 1
    [
        { code: 'Backquote', key: 'ё', shift: 'Ё' },
        { code: 'Digit1', key: '1', shift: '!' },
        { code: 'Digit2', key: '2', shift: '\"' },
        { code: 'Digit3', key: '3', shift: '№' },
        { code: 'Digit4', key: '4', shift: ';' },
        { code: 'Digit5', key: '5', shift: '%' },
        { code: 'Digit6', key: '6', shift: ':' },
        { code: 'Digit7', key: '7', shift: '?' },
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
        { code: 'KeyQ', key: 'й', shift: 'Й'},
        { code: 'KeyW', key: 'ц', shift: 'Ц'},
        { code: 'KeyE', key: 'у', shift: 'У'},
        { code: 'KeyR', key: 'к', shift: 'К'},
        { code: 'KeyT', key: 'е', shift: 'Е'},
        { code: 'KeyY', key: 'н', shift: 'Н'},
        { code: 'KeyU', key: 'г', shift: 'Г'},
        { code: 'KeyI', key: 'ш', shift: 'Ш'},
        { code: 'KeyO', key: 'щ', shift: 'Щ'},
        { code: 'KeyP', key: 'з', shift: 'З'},
        { code: 'BracketLeft', key: 'х', shift: 'Х'},
        { code: 'BracketRight', key: 'ъ', shift: 'Ъ'},
        { code: 'Backslash', key: '\\', shift: '/'},
    ],
  
    // 3 row
    [
        { code: 'CapsLock', key: 'Caps', fnKey: true },
        { code: 'KeyA', key: 'ф', shift: 'Ф'},
        { code: 'KeyS', key: 'ы', shift: 'Ы'},
        { code: 'KeyD', key: 'в', shift: 'В'},
        { code: 'KeyF', key: 'а', shift: 'А'},
        { code: 'KeyG', key: 'п', shift: 'П'},
        { code: 'KeyH', key: 'р', shift: 'Р'},
        { code: 'KeyJ', key: 'о', shift: 'О'},
        { code: 'KeyK', key: 'л', shift: 'Л'},
        { code: 'KeyL', key: 'д', shift: 'Д'},
        { code: 'Semicolon', key: 'ж', shift: 'Ж'},
        { code: 'Quote', key: 'э', shift: 'Э'},
        { code: 'Enter', key: 'Enter', fnKey: true },

    ],
      
    // row - 4
    [
        { code: 'ShiftLeft', key: 'Shift', fnKey: true },
        { code: 'KeyZ', key: 'я', shift: 'Я'},
        { code: 'KeyX', key: 'ч', shift: 'Ч'},
        { code: 'KeyC', key: 'с', shift: 'С'},
        { code: 'KeyV', key: 'м', shift: 'М'},
        { code: 'KeyB', key: 'и', shift: 'И'},
        { code: 'KeyM', key: 'ь', shift: 'Ь'},
        { code: 'Comma', key: 'б', shift: 'Б'},
        { code: 'Period', key: 'ю', shift: 'Ю'},
        { code: 'Slash', key: '.', shift: ','},
        { code: 'ArrowUp', key: '', fnKey: true },
        { code: 'ShiftRight', key: 'Shift', fnKey: true },
    ],

    // row - 5 
    [
        { code: 'ControlLeft', key: 'Ctrl', fnKey: true },
        { code: 'AltLeft', key: 'Alt', fnKey: true },
        { code: 'Space', key: ' '},
        { code: 'ControlRight', key: 'Ctrl', fnKey: true },
        { code: 'ru', key: 'ru', fnKey: true },
        { code: 'ArrowLeft', key: '', fnKey: true },
        { code: 'ArrowDown', key: '', fnKey: true },
        { code: 'ArrowRight', key: '', fnKey: true }
    ]
]

export default ru;