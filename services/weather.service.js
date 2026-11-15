// Creamos la función para consultar el tiempo de una ciudad.
const getWeather = async (city) => {
  // Construimos la URL de consulta a OpenWeather.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.API_KEY}&units=metric&lang=es`;

  // Realizamos la petición a la API.
  const response = await fetch(url);

  // Comprobamos si la respuesta de la API contiene un error.
 if (!response.ok) {
  const error = new Error("No se ha encontrado la ciudad");
  error.status = response.status;
  throw error;
}

  // Convertimos la respuesta recibida a formato JSON.
  const data = await response.json();

  // Devolvemos los datos meteorológicos.
  return data;
};

// Exportamos la función.
module.exports = { getWeather };
