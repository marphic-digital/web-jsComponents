// const currencyEl_one = document.getElementById('currency-one');
// const amountEl_one = document.getElementById('amount-one');
// const currencyEl_two = document.getElementById('currency-two');
// const amountEl_two = document.getElementById('amount-two');

// const rateEl = document.getElementById('rate');
// const swap = document.getElementById('swap');

// // Fetch exchange rates and update the DOM
// function calculate() {
//   const currency_one = currencyEl_one.value;
//   const currency_two = currencyEl_two.value;

//   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data);
//       const rate = data.rates[currency_two];

//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

//       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     });
// }

// // Event listeners
// currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input', calculate);
// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input', calculate);

// swap.addEventListener('click', () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });

// calculate();


//////////////////////////////////////////

const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');

function calculate(){
 const currencyOne = currencyElOne.value;
 const currencyTwo = currencyElTwo.value;

 fetch(`https://v6.exchangerate-api.com/v6/dcc2db03ac087eb026aeb147/latest/${currencyOne}`).then(res => res.json()).then(data => {
    const rate = data.conversion_rates[currencyTwo];
    rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
    amountElTwo.value = (amountElOne.value * rate).toFixed(2)
 })
}
swapEl.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
})
// EVENT LISTENER
currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);



calculate();