import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../reducks/movies/selector'
import watchImg from '../assets/cinema-img/trailer.png'
import Header from '../components/common/Header'

const Category = () => {
    const movies = useSelector(getMovies)
    console.log(movies)


    const renderMoviesByCategory = (category) => {
        const filteredMovies = movies.filter (
            (movie) => movie.category_id === category
        )
        return (
            <div className='movies-section'>{filteredMovies && filteredMovies.map((movie, index) => (
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
                </div>
            ))}</div> 
        )
    }

  return (
   
    <>
    <Header/>
    <main>
        <h1>Action</h1>
        {renderMoviesByCategory(1)}
        <h1>Drama</h1>
        {renderMoviesByCategory(3)}
        <h1>Horror</h1>
        {renderMoviesByCategory(5)}
        <h1>Comedy</h1>
        {renderMoviesByCategory(6)}
    </main>
    </>
  )
}

export default Category