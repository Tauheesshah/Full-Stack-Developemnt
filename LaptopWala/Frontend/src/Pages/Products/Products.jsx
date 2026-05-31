import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../CSS/Product.css"
import ProductGrid from "../../Components/ProductGrid";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await axios.get(
          "https://laptopwala-backend-1.onrender.com/api/products"
        );

        setProducts(data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProducts();

  }, []);

  return (

    <div className="products-page">

      <h1>All Products</h1>

      <ProductGrid products={products} />

    </div>
  );
};

export default Products;