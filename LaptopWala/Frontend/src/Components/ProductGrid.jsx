import React from "react";

import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  setWishlist,
}) => {

  return (

    <div className="product-grid">

      {products.map((product) => (

        <ProductCard
          key={product._id}
          product={product}
          setWishlist={setWishlist}
        />

      ))}

    </div>
  );
};

export default ProductGrid;