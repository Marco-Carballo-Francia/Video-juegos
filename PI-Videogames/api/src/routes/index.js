const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Videogames = require('./VideogameR');
const Genres = require('./GenresR');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', Videogames);
router.use('/', Genres);

module.exports = router;
