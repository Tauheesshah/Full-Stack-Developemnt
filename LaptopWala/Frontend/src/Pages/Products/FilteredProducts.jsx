import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import ProductGrid
from "../../Components/ProductGrid";

import "../../CSS/FilteredProducts.css";

const FilteredProducts = () => {

  const { type, value } =
    useParams();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          let url = "";

          // BRAND FILTER

          if (type === "brand") {

            url =
              `http://localhost:5000/api/products/brand/${value}`;
          }

          // CATEGORY FILTER

          if (type === "category") {

            url =
              `http://localhost:5000/api/products/category/${value}`;
          }

          const { data } =
            await axios.get(url);

          setProducts(data);

          setLoading(false);

        } catch (error) {

          console.log(error);

          setLoading(false);
        }
      };

    fetchProducts();

  }, [type, value]);

  if (loading)
    return <h1>Loading...</h1>;

  return (

    <div className="filtered-page">

      <h1 className="filtered-title">

        {value} Products

      </h1>

      <ProductGrid
        products={products}
      />

    </div>
  );
};

export default FilteredProducts;