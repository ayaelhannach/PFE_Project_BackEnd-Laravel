import React from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ cursor: 'pointer' }}><Link to='/logo'>
      <img src='../assets/logo.png' alt="Your Compass Logo" className="logo-img" />
      </Link></div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/service">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <button className="language-icon">🌐</button>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
export default Navbar;
