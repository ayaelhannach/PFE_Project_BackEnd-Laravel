import React from 'react';
import Navbar from '../cities/Navbar';
import Footer from '../cities/Footer';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>Information about your project.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
