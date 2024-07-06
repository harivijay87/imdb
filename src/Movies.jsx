import React, { useEffect, useState } from 'react'
import './CSS/movies.css'
import { FaStar, FaPlay} from 'react-icons/fa'
//import MoviesList from './data/MoviesList'
import { Link } from 'react-router-dom'
import BookMark from './BookMark'


const Movies = ({list, addToBookMark, addStar}) => {
  
  return (
    <div className='movies-grid'>
      {list.map((movie) => (
        <div className='movie-container' key={movie.id}>      
          <BookMark addToBookMark = {addToBookMark} movie ={movie}/>
          <div className='image'>
            <img src={movie.image} alt="" />
          </div>
          <div className='rating'>
            <div className='rated'><FaStar/><span className='rate-color'>{movie.rating}</span></div>
            <div className='unrated' onClick={() => addStar(movie.id)}><FaStar className={movie.starRating ? 'rated-color':'unrated-color'}/></div>
          </div>
          <div className='movie-name'>{(movie.name).length < 20 ? movie.name : `${movie.name.slice(0,16)}....`}</div>
          <div className='buttons'>
            <Link to={`/imdb/watchoption/${movie.id}`} style={{textDecoration: "none"}}>
              <button className='watch-button'>Watch options</button>
            </Link>
            <Link to={movie.trailer} style={{textDecoration: "none"}} target='_blank' rel='noopener noreferrer'>
              <button className='trailer-button'><FaPlay/>Trailer</button>
            </Link>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Movies
