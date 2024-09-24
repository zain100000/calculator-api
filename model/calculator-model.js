exports.performOperation = (num1, num2, operation) => {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid Operation");
  }

  return result;
};
