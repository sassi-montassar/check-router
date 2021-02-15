import React from 'react'
import MoviesCard from '../MovieCard/MovieCard'
import '../MovieCard/movieCard.css'
import AddMovie from '../AddMovie/AddMovie'

const MoviesList = ({movies, AddNewMovie}) => {
    return (
        <div className="map">
           {movies.map((el, i) => ( <MoviesCard el={el} key={i} /> ))}
           <AddMovie AddNewMovie={AddNewMovie}  />  
        </div>
    )
}

export default MoviesList
