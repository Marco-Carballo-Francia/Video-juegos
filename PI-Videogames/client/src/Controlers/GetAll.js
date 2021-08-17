import { getAllVideogames } from "./GetAllVideogames";
import { getAllGenres } from "./GetAllGenres";
import { getVideogameByID } from "./GetVideogameID";
import { getVideogameByName } from "./GetVideogameName";
import { newVideogameCreate } from "./VideogamesCreated";



export const getVideogames = getAllVideogames;
export const getGenres = getAllGenres;
export const getVideogameID = getVideogameByID;
export const getVideogameName = getVideogameByName;
export const videogameCreate = newVideogameCreate;