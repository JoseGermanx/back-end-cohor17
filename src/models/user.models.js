

const mongoose = require('mongoose');

const { Schema, model } = mongoose;


// creación del schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    rol: {
        type: String,
        default: 'user',
        emun: ['user', 'admin']
    }
})


// definición del modelo

const User = model('User', userSchema);

module.exports = User;