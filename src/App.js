import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const Home = lazy(() => import("./Pages/Homepage/Homepage"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const Drugfinder = lazy(() => import("./Pages/Drugfinder/Drugfinder"));
const Drugcomparator = lazy(() => import("./Pages/Drugcomparator/Drugcomparator"));
const Druginteractor = lazy(() => import("./Pages/Druginteractor/Druginteractor"));

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      console.log(`Checking ${sections.length} elements for animation...`);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        console.log(`Element position: top=${rect.top}, bottom=${rect.bottom}`);

        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/drugfinder" element={<Drugfinder />} />
          <Route path="/drugcomparator" element={<Drugcomparator />} />
          <Route path="/druginteractor" element={<Druginteractor />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;