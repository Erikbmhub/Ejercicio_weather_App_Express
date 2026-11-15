// Importamos Express.
const express = require("express");

// Creamos un enrutador.
const router = express.Router();

// Ruta POST para recibir la ciudad del formulario.
router.post("/", async (req, res) => {
  // Recogemos la ciudad enviada desde el formulario.
  const city = req.body.city;

  // Recogemos la clave API desde las variables de entorno.
  const apiKey = process.env.API_KEY;

  // Construimos la URL para consultar el tiempo de la ciudad.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=es`;

  try {
    // Realizamos la petición a la API de OpenWeather.
    const response = await fetch(url);

    // Comprobamos si la respuesta de la API es correcta.
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    // Convertimos la respuesta de la API a formato JSON.
    const data = await response.json();

    // Mostramos los datos meteorológicos en la terminal.
    console.log(data);

    // Mostramos la ciudad recibida en la terminal.

    // Enviamos los datos meteorológicos a la vista EJS.
    res.render("index", { weather: data });
  } catch (error) {
    // Controlamos los errores de la petición.
    console.error("Error al consultar el tiempo:", error);

    // Volvemos a mostrar la vista con el mensaje de error.
    res.render("index", { weather: null, error: error.message });
  }
});

// Exportamos las rutas.
module.exports = router;
