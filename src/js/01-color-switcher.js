function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

startEl.addEventListener('click', onStartBtnClick);
stopEl.addEventListener('click', onStopBtnClick);

let intervalId = null;

//* Функція запуску
function onStartBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log('Функція запуску зміни кольору');
}

//* Функція зупинки
function onStopBtnClick() {
  clearInterval(intervalId);

  console.log('Зупинка кольору');
}
