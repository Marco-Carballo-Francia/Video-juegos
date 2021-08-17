import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function getVideogameByName(name) {
    try {
        const videogamesByName = await axios.get(`${URL}/videogames/?name=${name}`);
        return videogamesByName.data;
    } catch (err) {
        console.log(err);
    }
}