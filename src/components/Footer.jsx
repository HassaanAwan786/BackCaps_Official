import React from 'react';
import '../styles/style.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container px-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="mb-4 mb-md-0 text-center text-md-start">
                        <h3 className="h4 fw-bold mb-3">BACKCAPS</h3>
                        <p className="text-secondary mb-0">
                            Delivering high-quality software solutions
                        </p>
                    </div>
                    <div className="d-flex gap-4">
                        <a href="#" className="text-secondary text-white-hover transition-colors"><i className="fab fa-twitter fs-5"></i></a>
                        <a href="#" className="text-secondary text-white-hover transition-colors"><i className="fab fa-linkedin fs-5"></i></a>
                        <a href="#" className="text-secondary text-white-hover transition-colors"><i className="fab fa-github fs-5"></i></a>
                        <a href="#" className="text-secondary text-white-hover transition-colors"><i className="fab fa-instagram fs-5"></i></a>
                    </div>
                </div>
                <div className="border-top border-secondary mt-4 pt-4 text-small text-secondary text-center">
                    © 2023 BACKCAPS. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
