const express = require("express");
const router = express.Router();
const calculatorController = require("../controller/calculator-controller");

router.post("/calculate", calculatorController.calculate);

module.exports = router;
