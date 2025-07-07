import React, { useState } from 'react';
import './_header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">LyrionAI</div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={closeMenu}>×</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li
              className={`has-submenu ${isSubmenuOpen ? 'open' : ''}`}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              <a href="#">
                Solutions <span className="arrow">⌄</span>
              </a>
              <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                <li><a href="#">Solution 1</a></li>
                <li><a href="#">Solution 2</a></li>
                <li><a href="#">Solution 3</a></li>
              </ul>
            </li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </nav>

        <div className="cta">
          <button className="btn-primary desktop-only">Get Started</button>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
