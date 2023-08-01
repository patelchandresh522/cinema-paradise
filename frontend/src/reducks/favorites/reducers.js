import initialState from "../store/initialState";
import * as Actions from './actions'
// Reducer.js
export const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case Actions.addFvoritesAction:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.fetchFavoritesAction:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.deleteFvoritesAction:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.toggleFavoritesAction:
      const {list}  = state.favorites.list;
      const favoriteId = action.payload;
      const isFavorite = list.includes(favoriteId);
      let updatedList;
      if (isFavorite) {
        updatedList = list.filter((id) => id !== favoriteId);
      } else {
        updatedList = [...list, favoriteId];
      }
      return {
        ...state,
        list: updatedList,
      };
    default:
      return state;
  }
};