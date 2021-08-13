const { Router } = require('express');

// Controllers
const { getAllVideogameApi } = require('../controlers/controlersVideogame/getAllControlers');

const router = Router();
 

//   GET /videogames
router.get('/videogames', getAllVideogameApi)

//   GET /videogames?name="..."
// router.get('/videogame', )

//   GET /videogame/{idVideogame}
// router.get('/videogame/:idVideogame', )

//   POST /videogame
// router.post('/videogame', )






module.exports = router