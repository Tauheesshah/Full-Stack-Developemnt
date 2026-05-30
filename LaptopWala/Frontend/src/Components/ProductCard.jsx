import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart, Info, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../CSS/ProductCard.css"




const ProductCard = ({ product, setWishlist }) => {

  const navigate = useNavigate();

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cart, setCart] = useState(null);

  const user = JSON.parse(localStorage.getItem("userInfo") || "null");

  // =========================
  // FETCH CART (BACKEND)
  // =========================
  const fetchCart = async () => {
    if (!user) return;

    const { data } = await axios.get(
      "http://localhost:5000/api/cart/my-cart",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    setCart(data);
  };

  useEffect(() => {
    fetchCart();

    window.addEventListener("cartUpdated", fetchCart);

    return () =>
      window.removeEventListener("cartUpdated", fetchCart);
  }, []);

  // =========================
  // CHECK WISHLIST
  // =========================
  useEffect(() => {
    const checkWishlist = async () => {
      try {
        if (!user) return;

        const { data } = await axios.get(
          "http://localhost:5000/api/wishlist",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const exists = data.products.some(
          (item) => item._id === product._id
        );

        setIsWishlisted(exists);
      } catch (error) {
        console.log(error);
      }
    };

    checkWishlist();
  }, [product._id]);

  // =========================
  // WISHLIST TOGGLE
  // =========================
  const wishlistHandler = async () => {
    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    if (isWishlisted) {
      await axios.delete(
        `http://localhost:5000/api/wishlist/${product._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setIsWishlisted(false);
      window.dispatchEvent(new Event("wishlistUpdated"));

    } else {
      await axios.post(
        "http://localhost:5000/api/wishlist",
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setIsWishlisted(true);
      window.dispatchEvent(new Event("wishlistUpdated"));
    }
  };

  // =========================
  // ADD TO CART (+1)
  // =========================
  const addToCart = async (productId) => {
    if (!user) return alert("Login required");

    await axios.post(
      "http://localhost:5000/api/cart/add",
      { productId },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // =========================
  // DECREMENT (-1)
  // =========================
  const decreaseCart = async (productId) => {
    if (!user) return;

    await axios.put(
      "http://localhost:5000/api/cart/decrement",
      { productId },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // =========================
  // CHECK IF PRODUCT IN CART
  // =========================
  const cartItem = cart?.items?.find(
    (i) => i.product._id === product._id
  );

  return (
    <div className="product-card">

      {/* IMAGE */}
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image"
        />

        <div className="hover-icons">

          <button onClick={() => navigate(`/product/${product._id}`)}>
            <Info size={18} />
          </button>

          <button
            onClick={wishlistHandler}
            className={isWishlisted ? "wishlist-active" : ""}
          >
            <Heart
              size={18}
              fill={isWishlisted ? "red" : "transparent"}
              color={isWishlisted ? "red" : "black"}
            />
          </button>

        </div>
      </div>

      {/* CONTENT */}
      <div className="product-content">

        <h3>{product.title}</h3>
        <p className="brand">{product.brand}</p>

        <div className="price-section">
          <span className="price">₹{product.price}</span>
          <span className="old-price">₹{product.oldPrice}</span>
          <span className="discount">{product.discount}% OFF</span>
        </div>

        {/* CART BUTTON LOGIC */}
        {cartItem ? (

          <div className="qty-box">

            <button onClick={() => decreaseCart(product._id)}>
              -
            </button>

            <span>{cartItem.quantity}</span>

            <button onClick={() => addToCart(product._id)}>
              +
            </button>

          </div>

        ) : (

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product._id)}
          >
            <ShoppingCart size={18} />
            Add To Cart
          </button>

        )}

      </div>
    </div>
  );
};

export default ProductCard;