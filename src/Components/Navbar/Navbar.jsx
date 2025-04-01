import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleRedirect = () => {
    navigate(isLoggedIn ? "/login" : "/signup");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Nexadrug Logo" className="logo-image" />
          NEXADRUG
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/Drugcomparator" onClick={() => setIsOpen(false)}>Compare Drugs</Link>
        </li>
        <li>
          <Link to="/Druginteractor" onClick={() => setIsOpen(false)}>Drug Interactor</Link>
        </li>
        <li>
          <Link to="/Drugfinder" onClick={() => setIsOpen(false)}>Drug Insight</Link>
        </li>
        <li>
          <button className="login" onClick={handleRedirect}>
            {isLoggedIn ? "Dashboard" : "Login"}
          </button>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;