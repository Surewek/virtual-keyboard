import keys from './assets/scripts/keys.js';
import { generateField, Button, generateKeyboardPlace } from './assets/scripts/generate.js';

const body = document.querySelector('body');
let isLowerCase = true;

generateField(body);
generateKeyboardPlace(body);

const field = document.querySelector('.text-field');

const rows = document.querySelectorAll('.keyboard-row');
const finalBtn = ['Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft'];
const bigBtn = [
  'Backquote',
  'Tab',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'NumpadDecimal',
  'Backspace',
  'ControlLeft',
  'MetaLeft',
  'Enter',
  'AltLeft',
  'AltRight',
  'ControlRight',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

let i = 0;

keys.forEach((key) => {
  if (finalBtn.includes(key.code)) {
    i += 1;
  }
  const currentButton = new Button(rows[i], key.keyCode, key.key, key.code);

  if (bigBtn.includes(key.code)) {
    currentButton.createButton('medium-button');
  } else if (key.code === 'Space') {
    currentButton.createButton('long-button');
  } else {
    currentButton.createButton('button');
  }
});

const trueButtons = document.querySelectorAll('.button');

function buttonsActiv(btn) {
  if (btn.classList.contains('button') || btn.classList.contains('long-button')) {
    field.textContent += btn.textContent;
  } else if (btn.classList.contains('medium-button')) {
    switch (btn.dataset.code) {
      case 'Backspace':
        field.textContent = field.textContent.slice(0, -1);
        break;
      case 'Enter':
        field.textContent += '\n';
        break;
      case 'Tab':
        field.textContent += '\t';
        break;
      case 'CapsLock':
        if (isLowerCase) {
          for (let j = 0; j < trueButtons.length - 1; j += 1) {
            trueButtons[j].textContent = trueButtons[j].textContent.toUpperCase();
          }
          isLowerCase = false;
        } else {
          for (let j = 0; j < trueButtons.length - 1; j += 1) {
            trueButtons[j].textContent = trueButtons[j].textContent.toLowerCase();
          }
          isLowerCase = true;
        }
        break;

      default:
        break;
    }
  }
}

document.addEventListener('click', (event) => {
  buttonsActiv(event.target);
});

function shiftAction() {
  if (isLowerCase) {
    for (let j = 0; j < trueButtons.length - 1; j += 1) {
      trueButtons[j].textContent = trueButtons[j].textContent.toUpperCase();
    }
    isLowerCase = false;
  } else {
    for (let j = 0; j < trueButtons.length - 1; j += 1) {
      trueButtons[j].textContent = trueButtons[j].textContent.toLowerCase();
    }
    isLowerCase = true;
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftAction();
  } else {
    const pleaseButton = document.querySelector(`[data-code="${event.code}"]`);
    pleaseButton.classList.add('hightlight');
    buttonsActiv(pleaseButton);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftAction();
  } else {
    const pleaseButton = document.querySelector(`[data-code="${event.code}"]`);
    pleaseButton.classList.remove('hightlight');
  }
});
