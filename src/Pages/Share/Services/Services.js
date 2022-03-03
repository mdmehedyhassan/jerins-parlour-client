import React from 'react';
import { Link } from 'react-router-dom';
import antiAgeFace from '../../../Icon/anti-age-face.png';
import hairColor from '../../../Icon/hair-color.png';
import skinCare from '../../../Icon/skin-care.png';
import Service from './Service';

const allServices = [
    {
        id: 1,
        img: antiAgeFace,
        service: 'Anti Age Face Treatment',
        price: 199,
        description: 'We craft stunning adn amazing web UL, using a wll drrafted Ux to fix your product.'
    },
    {
        id: 2,
        img: hairColor,
        service: 'Hair Color & styleing',
        price: 99,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        id: 3,
        img: skinCare,
        service: 'Skin Care Treatment',
        price: 299,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
];

const Services = () => {

    return (
        <div className="container" style={{ textAlign: "center", marginTop: '100px' }}>
            <h2 style={{ fontWeight: '800' }}>Our Awesome <span style={{ color: '#f21679' }}>Services</span></h2>
            <div className="row mt-5">
                {
                    allServices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            {
                document.title === 'Services' ? null :
                    <Link to="/services">
                        <button className="btn mt-3 mb-5" style={{ background: '#f21679', color: 'white' }}>Explore more</button>
                    </Link>
            }

        </div>
    );
};

export default Services;