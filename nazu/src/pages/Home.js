import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Cyber Security Services</h1>
        <p>We help protect systems and networks.</p>
        <Link to="/services" className="hero-btn">Explore Services</Link>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>What We Do</h2>
        <p>
          Comprehensive protection and monitoring solutions for small to medium businesses.
          Our team provides the latest security solutions to keep your systems safe and secure.
        </p>

        {/* Feature cards */}
        <div className="cards">
          <div className="card">
            <h3>Network Security</h3>
            <p>Protect your network from unauthorized access and attacks.</p>
          </div>
          <div className="card">
            <h3>Threat Detection</h3>
            <p>Real-time monitoring and alerts for suspicious activity.</p>
          </div>
          <div className="card">
            <h3>System Monitoring</h3>
            <p>24/7 oversight of your critical systems and infrastructure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
