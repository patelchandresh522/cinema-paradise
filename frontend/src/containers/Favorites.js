import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../reducks/favorites/selector'
import { getMovies } from '../reducks/movies/selector'
import watchImg from '../assets/cinema-img/trailer.png'
import likeImg from '../assets/cinema-img/heart.svg'
import { toggleFavoritesAction } from '../reducks/favorites/actions'

const Favorites = () => {


    const favorites = useSelector(getFavorites)
    const movies = useSelector(getMovies)

    const disptach = useDispatch();

    const favoriteMovies = favorites.map((favoriteId) => {
        return movies.find((movie) => movie.id === favoriteId)
    })

    const toggleFavorite = (id) => {
        disptach(toggleFavoritesAction(id))
    }

  return (
    <div>
        <h2>Favorites</h2>
        {favoriteMovies.map((favoriteMovie,index) => (
           <div className='movie-div' key={index}>
           <div className="image">
               <img src={favoriteMovie.image} alt="pic" />
           </div>
           <div className="movie-info">
               <p>{favoriteMovie.title}</p>
               <p>TV-MA | Action, Crime</p>
           </div>
           <div class="movie-trailer">
               <a href={favoriteMovie.trailer_link}>
                   <img src={watchImg} alt="" />
               </a>
           </div>
           <div class="heart-link">
               <img src={likeImg} alt="" id="heart-img" 
               onClick={() => toggleFavorite(favoriteMovie.id)}
               style={{filter: favorites.includes(favoriteMovie.id ? "brightness(0)":"")}}
               />
           </div>
       </div> 
        ))}
    </div>
  )
}

export default Favorites