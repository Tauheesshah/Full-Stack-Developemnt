import React, { useState, useEffect } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import axios from "axios";

import { logout } from "../Redux_Slicer/authSlice";
import { setCart } from "../Redux_Slicer/cartSlice";

import {
  Search,
  MapPin,
  Heart,
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  PhoneCall,
} from "lucide-react";

import logo from "../Images/Logo3.png";
import "../CSS/Navbar.css";

const Navbar = () => {

  const { user } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [wishlist, setWishlist] = useState([]);

  const [location, setLocation] = useState({
    area: "Detecting...",
    city: "",
    state: "",
    pincode: "",
  });

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // =========================
  // CART FROM REDUX
  // =========================

const totalQty = useSelector((state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
);

  // =========================
  // WISHLIST FETCH
  // =========================

  const fetchWishlist = async () => {

    try {

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (!userInfo) {
        setWishlist([]);
        return;
      }

      const { data } = await axios.get(
        "https://laptopwala-backend-1.onrender.com/api/wishlist",
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
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
  }, []);

  useEffect(() => {
    window.addEventListener("wishlistUpdated", fetchWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", fetchWishlist);
    };
  }, []);

  // =========================
  // LOCATION
  // =========================

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      async (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {

          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );

          const address = response.data.address;

          setLocation({
            area:
              address.suburb ||
              address.city_district ||
              address.town ||
              address.village ||
              "Unknown Area",

            city:
              address.city ||
              address.town ||
              address.village ||
              "",

            state: address.state || "",
            pincode: address.postcode || "",
          });

        } catch (error) {
          console.log(error);
        }
      },
      (error) => console.log(error)
    );

  }, []);

  return (
    <div className="MainContainer">

      {/* TOP NAVBAR */}
      <div className="navbar">

        {/* LOGO */}
        <Link to="/">
          <div className="logo-section">
            <img src={logo} alt="Laptop Wala" className="logo-img" />
          </div>
        </Link>

        {/* SEARCH
        <div className="search-bar">
          <Search className="icon search-icon" />
          <input type="text" placeholder="Search Laptops & Accessories" />
        </div> */}

        {/* RIGHT */}
        <div className="nav-right">

          {/* LOCATION */}
          <div className="location">
            <MapPin size={18} />
            <div className="location-text">
              <span>{location.area}</span>
              <span>
                {location.city}, {location.state} - {location.pincode}
              </span>
            </div>
          </div>

          {/* CONTACT */}
          <Link to="/ContactUs">

            <div className="nav-item contact-icon">

              <PhoneCall size={19} />
              <span>Contact Us</span>
            </div>

          </Link>

          <Link to="/Wishlist">
              <div className="nav-item icon-badge">

                <Heart size={18} />

                <span>Wishlist</span>

                {wishlist.length > 0 && (
                  <span className="badge wishlist-badge">
                    {wishlist.length}
                  </span>
                )}

              </div>
            </Link>
              
            {/* CART */}
            <Link to="/cart">
              <div className="nav-item icon-badge">
              
                <ShoppingCart size={18} />
              
                <span>Cart</span>
              
                {totalQty > 0 && (
                  <span className="badge cart-badge">
                    {totalQty}
                  </span>
                )}

              </div>
            </Link>

          {/* USER */}
          <div className="user-dropdown">

            {user ? (
              <div className="user-box">          

              <span className="user-trigger">
                          
                <User
                  size={18}
                  strokeWidth={2.2}
                  className="user-icon"
                />
              
                {user.name}
                          
                <ChevronDown size={16} />
                          
              </span>         

                <div className="dropdown-menu">         

                  <Link to="/Profile">Profile</Link>          

                  <button onClick={handleLogout}>
                    Logout
                  </button>         

                </div>          

              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}          

          </div>

        </div>
      </div>

      {/* CATEGORY NAV */}
      <div
  className={`category-navbar ${showMenu ? "active" : ""}`}
>

  {/* MOBILE MENU BUTTON */}
  <div
    className="mobile-menu-btn"
    onClick={() => setShowMenu(!showMenu)}
  >
    <Menu size={22} />
    Menu
  </div>

  <div
    className="category-item"
    onClick={() => navigate("/")}
  >
    Home
  </div>

  <div
    className="category-item"
    onClick={() =>
      navigate("/products/category/refurbished")
    }
  >
    Refurbished Laptops
  </div>

  <div
    className="category-item"
    onClick={() =>
      navigate("/products/category/macbook")
    }
  >
    Apple Macbook
  </div>

  <div
    className="category-item"
    onClick={() =>
      navigate("/products/category/gaming")
    }
  >
    Gaming Laptops
  </div>

  <div
    className="category-item"
    onClick={() =>
      navigate("/products/category/bulk-orders")
    }
  >
    Bulk Orders
  </div>

</div>

    </div>
  );
};

export default Navbar;