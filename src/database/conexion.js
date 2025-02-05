require('dotenv').config()

const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)  //asincrónica -- externo
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.log(error); 
    }
    
}





module.exports = {dbConnection};
