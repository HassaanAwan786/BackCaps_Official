import React, { useEffect, useRef } from 'react';
import ceo from '../assets/CEO.png';
import coo from '../assets/COO.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {
    const scrollRevealRefs = useRef([]);
    const counterRefs = useRef([]);

    useEffect(() => {
        const revealOnScroll = () => {
            scrollRevealRefs.current.forEach((element) => {
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    if (elementPosition < screenPosition) {
                        element.classList.add("is-visible");
                    }
                }
            });
        };

        const animateCounters = () => {
            counterRefs.current.forEach((counter) => {
                if (counter) {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const speed = 200;
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(animateCounters, 1);
                    } else {
                        counter.innerText = target;
                    }
                }
            });
        };

        revealOnScroll(); // Initial check
        window.addEventListener("scroll", revealOnScroll);
        setTimeout(animateCounters, 500);

        return () => {
            window.removeEventListener("scroll", revealOnScroll);
        };
    }, []);

    const addToScrollRevealRefs = (el) => {
        if (el && !scrollRevealRefs.current.includes(el)) {
            scrollRevealRefs.current.push(el);
        }
    };

    const addToCounterRefs = (el) => {
        if (el && !counterRefs.current.includes(el)) {
            counterRefs.current.push(el);
        }
    };


    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container1" style={{ backgroundColor: '#00449F' }}>
                <Header />
            </div>
            {/* Styles specific to About page to match original HTML style block */}
            <style>{`
            :root {
                --primary: #4f46e5;
                --secondary: #10b981;
                --dark: #1e293b;
                --light: #f8fafc;
            }
            .header-gradient {
                background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            }
            .team-card {
                transition: all 0.3s ease;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                overflow: hidden;
                position: relative;
                border-radius: 12px;
                background: white;
                height: 100%;
            }
            .team-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            .team-card::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 5px;
                background: linear-gradient(90deg, var(--primary), var(--secondary));
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.3s ease;
            }
            .team-card:hover::before {
                transform: scaleX(1);
            }
            .team-image {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 50%;
                border: 5px solid white;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                position: relative;
                z-index: 1;
            }
            .team-card:hover .team-image {
                transform: scale(1.05);
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            }
            .social-icons {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
            }
            .team-card:hover .social-icons {
                opacity: 1;
                transform: translateY(0);
            }
            .section-title {
                position: relative;
                display: inline-block;
            }
            .section-title::after {
                content: "";
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 50px;
                height: 4px;
                background: linear-gradient(90deg, var(--primary), var(--secondary));
                border-radius: 2px;
            }
            .stats-card {
                transition: all 0.3s ease;
                border-left: 4px solid var(--primary);
                position: relative;
                overflow: hidden;
                height: 100%;
            }
            .stats-card:hover {
                transform: scale(1.02);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
            .stats-card::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
                z-index: -1;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
            .floating-element {
                animation: float 6s ease-in-out infinite;
            }
            .scroll-reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            .is-visible {
                opacity: 1;
                transform: translateY(0);
            }
            /* Custom utility to mimic Tailwind's text-4xl/etc if Bootstrap's aren't enough */
            .text-indigo-600 { color: #4f46e5 !important; }
            .bg-indigo-100 { background-color: #e0e7ff !important; }
            .bg-indigo-200 { background-color: #c7d2fe !important; }
            .text-emerald-600 { color: #059669 !important; }
            .bg-emerald-100 { background-color: #d1fae5 !important; }
            .cta-gradient { background: linear-gradient(to right, #6366f1, #10b981); }
            `}</style>

            {/* Floating decorative elements - converting to inline styles for specific positioning/blur */}
            <div className="position-fixed rounded-circle" style={{ left: '-5rem', top: '25%', width: '10rem', height: '10rem', backgroundColor: '#e0e7ff', filter: 'blur(64px)', opacity: 0.5, zIndex: -1 }}></div>
            <div className="position-fixed rounded-circle" style={{ right: '0', bottom: '5rem', width: '15rem', height: '15rem', backgroundColor: '#d1fae5', filter: 'blur(64px)', opacity: 0.5, zIndex: -1 }}></div>
            <div className="position-fixed rounded-circle floating-element" style={{ right: '33%', top: '5rem', width: '8rem', height: '8rem', backgroundColor: '#c7d2fe', filter: 'blur(64px)', opacity: 0.3, zIndex: -1 }}></div>

            {/* Header */}
            <header className="header-gradient text-white py-5 position-relative overflow-hidden">
                <div className="container px-4 text-center position-relative" style={{ zIndex: 10 }}>
                    <h1 className="display-4 fw-bold mb-4">Meet Our Team</h1>
                    <p className="fs-4 mx-auto" style={{ maxWidth: '48rem', lineHeight: '1.6' }}>
                        The brilliant minds behind our software delivery excellence. We
                        combine technical expertise with business acumen to deliver
                        transformative solutions.
                    </p>
                </div>
                <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}></div>
                    <div className="position-absolute bg-white rounded-circle" style={{ width: '18rem', height: '18rem', bottom: '-5rem', right: '-5rem', filter: 'blur(64px)', opacity: 0.1 }}></div>
                    <div className="position-absolute bg-white rounded-circle" style={{ width: '11rem', height: '11rem', top: '-2.5rem', left: '-2.5rem', filter: 'blur(64px)', opacity: 0.1 }}></div>
                </div>
            </header>

            {/* About Section */}
            <section className="py-5 bg-white">
                <div className="container px-4">
                    <div className="mx-auto text-center mb-5 scroll-reveal" style={{ maxWidth: '56rem' }} ref={addToScrollRevealRefs}>
                        <h2 className="display-6 fw-bold mb-4 text-dark section-title">
                            Why Our Team Stands Out
                        </h2>
                        <p className="lead text-secondary" style={{ lineHeight: '1.8' }}>
                            At BACKCAPS, we've assembled a team of software experts with diverse
                            backgrounds and specialized skills. From DevOps engineers to
                            full-stack developers and UX designers, we bring together the
                            perfect combination of talent to solve complex business challenges
                            through innovative software solutions.
                        </p>
                    </div>

                    <div className="row g-4 mb-5">
                        <div className="col-md-4">
                            <div className="stats-card p-4 bg-white rounded scroll-reveal" ref={addToScrollRevealRefs}>
                                <div className="text-indigo-600 mb-3 fs-1 fw-bold">
                                    <span className="counter" data-target="150" ref={addToCounterRefs}>0</span>+
                                </div>
                                <h3 className="h4 fw-semibold mb-2 text-dark">
                                    Projects Delivered
                                </h3>
                                <p className="text-muted">
                                    Successful software deployments across multiple industries
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="stats-card p-4 bg-white rounded scroll-reveal" style={{ transitionDelay: '0.2s' }} ref={addToScrollRevealRefs}>
                                <div className="text-emerald-600 mb-3 fs-1 fw-bold">
                                    <span className="counter" data-target="4" ref={addToCounterRefs}>0</span>+
                                </div>
                                <h3 className="h4 fw-semibold mb-2 text-dark">
                                    Years of Experience
                                </h3>
                                <p className="text-muted">
                                    Collective expertise in modern software technologies
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="stats-card p-4 bg-white rounded scroll-reveal" style={{ transitionDelay: '0.4s' }} ref={addToScrollRevealRefs}>
                                <div className="text-indigo-600 mb-3 fs-1 fw-bold">
                                    <span className="counter" data-target="98" ref={addToCounterRefs}>0</span>%
                                </div>
                                <h3 className="h4 fw-semibold mb-2 text-dark">
                                    Client Satisfaction
                                </h3>
                                <p className="text-muted">
                                    Our focus is on delivering measurable business value
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-5 bg-light">
                <div className="container px-4">
                    <h2 className="display-6 fw-bold mb-5 text-center text-dark section-title scroll-reveal" ref={addToScrollRevealRefs}>
                        Leadership Team
                    </h2>

                    <div className="row g-4">
                        {/* CEO */}
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card p-4 text-center scroll-reveal" ref={addToScrollRevealRefs}>
                                <div className="d-flex justify-content-center mb-3">
                                    <img
                                        src={ceo}
                                        alt="Confident male CEO"
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="h5 fw-bold mb-1 text-dark">Zohaib Ahmed</h3>
                                <p className="text-indigo-600 fw-medium mb-3">CEO & Founder</p>
                                <p className="text-muted mb-3">
                                    Visionary leader with 10+ years in software industry
                                </p>
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-linkedin fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-twitter fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fas fa-envelope fs-5"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* COO */}
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card p-4 text-center scroll-reveal" style={{ transitionDelay: '0.2s' }} ref={addToScrollRevealRefs}>
                                <div className="d-flex justify-content-center mb-3">
                                    <img src={coo} alt="male COO" className="team-image" />
                                </div>
                                <h3 className="h5 fw-bold mb-1 text-dark">
                                    Muhammad Hassaan
                                </h3>
                                <p className="text-indigo-600 fw-medium mb-3">COO & Founder</p>
                                <p className="text-muted mb-3">
                                    Technology strategist with deep technical expertise
                                </p>
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    <a href="https://github.com/HassaanAwan786" className="text-secondary hover-primary transition-colors"><i className="fab fa-linkedin fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-github fs-5"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Head of Delivery */}
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card p-4 text-center scroll-reveal" style={{ transitionDelay: '0.4s' }} ref={addToScrollRevealRefs}>
                                <div className="d-flex justify-content-center mb-3">
                                    <img
                                        src="https://placehold.co/400x400"
                                        alt="Head of Delivery"
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="h5 fw-bold mb-1 text-dark">
                                    Michael Rodriguez
                                </h3>
                                <p className="text-indigo-600 fw-medium mb-3">Head of Delivery</p>
                                <p className="text-muted mb-3">
                                    Ensures projects are delivered on time and on budget
                                </p>
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-linkedin fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fas fa-envelope fs-5"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* VP of Engineering */}
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card p-4 text-center scroll-reveal" style={{ transitionDelay: '0.6s' }} ref={addToScrollRevealRefs}>
                                <div className="d-flex justify-content-center mb-3">
                                    <img
                                        src="https://placehold.co/400x400"
                                        alt="VP of Engineering"
                                        className="team-image"
                                    />
                                </div>
                                <h3 className="h5 fw-bold mb-1 text-dark">
                                    Jessica Williams
                                </h3>
                                <p className="text-indigo-600 fw-medium mb-3">VP of Engineering</p>
                                <p className="text-muted mb-3">
                                    Builds high-performing engineering teams
                                </p>
                                <div className="social-icons d-flex justify-content-center gap-3">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-linkedin fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-github fs-5"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="text-secondary hover-primary transition-colors"><i className="fab fa-twitter fs-5"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-gradient text-white py-5 position-relative overflow-hidden">
                <div className="container px-4 text-center position-relative" style={{ zIndex: 10 }}>
                    <h2 className="display-5 fw-bold mb-4 scroll-reveal" ref={addToScrollRevealRefs}>
                        Want to Join Our Team?
                    </h2>
                    <p className="fs-5 mb-5 mx-auto scroll-reveal" style={{ maxWidth: '42rem', lineHeight: '1.6' }} ref={addToScrollRevealRefs}>
                        We're always looking for talented individuals to join our growing team
                        of software experts.
                    </p>
                    <button className="btn btn-light rounded-pill px-4 py-2 fw-semibold shadow-sm hover-translate scroll-reveal" style={{ transition: 'all 0.3s' }} ref={addToScrollRevealRefs}>
                        View Open Positions
                    </button>
                    <style>{`.hover-translate:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1) !important; }`}</style>
                </div>
                {/* Decorative backgrounds */}
                <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}></div>
                    <div className="position-absolute bg-white rounded-circle" style={{ width: '18rem', height: '18rem', bottom: '-5rem', right: '-5rem', filter: 'blur(64px)', opacity: 0.1 }}></div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
