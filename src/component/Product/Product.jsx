import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./product.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css';
const Popular = () => {
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
        const check = localStorage.getItem('product');
        if(check){
        setProduct(JSON.parse(check))
        } else{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json()
        localStorage.setItem("popular", JSON.stringify(data.products))
        setProduct(data.products)
        console.log(data)
        }
    }
    useEffect(() => {
        getProduct();
    }, [])
    return(
        <>
        <div className="main__wrapper">
            <h3 className='font-bold text-white py-5'>Products Available</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '3rem',
                autoPlay: 'true'
            }}>
        {product.map((product, id) => (
            <SplideSlide key={id}>
                <Link to={'/details/' + product.id}>
                <div className="card">
                    <div className='img'><img src={product.thumbnail} alt={product.title}/></div>
                    <h4 className='text-center font-bold text-white'>{product.title}</h4>
                    </div>
                </Link>
            </SplideSlide>
        ))}
        </Splide>
        </div>
        </>
    )
}
export default Popular;