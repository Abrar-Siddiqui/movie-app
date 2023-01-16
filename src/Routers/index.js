import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Container/Home'
import About from '../Container/About'
import Movies from '../Container/Movies'
import TvSerial from '../Container/TvSerials'
import Contact from '../Container/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Search from '../Container/Search'
import Details from '../Container/Details'

const Routers = () => {
  return (
    <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/tvserial' element={<TvSerial />} />
                <Route path='/search' element={<Search/>}/>
                <Route path='/contact' element={<Contact />} />
                <Route path='/detail/:movieid/:mediyatype' element={<Details />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default Routers