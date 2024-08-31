let firstNumber = undefined;
let operation = undefined;
let secondNumber = undefined;

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