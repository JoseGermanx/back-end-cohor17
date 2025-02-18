
require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors")

const router = require("../routes/user.routes");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors({
    origin: process.env.FRONT_URL, // Cambia según la URL de tu frontend
}
))

app.use("/", router)









module.exports = app;

