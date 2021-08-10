const { Router } = require('express');
const { getAllGenres } = require('../controlers/GenresC');

const router = Router();

router.get('/', getAllGenres)

module.exports = router