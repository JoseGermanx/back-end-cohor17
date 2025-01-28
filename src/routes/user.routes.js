
// rutas dependiendo de el tipo de método que se vaya a gestión en cada una de ellas
const router = require("express").Router()
const { createNewUser, loginUser, updateUser, deleteUser } = require("../controllers/user.controllers")


// crear un nuevo usuario
router.post("/register", createNewUser )

// hacer login
router.post("/login", loginUser )

// actualizar datos del usuario
router.put("/update", updateUser )


// eliminar un usuario

router.delete("/delete", deleteUser )



module.exports = router


