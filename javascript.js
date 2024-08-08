function getAddition(addend1, addend2) {
  return addend1 + addend2;
}

function getSubtraction(minuend1, minuend2) {
  return minuend1 - minuend2;
}

function getMultiplication(multiplicand, multiplier) {
  return multiplicand * multiplier;
}

function getDivision(dividend, divisor) {
  return dividend / divisor;
}

function getResult(num1, num2, operation) {
  switch (operation) {
    case "+":
      return getAddition(parseInt(num1), parseInt(num2));
    case "-":
      return getSubtraction(parseInt(num1), parseInt(num2));
    case "*":
      return getMultiplication(parseInt(num1), parseInt(num2));
    case "/":
      return getDivision(parseInt(num1), parseInt(num2));
  }
}

// const num1 = prompt("What is the first number?");
// const operation = prompt("What is the operation(+-*/)?");
// const num2 = prompt("What is the second number?");

// console.log(getResult(num1, num2, operation));
