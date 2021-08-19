import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAME_ID, GET_GENRES, ADD_VIDEOGAME, FILTER_GENRE, ORDER_NAME, ORDER_RATING, SETING } from "./Constants";
import { getVideogames, getGenres, getVideogameID, getVideogameName, videogameCreate, orderNames, orderRatings } from "../Controlers/GetAll";
import { URL } from "./Constants";

export function allVideogames() {
    return (dispatch) => {
        getVideogames()
          .then(res => {
            dispatch({ 
                type: GET_VIDEOGAMES, 
                payload: res 
            })
          })
    }
}

export function allGenres() {
    return (dispatch) => {
        getGenres()
          .then(res => {
            dispatch({ 
                type: GET_GENRES, 
                payload: res 
            })
          })
    }
}

export function videogameDetails(id) {
  return (dispatch) => {
    return fetch(`${URL}/videogame/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ 
          type: GET_VIDEOGAME_ID, 
          payload: json });
      })
  } 
}

export function videogamesName(name) {
    return (dispatch) => {
        getVideogameName(name)
          .then(res => {
            dispatch({ 
                type: GET_VIDEOGAMES_NAME, 
                payload: res 
            })
          })
    }
}

export function createVideogame(data) {
    return (dispatch) => {
        videogameCreate(data)
          .then(res => {
            dispatch({ 
                type: ADD_VIDEOGAME, 
                payload: res 
            })
          })
    }
}

export function setVideogames() {
    return  { 
        type: SETING, 
        payload: undefined 
    }
}

// export function filterByGenre(genre) {
//     return (dispatch) => {
//         filterGenres(genre)
//           .then(res => {
//             dispatch({ 
//                 type: FILTER_GENRE, 
//                 payload: res 
//             })
//           })
//     }
// }

export function orderByName(orderName) {
    return (dispatch) => {
        orderNames(orderName)
          .then(res => {
            dispatch({ 
                type: ORDER_NAME, 
                payload: res
            })
          })
    }
}

export function orderByRating(orderRating) {
    return (dispatch) => {
        orderRatings(orderRating)
          .then(res => {
            dispatch({ 
                type: ORDER_RATING, 
                payload: res
            })
          })
    }
}

export const filterByGenre = (genre) => (dispatch, getState) => {
	const videogame = getState().videogames.slice()

	let arrayByGenre = videogame.filter((game) => game.genres.forEach(gen => gen.name === genre));
	dispatch({
		type: FILTER_GENRE,
		payload: arrayByGenre
	});
};