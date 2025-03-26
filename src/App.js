import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Homepage/Homepage"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const Drugfinder = lazy(() => import("./Pages/Drugfinder/Drugfinder"));
const Drugcomparator = lazy(() => import("./Pages/Drugcomparator/Drugcomparator"));
const Druginteractor = lazy(() => import("./Pages/Druginteractor/Druginteractor"));

// Custom Loader Component
const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
    <p>Loading...</p>
  </div>
);

function App() {
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