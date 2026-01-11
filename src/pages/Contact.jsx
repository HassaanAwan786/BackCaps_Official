import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container1" style={{ backgroundColor: '#00449F' }}>
        <Header />
      </div>
      <section className="contact-us-section">
        <div className="contact-container">
          {/* Header Section */}
          <div className="contact-header">
            <h1 className="contact-title">
              Let's Build <span className="gradient-text">Something Amazing</span>
            </h1>
            <p className="contact-subtitle">
              Ready to transform your ideas into reality? Get in touch with us today
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className="contact-content">
            {/* Left Column - Start Your Project Form */}
            <div className="form-column">
              <div className="form-card">
                <div className="form-header">
                  <i className="fas fa-file-alt form-icon"></i>
                  <h2 className="form-title">Start Your Project</h2>
                </div>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company (Optional)</label>
                    <input type="text" id="company" name="company" placeholder="Your Company" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectType">Project Type</label>
                      <input type="text" id="projectType" name="projectType" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget Range</label>
                      <input type="text" id="budget" name="budget" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="details">Project Details</label>
                    <textarea 
                      id="details" 
                      name="details" 
                      rows="5" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="send-message-btn">
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info & Benefits */}
            <div className="info-column">
              {/* Contact Information Cards */}
              <div className="contact-info-card">
                <i className="fas fa-envelope contact-icon"></i>
                <div className="contact-info-content">
                  <h3 className="contact-label">Email</h3>
                  <p className="contact-value">backcaps.official@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <i className="fas fa-phone contact-icon"></i>
                <div className="contact-info-content">
                  <h3 className="contact-label">Phone</h3>
                  <p className="contact-value">+92 307-5195-911</p>
                </div>
              </div>

              <div className="contact-info-card">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <div className="contact-info-content">
                  <h3 className="contact-label">Location</h3>
                  <p className="contact-value">Islamabad, KR</p>
                </div>
              </div>

              {/* Schedule a Call Card */}
              <div className="schedule-card">
                <i className="fas fa-calendar-alt schedule-icon"></i>
                <h3 className="schedule-title">Schedule a Call</h3>
                <p className="schedule-description">
                  Book a free 30-minute consultation with our experts
                </p>
                <button className="book-now-btn">
                  Book Now
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              {/* Why Choose Us Section */}
              <div className="why-choose-card">
                <h3 className="why-choose-title">Why Choose Us?</h3>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">Free Project Consultation</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">24/7 Support Available</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">Flexible Payment Options</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">Transparent Pricing</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">Quick Response Time</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-check"></i>
                    <span className="benefit-text">NDA Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
