var firstNumber;
var secondNumber;
var sign;

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operate");
const equals = document.querySelector("#equals");

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numberClick(number);
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

/* Current one step behind and doesn't display right with multiple operators.  Eg. 9 * 9 - 6 displays as 9*96 = 81 Also want to figure out how to not clear display until start entering in second number
*/
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        sign = operator.innerHTML;
        if (firstNumber && secondNumber) {
            operate(firstNumber, secondNumber, sign);
        }
        else if (firstNumber) { // not empty, null, undefined
            secondNumber = Number(display.innerHTML);
        }
        else {
            firstNumber = Number(display.innerHTML);
            display.innerHTML = '';
        }
    });
});

// Currently returns NaN
equals.addEventListener('click', () => {
    operate(firstNumber, secondNumber, sign);
    firstNumber = Number(display.innerHTML);
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
    return a / b;
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