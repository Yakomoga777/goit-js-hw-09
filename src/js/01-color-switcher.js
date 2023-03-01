function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

startEl.addEventListener('click', onStartBtnClick);
stopEl.addEventListener('click', onStopBtnClick);
stopEl.setAttribute('disabled', 'disabled');

let intervalId = null;

function btnEnable(el) {
  el.removeAttribute('disabled');
}
function btnDesable(el) {
  el.setAttribute('disabled', 'disabled');
}

//* Функція запуску
function onStartBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);

  btnDesable(startEl);

  btnEnable(stopEl);

  console.log('Функція запуску зміни кольору');
}

//* Функція зупинки
function onStopBtnClick() {
  startEl.removeAttribute('disabled');
  stopEl.setAttribute('disabled', 'disabled');

  clearInterval(intervalId);

  console.log('Зупинка кольору');
}
