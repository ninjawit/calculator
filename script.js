/* Works for two numbers now, or when always using equals button to evaluate.  Does NOT yet work correctly when attempting to evaluate multiple numbers using only operator buttons.
*/

let firstNumber = "";
let secondNumber = "";
let sign = "";

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operate");
const equals = document.querySelector("#equals");

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numberClick(number);
        if (!sign) {
            firstNumber = parseInt(display.innerHTML);
        }
        else {
            secondNumber = parseInt(display.innerHTML);
        }
    });
});

function numberClick(numberButton) {
    if (display.innerHTML.length < 15){
        switch(numberButton) {
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
    }
}

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    sign = '';
    return display;
}

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        sign = operator.innerHTML;
        display.innerHTML = "";
    });
});

equals.addEventListener('click', () => {
    operate(firstNumber, secondNumber, sign);
    firstNumber = parseInt(display.innerHTML);
})

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
    if (b === 0) {
        display.innerHTML = 'Naughty naughty';
    }
    else {
        return a / b;
    }
}

function operate(num1, num2, opr) {
    var result;

    switch(opr) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    display.innerHTML = result;
    firstNumber = result;
}