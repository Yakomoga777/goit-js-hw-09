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
