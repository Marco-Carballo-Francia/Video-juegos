const { Genres } = require('../db');


// Obtener todos los tipos de géneros de videojuegos posibles;
// En una primera instancia deberán traerlos desde rawg y guardarlos en su 
// propia base de datos y luego ya utilizarlos desde allí;
function getAllGenres(req, res) {
    Genres.findAll()
        .then(genres => res.send(genres))
        .catch(err => console.error(err))
}


module.exports = {
    getAllGenres,
}









