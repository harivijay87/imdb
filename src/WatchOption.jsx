import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import MoviesList from './data/MoviesList';
import './CSS/watchoption.css'
import Movies from './Movies';
import { FaStar, FaBookmark } from 'react-icons/fa';
import BookMark from './BookMark';
import DataContext from './context/DataContext';


const WatchOption = () => {
  const {addToBookMark, movieList, addStar} = useContext(DataContext)
  const {id} = useParams();
  const movie = movieList.filter(movie => movie.id === Number(id))
  return (
      <>
        {movie.map(movie => (
          <div key={movie.id} className='background'>
            <div className='watch-container'>
              <div className='top'>
                <div className={(movie.name).length > 19 ? 'len-name' : 'name'}>{movie.name}</div>
                <div className='details'>{movie.watchOption.year} &#183; {movie.watchOption.runTime} &#183; {movie.watchOption.rated} </div>
              </div>
              <div className='middle'>
                <div className='image'>
                  <img src={movie.image}/>
                  <BookMark addToBookMark={addToBookMark} movie={movie}/>
                </div>
                <div className='right'>
                  <div className='genre'>
                   {movie.watchOption.genre.one 
                    ? <div>{movie.watchOption.genre.one}</div> 
                    : null
                   } 
                   {movie.watchOption.genre.two 
                    ? <div>{movie.watchOption.genre.two}</div> 
                    : null
                   } 
                   {movie.watchOption.genre.three
                    ? <div>{movie.watchOption.genre.three}</div> 
                    : null
                   } 
                   
                  </div>
                  <div className='story'>
                    {movie.watchOption.story}
                  </div>
                  <div className='crew'>
                    <div className='director-row'>
                      <div className='director'>{movie.type === 'movie' ? 'Director' : (movie.watchOption.creator.two) ? 'Creators' : 'Creator'}</div>

                      {movie.type === 'movie' 
                        ? ((movie.watchOption.director) 
                          ? <div className='director-name'>{movie.watchOption.director}</div>
                          : null) 
                        : ((movie.watchOption.creator) 
                          ? <div className='director-name'>
                                  {(movie.watchOption.creator.one ? <div>{movie.watchOption.creator.one}</div> : null)} 
                                  {(movie.watchOption.creator.two ? <div>{movie.watchOption.creator.two}</div> : null)}
                                  {(movie.watchOption.creator.three ? <div>{movie.watchOption.creator.three}</div> : null)}
                            </div>
                          : null)
                      }
                    </div>
                    <div className='stars-row'>
                      <div className='stars'>Stars</div>
                      <div className='stars-name'>{movie.watchOption.Stars}</div>
                    </div>
                  </div>
                  <div className='rating'>
                    <div className='rating-title'>IMDb Rating</div>
                    <div className='star'>
                      <FaStar/><span className='rated-value'>{movie.rating}<span className='overall'>/10</span></span>
                    </div>
                    <div className='unrated' onClick={() => addStar(movie.id)}><FaStar className={movie.starRating ? 'rated-color':'unrated-color'}/></div>
                  </div>
                  <div className='ott'>
                    <div className='ott-title'>STREAMING</div>
                    <div className='ott-image'>
                      <Link to={`${movie.watchOption.platformLink}`} target='_blank' rel='noopener noreferrer'>
                        <img src={movie.watchOption.ottImage} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bottom'></div>
            </div>
          </div>
        ))}
      </>
  )
}

export default WatchOption
