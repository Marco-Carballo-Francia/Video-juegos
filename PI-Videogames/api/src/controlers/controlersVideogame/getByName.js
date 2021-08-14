require('dotenv').config();
const { Videogame } = require('../../db');
const { includesDB } = require('./includesDB');
const { API, API_KEY } = process.env;
const axios = require('axios');



module.exports = async function getByName(name) {
    try {

    } catch(err) {
        console.log(err);
        resizeBy.status(500).send('Server is not resquest');
    }
}