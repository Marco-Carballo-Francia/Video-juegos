import axios from 'axios';
import { URL } from '../Actions/Constants';

export async function getVideogameByID(id) {
    try {
        const videgoameByID = await axios.get(`${URL}/videogame/${id}`);
        //console.log(videgoameByID.data, '2222222222222222222222')
        return videgoameByID.data;
    } catch (err) {
        console.log(err);
    }
}