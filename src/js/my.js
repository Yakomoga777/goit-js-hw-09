function createPromise(position, delay) {
  console.log('Виклик головної функції');

  return new Promise(() => {
    // delay = Number(firstDelay) + Number(delay);
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}
createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

// function createPromise1(position, delay) {
//   // console.log(delay);
//   const promise = new Promise((a, b) => {
//     // const shouldResolve = Math.random() > 0.3;
//     let count = 1;

//     const intervalId = setInterval(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         // Fulfill
//         console.log(`✅ Fulfilled promise `);
//       } else {
//         // Reject
//         console.log(`❌ Rejected promise `);
//       }
//       count += 1;
//       console.log(`count -`, count);

//       if (count == position) {
//         clearInterval(intervalId);
//       }
//       console.log(`position -`, position);
//     }, delay);
//   });
//   return promise;
// }
// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('[type="submit"]');

const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');

// console.log(formEl);
// console.log(btnEl);
// console.log(inputDelayEl);
// console.log(inputStepEl);

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onBtnSubmit);

// function fn(amount, firstDelay, step) {
//   setTimeout(e => {
//     console.log(`first delay = ${firstDelay} / ${step}`);

//     let count = 1;
//     setInterval(e => {
//       if (count == amount) {
//         return;
//       }
//       count += 1;
//       console.log(`count - ${count}`);
//     }, step);
//   }, firstDelay);
// }

function onFormInput(event) {
  // const delay = inputStepEl.value;
  // console.log(delay);
}
function onBtnSubmit(event) {
  event.preventDefault();
  const firstDelay = inputDelayEl.value;
  const delay = inputStepEl.value;
  const amount = inputAmountEl.value;
  // console.log(amount);
  // createPromise();

  setTimeout(() => {
    let position = 0;
    let intID = 0;
    intID = setInterval(e => {
      position += 1;

      createPromise(position, delay);

      if (position == amount) {
        clearInterval(intID);
        // return;
      }
    }, delay);
  }, firstDelay);

  // const promise = new Promise((resolve, reject) => {
  //   function createPromise(position, delay) {
  //     const shouldResolve = Math.random() > 0.3;
  //     if (shouldResolve) {
  //       // Fulfill
  //       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     } else {
  //       // Reject
  //       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //     }
  //   }
  // });

  // fn(amount, firstDelay, step);

  // console.log(event);
  // console.log(
  //   `Submit - перший пуск через ${firstDelay}мс, інші з кроком ${step}. ${amount} рази`
  // );
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise `);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise`);
//   });

// Опції для flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // Обробляємо дату, обрану користувачем
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate <= now) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      countdown(selectedDate);
    }
  },
};

// Ініціалізація flatpickr на полі input#datetime-picker з опціями
const flatpickrInstance = flatpickr('#datetime-picker', options);

// Кнопка Start
const startButton = document.querySelector('[data-start]');

// Відображення таймера
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

// Обчислення часу до дати і оновлення інтерфейсу
function countdown(targetDate) {
  function updateTimer() {
    const now = new Date();
    const remainingTime = targetDate - now;
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      return;
    }
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
    const remainingHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0');
    const remainingMinutes = Math.floor((remainingTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = Math.floor((remainingTime / 1000) % 60)
      .toString()
      .padStart(2, '0');
    timerDays.textContent = remainingDays;
    timerHours.textContent = remainingHours;
    timerMinutes.textContent = remainingMinutes;
    timerSeconds.textContent = remainingSeconds;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);

  startButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    countdown(targetDate);
  });
}

startButton.disabled = true; // кнопка Start неактивна, поки не обрано валідну дату
