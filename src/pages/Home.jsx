import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'; // Importing loose css file for now
import ring from '../assets/ring.png';
import largeLogo from '../assets/Logo.png';
import smallLogo from '../assets/Logo2.png';
import facebook from '../assets/Facebook - Original.png';
import linkedin from '../assets/LinkedIn - Original.png';
import instagram from '../assets/Instagram - Original.png';
import whatsapp from '../assets/logo-whatsapp.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import firstImg from '../assets/first.png';
import secondImg from '../assets/second_img.svg';


const Home = () => {
    return (
        <div className="home-page">
            <div className="background-wrapper">
                <img src={ring} alt="" className="red-rings" />
                <img src={ring} alt="" className="red-rings-1" />
                <div className="container1">
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
                </div>

                <div className="container2">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 pt-5 ps-4 mt-lg-5 container2_content ">
                            <h1 className="head">Design. <span style={{
                                backgroundImage: "linear-gradient(to right, #0062BB, #57C1C8, #E965FF)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}>Develop.</span> Deliver.</h1>
                            <p className="content pe-lg-5 pt-2">Committed to building exceptional digital solutions to elevate your brand.</p>
                            <a className="btn btn-primary mt-3 get_started_btn ">
                                Get Started
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>
                            <div className="image-stack">
                                <img src={c1} alt="Client 1" className="stacked-image" />
                                <img src={c2} alt="Client 2" className="stacked-image" />
                                <img src={c3} alt="Client 3" className="stacked-image" />
                                <img src={c4} alt="Client 4" className="stacked-image" />
                                <span className="client-text">Trusted by 10+ clients</span>
                            </div>

                        </div>

                        <div className="col-12 col-lg-6 order-1 order-lg-2 pt-lg-4 container2_img">
                            <img className="first_img img-fluid " src={firstImg} alt="" />
                            <img className="second_img img-fluid" src={secondImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="headline-section">
                    <div className="scrolling-text">
                        <p>We are a software company focused on enhancing your business by providing innovative and advanced solutions to your problems.</p>
                    </div>
                </div>
                <div className="coming-soon">
                    Coming Soon...
                </div>
            </div>
        </div>
    );
};

export default Home;
