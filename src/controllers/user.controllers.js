const User = require("../models/user.models");

// crear un nuevo usuario

//                     req = request --> tendremos disponible info que envie el cliente
const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(404).json({ message: "Todos los campos son requeridos" });
    return;
  }

  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(201).json({ message: "Usuario creado con éxito" });

  } catch (error) {
    res.status(500).json({ message: "Error de servidor al crear el usuario" });
    console.log(error);
  }
};

//  hacer login

const loginUser = (req, res) => {
  res.send("Login de usuario");
};

// actualizar datos del usuario

const updateUser = (req, res) => {
  res.send("Actualizar datos de usuario");
};

// eliminar un usuario

const deleteUser = (req, res) => {
  res.send("Eliminar usuario");
};


// get all users

const getAllUsers = async (req, res) => {

  const usersList = await User.find({})
  res.status(200).json({ message: "Todos los usuarios", data: usersList });

}

module.exports = { createNewUser, loginUser, updateUser, deleteUser, getAllUsers };
