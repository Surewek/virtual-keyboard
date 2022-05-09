function generateNewHTML(parent, elem, elemClass = '', content = '', data = '') {
  const newHTML = document.createElement(elem);
  newHTML.textContent = content;
  newHTML.classList.add(elemClass);
  newHTML.dataset.code = data;
  parent.append(newHTML);
}

export function generateField(parent) {
  generateNewHTML(parent, 'textarea', 'text-field', 'created in Windows 10');
}

export function generateKeyboardPlace(parent) {
  // generateNewHTML(parent, 'div', 'keyboard-container');
  const element = parent;

  element.innerHTML += `<div class="keyboard-container">
                          <div class="keyboard-row"></div>
                          <div class="keyboard-row"></div>
                          <div class="keyboard-row"></div>
                          <div class="keyboard-row"></div>
                          <div class="keyboard-row"></div>
                        </div>`;
}

export class Button {
  constructor(parent, keyCode, key, code) {
    this.keyCode = keyCode;
    this.key = key;
    this.parent = parent;
    this.code = code;
  }

  createButton(currentClass) {
    generateNewHTML(this.parent, 'button', currentClass, this.key, this.code);
  }
}
