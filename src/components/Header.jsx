import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/style.css';
import largeLogo from '../assets/Logo.png';
import smallLogo from '../assets/Logo2.png';
import facebook from '../assets/Facebook - Original.png';
import linkedin from '../assets/LinkedIn - Original.png';
import instagram from '../assets/Instagram - Original.png';
import whatsapp from '../assets/logo-whatsapp.png';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return currentPath === path ? "fw-bold" : "";
    };

    return (
        <div
            className={`custom-header fixed-top w-100 px-0 px-lg-5 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            style={{ transition: 'background-color 0.3s ease' }}
        >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid pt-lg-2">
                    <Link className="navbar-brand" to="/">
                        <img className="large_logo" src={largeLogo} alt="" />
                        <img className="small_logo" src={smallLogo} alt="" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText, #navbarIcons" aria-controls="navbarText navbarIcons" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse links_gap navbar-collapse justify-content-center nav-padding" id="navbarText">
                        <ul className="navbar-nav d-flex gap-3 justify-content-center align-items-center mb-2 ">
                            <li className="nav-item">
                                <Link className={`nav-link text-primary ${isActive('/')}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-primary ${isActive('/about')}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="#">Our Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="#">Teams</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="#">Contact Us</Link>
                            </li>
                        </ul>
                        <span className="collapse navbar-collapse d-flex justify-content-end logo_gap" id="navbarIcons">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><img src={facebook} alt="" /></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><img src={linkedin} alt="" /></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><img src={instagram} alt="" /></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><img src={whatsapp} alt="" /></a>
                        </span>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;
