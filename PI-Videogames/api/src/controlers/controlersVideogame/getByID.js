require('dotenv').config();
const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');
const { API, API_KEY } = process.env;
const axios = require('axios');

module.exports = async function getByID(ID) {
    try {
        if(ID.includes("-")) {
            let getVideogameIDDB = await Videogame.findOne({
                where: { id: ID },
                include: includesDB
            });

            const indexDB = getVideogameIDDB;
            let  videogameDB = {
                id: indexDB.id,
                name: indexDB.name,
                description: indexDB.description,
                release: indexDB.release,
                rating: indexDB.rating,
                plataforms: indexDB.map(pla => pla.name).join(', '),
                genres: indexDB.map(gen => gen.name).join(', ')
            }

            if (ID === getVideogameID.id)  return videogameDB;

            return 'no se encontro el ID';
        }

        let getVideogameIDApi = await axios.get(`${API}/${ID}${API_KEY}`);
        
        const indexAPI = getVideogameIDApi.data;
        // console.log(getVideogameIDApi);
        let videogameApi = {
            id: indexAPI.id,
            name: indexAPI.name,
            img: indexAPI.background_image,
            released: indexAPI.released,
            rating: indexAPI.rating,
            platforms: indexAPI.parent_platforms.map(plat => { 
                return { 
                    id: plat.platform.id, 
                    name: plat.platform.name 
                } 
            }),
            genres: indexAPI.genres.map(gen => { 
                return { 
                    id: gen.id, 
                    name: gen.name 
                } 
            }),
            description: indexAPI.description || 'Description not found in API',
        };
        
        return videogameApi;
    } catch(err) {
        console.log(err);
        // res.status(500).send('No se encontro este ID');
    }
}