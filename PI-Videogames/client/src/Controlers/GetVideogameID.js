import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function getVideogameByID(id) {
    try {
        const videgoameByID = await axios.get(`${URL}/videogames/${id}`);
        return videgoameByID.data;
    } catch (err) {
        console.log(err);
    }
}