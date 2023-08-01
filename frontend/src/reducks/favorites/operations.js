import { addFvoritesAction, deleteFvoritesAction, fetchFavoritesAction } from "./actions";


const Favorites_Key = "FAVORITES_KEY";

const setToLocalStorage = (favorites) => {
    localStorage.setItem(Favorites_Key,JSON.stringify(favorites))
}

export const fetchFromLocalStorage = () => {
    return async (dispatch) => {
        let favoritesJSON = localStorage.getItem(Favorites_Key)
        let favorites = [];
        if (favoritesJSON) {
            favorites = JSON.parse(favoritesJSON)
        }
        dispatch(fetchFavoritesAction(favorites))
    }
}

export const addFavorites = (image) => {
    return async (dispatch,getState) => {
        let prevFav = getState().favorites.list;
        const nextFav = [image,...prevFav];
        setToLocalStorage(nextFav)
        dispatch(addFvoritesAction(nextFav))
    }
}

export const deleteFavorites = (id) => {
    return async(dispatch,getState) => {
        let prevFav = getState().favorites.list;
        const nextFav = prevFav.filter((image) => image.id !== id);
        setToLocalStorage(nextFav);
        dispatch(deleteFvoritesAction(nextFav))
    }
}