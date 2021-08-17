import axios from 'axios';

import { URL } from '../Actions/Constants'; 

export async function getAllVideogames() {
    try {
        const videogames = await axios.get(`${URL}/videogames`);
        return videogames.data;
    } catch (err) {
        console.log(err);
    }
};