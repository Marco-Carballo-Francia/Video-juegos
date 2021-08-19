import axios from 'axios';

import { URL } from '../Actions/Constants'; 

export async function getAllVideogames() {
    try {
        const videogames = await axios.get(`${URL}/videogames`);
        // console.log('algo');
        return videogames.data;

    } catch (err) {
        console.log(err);
    }
};