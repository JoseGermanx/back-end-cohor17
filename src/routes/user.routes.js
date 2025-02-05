
// rutas dependiendo de el tipo de método que se vaya a gestión en cada una de ellas
const router = require("express").Router()
const { createNewUser, loginUser, updateUser, deleteUser, getAllUsers, getDataUser, logout } = require("../controllers/user.controllers")
const authJWT = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

// crear un nuevo usuario
router.post("/register", createNewUser )

// hacer login
router.post("/login", loginUser )

// actualizar datos del usuario
router.put("/update/:idUser", updateUser )

// eliminar un usuario

router.delete("/delete/:idUser", deleteUser )

// obtener todos los usuarios

router.get("/users", authJWT, isAdmin, getAllUsers ) // ruta protegida

router.get("/user-data", authJWT, getDataUser)

router.get("/logout", logout)


module.exports = router


