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

let isResult = false;

function operate(firstNum, operator, secondNum) {
    let result;

    if (operator == '/' && secondNum == 0) {
        display.textContent = "Nice try!"
        return;
    }
    
    switch (true) {
        case operator == '+':
            result = add(firstNum, secondNum);
            break;
        case operator == '-':
            result = subtract(firstNum, secondNum);
            break;
        case operator == '*':
            result = multiply(firstNum, secondNum);
            break;
        case operator == '/':
            result = divide(firstNum, secondNum);
            break;
    }

    if (result.toString().length >= 5) {
        result = Math.round(result * 10000) / 10000;
    }
    display.textContent = result;
}

const operatorButtons = document.querySelectorAll('.operator');

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (isOperatingAlready()) calculate();
    });
}

function isOperatingAlready() {
    let operationArray = display.textContent.split(/([-+/*])/);

    if (operationArray[0] == '' && operationArray[1] == '-') {
        operationArray.splice(0, 2);
    }

    if (operationArray.includes('+') || operationArray.includes('-') || operationArray.includes('*') || operationArray.includes('/')) {
        return true;
    }
}

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('#display');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (isDivideByZeroMsg() || (isZero() && !(buttons[i].classList.contains('operator'))) || (isResult && !(buttons[i].classList.contains('operator')))) {
            display.textContent = '';
            isResult = false;
        }
        display.textContent += buttons[i].textContent;
        isResult = false;
    });
}
function isZero() {
    return display.textContent == '0';
}

function isDivideByZeroMsg () {
    return display.textContent == 'Nice try!';
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    display.textContent = '';
});

function calculate() {    
    let displayArray = display.textContent.split(/([-+/*])/);

    if (displayArray[0] == '' && displayArray[1] == '-')
    {
        displayArray.splice(0, 2);
        firstNum = Number('-' + displayArray[0])
    }
    else {
        firstNum = Number(displayArray[0]);
    }
    operator = displayArray[1];
    secondNum = Number(displayArray[2]);

    operate(firstNum, operator, secondNum);
    isResult = true;
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (isOperatingAlready()) calculate();
});