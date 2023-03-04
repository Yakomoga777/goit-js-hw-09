import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject({ position, delay });
        // Reject
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('[type="submit"]');
const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');

// formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

// function onFormInput(event) {}
function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(inputDelayEl.value);
  const step = Number(inputStepEl.value);
  const amount = inputAmountEl.value;
  btnEl.disabled = true;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => {
        setTimeout(() => {
          btnEl.disabled = false;
        }, delay);
      });

    delay += step;
  }
  // setTimeout(() => {
  //   btnEl.disabled = false;
  // }, delay);
  // // console.log(`Сума часу = ${delay}`);
  // btnEl.disabled = true;

  // console.log(btnEl.disabled);
  console.log('Submit');
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise `);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise`);
//   });
