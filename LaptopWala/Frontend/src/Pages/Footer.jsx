// Footer.jsx

import React from "react";
import  {Link} from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../Images/Logo3.png";

import "../CSS/Footer.css";

const Footer = () => {

  return (

    <footer className="footer">

      {/* TOP SECTION */}

      <div className="footer-top">

        {/* LEFT */}

        <div className="footer-left">

          <img
            src={logo}
            alt="Laptop Wala"
            className="footer-logo"
          />

          <p className="footer-text">

            Premium Refurbished Laptops,
            Gaming Laptops, Business
            Laptops & Accessories
            delivered across India.

          </p>

        </div>

        {/* MIDDLE */}

        <div className="footer-middle">

  <h3>Legal Policies</h3>

  <Link to="/return-policy">
    <p>Return & Cancellation Policy</p>
  </Link>

  <Link to="/replacement-policy">
    <p>Replacement Policy</p>
  </Link>

  <Link to="/shipping-policy">
    <p>Shipping Policy</p>
  </Link>

  <Link to="/warranty-policy">
    <p>Warranty Policy</p>
  </Link>

</div>

        {/* RIGHT */}

        <div className="footer-right">

          <p className="footer-small-text">

            Get recommendations,
            tips, updates and more.

          </p>

          <h2 className="footer-heading">

            Stay Connected

          </h2>

          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <FaTwitter />

            <FaFacebookF />

            <FaInstagram />

            <FaWhatsapp />

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>

          Copyright © LaptopWala
          2025 All rights reserved.

        </p>

        <span className="developer">

          Developed By Shah Tauheed

        </span>

      </div>

    </footer>

  );
};

export default Footer;