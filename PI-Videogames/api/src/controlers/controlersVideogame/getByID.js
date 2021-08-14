require('dotenv').config();
const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');
const { API, API_KEY } = process.env;
const axios = require('axios');

module.exports = async function getByID(ID) {
    try {
        if(typeof ID !== 'number') {
            let getVideogameIDDB = await Videogame.findOne({
                where: {
                    id: ID
                },
                include: includesDB
            });

            const index = getVideogameIDDB
            let  videogameDB = {
                id: index.id,
                name: index.name,
                description: index.description,
                release: index.release,
                rating: index.rating,
                plataforms: index.map(pla => pla.name).join(', '),
                genres: index.map(gen => gen.name).join(', ')
            }

            if (ID === getVideogameID.id)  return videogameDB;

            return 'no se encontro el ID';
        }

        let getVideogameIDApi = await axios.get(`${API}/${ID}${API_KEY}`);
        
        const index = getVideogameIDApi.data.results;
        let videogameApi = {
            id: ID,
            name: index.name,
            img: index.background_image,
            released: index.released,
            rating: index.rating,
            platforms: index.parent_platforms.map(plat => { 
                return { 
                    id: plat.platform.id, 
                    name: plat.platform.name 
                } 
            }),
            genres: index.genres.map(genres => { 
                return { 
                    id: genres.id, 
                    name: genres.name 
                } 
            }),
            description: index.description || 'Description not found in API',
        };
        
        return videogameApi;
    } catch(err) {
        console.log(err);
        // res.status(500).send('No se encontro este ID');
    }
}