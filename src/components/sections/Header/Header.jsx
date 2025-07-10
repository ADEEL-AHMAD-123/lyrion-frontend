import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../common/primary button/PrimaryButton';
import './_header.scss';
import logo from '../../../assets/images/logo.png'; // ✅ adjust path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="LyrionAI Logo" className="logo-img" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={closeMenu}>×</div>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
            <li
              className={`has-submenu ${isSubmenuOpen ? 'open' : ''}`}
              onClick={toggleSubmenu}
            >
              <span>
                Solutions <span className="arrow">⌄</span>
              </span>
              <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                <li><Link to="/solutions/solution-1" onClick={closeMenu}>Solution 1</Link></li>
                <li><Link to="/solutions/solution-2" onClick={closeMenu}>Solution 2</Link></li>
                <li><Link to="/solutions/solution-3" onClick={closeMenu}>Solution 3</Link></li>
              </ul>
            </li>
            <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/signin" onClick={closeMenu}>Sign In</Link></li>
          </ul>
        </nav>

        <div className="cta">
          <PrimaryButton text="Get Started" to="/get-started" hideOnMobile />
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
