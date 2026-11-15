# 🌤️ Weather App – Express + EJS

Aplicación web meteorológica desarrollada con **Node.js y Express**, que permite consultar el tiempo actual de cualquier ciudad utilizando la API de [OpenWeather](https://openweathermap.org/).

El proyecto forma parte de los ejercicios del Bootcamp de Desarrollo Web Full Stack con IA de The Bridge.

## 🚀 Funcionalidades

- Búsqueda meteorológica por ciudad.
- Consulta de temperatura actual en grados Celsius.
- Visualización de la descripción del tiempo en español.
- Consulta de la humedad.
- Gestión de errores cuando la ciudad no existe o falla la petición a la API.
- Renderizado dinámico de resultados mediante EJS.
- Protección de la clave API mediante variables de entorno.

## 🛠️ Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express 5:** framework para crear el servidor y gestionar las rutas.
- **EJS:** motor de plantillas para generar páginas HTML dinámicas.
- **OpenWeather API:** servicio externo de información meteorológica.
- **dotenv:** gestión de variables de entorno.

## 📁 Estructura del proyecto

```text
Ejercicio_weather_App_Express/
│
├── controllers/
│   └── weather.controller.js
│
├── routes/
│   └── weather.routes.js
│
├── services/
│   └── weather.service.js
│
├── views/
│   └── index.ejs
│
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Erikbmhub/Ejercicio_weather_App_Express.git
```

### 2. Acceder a la carpeta

```bash
cd Ejercicio_weather_App_Express
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
API_KEY=tu_clave_de_openweather
```

Puedes obtener una clave API gratuita en [OpenWeather](https://openweathermap.org/api).

**Importante:** el archivo `.env` no debe subirse a GitHub.

### 5. Iniciar el servidor

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Abrir en el navegador:

```text
http://localhost:3000
```

## 🌦️ Funcionamiento

1. El usuario introduce el nombre de una ciudad en el formulario.
2. Express recibe los datos mediante una petición POST.
3. La aplicación consulta la API de OpenWeather utilizando `fetch()`.
4. La respuesta se procesa en formato JSON.
5. Los datos meteorológicos se envían a la plantilla EJS.
6. La página muestra la temperatura, la descripción del tiempo y la humedad.

## 📚 Conceptos trabajados

- Creación de servidores con Express.
- Configuración de rutas HTTP.
- Recepción de datos mediante formularios HTML.
- Uso de `express.urlencoded()`.
- Variables de entorno con dotenv.
- Peticiones HTTP asíncronas con `async/await` y `fetch()`.
- Procesamiento de respuestas JSON.
- Gestión de errores con `try/catch`.
- Renderizado dinámico con EJS.

## 👨‍💻 Autor

**Erik Buitrago**

Proyecto realizado como parte del Bootcamp de Desarrollo Web Full Stack con IA – The Bridge.