require('dotenv').config();
const { API, API_KEY } = process.env;
const axios = require('axios');

module.exports = async function getAllVideogameApi(req, res) {
    let videogameArray = [];

    if(videogameArray.length <= 100)
    try {
        const getApi1 = await axios.get(`${API}${API_KEY}&page_size=40`);
        const getApi2 = await axios.get(`${API}${API_KEY}&page=2&page_size=40`);
        const getApi3 = await axios.get(`${API}${API_KEY}&page=3&page_size=40`);
        const getApi120 = getApi1.data.results.concat(getApi2.data.results, getApi3.data.results);
        // console.log(videogame[3].id) 
        
        for (let i = 0; i <= 100; i++) {
            let videogame = getApi120[i];
            let videogameObj = {};
            
            if(videogame) {
                videogameObj = {
                    id: videogame.id, 
                    name: videogame.name,
                    dateRelease: videogame.released,
                    rating: videogame.rating,
                    platforms: videogame.parent_platforms.map(plat => { 
                        return { 
                            id: plat.platform.id, 
                            name: plat.platform.name 
                        } 
                    }),
                    genres: videogame.genres.map(genres => { 
                        return { 
                            id: genres.id, 
                            name: genres.name 
                        } 
                    }),
                    image: videogame.background_image,
                    description: videogame.description || 'Description not found in API',
                }
                videogameArray.push(videogameObj);
            }
            // console.log(videogameArray);  
        }
        res.status(200);
    } catch(err) {
        console.log(err); 
        res.status(500).send('server is not responding');
    }
}


