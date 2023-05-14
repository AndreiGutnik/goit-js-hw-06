const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');

decrementBtn.addEventListener('click', () => {counterValue.textContent = Number(counterValue.textContent) - 1 });
incrementBtn.addEventListener('click', () => {counterValue.textContent = Number(counterValue.textContent) + 1; });