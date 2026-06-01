import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        Nazu is a leading cybersecurity firm dedicated to protecting businesses from digital threats.
        Our team of experienced professionals brings years of expertise in network security,
        threat analysis, and system protection.
      </p>
      <p style={{ marginTop: '16px' }}>
        We believe that every business, regardless of size, deserves enterprise-grade security
        solutions at affordable prices.
      </p
    
      <div className="about-stats">
        <div className="stat">
          <h2>5+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h2>200+</h2>
          <p>Clients Protected</p>
        </div>
        <div className="stat">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>
      </div>
    </div>
  );
}

export default About;
