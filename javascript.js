let firstNumber = undefined;
let operation = undefined;
let secondNumber = undefined;

const display = document.querySelector(".numbers");
display.textContent = "888888888888";

//functions for number buttons
const one = document.querySelector(".one");
one.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 1;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 1;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 1;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 1;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 2;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 2;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 2;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 2;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

//functions for operation buttons
const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    operation = "+";
    display.textContent = firstNumber + operation;
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    operation = "-";
    display.textContent = firstNumber + operation;
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {
    operation = "*";
    display.textContent = firstNumber + operation;
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {
    operation = "/";
    display.textContent = firstNumber + operation;
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (operation == "+") {
        display.textContent = firstNumber + secondNumber;
    } else if (operation == '-') {
        display.textContent = firstNumber - secondNumber;
    } else if (operation == "*") {
        display.textContent = firstNumber * secondNumber;
    } else if (operation == "/") {
        display.textContent = firstNumber / secondNumber;
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    firstNumber = undefined;
    operation = undefined;
    secondNumber = undefined;
    display.textContent = "";
});

// function assign(value) {
//     display.textContent = "1";
    // if (firstNumber === undefined) {
    //     firstNumber = value;
    // } else if (operation === undefined) {
    //     firstNumber = (firstNumber*10) + value;
    // } else if (secondNumber === undefined) {
    //     secondNumber = value;
    // } else {
    //     secondNumber = (secondNumber*10) + value;
    // }
// }

// const clr = document.querySelector(".clear");
// clr.addEventListener("click", clear());

// function clear() {
//     firstNumber = undefined;
//     operation = undefined;
//     secondNumber = undefined;
// }

// function displayNumbers() {
//     if (secondNumber !== undefined) {
//         display.textContent = "";
//         display.textContent = firstNumber + operation + secondNumber;
//     } else if (operation !== undefined) {
//         display.textContent = firstNumber + operation;
//     } else if (firstNumber !== undefined) {
//         display.textContent = firstNumber;
//     } else {
//         display.textContent = "88888";
//     }
// }

// const one = document.querySelector(".one");
// one.addEventListener("click", assign(1));
// one.addEventListener("click", displayNumbers());

// const two = document.querySelector(".two");
// two.addEventListener("click", assign(2));
// two.addEventListener("click", displayNumbers());

// const four = document.querySelector(".four");
// four.addEventListener("click", assign(4));

// const three = document.querySelector(".three");
// three.addEventListener("click", assign(3));

// const clr = document.querySelector(".clear");
// clr.addEventListener("click", clear());
