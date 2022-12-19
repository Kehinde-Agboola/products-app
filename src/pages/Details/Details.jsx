import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const [details, setDetails] = useState({})
    let params = useParams()

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
         {details.map((product, id) => (
                <div className="card" key={id}>
                    <div className='img'><img src={product.thumbnail} alt={product.title}/>
                    <h4 className='text-center font-bold text-white'>{product.title}</h4>
                    <p className='text-center font-bold text-white'>{product.description}</p>
                    </div>
                </div>
         ))}
    </>
  )
}

export default Details