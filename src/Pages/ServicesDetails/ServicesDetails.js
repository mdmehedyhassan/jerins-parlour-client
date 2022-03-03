import React from 'react';
import About from '../Home/About/About';
import HeaderNav from '../Share/HeaderNav/HeaderNav';
import Services from '../Share/Services/Services';

const ServicesDetails = () => {
    document.title = 'Services';
    return (
        <div>
            <HeaderNav/>
            <Services/>
            <br />
            <About/>
        </div>
    );
};

export default ServicesDetails;