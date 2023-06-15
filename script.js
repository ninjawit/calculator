let firstNumber = "";
let secondNumber = "";
let sign = "";

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operate");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");

clear.addEventListener('click', clearButton);

decimal.addEventListener('click', () => {
    let oneDecimal = display.innerHTML.includes(".");

    if (!oneDecimal) {
        display.innerHTML += ".";
    }
});

equals.addEventListener('click', () => {
    operate(firstNumber, secondNumber, sign);
    firstNumber = parseFloat(display.innerHTML);
    secondNumber = "";
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        clearDisplay();
        numberClick(number);
        if (!sign) {
            firstNumber = parseFloat(display.innerHTML);
        }
        else {
            secondNumber = parseFloat(display.innerHTML);
        }
        textSize();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstNumber && secondNumber && sign) {
            operate(firstNumber, secondNumber, sign);
            firstNumber = parseFloat(display.innerHTML);
            secondNumber = "";
        }
            
        sign = operator.innerHTML;
    });
});

function numberClick(numberButton) {
    if (display.innerHTML.length < 25){
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

// Clear everything
function clearButton() {
    display.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    sign = '';
    return display;
}

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
        return display.innerHTML = 'naughty naughty';
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
    display.innerHTML = +result.toFixed(3);
    textSize();
    firstNumber = result;
}

// To prevent overflow of display
function textSize() {
    let displayLength = display.innerHTML.length;

    if (displayLength > 20) {
        display.style.fontSize = "2.0em";
    }
    else if (displayLength > 15) {
        display.style.fontSize = "2.5em";
    }
    else {
        display.style.fontSize = "3.25em";
    }
}

// Clear only when entering second number of a calculation
function clearDisplay() {
    if (sign && !secondNumber) {
        display.innerHTML = "";
    }
}