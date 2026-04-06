import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Login_Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username.trim() || !password.trim()) {
      setMsg("Please fill all fields ❌");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/users?username=${username}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setMsg("User already exists ❌");
        return;
      }

      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Date.now(),
          username,
          password
        })
      });

      setMsg("Signup successful ✅");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>SignUp</h2>

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

        <button onClick={handleSignup}>Signup</button>

        <p className="success">{msg}</p>

        <p className="switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;