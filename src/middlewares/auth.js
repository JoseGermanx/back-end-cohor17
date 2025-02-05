require('dotenv').config();
const jwt = require('jsonwebtoken');


const authJWT = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if(!token) return res.status(401).json({message: 'Acceso denegado - No hay token'});

    try {

        const decodedToken = jwt.verify(token, process.env.SECRET_JWT)

        req.userId = decodedToken.id

        next(); // para que continue con el siguiente middleware - controlador

    } catch (error) {
        res.status(500).json({message: 'Token no válido'})
    }
}

module.exports = authJWT;