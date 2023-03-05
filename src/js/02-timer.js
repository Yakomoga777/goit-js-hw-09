import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// ініціалізуємо DOM вузли
const parrent = document.querySelector('.timer');
let daysEl = document.querySelector('[data-days]');
let hoursEl = document.querySelector('[data-hours]');
let minutesEl = document.querySelector('[data-minutes]');
let secondsEl = document.querySelector('[data-seconds]');

const btnEl = document.querySelector('[data-start]');

btnEl.addEventListener('click', onBtnClick);
btnEl.disabled = true;

// onBtnClick = () => {};
function onBtnClick() {
  btnEl.disabled = true;

  const selected = datePickr.selectedDates[0];

  const intervalId = setInterval(() => {
    const ms = selected - new Date();
    // console.log(ms);
    render(convertMs(ms));
    // console.log(dellta);
    // console.log(startTime);
    // console.log(currentTime);
    if (ms <= 0) {
      reset();
      clearInterval(intervalId);
    }
  }, 1000);
}

//Ініціалізуємо календар
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const start = new Date();
    const selected = new Date(selectedDates[0]);
    const ms = selected - new Date();
    console.log(selected.getTime());

    if (selected > start.getTime()) {
      btnEl.disabled = false;
      render(convertMs(ms));
    } else {
      btnEl.disabled = true;
      window.alert('Please choose a date in the future');
      reset();
      return;
    }
  },
};
const datePickr = flatpickr('#datetime-picker', options);

function reset() {
  daysEl.textContent = '00';
  hoursEl.textContent = '00';
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };

  // console.log('привіт');
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function render({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  // console.log({ days, hours, minutes, seconds });
  // console.log(daysEl.textContent.);
  // console.log(daysEl.textContent);
}

// console.log(timeContent(timeObject));
