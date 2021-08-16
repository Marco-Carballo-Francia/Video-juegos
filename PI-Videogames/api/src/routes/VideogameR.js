const { Router } = require('express');

// Controllers
const { getVideogameApi, getVideogameDB, addVideogame, getByID, getByName } = require('../controlers/controlersVideogame/getAllControlersVideogames');

const router = Router();
 

//   GET /videogames:
// Obtener un listado de los videojuegos.
// Debe devolver solo los datos necesarios para la ruta principal.
router.get('/videogames', async (req, res) => {
    try {
        const videogameAPI = await getVideogameApi();
        const videogameDB = await getVideogameDB();
        const videogame = videogameAPI.concat(videogameDB);
        // console.log(videogame);
        res.status(200).json(videogame);    
    
    } catch (err) {
        console.log(err);
        res.status(500).send('Server is not responding');
    }

});

//   GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan 
// la palabra ingresada como query parameter.
// Si no existe ningún videojuego mostrar un mensaje adecuado.
router.get('/videogamess', async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            const videogameNames = await getByName(name);
            res.status(200).json(videogameNames);
        } 
        res.send('Game name not found');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server is not responding');
    }
});

//   GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular.
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego.
// Incluir los géneros asociados.
router.get('/videogame/:id', async (req, res) => {
    let ID = req.params.id;

    try {
        const videogame = await getByID(ID);
        res.status(200).json(videogame);
    } catch(err) {
        console.log(err);
        res.status(500).send('Server is not responding');
    }
});

//   POST /videogame:
// Recibe los datos recolectados desde el formulario controlado 
// de la ruta de creación de videojuego por body.
// Crea un videojuego en la base de datos.
router.post('/videogame', async (req, res) => {
    let data = req.body;

    try {
        const videogameCreate = await addVideogame(data);
        res.status(200).json(videogameCreate);
        res.send('Videogame created correctly');
    } catch(err) {
        console.log(err);
        res.status(500).send('Server is not responding');
    }
});




module.exports = router