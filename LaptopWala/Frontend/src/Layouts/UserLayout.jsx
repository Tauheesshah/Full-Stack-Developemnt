import React from "react";
import { Outlet } from "react-router-dom";

import "../CSS/UserLayout.css";
import Navbar from "../Pages/Navbar";
import WhatsAppButton from "../Components/WhatsAppButton";
import Footer from "../Pages/Footer";
import { useCartLoader } from "../Hooks/useCartLoader";

const UserLayout = () => {
  useCartLoader();

  return (
    <div className="app-container">

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <WhatsAppButton />
      <Footer />

    </div>
  );
};

export default UserLayout;