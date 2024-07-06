import React from 'react'
import { FaBookmark } from 'react-icons/fa'

const BookMark = ({addToBookMark, movie}) => {
  return (
    <div>
      <div onClick={() => addToBookMark(movie.id)} className='bookmark-svg'>
            <FaBookmark className={movie.bookmark?'bookmarked-svg':null}/>
            {movie.bookmark ? null : <div className='book-add'>+</div>}
            {movie.bookmark ? <div className='book-remove'>&#10003;</div>: null}
          </div>
    </div>
  )
}

export default BookMark
