export const ADD_FAVORITES = 'ADD_FAVORITES';
export const addFvoritesAction = (favorites) => {
    return {
        type: 'ADD_FAVORITES',
        payload: favorites
    }
};

export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const fetchFavoritesAction = (favorites) => {
    return {
        type: 'FETCH_FAVORITES',
        payload: favorites
    }
};

export const DELETE_FAVORITES = 'DELETE_FAVORITES';
export const deleteFvoritesAction = (favorites) => {
    return {
        type: 'DELETE_FAVORITES',
        payload: favorites
    }
};

//export const toggleFavoritesAction = (id) => {
    //return {
        //type: 'TOGGLE_FAVORITES',
        //payload: id,
    //}
//};