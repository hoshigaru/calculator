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

let firstNum;
let secondNum;
let operator;

function operate(firstNum, operator, secondNum) {
    switch (true) {
        case operator == '+':
            operator = 'add';
            break;
        case operator == '-':
            operator = 'subtract';
            break;
        case operator == '*':
            operator = 'multiply';
            break;
        case operator == '/':
            operator = 'divide';
            break;
    }

    display.textContent = operator(firstNum, secondNum);
}

const buttons = document.querySelectorAll('.button');

let displayVariables = [];
const display = document.querySelector('#display');

for (let i = 0; i < buttons.length - 1; i++) {
    buttons[i].addEventListener('click', () => display.textContent += buttons[i].textContent);
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => display.textContent = '');

const equalButton = document.querySelector('#equal');

displayVariables = display.textContent.split(/\+\-\/\*/);
firstNum = displayVariables[0];
operator = display.textContent.substring(firstNum.length, firstNum.length + 1);
secondNum = displayVariables[1];

equalButton.addEventListener('click', operate(firstNum, operator, secondNum))