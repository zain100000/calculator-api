const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const calculatorRoutes = require("./route/calculator-route");

require("dotenv").config();

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

// Set custom CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// Set up routes
app.use("/api", calculatorRoutes);

// Get the port from the environment or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
