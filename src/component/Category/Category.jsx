import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillLaptopFill } from "react-icons/bs";
import {FiSmartphone} from "react-icons/fi";
import {GiFragrance} from "react-icons/gi";
import {FaOilCan} from "react-icons/fa";
import "./category.css"

const Category = () => {
  return (
    <div className="flex justify-center my-4 gap-[2rem]">
        <NavLink to={'/products/Laptops'}>
        <h4>Laptops</h4>
        {BsFillLaptopFill}
        </NavLink>
        <NavLink to={'/products/SmartPhones'}>
        <h4>SmartPhones</h4>
        {FiSmartphone}
        </NavLink>
        <NavLink to={'/products/Fragrances'}>
        <h4>Fragrances</h4>
        {GiFragrance}
        </NavLink>
        <NavLink to={'/products/SkinCare'}>
        {FaOilCan} 
        <h4>Skin Care</h4>
        </NavLink>
    </div>
  )
}

export default Category