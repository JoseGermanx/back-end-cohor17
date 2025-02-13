
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
    origin: "*", // Cambia según la URL de tu frontend
    credentials: true, // Permitir envío de cookies
}
))

app.use("/", router)









module.exports = app;

