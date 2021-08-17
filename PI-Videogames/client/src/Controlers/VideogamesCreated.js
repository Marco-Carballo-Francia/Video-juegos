import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function newVideogameCreate(data) {
    try {
        const videogame = await axios.post(`${URL}/videogames`, data);
        return videogame;
    } catch (err) {
        console.log(err);
    }
}