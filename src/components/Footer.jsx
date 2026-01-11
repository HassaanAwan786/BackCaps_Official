import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import './Footer.css';
import FooterB from '../assets/Footer_B.png';
import facebookIcon from '../assets/Facebook - Original.png';
import linkedinIcon from '../assets/LinkedIn - Original.png';
import instagramIcon from '../assets/Instagram - Original.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <i className="fa-regular fa-envelope contact-icon"></i>
                <span className="contact-text">backcaps.official@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt contact-icon"></i>
                <span className="contact-text">+92 307-5195-911</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span className="contact-text">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links Section - 3 columns layout */}
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
          <div className="social-media-icons">
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <div className="social-icon twitter-icon">𝕏</div>
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="#" aria-label="Share">
              <div className="social-icon share-icon">🔖</div>
            </a>
          </div>
          <div className="copyright">
            © 2026 Backcaps Software Solutions. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Bottommost Tagline Bar */}
      <div className="footer-tagline-bar">
        <p className="tagline-text">
          "Where Backspace Meets Ambition - Digital Solutions, Perfectly Keyed"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
