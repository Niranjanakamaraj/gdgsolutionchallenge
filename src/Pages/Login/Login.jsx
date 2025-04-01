import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Using the same CSS for both Signup and Login

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    institute: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.institute === formData.institute
    ) {
      alert("Login Successful!");
      navigate("/"); // Redirect after successful login
    } else {
      alert("Invalid Email or Research Institute. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side - Introduction Content */}
      <div className="signup-content">
        <h1>WELCOME BACK TO NEXADRUG!</h1>
        <p>
          Dive back into the world of AI-driven drug discovery. Continue
          accessing intelligent search and real-time insights to accelerate
          your research.
        </p>
        <h3>Unlock the future of drug discovery!</h3>
      </div>

      {/* Right Side - Form */}
      <div className="signup-form-container">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="institute"
            placeholder="Research Institute"
            value={formData.institute}
            onChange={handleChange}
            required
          />

          <button type="submit">Log In</button>
        </form>
        <p>
        Not registered?<Link to="/signup"> <span style={{color:"#37cced"}}>Sign up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;