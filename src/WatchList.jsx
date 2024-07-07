import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { FaStar, FaBookmark, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Movies from './Movies';
import { GrEmptyCircle } from 'react-icons/gr';



const WatchList = () => {
  const {watchList, addToBookMark, addStar} = useContext(DataContext)
  return (
    <div className='container'>
      {(watchList).length
       ? <div className='movie-list'>
            <div className='title'>Your Watch List</div>
            {/* <div className='movies-grid'>
              {watchList.map((movie) => (
                <div className='movie-container' key={movie.id}>
                  <div className='bookmark-svg' onClick={() => addToBookMark(movie.id)}>
                    <FaBookmark className={movie.bookmark?'bookmarked-svg':null}/>
                    {movie.bookmark ? null : <div className='book-add'>+</div>}
                    {movie.bookmark ? <div className='book-remove'>&#10003;</div>: null}
                  </div>
                  <div className='image'>
                    <img src={movie.image} alt="" />
                  </div>
                  <div className='rating'>
                    <div className='rated'><FaStar/><span className='rate-color'>{movie.rating}</span></div>
                    <div className='unrated'><FaStar className={movie.starRating ? 'rated-color':'unrated-color'}/></div>
                  </div>
                  <div className='movie-name'>{(movie.name).length < 20 ? movie.name : `${movie.name.slice(0,16)}....`}</div>
                  <div className='buttons'>
                    <Link to={`/watchoption/${movie.id}`} style={{textDecoration: "none"}}>
                      <button className='watch-button'>Watch options</button>
                    </Link>
                    <Link to={movie.trailer} style={{textDecoration: "none"}} target='_blank' rel='noopener noreferrer'>
                      <button className='trailer-button'><FaPlay/>Trailer</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div> */}
            <Movies list ={watchList} addToBookMark={addToBookMark} addStar = {addStar}/>
          </div>
        : <div className='empty-list'><GrEmptyCircle/></div>  }
    </div>
    
  )
}

export default WatchList
