import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import Library from './pages/Library'

function Music() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Music