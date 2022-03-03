import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeHeader from '../HomeHeader/HomeHeader';
import Professionally from '../Professionally/Professionally';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Services></Services>
            <Professionally></Professionally>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;