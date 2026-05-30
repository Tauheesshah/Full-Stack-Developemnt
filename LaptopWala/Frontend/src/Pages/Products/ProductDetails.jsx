import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import "../../CSS/ProductDetails.css";

const ProductDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================

  const [product, setProduct] =
    useState(null);

  const [mainImage, setMainImage] =
    useState("");

  const [isWishlisted,
    setIsWishlisted] =
    useState(false);

  // =========================
  // FETCH PRODUCT
  // =========================

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } = await axios.get(

          `http://localhost:5000/api/products/${id}`

        );

        setProduct(data);

        setMainImage(data.images[0]);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProduct();

  }, [id]);

  // =========================
  // CHECK WISHLIST
  // =========================

  useEffect(() => {

    const checkWishlist = async () => {

      try {

        const userInfo =
          JSON.parse(
            localStorage.getItem("userInfo")
          );

        if (!userInfo) return;

        const { data } = await axios.get(

          "http://localhost:5000/api/wishlist",

          {
            headers: {
              Authorization:
                `Bearer ${userInfo.token}`,
            },
          }
        );

        const exists =
          data.products.some(
            (item) =>
              item._id === id
          );

        setIsWishlisted(exists);

      } catch (error) {

        console.log(error);

      }
    };

    checkWishlist();

  }, [id]);

  // =========================
  // WISHLIST HANDLER
  // =========================

  const wishlistHandler = async () => {

    try {

      const userInfo =
        JSON.parse(
          localStorage.getItem("userInfo")
        );

      // LOGIN CHECK

      if (!userInfo) {

        alert("Please Login First");

        navigate("/login");

        return;
      }

      // =========================
      // REMOVE FROM WISHLIST
      // =========================

      if (isWishlisted) {

        await axios.delete(

          `http://localhost:5000/api/wishlist/${product._id}`,

          {
            headers: {
              Authorization:
                `Bearer ${userInfo.token}`,
            },
          }
        );

        setIsWishlisted(false);

        // UPDATE NAVBAR

        window.dispatchEvent(
          new Event("wishlistUpdated")
        );
      }

      // =========================
      // ADD TO WISHLIST
      // =========================

      else {

        await axios.post(

          "http://localhost:5000/api/wishlist",

          {
            productId: product._id,
          },

          {
            headers: {
              Authorization:
                `Bearer ${userInfo.token}`,
            },
          }
        );

        setIsWishlisted(true);

        // UPDATE NAVBAR

        window.dispatchEvent(
          new Event("wishlistUpdated")
        );
      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message
      );
    }
  };

  // =========================
  // LOADING
  // =========================

  if (!product)
    return <h1>Loading...</h1>;

  return (

    <div className="product-details-page">

      {/* ========================= */}
      {/* LEFT SIDE */}
      {/* ========================= */}

      <div className="product-left">

        {/* MAIN IMAGE */}

        <div className="main-image-container">

          <img
            src={mainImage}
            alt={product.title}
            className="main-image"
          />

        </div>

        {/* THUMBNAILS */}

        <div className="thumbnail-container">

          {product.images.map(
            (image, index) => (

              <img
                key={index}
                src={image}
                alt="thumbnail"
                className={`thumbnail ${
                  mainImage === image
                    ? "active-thumb"
                    : ""
                }`}
                onClick={() =>
                  setMainImage(image)
                }
              />

            )
          )}

        </div>

      </div>

      {/* ========================= */}
      {/* RIGHT SIDE */}
      {/* ========================= */}

      <div className="product-right">

        {/* TITLE */}

        <h1 className="product-title">

          {product.title}

        </h1>

        {/* BRAND */}

        <p className="brand-name">

          Brand : {product.brand}

        </p>

        {/* RATINGS */}

        <div className="rating-section">

          <Star
            size={18}
            fill="gold"
          />

          <span>
            {product.rating} Ratings
          </span>

          <span>
            ({product.numReviews} Reviews)
          </span>

        </div>

        {/* PRICE */}

        <div className="price-wrapper">

          <span className="main-price">

            ₹{product.price}

          </span>

          <span className="old-price-details">

            ₹{product.oldPrice}

          </span>

          <span className="discount-details">

            {product.discount}% OFF

          </span>

        </div>

        {/* STOCK */}

        <p className="stock-status">

          {product.stock > 0
            ? "In Stock"
            : "Out Of Stock"}

        </p>

        {/* DESCRIPTION */}

        <div className="description-section">

          <h3>Description</h3>

          <p>
            {product.description}
          </p>

        </div>

        {/* FEATURES */}

        <div className="features-section">

          <h3>Features</h3>

          <ul>

            {product.features.map(
              (feature, index) => (

                <li key={index}>
                  {feature}
                </li>

              )
            )}

          </ul>

        </div>

        {/* BUTTONS */}

        <div className="details-buttons">

          {/* CART */}

          <button className="cart-btn">

            <ShoppingCart size={20} />

            Add To Cart

          </button>

          {/* WISHLIST */}

          <button
            className={`wishlist-btn ${
              isWishlisted
                ? "wishlist-active-btn"
                : ""
            }`}
            onClick={wishlistHandler}
          >

            <Heart
              size={20}
              fill={
                isWishlisted
                  ? "red"
                  : "transparent"
              }
              color={
                isWishlisted
                  ? "red"
                  : "black"
              }
            />

            {
              isWishlisted
                ? "Wishlisted"
                : "Wishlist"
            }

          </button>

        </div>

        {/* SPECIFICATIONS */}

        <div className="specifications-section">

          <h2>Specifications</h2>

          <table>

            <tbody>

              <tr>
                <td>Model</td>
                <td>
                  {product.specifications.model}
                </td>
              </tr>

              <tr>
                <td>Processor</td>
                <td>
                  {product.specifications.processor}
                </td>
              </tr>

              <tr>
                <td>RAM</td>
                <td>
                  {product.specifications.ram}
                </td>
              </tr>

              <tr>
                <td>Storage</td>
                <td>
                  {product.specifications.storage}
                </td>
              </tr>

              <tr>
                <td>Display</td>
                <td>
                  {product.specifications.display}
                </td>
              </tr>

              <tr>
                <td>Graphics</td>
                <td>
                  {product.specifications.graphics}
                </td>
              </tr>

              <tr>
                <td>Operating System</td>
                <td>
                  {product.specifications.operatingSystem}
                </td>
              </tr>

              <tr>
                <td>Battery</td>
                <td>
                  {product.specifications.battery}
                </td>
              </tr>

              <tr>
                <td>Ports</td>
                <td>
                  {product.specifications.ports}
                </td>
              </tr>

              <tr>
                <td>Connectivity</td>
                <td>
                  {product.specifications.connectivity}
                </td>
              </tr>

              <tr>
                <td>Camera</td>
                <td>
                  {product.specifications.camera}
                </td>
              </tr>

              <tr>
                <td>Audio</td>
                <td>
                  {product.specifications.audio}
                </td>
              </tr>

              <tr>
                <td>Adapter</td>
                <td>
                  {product.specifications.adapter}
                </td>
              </tr>

              <tr>
                <td>Weight</td>
                <td>
                  {product.specifications.weight}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;