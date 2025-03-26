import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import researcher from "../../assets/researcher.png";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user's login status
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

    const hiddenElements = document.querySelectorAll(".hidden, .slide-left, .slide-right, .fade-in");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle navigation based on login status
  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/Login"); // Redirect logged-in users to dashboard
    } else {
      navigate("/signup"); // New users to signup
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="gradient-text">Research Made Easy !</h1>
        <div className="researcher">
          <img src={researcher} alt="Homepage Banner" className="researcher-image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Explore Our Capabilities</h2>
        <div className="feature-buttons">
          <button onClick={() => navigate("/Druginteractor")}>
            Analyze Molecular Interaction
          </button>
          <button onClick={() => navigate("/Drugfinder")}>
            Gain In-Depth Drug Insight
          </button>
          <button onClick={() => navigate("/Drugcomparator")}>
            Compare Drug Profiles
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Unveiling Our Mission</h2>
        <p>
          At Nexadrug, our mission is to revolutionize drug discovery by
          providing researchers with advanced tools for drug interaction
          analysis and comparison. We empower the research community to
          accelerate medical breakthroughs.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="gradient-text">Start Your Research Journey Today!</h2>
        <p>
          Join Nexadrug and revolutionize drug discovery with cutting-edge tools.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Contact Us</h3>
            <p>Email: support@nexadrug.com</p>
          </div>
          <div className="footer-links">
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
          </div>
        </div>
        <p className="footer-text">© 2025 Nexadrug. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;