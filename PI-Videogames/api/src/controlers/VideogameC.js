require('dotenv').config();
const { Videogame } = require('../db');
const axios = require('axios');
const { API_KEY, API } = process.env;


// Obtener un listado de los videojuegos;
// Debe devolver solo los datos necesarios para la ruta principal;






// Obtener un listado de las primeros 15 videojuegos que contengan
// la palabra ingresada como query parameter;
// Si no existe ningún videojuego mostrar un mensaje adecuado;





// Obtener el detalle de un videojuego en particular;
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego;
// Incluir los géneros asociados;





// Recibe los datos recolectados desde el formulario controlado 
// de la ruta de creación de videojuego por body;
// Crea un videojuego en la base de datos;















