import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../reducks/movies/selector'
import { fetchMovies } from '../reducks/movies/operations'
import Header from '../components/common/Header'
import watchImg from '../assets/cinema-img/trailer.png'
import likeImg from '../assets/cinema-img/heart.svg'
import Footer from '../components/common/Footer'
import { addFavorites, deleteFavorites } from '../reducks/favorites/operations'
import { getFavorites } from '../reducks/favorites/selector'


const Home = () => {
    const selector = useSelector((state) => state)
    const movies = getMovies(selector)
    console.log(movies)
    const dispatch = useDispatch();
    const favorites = getFavorites(selector)


    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    const handleFavoriteToggle = movie => {
        const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);
        if(isFavorite){
            dispatch(deleteFavorites(movie.id));
        }
        else{
            dispatch(addFavorites(movie));
        }
    }

    const renderMovieRealseType = (releaseType) => {
        const filteredMovies = movies.filter(
            (movie) => movie.release_type === releaseType
        )


        return (
            <div className='movies-section'>{filteredMovies && filteredMovies.map((movie, index) =>{
                const isFavorite = favorites.includes(
                    favMovie => favMovie.id === movie.id
                );
               return (
                <div className='movie-div' key={index}>
                    <div className="image">
                        <img src={movie.image} alt="pic" />
                    </div>
                    <div className="movie-info">
                        <p>{movie.title}</p>
                        <p>TV-MA | Action, Crime</p>
                    </div>
                    <div class="movie-trailer">
                        <a href={movie.trailer_link}>
                            <img src={watchImg} alt="" />
                        </a>
                    </div>
                    <div class="heart-link">
                        <img src={likeImg} alt="" id="heart-img" 
                        onClick={() => handleFavoriteToggle(movie)}
                        />
                    </div>
                </div>
               );
})}</div>
        )
    }

    return (
        <>
            <Header />
            <main>
                <h1>Newly Released</h1>
                {renderMovieRealseType("Coming Soon")}
                <h1>Comming Soon</h1>
                {renderMovieRealseType("Newly Released")}
            </main>
            <Footer />
        </>
    )
}

export default Home