const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');

module.exports = async function getVideogameDB() {
    let videogameArrayDB = [];
    
    try {    
        let videogameDB = await Videogame.findAll({
            include: includesDB
        });
        // console.log(videogameDB);

        for (let i = 0; i < videogameDB.length; i++) {
            let index = videogameDB[i];
            // console.log(index);

            let videogameObjDB = {
                id: index.id,
                name: index.name,
                description: index.description,
                released: index.released,
                rating: index.rating,
                plataforms: index.plataforms.map(pla => pla.name).join(', '),
                genres: index.genres.map(gen => gen.name).join(', ')
            }
            videogameArrayDB.push(videogameObjDB);
        }
        // res.status(200).send('Coneccion exitosa');
        return videogameArrayDB;
    } catch (err) {
        console.log(err);
        // res.status(500).send('No se conecto a la DB');
    }
}