export const addFvoritesAction = (favorites) => {
    return {
        type: 'ADD_FAVORITES',
        payload: favorites
    }
};


export const fetchFavoritesAction = (favorites) => {
    return {
        type: 'FETCH_FAVORITES',
        payload: favorites
    }
};


export const deleteFvoritesAction = (favorites) => {
    return {
        type: 'DELETE_FAVORITES',
        payload: favorites
    }
};

export const toggleFavoritesAction = (id) => {
    return {
        type: 'TOGGLE_FAVORITES',
        payload: id,
    }
};