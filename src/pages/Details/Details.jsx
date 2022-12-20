import React, { useState, useEffect, useNavigate } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const [details, setDetails] = useState({})
    let params = useParams()
    const navigate = useNavigate();
    // const goHomeBtn = () => {
    //     navigate(-1)
    // }
    // const goHomeBtn = () => navigate("/")
    const fetchDetails = async () =>{
        const res = await fetch(`https://dummyjson.com/products/${params.name}`)
        const data = await res.json()
        setDetails(data)
    }
    useEffect(() =>{
        fetchDetails()
    }, [params.name])
  return (
    <>
       <div>
       <button className='px-8 py-2 text-white text-center bg-slate-700 m-10'
            onClick={() => navigate(-1)}
            >
            <i class="fa fa-arrow-left"></i> Back
            </button>
        <div>
        <div className='container flex max-w-[1000px] mx-auto justify-center gap-[2rem] p-8 pl-0 pr-0 '>
            <div className="details__img self-center "> <img src={details.thumbnail} alt="" /> </div>
            <div className='p-8 pl-0'>
                <h2 className='font-bold text-2xl mb-3'> {details.title}</h2>
                <p>{details.description}</p>
                <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
                    <p>Price: $<span>{details.price}</span></p>
                    <p>discount: <span>{details.discountPercentage}%</span></p>
                    <p>rating: <span>{details.rating}</span></p>
                    <p>stock: <span>{details.stock}</span></p>
                    <p>brand: <span>{details.brand}</span></p>
                    <p>category: <span>{details.category}</span></p>
                </div>
            </div>
        </div>
        </div> 
        </div>
    </>
  )
}

export default Details