import React, { useEffect, useState } from "react";
import {
  FaShippingFast,
  FaCreditCard,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";

import "../CSS/Home.css";
import BrandSection from "../Components/BrandSection";
import img1 from "../Posters/Modified1.png";
import img2 from "../Posters/Modified2.png";
import Products from "./Products/Products";



const images = [img1, img2];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      
      {/* Carousel */}
      <div className="carousel">

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt="slide" className="carousel-image" />
          ))}
        </div>

        {/* Left Arrow */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        {/* Right Arrow */}
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="services">

        <div className="service-box">
          <FaShippingFast className="service-icon" />
          <div>
            <h3>Free Pan India Delivery</h3>
            <p>Wherever you are, Laptop-Wala delivers .</p>
          </div>
        </div>

        <div className="service-box">
          <FaCreditCard className="service-icon" />
          <div>
            <h3>Secure Payment</h3>
            <p>Pay with popular & secure payment Mode.</p>
          </div>
        </div>

        <div className="service-box">
          <FaBoxOpen className="service-icon" />
          <div>
            <h3>7-days Return Policy</h3>
            <p>Packages must be returned within 7 days .</p>
          </div>
        </div>

        <div className="service-box">
          <FaHeadset className="service-icon" />
          <div>
            <h3>24/7 Help Center</h3>
            <p>We'll respond to you within 24 hours .</p>
          </div>
        </div>

      </div>

      <BrandSection />
      <Products />
    </div>

    
  );
};

export default Home;