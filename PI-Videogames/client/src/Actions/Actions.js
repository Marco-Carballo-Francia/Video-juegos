import { GET_VIDEOGAMES, GET_VIDEOGAMES_NAME, GET_VIDEOGAME_ID, GET_GENRES, ADD_VIDEOGAME, FILTER_GENRE, FILTER_VIDEOGAME, ORDER_NAME_ASC, ORDER_NAME_DESC, ORDER_BY_CREATOR, ORDER_RATING_ASC, ORDER_RATING_DESC, PAGED } from "./Constants";
import { getVideogames, getGenres, getVideogameID, getVideogameName, videogameCreate } from "../Controlers/GetAll";

export function paged(page) {
    return (dispatch => dispatch({ 
        type: PAGED,
        payload: page 
    }));
}

export function allVideogames() {
    return (dispatch => {
        getVideogames()
          .then(res => dispatch({
              type: GET_VIDEOGAMES,
              payload: res
          }))
          .catch(err => {
              console.log(err);
          })
    });
}

export function allGenres() {
    return (dispatch => {
        getGenres()
          .then(res => dispatch({
              type:GET_GENRES,
              payload: res
          }))
          .catch(err => {
              console.log(err);
          })
    });
}

export function videogameID(id) {
    return (dispatch => {
        getVideogameID(id)
          .then(res => dispatch({
              type: GET_VIDEOGAME_ID,
              payload: res
          }))
          .catch(err => {
              console.log(err);
          })
    })
}

export function videogamesName(name) {
    return (dispatch => {
        getVideogameName(name)
          .then(res => dispatch({
              type: GET_VIDEOGAMES_NAME,
              payload: res
          }))
          .catch(err => {
              console.log(err);
          })
    })
}

export function addVideogameCreate(data) {
    return(dispatch => {
        videogameCreate(data)
          .then(res => dispatch({
              type: ADD_VIDEOGAME,
              payload: res
          }))
          .catch(err => {
              console.log(err);
          })
    })
}

export function orderNamesAsc() {
    return (dispatch => dispatch({
        type: ORDER_NAME_ASC 
    }));
}

export function orderNamesDes() {
    return (dispatch => dispatch({
        type: ORDER_NAME_DESC 
    }));
}

export function orderRatingsAsc() {

    return (dispatch => dispatch({
        type: ORDER_RATING_ASC
    }));
}

export function orderRatingsDes() {
    return (dispatch => dispatch({ 
        type: ORDER_RATING_DESC 
    }));
}

export function orderByCreator() {
    return (dispatch => dispatch({ 
        type: ORDER_BY_CREATOR 
    }));
}

export function filterGenres(id) {
    return (dispatch => dispatch({
        type: FILTER_GENRE,
        payload: id 
    }));
}

export function filterVideogames(name) {
    return (dispatch => dispatch({
        type: FILTER_VIDEOGAME,
        payload: name
    }));
}