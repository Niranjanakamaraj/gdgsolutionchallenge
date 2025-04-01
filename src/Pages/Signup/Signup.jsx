import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";
import "../Login/Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institute: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup Successful! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      {/* Left Side - Introduction Content */}
      <div className="signup-content">
        <h1>WELCOME TO NEXADRUG!</h1>
        <p>
          An AI-powered platform revolutionizing drug discovery. Find, compare,
          and analyze drugs with intelligent search and real-time insights.
          Accelerate research, reduce costs, and ensure safer treatments—
          faster and smarter.
        </p>
        <h3>Start your discovery with Nexadrug today!</h3>
      </div>

      {/* Right Side - Form */}
      <div className="signup-form-container">
        <h2>Let's Get Started</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

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

          <button type="submit">Sign Me Up</button>
        </form>
        <p>
        Already a member? <Link to="/login"><span style={{color:"#37cced"}}>Login</span></Link>
      </p>
      </div>
    </div>
  );
};

export default Signup;