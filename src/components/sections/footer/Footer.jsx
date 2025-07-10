import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-wrapper">
      <div className="footer-container">
        {/* Top Row: Logo & Copyright */}
        <div className="footer-top">
          <img src={logo} alt="logo" className="footer-logo" />
          <span className="copyright">© {new Date().getFullYear()} Lyrión AI. All rights reserved.</span>
        </div>

        {/* Middle Row: Newsletter + Links */}
        <div className="footer-middle">
          {/* Left Side: Newsletter */}
          <div className="newsletter">
            <h6>Join our community today</h6>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <p className="privacy-text">
              By subscribing you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>

          {/* Right Side: Navigation */}
          <div className="footer-links">
            <div className="footer-column">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-column">
              <Link to="/services">Services</Link>
              <Link to="/templates">Templates</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/support">Support</Link>
            </div>
            <div className="footer-column">
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/partners">Partners</Link>
              <Link to="/press">Press</Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Border + Legal + Socials */}
        <div className="footer-bottom">
          <div className="left">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="right">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
