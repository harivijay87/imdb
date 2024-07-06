import React, { useContext } from 'react'
import './CSS/header.css'
import { FaSearch, FaHome} from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa6'
import DataContext from './context/DataContext'
import { Link } from 'react-router-dom'


const Header = () => {
  const {search, setSearch} = useContext(DataContext);
  return (
        <header>
          <div className='left-section'>
            <div className='ham-menu'>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className='app-logo'>
              <button>IMDb</button>
            </div>
          </div>
          
          <div className='search-box'>
            <input
              type="text"
              placeholder='Search IMDb'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to='/' style={{textDecoration:'none'}}>
              <button>
                <FaHome/>
              </button>
            </Link>
          </div>

          <div className='right-section'>
            <Link to='/watchlist' style={{textDecoration:'none'}}><button className='watchlist'><FaBookmark />WatchList</button></Link>
            <button className='sign'>Sign In</button>
          </div>
        </header>
  )
}

export default Header
