import React from "react";

import "../CSS/BrandSection.css";

import {
  useNavigate,
} from "react-router-dom";

import dell from "../Images/Brands/Dell.png";
import hp from "../Images/Brands/HP.png";
import lenovo from "../Images/Brands/Lenovo.png";
import asus from "../Images/Brands/Asus.png";
import acer from "../Images/Brands/Acer.png";

const brands = [

  {
    image: dell,
    name: "Dell",
  },

  {
    image: hp,
    name: "HP",
  },

  {
    image: lenovo,
    name: "Lenovo",
  },

  {
    image: asus,
    name: "Asus",
  },

  {
    image: acer,
    name: "Acer",
  },
];

const BrandSection = () => {

  const navigate =
    useNavigate();

  return (

    <div className="brand-section">

      <h2 className="brand-title">

        Shop By Brand

      </h2>

      <div className="brand-container">

        {brands.map((brand, index) => (

          <div
            className="brand-card"
            key={index}

            onClick={() =>

              navigate(

                `/products/brand/${brand.name}`

              )
            }
          >

            <img
              src={brand.image}
              alt={brand.name}
              className="brand-image"
            />

          </div>
        ))}

      </div>

    </div>
  );
};

export default BrandSection;