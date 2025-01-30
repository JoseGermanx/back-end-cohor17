
const app = require("./src/app/app"); // importamos app
const {dbConnection} = require("./src/database/conexion"); // importamos dbConnection
const port = 8080;


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

dbConnection(); // llamamos a la función dbConnection