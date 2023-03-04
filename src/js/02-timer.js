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
// onBtnClick = () => {};
function onBtnClick() {
  // setInterval(ms => {
  //   const timer = ms - 1000;
  //   console.log(timer);
  // }, 1000);
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

    if (selected > start.getTime()) {
      const ms = selected - start;

      timeContent(convertMs(ms));
      console.log(`true`);
    } else {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';

      console.log(`false`);
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };

  // console.log('привіт');
}

function timeContent({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  console.log({ days, hours, minutes, seconds });
}
// console.log(timeContent(timeObject));
