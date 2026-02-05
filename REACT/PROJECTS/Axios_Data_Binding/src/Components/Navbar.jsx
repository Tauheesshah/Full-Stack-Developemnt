import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../Pages/Products";

 export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
        background: "#222",
        color: "white",
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/users" style={linkStyle}>Users</Link>
      <Link to="Products" style={linkStyle}>Products</Link>
      <Link to="/cart" style={linkStyle}>Cart</Link>
      <Link to="/auth" style={linkStyle}>Auth</Link>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};
