import React from "react";
import "./Landing.css";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Wrap Navbar in a safe render */}
      <header>
        <Navbar />
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Pawesome Retreat</h1>
          <p>Your one-stop veterinary and hotel service system.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </section>

      {/* Always show footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;