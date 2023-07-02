const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueElement = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener("click", onClickDecrement);
function onClickDecrement(evt) {
    counterValue -= 1;
    counterValueElement.textContent = counterValue;
}

incrementBtn.addEventListener("click", onClickIncrement);
function onClickIncrement(evt) {
    counterValue += 1;
    counterValueElement.textContent = counterValue;
}