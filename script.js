var firstNumber;
var secondNumber;
var operator;

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

function clearDisplay() {
    display.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    return display;
}

clear.addEventListener("click", clearDisplay);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, opr) {
    switch(opr) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}