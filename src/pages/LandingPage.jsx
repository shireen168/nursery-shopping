import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. 
          We specialize in a wide variety of indoor plants, succulents, and hanging plants that bring 
          life and freshness to your home or office. Our plants are carefully grown and nurtured to 
          ensure they thrive in their new environment. With expert care tips and premium quality plants, 
          we're dedicated to helping you create your own green paradise.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
