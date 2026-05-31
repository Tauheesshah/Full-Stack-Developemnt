import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "../../Redux_Slicer/cartSlice";
import "../../CSS/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState(null);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  // =========================
  // FETCH CART (SYNC BOTH UI + REDUX)
  // =========================
  const fetchCart = async () => {
    try {
      if (!user?.token) return;

      const { data } = await axios.get(
        "https://laptopwala-backend-1.onrender.com/api/cart/my-cart",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setCartData(data);        // UI state
      dispatch(setCart(data));  // Redux badge sync
    } catch (err) {
      console.log("Cart fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // =========================
  // INCREMENT
  // =========================
  const increment = async (id) => {
    await axios.post(
      "https://laptopwala-backend-1.onrender.com/api/cart/add",
      { productId: id },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    fetchCart();
  };

  // =========================
  // DECREMENT
  // =========================
  const decrement = async (id) => {
    await axios.put(
      "https://laptopwala-backend-1.onrender.com/api/cart/decrement",
      { productId: id },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    fetchCart();
  };

  // =========================
  // TOTAL CALCULATION
  // =========================
  const totalQty =
    cartData?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const totalPrice =
    cartData?.items?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ) || 0;

  return (
    <div className="cart-page">

      <h1 className="cart-title">My Cart</h1>

      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-items">

          {cartData?.items?.length > 0 ? (
            cartData.items.map((item) => (
              <div className="cart-card" key={item._id}>

                <img
                  src={item.product.images?.[0]}
                  alt=""
                  className="cart-img"
                />

                <div className="cart-details">

                  <h3>{item.product.title}</h3>
                  <p>{item.product.brand}</p>
                  <p>₹{item.product.price}</p>

                  <div className="qty-box">

                    <button onClick={() => decrement(item.product._id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increment(item.product._id)}>
                      +
                    </button>

                  </div>

                </div>

              </div>
            ))
          ) : (
            <h3>Your Cart is Empty</h3>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="cart-summary">

          <h2>Price Details</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartData?.items?.length || 0}</span>
          </div>

          <div className="summary-row">
            <span>Total Quantity</span>
            <span>{totalQty}</span>
          </div>

          <div className="summary-row total">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="checkout-btn">
            Proceed To Payment
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;