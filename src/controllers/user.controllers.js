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

const updateUser = async (req, res) => {
  // id del usuario que vamos actualizar --> req en los parámetros de la url
  const { idUser } = req.params;

  // datos que se van a actualizar --> req

  const { name, email } = req.body;

  const dataUpdate = {
    name,
    email,
  };

  try {
    //Método para encontrar un registro y actulizarlo
    const user = await User.findByIdAndUpdate(idUser, dataUpdate);

    if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      message: "Usuario actualizado",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error de servidor al intentar actualizar el usuario" });
    console.log(error);
  }
};

// eliminar un usuario

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    const user = await User.findByIdAndDelete(idUser);

    if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      message: "Usuario eliminado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      message: "Eror de servidor",
    });
  }
};

// get all users

const getAllUsers = async (req, res) => {
  const usersList = await User.find({});
  res.status(200).json({ message: "Todos los usuarios", data: usersList });
};

module.exports = {
  createNewUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
