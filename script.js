var firstNumber;
var secondNumber;
var operator;


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
    if (opr === '+') {
        return add(num1, num2);
    }
    else if(opr === '-') {
        return subtract(num1, num2);
    }
    else if(opr === '*') {
        return multiply(num1, num2);
    }
    else if (opr === '/') {
        return divide(num1, num2);
    }
}