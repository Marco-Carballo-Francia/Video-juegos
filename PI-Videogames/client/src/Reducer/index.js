import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAME_ID, GET_GENRES, ADD_VIDEOGAME, FILTER_GENRE, ORDER_NAME, SETING } from '../Actions/Constants';

const initialState = {
    videogames: [],
    videogamesCreate: [],
    videogameDetail: null,
    genres: []
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case GET_VIDEOGAME_ID: {
            return {
                ...state,
                videogameDetail: action.payload
            }
        }
        case GET_GENRES: {
            return {
                ...state,
                genres: action.payload
            }
        }
        case GET_VIDEOGAMES_NAME: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case ADD_VIDEOGAME: {
            return {
                ...state,
                videogamesCreate: action.payload
            }
        }
        
        case FILTER_GENRE: {
            let allVideogames = state.videogames
            const genresName = allVideogames.map(gen => {
                return {
                    ...gen, 
                    genres: gen.genres.map(e => e.name)
                }
            }) 
            const filtered =  genresName.filter(e => e.genres.includes(action.payload))
             
            return {
                ...state,
                videogames: filtered
            }
        }
        case ORDER_NAME: {
            if (action.payload === 'A-Z') {
                return {
                    ...state, 
                    videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? 1 : -1)
                }
            } else if (action.payload === 'Z-A') {
                return {
                    ...state, 
                    videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? -1 : 1) 
                }
            }
            break;
        }
        case SETING: {
            return {
                ...state,
                videogames: []
            }
        }        
        default: {
            return state;
        }
    }
}