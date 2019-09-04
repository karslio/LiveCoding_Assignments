function calculator(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "x":
      return num1 * num2;
    case '%%':
      return (num1 / num2)*100;
    default:
      return "invalid value";
  }
}

module.exports = {
  calculator
};
