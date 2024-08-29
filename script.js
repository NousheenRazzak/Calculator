let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') return;

    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (currentOperation) {
        secondOperand = parseFloat(displayValue);
        firstOperand = performCalculation(currentOperation, firstOperand, secondOperand);
    }

    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    if (currentOperation === null || displayValue === '') return;

    secondOperand = parseFloat(displayValue);
    displayValue = performCalculation(currentOperation, firstOperand, secondOperand).toString();
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function performCalculation(operation, a, b) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert("Division by zero is not allowed.");
                return a;
            }
            return a / b;
        default:
            return b;
    }
}
