
const app = require("./src/app/app"); // importamos app
const port = 8080;


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// req nos permite recibir información del cliente  ->>
// res nos permite enviar información al cliente   <<-


// app.get("/", (req, res) => {
//     res.send("Hola mundo!!")
  
// });

// // Ruta registrar un usuario

// app.post("/register", (req, res) => {
//   // logica para crear un nuevo usuario
//   res.send("Usuario registrado con exito");
// });

// // Ruta para hacer login del usuario

// app.post("/login", (req, res) => {
//   // logica para hacer login
//   res.send("Usuario logueado con éxito");
// });

// // Ruta para actualizar datos del usuario

// // Ruta para eliminar un usuario

// // Rutas para ver la información de un usuario

// app.get(
//   "/about",
//   (req, res, next) => {
//     console.log("Pasando por el middleware");
//     next();
//   },
//   (req, res) => {
//     res.send("About us!");
//   }
// );