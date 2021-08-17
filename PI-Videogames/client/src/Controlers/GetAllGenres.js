import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function getAllGenres() {
    try{
        const genres = await axios.get(`${URL}/genres`);
        return genres.data;
    } catch (err) {
        console.log(err);
    }
}