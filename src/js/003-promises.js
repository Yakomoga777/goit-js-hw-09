function createPromise(position, delay) {
  console.log('Виклик createPromise');

  return new Promise(() => {
    // delay = Number(firstDelay) + Number(delay);
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}
// createPromise()
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

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onBtnSubmit);

function onFormInput(event) {
  // const delay = inputStepEl.value;
  // console.log(delay);
}
function onBtnSubmit(event) {
  event.preventDefault();
  const firstDelay = inputDelayEl.value;
  const delay = inputStepEl.value;
  const amount = inputAmountEl.value;

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
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise `);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise`);
//   });
