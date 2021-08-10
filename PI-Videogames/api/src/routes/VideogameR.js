const { Router } = require('express');
const { getAllVideogame } = require('../controlers/VideogameC');

const router = Router();

router.get('/', getAllVideogame)

module.exports = router