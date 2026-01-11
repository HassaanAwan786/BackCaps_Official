import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

const Team = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container1" style={{ backgroundColor: '#00449F' }}>
                <Header />
            </div>
            <TeamSection />
            <Footer />
        </div>
    );
};

export default Team;
