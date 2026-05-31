import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post(
        "https://laptopwala-backend-1.onrender.com/api/auth/signup",
        { name, email, password }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ERROR */}
          {error && <span className="error-text">{error}</span>}

          {/* SUCCESS */}
          {success && <span className="success-text">{success}</span>}

          <button type="submit">Signup</button>

        </form>

        <div className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </div>

      </div>
    </div>
  );
};

export default Signup;