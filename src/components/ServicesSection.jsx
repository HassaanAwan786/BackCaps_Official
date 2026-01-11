import React from 'react';

const ServicesSection = () => {
    return (
        <section className="services-section p-4 bg-dark">
            <div className="container">
                <h2 className="text-white text-center mb-4">Our Services</h2>
                <div className="row">
                    {/* Service Items Placeholder */}
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white text-white border-0">
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Building modern web applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white text-white border-0">
                            <div className="card-body">
                                <h5 className="card-title">App Development</h5>
                                <p className="card-text">Creating mobile solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card bg-white text-white border-0">
                            <div className="card-body">
                                <h5 className="card-title">UI/UX Design</h5>
                                <p className="card-text">Designing intuitive interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
