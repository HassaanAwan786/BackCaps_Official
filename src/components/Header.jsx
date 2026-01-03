import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import largeLogo from '../assets/Logo.png';
import smallLogo from '../assets/Logo2.png';
import facebook from '../assets/Facebook - Original.png';
import linkedin from '../assets/LinkedIn - Original.png';
import instagram from '../assets/Instagram - Original.png';
import whatsapp from '../assets/logo-whatsapp.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid pt-lg-2">
                <Link className="navbar-brand" to="/">
                    <img className="large_logo" src={largeLogo} alt="" />
                    <img className="small_logo" src={smallLogo} alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText, #navbarIcons" aria-controls="navbarText navbarIcons" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse links_gap navbar-collapse justify-content-center nav-padding" id="navbarText">
                    <ul className="navbar-nav d-flex justify-content-center align-items-center mb-2 ">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" href="#">Our Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" href="#">Teams</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" href="#">Contact Us</Link>
                        </li>
                    </ul>
                    <span className="collapse navbar-collapse d-flex justify-content-end logo_gap" id="navbarIcons">
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={whatsapp} alt="" /></a>
                    </span>
                </div>

            </div>
        </nav>
    );
};

export default Header;
