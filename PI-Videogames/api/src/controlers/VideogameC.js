const { Videogame } = require('../db');

function getAllVideogame(req, res) {
    Videogame.findAll()
        .then(videogame => res.send(videogame))
        .catch(err => console.error(err))
}

module.exports = {
    getAllVideogame,
}










//   GET /videogames:
// Obtener un listado de los videojuegos;
// Debe devolver solo los datos necesarios para la ruta principal;


//   GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan
// la palabra ingresada como query parameter;
// Si no existe ningún videojuego mostrar un mensaje adecuado;


//   GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular;
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego;
// Incluir los géneros asociados;


//   POST /videogame:
// Recibe los datos recolectados desde el formulario controlado 
// de la ruta de creación de videojuego por body;
// Crea un videojuego en la base de datos;

