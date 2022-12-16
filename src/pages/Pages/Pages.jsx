import React from 'react'
import Home from "../Home/Home"
import Products from '../Products/Products'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
const Pages = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />   
        <Route path='/products' element={<Products/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Pages;