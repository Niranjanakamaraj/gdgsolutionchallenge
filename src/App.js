import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Homepage/Homepage";
import Drugfinder from "./Pages/Drugfinder/Drugfinder";
import Drugcomparator from "./Pages/Drugcomparator/Drugcomparator";
import Druginteractor from "./Pages/Druginteractor/Druginteractor";
import "./App.css";

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
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/drugfinder" element={<Drugfinder />} />
            <Route path="/drugcomparator" element={<Drugcomparator />} />
            <Route path="/druginteractor" element={<Druginteractor />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;