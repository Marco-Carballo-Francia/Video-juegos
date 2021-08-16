const { Router } = require('express');
const { saveGenresInDB } = require('../controlers/controlersGen/getAllControlersGeners');


const router = Router();

// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles.
// En una primera instancia deberán traerlos desde rawg, 
// guardarlos en su propia base de datos y luego ya utilizarlos desde allí.
router.get('/', async (req, res) => {
    try {
        const genres = await saveGenresInDB();
        res.status(200).json(genres);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server is not responding');
    }
});

module.exports = router