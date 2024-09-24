const express = require("express");
const router = express.Router();
const calculatorController = require("../Controller/calculator-controller");

router.post("/calculate", calculatorController.calculate);

module.exports = router;
