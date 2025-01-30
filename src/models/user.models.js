

const mongoose = require('mongoose');

const { Schema, model } = mongoose;


// creación del schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
})


// definición del modelo

const User = model('User', userSchema);

module.exports = User;