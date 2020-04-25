const title = document.createElement('h1');
title.innerText = 'Виртуальная клавиатура';

const text = document.createElement('p');
text.innerText = 'Переключения языка сочетанием клавиш Shift + Alt или нажатием на ⌨. Выполнено на OS Ubuntu.';

const textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', 'true');

document.body.append(title);
document.body.append(text);
document.body.append(textarea);

const Keyboard = {
  elements: {
    textarea: null,
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    value: '',
    language: localStorage.getItem('lang') || 'ru',
    capsLock: null,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.append(
      this._createKeys(this.properties.language),
    );

    this.elements.keys = this.elements.keysContainer.querySelectorAll(
      '.keyboard__key',
    );

    this.elements.main.append(this.elements.keysContainer);
    document.body.append(this.elements.main);
  },

  // eslint-disable-next-line no-underscore-dangle
  _createKeys(language) {
    const fragment = document.createDocumentFragment();
    let keyLayout = [];
    if (language === 'ru') {
      keyLayout = [
        {
          key: 'ё',
          code: 192,
        },
        {
          key: '1',
          code: 49,
        },
        {
          key: '2',
          code: 50,
        },
        {
          key: '3',
          code: 51,
        },
        {
          key: '4',
          code: 52,
        },
        {
          key: '5',
          code: 53,
        },
        {
          key: '6',
          code: 54,
        },
        {
          key: '7',
          code: 55,
        },
        {
          key: '8',
          code: 56,
        },
        {
          key: '9',
          code: 57,
        },
        {
          key: '0',
          code: 96,
        },
        {
          key: '-',
          code: 189,
        },
        {
          key: '=',
          code: 187,
        },
        {
          key: 'backspace',
          code: 8,
        },
        {
          key: 'tab',
          code: 9,
        },
        {
          key: 'й',
          code: 81,
        },
        {
          key: 'ц',
          code: 87,
        },
        {
          key: 'у',
          code: 69,
        },
        {
          key: 'к',
          code: 82,
        },
        {
          key: 'е',
          code: 84,
        },
        {
          key: 'н',
          code: 89,
        },
        {
          key: 'г',
          code: 85,
        },
        {
          key: 'ш',
          code: 73,
        },
        {
          key: 'щ',
          code: 79,
        },
        {
          key: 'э',
          code: 80,
        },
        {
          key: 'х',
          code: 219,
        },
        {
          key: 'ъ',
          code: 221,
        },
        {
          key: '\\',
          code: 220,
        },
        {
          key: 'caps',
          code: 20,
        },
        {
          key: 'ф',
          code: 65,
        },
        {
          key: 'ы',
          code: 83,
        },
        {
          key: 'в',
          code: 68,
        },
        {
          key: 'а',
          code: 70,
        },
        {
          key: 'п',
          code: 71,
        },
        {
          key: 'р',
          code: 72,
        },
        {
          key: 'о',
          code: 74,
        },
        {
          key: 'л',
          code: 75,
        },
        {
          key: 'д',
          code: 76,
        },
        {
          key: 'ж',
          code: 186,
        },
        {
          key: 'э',
          code: 222,
        },
        {
          key: 'enter',
          code: 13,
        },
        {
          key: 'shift',
          code: 16,
        },
        {
          key: '/',
          code: 191,
        },
        {
          key: 'я',
          code: 90,
        },
        {
          key: 'ч',
          code: 88,
        },
        {
          key: 'с',
          code: 67,
        },
        {
          key: 'м',
          code: 86,
        },
        {
          key: 'и',
          code: 66,
        },
        {
          key: 'т',
          code: 78,
        },
        {
          key: 'ь',
          code: 77,
        },
        {
          key: 'б',
          code: 188,
        },
        {
          key: 'ю',
          code: 190,
        },
        {
          key: '.',
          code: 191,
        },
        {
          key: '↑',
          code: 38,
        },
        {
          key: 'ctrl',
          code: 17,
        },
        {
          key: '⌨',
          code: 1000,
        },
        {
          key: 'alt',
          code: 18,
        },
        {
          key: 'space',
          code: 32,
        },
        {
          key: 'ctrl',
          code: 17,
        },
        {
          key: '←',
          code: 37,
        },
        {
          key: '↓',
          code: 40,
        },
        {
          key: '→',
          code: 39,
        },
      ];
    } else {
      keyLayout = [
        {
          key: '`',
          code: 192,
        },
        {
          key: '1',
          code: 49,
        },
        {
          key: '2',
          code: 50,
        },
        {
          key: '3',
          code: 51,
        },
        {
          key: '4',
          code: 52,
        },
        {
          key: '5',
          code: 53,
        },
        {
          key: '6',
          code: 54,
        },
        {
          key: '7',
          code: 55,
        },
        {
          key: '8',
          code: 56,
        },
        {
          key: '9',
          code: 57,
        },
        {
          key: '0',
          code: 96,
        },
        {
          key: '-',
          code: 189,
        },
        {
          key: '=',
          code: 187,
        },
        {
          key: 'backspace',
          code: 8,
        },
        {
          key: 'tab',
          code: 9,
        },
        {
          key: 'q',
          code: 81,
        },
        {
          key: 'w',
          code: 87,
        },
        {
          key: 'e',
          code: 69,
        },
        {
          key: 'r',
          code: 82,
        },
        {
          key: 't',
          code: 84,
        },
        {
          key: 'y',
          code: 89,
        },
        {
          key: 'u',
          code: 85,
        },
        {
          key: 'i',
          code: 73,
        },
        {
          key: 'o',
          code: 79,
        },
        {
          key: 'p',
          code: 80,
        },
        {
          key: '[',
          code: 219,
        },
        {
          key: ']',
          code: 221,
        },
        {
          key: '\\',
          code: 220,
        },
        {
          key: 'caps',
          code: 20,
        },
        {
          key: 'a',
          code: 65,
        },
        {
          key: 's',
          code: 83,
        },
        {
          key: 'd',
          code: 68,
        },
        {
          key: 'f',
          code: 70,
        },
        {
          key: 'g',
          code: 71,
        },
        {
          key: 'h',
          code: 72,
        },
        {
          key: 'j',
          code: 74,
        },
        {
          key: 'k',
          code: 75,
        },
        {
          key: 'l',
          code: 76,
        },
        {
          key: ';',
          code: 186,
        },
        {
          key: "'",
          code: 222,
        },
        {
          key: 'enter',
          code: 13,
        },
        {
          key: 'shift',
          code: 16,
        },
        {
          key: '|',
          code: 191,
        },
        {
          key: 'z',
          code: 90,
        },
        {
          key: 'x',
          code: 88,
        },
        {
          key: 'c',
          code: 67,
        },
        {
          key: 'v',
          code: 86,
        },
        {
          key: 'b',
          code: 66,
        },
        {
          key: 'n',
          code: 78,
        },
        {
          key: 'm',
          code: 77,
        },
        {
          key: ',',
          code: 188,
        },
        {
          key: '.',
          code: 190,
        },
        {
          key: '?',
          code: 191,
        },
        {
          key: '↑',
          code: 38,
        },
        {
          key: 'ctrl',
          code: 17,
        },
        {
          key: '⌨',
          code: 1000,
        },
        {
          key: 'alt',
          code: 18,
        },
        {
          key: 'space',
          code: 32,
        },
        {
          key: 'ctrl',
          code: 17,
        },
        {
          key: '←',
          code: 37,
        },
        {
          key: '↓',
          code: 40,
        },
        {
          key: '→',
          code: 39,
        },
      ];
    }

    keyLayout.forEach((element) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['backspace', '\\', 'enter', '↑'].indexOf(element.key) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.innerHTML = element.key;
      keyElement.dataset.keyCode = element.code;
      keyElement.classList.add('keyboard__key');

      switch (element.key) {
        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            textarea.value = textarea.value.substring(
              0,
              textarea.value.length - 1,
            );
          });
          break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
          });
          break;

        case 'enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });
          break;

        case 'shift':
          keyElement.classList.add('keyboard__key--wide');
          break;

        case 'tab':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value = '  ';
            this._triggerEvent('oninput');
          });
          break;

        case 'ctrl':
          keyElement.classList.add('keyboard__key--wide');
          break;

        case 'alt':
          break;

        case 'space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.addEventListener('click', () => {
            this.properties.value = ' ';
            this._triggerEvent('oninput');
          });
          break;

        case '⌨':
          keyElement.addEventListener('click', () => {
            this._changeLanguage();
          });
          break;

        default:
          keyElement.textContent.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.capsLock
              ? element.key.toUpperCase()
              : element.key.toLowerCase();
            this._triggerEvent('oninput');
          });
          break;
      }

      fragment.append(keyElement);

      if (insertLineBreak) {
        fragment.append(document.createElement('br'));
      }
    });

    return fragment;
  },

  _triggerEvent() {
    textarea.value += this.properties.value;
  },

  _changeLanguage() {
    this.properties.capsLock = false;
    this.properties.language === 'ru'
      ? (this.properties.language = 'en')
      : (this.properties.language = 'ru');
    this.elements.keysContainer.innerHTML = '';
    this.elements.keysContainer.append(
      this._createKeys(this.properties.language),
    );
    this.elements.keys = this.elements.keysContainer.querySelectorAll(
      '.keyboard__key',
    );
    localStorage.setItem('lang', this.properties.language);
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (
        key.dataset.keyCode !== '8'
        && key.dataset.keyCode !== '9'
        && key.dataset.keyCode !== '13'
        && key.dataset.keyCode !== '16'
        && key.dataset.keyCode !== '17'
        && key.dataset.keyCode !== '18'
        && key.dataset.keyCode !== '32'
      ) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },
};

function checkLanguageChange(key) {
  if (+key === 20) {
    Keyboard._toggleCapsLock();
  } else {
    const pressedButtons = document.querySelectorAll('.keyboard__key--pressed');
    if (pressedButtons.length > 1) {
      if (
        (+pressedButtons[0].dataset.keyCode === 16
                && +pressedButtons[1].dataset.keyCode === 18)
            || (+pressedButtons[1].dataset.keyCode === 16
            && +pressedButtons[0].dataset.keyCode === 18)
      ) { Keyboard._changeLanguage(); } else if (pressedButtons.length > 2) {
        if (
          (+pressedButtons[1].dataset.keyCode === 16
                    && +pressedButtons[2].dataset.keyCode === 18
                    && +pressedButtons[0].dataset.keyCode === 20)
                || (+pressedButtons[2].dataset.keyCode === 16
                && +pressedButtons[1].dataset.keyCode === 18
                && +pressedButtons[0].dataset.keyCode === 20)
        ) { Keyboard._changeLanguage(); }
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

window.addEventListener('keydown', (e) => {
  for (const key of Keyboard.elements.keys) {
    if (+e.keyCode === +key.dataset.keyCode) {
      if (+key.dataset.keyCode === 20) {
        key.classList.toggle('keyboard__key--pressed');
      } else key.classList.add('keyboard__key--pressed');

      if (+key.dataset.keyCode === 9) {
        e.preventDefault();
        e.stopPropagation();
        textarea.value += '  ';
      }
    }
  }
  checkLanguageChange(e.keyCode);
});

window.addEventListener('keyup', (e) => {
  for (const key of Keyboard.elements.keys) {
    if (+e.keyCode === +key.dataset.keyCode) {
      if (+key.dataset.keyCode !== 20) key.classList.remove('keyboard__key--pressed');
    }
  }
});
