require('dotenv').config();
const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');
const { API, API_KEY } = process.env;
const axios = require('axios');

module.exports = async function getByID(ID) {
    try {
        if(typeof ID !== 'number') {
            let VideogameDB = await Videogame.findOne({
                where: {
                    id: ID
                },
                include: includesDB
            });

            const index = VideogameDB
            let getVideogameID = {
                id: index.id,
                name: index.name,
                description: index.description,
                dateRelease: index.release,
                rating: index.rating,
                plataforms: index.map(pla => pla.name).join(', '),
                genres: index.map(gen => gen.name).join(', ')
            }

            if (ID === getVideogameID.id)  return getVideogameID;

        }
    } catch(err) {
        console.log(err);
        res.status(500).send('No se encontro este ID');
    }
}