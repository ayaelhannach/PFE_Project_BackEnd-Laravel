import React from 'react';
import Navbar from '../cities/Navbar';
import Footer from '../cities/Footer';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="content">
        <h1>Contact Us</h1>
        <p>Contact details and form.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
