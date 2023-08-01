import API from "../../API";
import { fetchMoviesAction } from "./actions";

const api = new API();

export const fetchMovies = () => {
    return async(dispatch) => {
        return api
        .getMovies()
        .then((movies) => {
            dispatch(fetchMoviesAction(movies.results));
            console.log(movies.results)
        })
        .catch((error) => {
            alert("Failed to get movies")
        })
    }
}