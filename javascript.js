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

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 3;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 3;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 3;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 3;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 4;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 4;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 4;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 4;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 5;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 5;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 5;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 5;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 6;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 6;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 6;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 6;
        display.textContent = firstNumber + operation + secondNumber;
    }
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 7;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 7;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 7;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 7;
        display.textContent = firstNumber + operation + secondNumber;
    }
});


const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 8;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 8;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 8;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 8;
        display.textContent = firstNumber + operation + secondNumber;
    }
});


const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 9;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 9;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 9;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 9;
        display.textContent = firstNumber + operation + secondNumber;
    }
});


const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = 0;
        display.textContent = firstNumber;
    } else if (operation === undefined) {
        firstNumber = (firstNumber*10) + 0;
        display.textContent = firstNumber;
    } else if (secondNumber === undefined) {
        secondNumber = 0;
        display.textContent = firstNumber + operation + secondNumber;
    } else {
        secondNumber = (secondNumber*10) + 0;
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

//function for equals button
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

//function for clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    firstNumber = undefined;
    operation = undefined;
    secondNumber = undefined;
    display.textContent = "";
});


