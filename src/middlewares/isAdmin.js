

const isAdmin = (req, res, next) => {

    if(req.rol !== 'admin') return res.status(403).json({message: 'Acceso denegado - No eres administrador'});

    next();

}





module.exports = isAdmin;