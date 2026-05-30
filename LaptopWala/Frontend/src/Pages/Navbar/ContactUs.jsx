import React, { useState } from "react";
import axios from "axios";

import "../../CSS/ContactUs.css"

const ContactUs = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [formData, setFormData] = useState({
    name: userInfo?.user?.name || "",
    email: userInfo?.user?.email || "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/contact/send",
        formData,
        config
      );

      alert(data.message);

      setFormData({
        ...formData,
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="contact-page">

  <div className="contact-header">
    <h1>CONTACT US</h1>
  </div>

  <div className="contact-info-section">
    <h2>Get in Touch</h2>

    <div className="contact-info-grid">

      <div className="contact-card">
        <h3>Address</h3>
        <p>Mumbai, India</p>
      </div>

      <div className="contact-card">
        <h3>Phone</h3>
        <p>+91 9876543210</p>
      </div>

      <div className="contact-card">
        <h3>Email</h3>
        <p>support@laptopwala.com</p>
      </div>

    </div>
  </div>

  <div className="contact-form-wrapper">

    <form className="contact-form" onSubmit={SubmitHandler}>

      <h2>Send Us a Message</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={changeHandler}
        placeholder="Enter Your Name"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Enter Your Email"
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={changeHandler}
        placeholder="Enter Subject"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={changeHandler}
        placeholder="Write Your Message"
      ></textarea>

      <button type="submit">
        Send Message
      </button>

    </form>

  </div>
</div>
  );
};

export default ContactUs;