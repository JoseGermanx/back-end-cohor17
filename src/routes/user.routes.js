
// rutas dependiendo de el tipo de método que se vaya a gestión en cada una de ellas
const router = require("express").Router()
const { createNewUser, loginUser, updateUser, deleteUser, getAllUsers, getDataUser } = require("../controllers/user.controllers")
const authJWT = require("../middlewares/auth")

// crear un nuevo usuario
router.post("/register", createNewUser )

// hacer login
router.post("/login", loginUser )

// actualizar datos del usuario
router.put("/update/:idUser", updateUser )

// eliminar un usuario

router.delete("/delete/:idUser", deleteUser )

// obtener todos los usuarios

router.get("/users", authJWT, getAllUsers ) // ruta protegida

router.get("/user-data", authJWT, getDataUser)


module.exports = router


