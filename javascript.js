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
  if (divisor === 0) return "lmao";
  return dividend / divisor;
}

function getPercentage(num1, num2) {
  return (num1 * num2) / 100;
}

function getResult(num1, num2, operation) {
  function num(number) {
    if (typeof number === "number") {
      if (!Number.isInteger(number)) {
        number = number.toFixed(7);
      }
      if (number.toString().length > 9) {
        number = parseInt(number).toExponential();
      }
    }

    return number;
  }
  switch (operation) {
    case "+":
      const sum = getAddition(Number(num1), Number(num2));
      return num(sum);
    case "-":
      const difference = getSubtraction(Number(num1), Number(num2));
      return num(difference);
    case "*":
      const product = getMultiplication(Number(num1), Number(num2));
      return num(product);
    case "/":
      const quotient = getDivision(Number(num1), Number(num2));
      return num(quotient);
    case "%":
      return getPercentage(Number(num1), Number(num2));
  }
}

function numButtonEvent(numBtn) {
  numBtn.style.opacity = 0.5;
  setTimeout(() => (numBtn.style.opacity = 1), 100);

  const buttonValue_str = numBtn.textContent;

  if (displayValue.textContent === "0") {
    displayValue.textContent = buttonValue_str;
    num1 = buttonValue_str;
  } else if (operator === undefined) {
    num1 += buttonValue_str;
    displayValue.textContent += buttonValue_str;
  } else if (operator === "=") {
    displayValue.textContent = buttonValue_str;
    num1 = buttonValue_str;
    num2 = undefined;
    operator = undefined;
  } else if (num2 === undefined) {
    num2 = buttonValue_str;
    displayValue.textContent = buttonValue_str;
  } else {
    num2 += buttonValue_str;
    displayValue.textContent += buttonValue_str;
  }
}

function symButtonEvent(symBtn) {
  symBtn.style.opacity = 0.5;
  setTimeout(() => (symBtn.style.opacity = 1), 100);

  switch (symBtn.textContent) {
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "-";
      break;
    case "*":
      operator = "*";
      break;
    case "/":
      operator = "/";
      break;
    case "%":
      operator = "%";
      break;
    case "=":
      if (num2 === undefined) return false;
      result = getResult(num1, num2, operator);

      displayValue.textContent = result;
      operator = "=";
      num1 = result;
      num2 = undefined;
      break;
    case "AC":
      displayValue.textContent = "0";
      num1 = undefined;
      num2 = undefined;
      operator = undefined;
      break;
    case "+/-":
      displayValue.textContent = "ERROR";
      break;
    case ".":
      if (displayValue.textContent.includes(".")) {
        return false;
      } else if (num2 === undefined) {
        displayValue.textContent += ".";
        num1 += ".";
      } else {
        displayValue.textContent += ".";
        num2 += ".";
      }
      break;
    default:
      displayValue.textContent = "ERROR!";
      break;
  }
}

let num1;
let num2;
let operator;
let result;

let displayValue = document.querySelector(".displayValue");

const numButtons = document.querySelectorAll(".numBtn");
const symButtons = document.querySelectorAll(".symBtn");

symButtons.forEach((symBtn) =>
  symBtn.addEventListener("click", () => symButtonEvent(symBtn))
);

numButtons.forEach((numBtn) =>
  numBtn.addEventListener("click", () => numButtonEvent(numBtn))
);
