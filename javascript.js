let firstNumber = undefined;
let operation = undefined;
let secondNumber = undefined;

const display = document.querySelector(".numbers");

function assign(value) {
    if (firstNumber === undefined) {
        firstNumber = value;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + value;
    } else if (secondNumber === undefined) {
        secondNumber = value;
    } else {
        secondNumber = (secondNumber*10) + value;
    }
}

const btn1 = document.querySelector(".one");
btn1.addEventListener("click", assign(1));
btn1.addEventListener("click", () => display.textContent = firstNumber);