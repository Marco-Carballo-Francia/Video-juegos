const getVideogameApi = require('./getVideogameApi');
const getVideogameDB = require('./getVideogameDB');
const getByID = require('./getByID');
const getByName = require('./getByName');
const addVideogame = require('./addVideogame');
const deleteVideogame = require('./deleteVideogame');


module.exports = {
    getVideogameApi,
    getVideogameDB,
    getByID,
    getByName,
    addVideogame,
    deleteVideogame
}