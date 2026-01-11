import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import '../styles/style.css';

const Service = () => {
    return (
        <div className="service-page">
            <div className="background-wrapper" style={{ minHeight: '40px', paddingBottom: '20px' }}>
                {/* Reusing container1 for consistent header alignment if needed, or just a simple wrapper */}
                <div className="container1">
                    <Header />
                </div>
            </div>
            <div style={{ paddingTop: '50px' }}>
                <ServicesSection />
            </div>
            <Footer />
        </div>
    );
};

export default Service;
