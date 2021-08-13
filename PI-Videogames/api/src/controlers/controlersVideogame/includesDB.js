const { Genres, Plataforms } = require('../../db');

const includesDB = [
    {
        model: Genres
    },

    {
        model: Plataforms
    }
];

module.exports = includesDB;