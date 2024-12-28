let display = document.getElementById('display');
let operator = '';
let currentValue = '';

function appendNumber(number) {
  currentValue += number;
  display.value = currentValue;
}

function setOperator(op) {
  if (currentValue === '') return;
  operator = op;
  currentValue += ' ' + operator + ' ';
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(currentValue);
    currentValue = display.value;
  } catch (error) {
    display.value = 'Error';
    currentValue = '';
  }
}
