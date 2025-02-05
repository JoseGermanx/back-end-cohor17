
const express = require("express");
const morgan = require("morgan");
const cookies = require("cookie-parser");
const app = express();

const router = require("../routes/user.routes");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookies());

app.use("/", router)









module.exports = app;

