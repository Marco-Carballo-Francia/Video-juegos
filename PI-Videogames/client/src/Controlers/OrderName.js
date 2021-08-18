import axios from 'axios';
import { URL } from '../Actions/Constants';


export async function orderNameAscAndDes(orderName) {
    try {
        const orderNameAD = await axios.get(`${URL}/videogames/order?orderName=${orderName}`);
        return orderNameAD;
    } catch (err) {
        console.log(err);
    }
}