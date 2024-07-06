import { createContext, useEffect, useState } from "react";
import MoviesList from "../data/MoviesList";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
  const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem('movieList')) || MoviesList)
  const [list, setList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [underline, setUnderline] = useState('movie');
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [option, setOption] = useState('movie')


  useEffect(() => {
    select()
  }, [])
  useEffect(()=> {
    select()
  }, [option, movieList])
  const selectOption = (option1) => {
    setOption(option1)
  }
  const select = () => {
    const movies = movieList.filter(movie => movie.type === option)
    setList(movies)
    setUnderline(option)
  }

  const saveToStorage = (value) => {
    localStorage.setItem('movieList', JSON.stringify(value))
  }

  useEffect(() => {
    const createWatchList = () => {
      const newWatchList = movieList.filter((movie) => movie.bookmark)
      setWatchList(newWatchList)
    }
    createWatchList();
  },[movieList])
  
  const addToBookMark = (id) => {
    const newList = movieList.map(list => list.id === id ? {...list, bookmark:!list.bookmark} : list)
    setMovieList(newList);
    saveToStorage(newList)
  }
  const addStar = (id) => {
    const newList = movieList.map(list => list.id === id ? {...list, starRating:!list.starRating} : list)
    setMovieList(newList);
    saveToStorage(newList)
  }
  
  useEffect(()=> {
    const filteredResults = list.filter((list) => ((list.name).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  },[search,list])
  

  return(
    <DataContext.Provider value = {{
      list:searchResults, setList, watchList, setWatchList,
      selectOption, underline,
      search, setSearch, addToBookMark, movieList, addStar
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext