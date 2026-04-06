import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Login_Signup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/users?username=${username}`
      );
      const data = await res.json();

      if (data.length === 0) {
        setError("User not found ❌");
      } else if (data[0].password !== password) {
        setError("Incorrect password ❌");
      } else {
        setError("");
        
        localStorage.setItem("user", JSON.stringify(data[0]));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="error">{error}</p>

        <p className="switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;