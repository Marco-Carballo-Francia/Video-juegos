import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function filterByGenres(genre) {
    try {
        const getGenre = await axios.get(`${URL}/videogames/genres?genre=${genre}`);
        return getGenre;
    } catch (err) {
        console.log(err);
    }
}