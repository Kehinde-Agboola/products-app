import React from 'react'
import Home from "../Home/Home"
import Products from '../Products/Products'
import Details from '../Details/Details'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
const Pages = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />   
        <Route path='/products/:type' element={<Products/>}/>
        <Route path='/details/:name' element={<Details/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Pages;