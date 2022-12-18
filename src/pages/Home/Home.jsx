import React from 'react'
import Category from "../../component/Category/Category"
import Product from "../../component/Product/Product"
const Home = () => {
    return(
        <>
        <Category/>
        <div className="App">
        <Product/>
        </div>
        </>
    )
}
export default Home;