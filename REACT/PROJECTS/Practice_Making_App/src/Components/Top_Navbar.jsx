import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaEnvelope,
  FaBell,
  FaPowerOff,
  FaThLarge
} from "react-icons/fa";

import "../CSS/Top_Navbar.css";

export const Top_Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div className="navbar Top_Navbar">

      {/* LEFT SECTION */}
      <div className="nav-left">
        {/* <FaBars className="icon" /> */}

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search projects" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">
        {user ? (
            <div className="profile">
              <img src="https://i.pravatar.cc/40" alt="profile" />
              <span className="username">👋 {user.username}</span>
              {/* <button onClick={handleLogout} className="logout-btn">
                Logout
              </button> */}
            </div>
          ) : (
            <span onClick={() => navigate("/login")} className="login-link">
              LOGIN / SIGNUP
            </span>
          )}

      {/* <div className="profile" onClick={() => navigate("/login")}>
        <img src="https://i.pravatar.cc/40" alt="profile" />
        <span>LOGIN / SIGNUP</span>
      </div> */}

        <FaEnvelope className="icon" />
        <FaBell className="icon" />
        <FaPowerOff className="icon" />
        <FaThLarge className="icon" />
      </div>

    </div>
  );
};

