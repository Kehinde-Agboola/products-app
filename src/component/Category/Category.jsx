import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillLaptopFill } from "react-icons/bs";
import {FiSmartphone} from "react-icons/fi";
import {GiFragrance} from "react-icons/gi";
import {FaOilCan} from "react-icons/fa";
import "./category.css"

const Category = () => {
  return (
    <div className="flex justify-center my-4">
        <NavLink to={'/products/Laptops'}>{BsFillLaptopFill}
        <h4>Laptops</h4>
        </NavLink>
        <NavLink to={'/products/SmartPhones'}>{FiSmartphone}\
        <h4>SmartPhones</h4>
        </NavLink>
        <NavLink to={'/products/Fragrances'}>{GiFragrance}
        <h4>Fragrances</h4>
        </NavLink>

        <div>{FaOilCan}
        <h4>Skin Care</h4>
        </div>
    </div>
  )
}

export default Category