require('dotenv').config();
const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');
const { API, API_KEY } = process.env;
const axios = require('axios');



module.exports = async function getByName(name) {
    let videogameArrayApi = [];

    try {
        let videogameDBName = await Videogame.findOne({
            where: { name: name },
            include: includesDB
        })

        if (videogameDBName) {
            const indexDB = videogameDBName;
            let videogameDB = {
                id: indexDB.id,
                name: indexDB.name,
                description: indexDB.description,
                release: indexDB.release,
                rating: indexDB.rating,
                plataforms: indexDB.plataforms.map(pla => pla.name).join(', '),
                genres: indexDB.genres.map(gen => gen.name).join(', ')
            }
            
            if (name === videogameDBName.name)  return videogameDB;
            return 'No se encontro el nombre del videojuego';
        } else {
            let videogameApiName = await axios.get(`${API}${API_KEY}&search=${name}`);
           
            // console.log(videogameApiName.data.results[0]);

            for (let i = 0; i < videogameApiName.data.results.length; i++) {
                if (i < 15) {
                    const indexAPI = videogameApiName.data.results[i];
                    // console.log(indexAPI);

                    const videogameApi = {
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
                    videogameArrayApi.push(videogameApi);
                }
            }
            return videogameArrayApi;
        }
    } catch(err) {
        console.log(err);
        // res.status(500).send('Server is not resquest');
    }
}