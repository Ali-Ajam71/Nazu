import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // State to track if the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Nazu</h2>

      {/* Hamburger button — only visible on mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Nav links — hidden on mobile unless menuOpen is true */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
