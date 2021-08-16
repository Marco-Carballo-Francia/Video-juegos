require('dotenv').config();
const { Genres } = require('../../db');
const axios = require('axios');
const { API_KEY } = process.env;

module.exports = async function saveGenresInDB() {
    try {
        const genresApi = await axios.get(`https://api.rawg.io/api/genres${API_KEY}`);
        const genresDB = genresApi.data.results;

        genresDB.forEach(gen => {
            Genres.findOrCreate({
                where: { name: gen.name }
            });
        });
        let getGenresDB = await Genres.findAll();
        // console.log(getGenresDB);
        // res.status(200).send('Coneccion exitosa');

        return getGenresDB;

    } catch (err) {
        console.log(err);
        // res.status(500).send('Error con el servidor');
    }
}
