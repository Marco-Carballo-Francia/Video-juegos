const { Router } = require('express');
const { getAllGenres } = require('../controlers/GenresC');

const router = Router();

// GET /genres
router.get('/genres', getAllGenres)

module.exports = router