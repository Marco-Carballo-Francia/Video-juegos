const { Videogame } = require('../../db');



module.exports = async function deleteVideogame(id) {
    const deleteVideogame = await Videogame.detroy({
        where: {
            id: id
        }
    });
    return deleteVideogame;
}