import React from 'react';
import About from '../Home/About/About';
import Contact from '../Home/Contact/Contact';
import HeaderNav from '../Share/HeaderNav/HeaderNav';

const ContactUs = () => {
    return (
        <div className="container">
            <HeaderNav/>
            <Contact/>
            <br />
            <About/>
        </div>
    );
};

export default ContactUs;