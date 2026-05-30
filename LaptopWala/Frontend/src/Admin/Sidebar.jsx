import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  PlusSquare,
  ShoppingBag,
  Users,
  MessageSquare,
  LogOut,
} from "lucide-react";

import "../CSS/Admin.css";

const Sidebar = () => {

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2 className="logo">
        Admin Panel
      </h2>

      <div className="sidebar-links">

        <Link to="/admin/dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link to="/admin/add-product">
          <PlusSquare size={20} />
          Add Product
        </Link>

        <Link to="/admin/products">
          <ShoppingBag size={20} />
          Products
        </Link>

        <Link to="/admin/users">
          <Users size={20} />
          Users
        </Link>

        <Link to="/admin/messages">
          <MessageSquare size={20} />
          Messages
        </Link>

      </div>

      <button onClick={logoutHandler}>
        <LogOut size={20} />
        Logout
      </button>

    </div>
  );
};

export default Sidebar;