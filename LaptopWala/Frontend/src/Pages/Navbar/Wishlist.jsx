import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import ProductGrid
from "../../Components/ProductGrid";

const Wishlist = () => {

  const [wishlist, setWishlist] =
    useState([]);

  // =========================
  // FETCH WISHLIST
  // =========================

  const fetchWishlist = async () => {

    try {

      const userInfo =
        JSON.parse(
          localStorage.getItem("userInfo")
        );

      const { data } =
        await axios.get(
          "https://laptopwala-backend-1.onrender.com/api/wishlist",
          {
            headers: {
              Authorization:
                `Bearer ${userInfo.token}`,
            },
          }
        );

      setWishlist(data.products);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

  fetchWishlist();

  const handleUpdate = () => {
    fetchWishlist();
  };

  window.addEventListener("wishlistUpdated", handleUpdate);

  return () => {
    window.removeEventListener("wishlistUpdated", handleUpdate);
  };

}, []);

  return (

    <div className="products-page">

      <h1>Wishlist</h1>

      <ProductGrid
        products={wishlist}
        setWishlist={setWishlist}
      />

    </div>
  );
};

export default Wishlist;