// Cargamos las variables de entorno del archivo .env.
require("dotenv").config();

// Importamos Express.
const express = require("express");

// Creamos la aplicación Express.
const app = express();

// Importamos las rutas del tiempo.
const weatherRoutes = require("./routes/weather.routes");

// Definimos el puerto.
const port = 3000;

// Configuramos EJS como motor de plantillas.
app.set("view engine", "ejs");

// Indicamos dónde están las vistas.
app.set("views", "./views");

// Middleware para recibir datos JSON.
app.use(express.json());

// Middleware para recibir datos de formularios HTML.
app.use(express.urlencoded({ extended: true }));

// Habilitamos los archivos estáticos de la carpeta public.
app.use(express.static("public"));

// Utilizamos las rutas del tiempo.
app.use("/", weatherRoutes);

// Ruta principal.
app.get("/", (req, res) => {
  res.render("index");
});

// Arrancamos el servidor.
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});