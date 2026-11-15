// Importamos la función que consulta el tiempo.
const { getWeather } = require("../services/weather.service");


// Creamos el controlador para consultar el tiempo.
const getWeatherController = async (req, res) => {
    
    // Recogemos la ciudad enviada desde el formulario.
    const city = req.body.city;

  try {
    // Consultamos el tiempo utilizando el servicio.
    const weather = await getWeather(city);

    // Mostramos los datos recibidos en la terminal.
    console.log(weather);

    // Enviamos los datos al navegador.
    res.json(weather);

  } catch (error) {
  // Devolvemos el código de error correspondiente.
  return res.status(error.status || 500).json({
    message: error.message,
  });
  }
};

// Exportamos el controlador.
module.exports = { getWeatherController };