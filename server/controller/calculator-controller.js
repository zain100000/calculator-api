const calculatorModel = require("../model/calculator-model");

// Controller to handle calculation requests
exports.calculate = (req, res) => {
  const { num1, num2, operation } = req.body;

  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ error: "Inputs must be numbers" });
  }

  try {
    // Call the model to perform the operation
    const result = calculatorModel.performOperation(num1, num2, operation);
    res.json({ num1, num2, operation, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
