import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAME_ID, GET_GENRES, ADD_VIDEOGAME, FILTER_GENRE, FILTER_VIDEOGAME, ORDER_NAME_ASC, ORDER_NAME_DESC, ORDER_RATING_ASC, ORDER_RATING_DESC, PAGED } from '../Actions/Constants';

const initialState = {
    allVideogames: [],
    videogame: {},
    createVideogame: null,
    page: 1,
    platforms: [],
    genres: [],
    genresFilter: [],
    videogamesfilter: [],
    orderNames: null,
    orderRatings: null
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: 
            return {
                ...state,
                allVideogames: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_VIDEOGAMES_NAME:
            return {
                ...state,
                allVideogame: action.payload
            }
        case GET_VIDEOGAME_ID:
            return {
                ...state,
                videogame: action.payload
            }
        case PAGED:
            return {
                ...state,
                paged: action.payload
            }
        case FILTER_VIDEOGAME: 
            return {
                ...state,
                videogamesFilter: action.payload
            }
        case FILTER_GENRE:
            return {
                ...state,
                genresFilter: action.payload
            }
        case ADD_VIDEOGAME:
            return {
                ...state,
                createVideogame: action.payload
            }
        case ORDER_NAME_ASC:
            return {
                ...state,
                orderAlph: "Ascendente"
            }

        case ORDER_NAME_DESC:
            return {
                ...state,
                orderAlph: "Descendente"
            }
        case ORDER_RATING_ASC:
            return {
                ...state,
                orderRating: "Ascendente"
            }
        case ORDER_RATING_DESC:
            return {
                ...state,
                orderRating: "Descendente",
            }      
        default: 
            return state;
    }
}