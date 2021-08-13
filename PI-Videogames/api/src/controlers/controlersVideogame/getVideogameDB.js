const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');

module.exports = async function getVideogameDB() {
    let videogameArrayDB = [];

    try {
        let videogameDB = await Videogame.findAll({
            include: includesDB
        });

        for (let i = 0; i < videogameDB.length; i++) {
            let index = videogameDB[i];
            
            let videogameObjDB = {
                id: index.dateValues.id,
                name: index.dataValues.name,
                description: index.dataValues.description,
                dateRelease: index.dataValues.release,
                rating: index.dataValues.rating,
                plataforms: index.plataforms.map(pla => pla.name).join(', '),
                genres: index.genres.map(gen => gen.name).join(', ')
            }
            videogameArrayDB.push(videogameObjDB);
        }
        return videogameArrayDB;
    } catch (err) {
        console.log(err);
        res.status(500).send('No se conecto a la DB');
    }
}