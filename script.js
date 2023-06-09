var firstNumber;
var secondNumber;
var operator;

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");

// Move switch statement to own function, then wrap switch function call in if statement that checks for text length of display before adding another number

numbers.forEach(number => {
    number.addEventListener('click', () => {
        switch(number) {
            case document.getElementById("one"):
                display.innerHTML += '1';
                break;

            case document.getElementById("two"):
                display.innerHTML += '2';
                break;

            case document.getElementById("three"):
                display.innerHTML += '3';
                break;

            case document.getElementById("four"):
                display.innerHTML += '4';
                break;

            case document.getElementById("five"):
                display.innerHTML += '5';
                break;

            case document.getElementById("six"):
                display.innerHTML += '6';
                break;

            case document.getElementById("seven"):
                display.innerHTML += '7';
                break;

            case document.getElementById("eight"):
                display.innerHTML += '8';
                break;

            case document.getElementById("nine"):
                display.innerHTML += '9';
                break;

            case document.getElementById("zero"):
                display.innerHTML += '0';
                break;
        }
    });
});

function clearDisplay() {
    display.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    return display;
}

clear.addEventListener('click', clearDisplay);

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