import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg"; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo with Image */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Nexadrug Logo" className="logo-image" />
          NEXADRUG
        </Link>
      </div>
     <div>
      {/* Links (Desktop View) */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
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
       
      </ul>
      {/* Hamburger Menu (Mobile View) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;