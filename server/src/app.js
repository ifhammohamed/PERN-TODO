const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/todos", todoRoutes);

module.exports = app;
