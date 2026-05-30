import React from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../Admin/Sidebar.jsx";

import "../CSS/Admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;