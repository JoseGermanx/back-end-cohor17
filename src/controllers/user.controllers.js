

// crear un nuevo usuario

const createNewUser = (req, res) => {
    res.send("registro de usuario");
  }


//  hacer login

const loginUser = (req, res) => {
    res.send("Login de usuario");
  }


// actualizar datos del usuario

const updateUser = (req, res) => {
    res.send("Actualizar datos de usuario");
  }


// eliminar un usuario

const deleteUser = (req, res) => {
    res.send("Eliminar usuario");
}


  module.exports = {createNewUser, loginUser, updateUser, deleteUser}