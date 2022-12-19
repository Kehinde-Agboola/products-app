import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {
    const [details, setDetails] = useState({})
    let params = useParams()

    const fetchDetails = async () =>{
        const res = await fetch(`https://dummyjson.com/products.${params.name}`)
        const data = await res.json()
        setDetails(data)
    }
    useEffect(() =>{
        fetchDetails()
    }, [params.name])
  return (
    <>
        {details.title}
        {details.description}
    </>
  )
}

export default Details