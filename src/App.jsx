import React from 'react'
import Header from './Header'
import Content from './Content'
import { DataProvider } from './context/DataContext'
import { Routes, Route } from 'react-router-dom'
import WatchOption from './WatchOption'
import WatchList from './WatchList'

const App = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Content />}/>
          <Route path='/watchoption/:id' element={<WatchOption/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
        </Routes>
      </DataProvider>
    </>
  )
}

export default App
