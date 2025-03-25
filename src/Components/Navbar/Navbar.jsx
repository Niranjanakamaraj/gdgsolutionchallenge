import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">🧬 NEXADRUG</Link>
      </div>

      {/* Links (Desktop View) */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/Druginteractor" onClick={() => setIsOpen(false)}>Molecular Interaction</Link>
        </li>
        <li>
          <Link to="/Drugfinder" onClick={() => setIsOpen(false)}>Drug Insight</Link>
        </li>
        <li>
          <Link to="/Drugcomparator" onClick={() => setIsOpen(false)}>Compare Drugs</Link>
        </li>
      </ul>

      {/* Hamburger Menu (Mobile View) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
    </nav>
  );
};

export default Navbar;