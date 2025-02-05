require('dotenv').config()
const User = require("../models/user.models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// crear un nuevo usuario

//                     req = request --> tendremos disponible info que envie el cliente
const createNewUser = async (req, res) => {
  const { name, email, password, rol } = req.body;

  if (!name || !email || !password) {
    res.status(404).json({ message: "Todos los campos son requeridos" });
    return;
  }

  try {
    const salt = bcrypt.genSaltSync(); /// define la dificultad de encriptado

    const passwordHash = bcrypt.hashSync(password, salt); // encripta la contraseña

    await User.create({
      name: name,
      email: email,
      password: passwordHash,
      rol: rol
    });

    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error de servidor al crear el usuario" });
    console.log(error);
  }
};

//  hacer login

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }

    // comparar (verificar) la contraseña

    const passVerify = bcrypt.compareSync(password, findUser.password);

    if (!passVerify) {
      return res.status(400).json({
        message: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign({id: findUser._id, userType: findUser.rol}, process.env.SECRET_JWT, {expiresIn: "1h"})

    res.status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000
    })
    .json({
      message: "Logueado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
    });
    console.log(error);
  }
  // se busca en registro en la colección de la base de datos
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

const getDataUser = async (req, res) => {
  try {

    const user = await User.findById(req.userId)

    res.status(200).json({
      message: "Datos del usuario",
      data: user
    })
  

  }
  catch (error) {
     
    res.status(500).json({message: "Error de servidor"})

    }
  }

  const logout = (req, res) =>{
    res.clearCookie("token",{
      httpOnly: true,
      secure: false
    }).json({message: "Sesión cerrada"})
  }


module.exports = {
  createNewUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getDataUser,
  logout
};
