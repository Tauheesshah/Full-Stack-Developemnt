import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../Utils/API";

export const SingleProducts = () => {
  const { id } = useParams(); // ✅ get id from URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    apiData.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  });

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <img width="250" src={product.image} alt={product.title} />

      <h2>{product.title}</h2>
      <h3>Category: {product.category}</h3>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
};

