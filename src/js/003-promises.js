function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('[type="submit"]');

const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');

// console.log(formEl);
console.log(btnEl);
console.log(inputDelayEl);
console.log(inputStepEl);

formEl.addEventListener('input', onFormInput);
btnEl.addEventListener('submit', onBtnSubmit);

function onFormInput(event) {
  event.preventDefault();
  console.log('click');
}
function onBtnSubmit(event) {
  event.preventDefault();

  const promise = new Promise((resolve, reject) => {
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }
  });

  createPromise(a, b)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  // createPromise;()
  console.log(e);
  console.log('Submit - ');
}
