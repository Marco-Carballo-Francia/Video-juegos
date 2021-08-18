import axios from 'axios';
import { URL } from '../Actions/Constants';


export async function orderRatingAscAndDes(orderRating) {
    try {
        const orderRatingAD = await axios.get(`${URL}/videogames/order?orderRating=${orderRating}`);
        return orderRatingAD;
    } catch (err) {
        console.log(err);
    }
}