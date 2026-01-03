import React from 'react';
import '../styles/style.css'; // Importing loose css file for now
import ring from '../assets/ring.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import firstImg from '../assets/first.png';
import secondImg from '../assets/second_img.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <div className="background-wrapper">
                <img src={ring} alt="" className="red-rings" />
                <img src={ring} alt="" className="red-rings-1" />
                <div className="container1">
                    <Header />
                </div>

                <div className="container2" style={{ paddingTop: '100px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 pt-5 mt-lg-5 container2_content text-center text-lg-start">
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
            <Footer />
        </div>
    );
};

export default Home;
