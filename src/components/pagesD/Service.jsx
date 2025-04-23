import React from 'react';
import Navbar from '../cities/Navbar';
import Footer from '../cities/Footer';

const Service = () => {
  return (
    <div className="service">
      <Navbar />
      <div className="content">
        <h1>Our Services</h1>
        <p>Details about the services you offer.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
