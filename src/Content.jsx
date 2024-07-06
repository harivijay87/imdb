import React, { useContext } from 'react'
import './CSS/content.css'
import Movies from './Movies'
import DataContext from './context/DataContext'

const Content = () => {
  const {list, selectOption, underline, addToBookMark, addStar} = useContext(DataContext)
  return (
    <div className='container'>
      <div className='movie-list'>
        <div className='title'>Explor what's streaming</div>
        <div className='mov-show'>
          <div className={`movies ${underline === 'movie' ? 'underline':null}`}  onClick={() => selectOption('movie')}>MOVIES</div>
          <div className={`shows ${underline === 'tvshow' ? 'underline':null}`}  onClick={() => selectOption('tvshow')}>TV SHOWS</div>
        </div>
        <Movies 
          list = {list}
          addToBookMark = {addToBookMark}
          addStar = {addStar}
        />
      </div>
    </div>
  )
}

export default Content
