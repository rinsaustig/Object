const form = document.querySelector('#objectForm');
const inputCode = document.querySelector('#code');
const inputName = document.querySelector('#name');
const inputColor = document.querySelector('#color');
const inputWeight = document.querySelector('#weight');
const main = document.querySelector('.main');
const ul = document.querySelector('#objectList');
const showButton = document.querySelector('#show');

function createLi() {
  const li = document.createElement('li');
  const spanCode = document.createElement('span');
  spanCode.textContent = inputCode.value;
  const spanName = document.createElement('span');
  spanName.textContent = inputName.value;
  const spanColor = document.createElement('span');
  spanColor.textContent = inputColor.value;
  const spanWeight = document.createElement('span');
  spanWeight.textContent = inputWeight.value;
  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';

  spanCode.id = "code";
  spanName.id = "name";
  spanColor.id = "color";
  spanWeight.id = "weight";

  li.appendChild(spanCode);
  li.appendChild(spanName);
  li.appendChild(spanColor);
  li.appendChild(spanWeight);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

  if(inputCode.value === '') {
    alert('Enter the name please!!!');
  } else {
    ul.appendChild(li);
  }
}); 

showButton.addEventListener('click', (event) => {
  event.preventDefault();
  liAll = document.createElement('li');
  spanAll = document.createElement('span');
  spanAll.textContent = ul.childElementCount;
  liAll.appendChild(spanAll);
  ul.appendChild(liAll)
}); 



ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove') {
      ul.removeChild(li);
    } else if(button.textContent === 'edit') {
      
      const code = li.firstElementChild;
      const name = li.children[1];
      const color = li.children[2];
      const weight = li.children[3];
      const inputCode = document.createElement('input');
      inputCode.type = 'text';
      inputCode.value = code.textContent;
      li.insertBefore(inputCode, code);
      li.removeChild(code);
      const inputName = document.createElement('input');
      inputName.type = 'text';
      inputName.value = name.textContent;
      li.insertBefore(inputName, name);
      li.removeChild(name);
      const inputColor = document.createElement('input');
      inputColor.type = 'text';
      inputColor.value = color.textContent;
      li.insertBefore(inputColor, color);
      li.removeChild(color);
      const inputWeight = document.createElement('input');
      inputWeight.type = 'text';
      inputWeight.value = weight.textContent;
      li.insertBefore(inputWeight, weight);
      li.removeChild(weight);
      button.textContent = 'save';
    } else if(button.textContent === 'save') {
      const inputCode = li.firstElementChild;
      const spanCode = document.createElement('span');
      spanCode.textContent = inputCode.value;
      li.insertBefore(spanCode, inputCode);
      li.removeChild(inputCode);
      const inputName = li.children[1];
      const spanName = document.createElement('span');
      spanName.textContent = inputName.value;
      li.insertBefore(spanName, inputName);
      li.removeChild(inputName);
      const inputColor = li.children[2];
      const spanColor = document.createElement('span');
      spanColor.textContent = inputColor.value;
      li.insertBefore(spanColor, inputColor);
      li.removeChild(inputColor);
      const inputWeight = li.children[3];
      const spanWeight = document.createElement('span');
      spanWeight.textContent = inputWeight.value;
      li.insertBefore(spanWeight, inputWeight);
      li.removeChild(inputWeight);
      button.textContent = 'edit';
    }
  }
});



