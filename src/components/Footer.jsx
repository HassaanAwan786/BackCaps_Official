import React from 'react';
import '../styles/style.css';
import './Footer.css';
import FooterB from '../assets/Footer_B.png';
import mailIcon from '../assets/mail.png';
import callIcon from '../assets/Call.png';
import locationIcon from '../assets/location.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h1 className="logo">
              <img src={FooterB} alt="Backcaps Logo" className="logo-icon" />
              BACKCAPS
            </h1>
            <p className="tagline">
              Transforming ideas into powerful digital solutions through innovation, expertise, and passion.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <img src={mailIcon} alt="Email" className="contact-icon" />
                <span className="contact-text">backcaps.official@gmail.com</span>
              </div>
              <div className="contact-item">
                <img src={callIcon} alt="Phone" className="contact-icon" />
                <span className="contact-text">+92 307-5195-911</span>
              </div>
              <div className="contact-item">
                <img src={locationIcon} alt="Location" className="contact-icon" />
                <span className="contact-text">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links Section - 2 columns layout */}
          <div className="footer-links-grid">
            {/* Column 1 */}
            <div className="links-column">
              <h3 className="column-title">Company</h3>
              <ul className="links-list">
                <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press Kit</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="links-column">
              <h3 className="column-title">Services</h3>
              <ul className="links-list">
                <li><Link to="/service">Web Development</Link></li>
                <li><Link to="/service">Mobile Apps</Link></li>
                <li><Link to="/service">UI/UX Design</Link></li>
                <li><Link to="/service">AI Solutions</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="links-column">
              <h3 className="column-title">Resources</h3>
              <ul className="links-list">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text-content">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-text">Subscribe to our newsletter for the latest updates</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter subscription"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2026 Backcaps Software Solutions. All rights reserved.
          </div>
          <div className="slogan">
            "Where Backspace Meets Ambition - Digital Solutions, Perfectly Keyed"
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;