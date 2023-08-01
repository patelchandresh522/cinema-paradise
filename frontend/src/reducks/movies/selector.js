import {createSelector} from 'reselect';

 const moviesSelctor = state => state.movies.results;

export const getMovies = createSelector([moviesSelctor],state => state)