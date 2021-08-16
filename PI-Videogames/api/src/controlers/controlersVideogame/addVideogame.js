const { Videogame,Genres, PLataforms } = require('../../db');



module.exports = async function addVideogame(data) {
    try {
        const { name, description, img, genres, plataforms, released, rating } = data;
  
        let createVideogame = await Videogame.create({
            name,
            description,
            img, 
            released,
            rating
        })
    
        genres.forEach(async (gen) => {
            let genres = await Genres.findOne({ 
                where: { name: gen } 
            });
            await createVideogame.addGenres(genres);
        });

        plataforms.forEach(async (pla) => {
            let plataform = await PLataforms.findOne({
                where: { name: plataforms }
            })
        })
        return createVideogame;
    } catch(err) {
        console.log(err);
    }
}