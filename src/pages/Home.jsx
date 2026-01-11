import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';

const Home = () => {
    const heroRef = useRef(null);
    const ring1Ref = useRef(null);
    const ring2Ref = useRef(null);
    const imagesRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Background Rings Animation (Continuous)
        gsap.to(ring1Ref.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });
        gsap.to(ring2Ref.current, {
            rotation: -360,
            duration: 25,
            repeat: -1,
            ease: "linear"
        });

        // Entrance Animations
        tl.fromTo(contentRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
        )
            .fromTo(imagesRef.current.children,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );

        // Hover Effect specific for hero images
        const imgs = imagesRef.current.children;
        if (imgs.length >= 2) {
            gsap.to(imgs[0], {
                y: -10,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
            gsap.to(imgs[1], {
                y: 10,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: 0.5
            });
        }

    }, []);

    return (
        <div className="home-page" ref={heroRef}>
            <div className="background-wrapper pb-5">
                <img src={ring} alt="" className="red-rings" ref={ring1Ref} />
                <img src={ring} alt="" className="red-rings-1" ref={ring2Ref} />
                <div className="container1">
                    <Header />
                </div>

                <div className="container2" style={{ paddingTop: '100px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 pt-5 mt-lg-5 container2_content text-center text-lg-start" ref={contentRef}>
                            <h1 className="head">Design. <span style={{
                                backgroundImage: "linear-gradient(to right, #0062BB, #57C1C8, #E965FF)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}>Develop.</span> Deliver.</h1>
                            <p className="content pe-lg-5 pt-2">Committed to building exceptional digital solutions to elevate your brand.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="btn btn-primary mt-3 get_started_btn ">
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

                        <div className="col-12 col-lg-6 order-1 order-lg-2 pt-lg-4 container2_img" ref={imagesRef}>
                            <img className="first_img img-fluid " src={firstImg} alt="" />
                            <img className="second_img img-fluid" src={secondImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="headline-section">
                <div className="scrolling-text">
                    <p>We are a software company focused on enhancing your business by providing innovative and advanced solutions to your problems.</p>
                </div>
            </div>
            <ServicesSection />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default Home;
