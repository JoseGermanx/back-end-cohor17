

const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/back-end-users17")  //asincrónica -- externo
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.log(error); 
    }
    
}





module.exports = {dbConnection};
