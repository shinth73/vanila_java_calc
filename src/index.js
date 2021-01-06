// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const buttons = [...document.querySelectorAll("button")];
const display = document.querySelector(".value");
let operand1 = 0;
let operand2 = null,
  operator = null,
  result = null,
  output = null;

const calculate = (op1, op2) => {
  if (operator === "/" && op2 === 0) {
    return null;
  } else if (operator === "+") {
    return op1 + op2;
  } else if (operator === "-") {
    return op1 - op2;
  } else if (operator === "x") {
    return op1 * op2;
  } else if (operator === "/") {
    return op1 / op2;
  }
};

const handleClick = event => {
  const input = event.srcElement.innerHTML;

  if (!isNaN(parseInt(input, 10))) {
    if (operator === null && result == null) {
      if (operand1 === 0 && input === "0") {
        output = operand1 = 0;
      } else
        output = operand1 = parseInt(
          (operand1 + input).replace(/(^0+)/, ""),
          10
        );
    } else {
      if ((operand2 === null || operand2 === 0) && input === "0") {
        output = operand2 = 0;
      } else {
        output = operand2 = parseInt(
          ((operand2 === null ? "0" : operand2) + input).replace(/(^0+)/, ""),
          10
        );
      }
    }
  } else if (input === "=") {
    if (operand2 === null) return;
    output = calculate(operand1, operand2);
    if (output === null) {
      output = "Cannot devide by zero";
    } else {
      result = operand1 = output;
      operator = operand2 = null;
    }
  } else if (input === "C") {
    operand1 = 0;
    operand2 = result = operator = null;
    output = 0;
  } else {
    operator = input;
    if (result !== null && operand2 !== null) {
      output = calculate(operand1, operand2);
      if (output === null) {
        output = "Cannot devide by zero";
      } else {
        result = operand1 = output;
        operand2 = null;
      }
    }
  }

  display.innerHTML = output;
};

const init = () => {
  buttons.forEach(button => button.addEventListener("click", handleClick));
};

init();
