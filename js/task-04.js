let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

const onDecrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}
const onIncrement = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrement);
incrementBtn.addEventListener('click', onIncrement);