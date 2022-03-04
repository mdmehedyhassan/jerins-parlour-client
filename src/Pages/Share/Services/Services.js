import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        if(document.title === "Jerin's Parlour"){
            axios('https://whispering-woodland-02622.herokuapp.com/services?summary=3')
            .then(res => setServices(res.data))
        }
        if(document.title === "Services"){
            axios('https://whispering-woodland-02622.herokuapp.com/services')
            .then(res => setServices(res.data))
        }
        
    },[])
    return (
        <div className="container" style={{ textAlign: "center", marginTop: '100px' }}>
            <h2 style={{ fontWeight: '800' }}>Our Awesome <span style={{ color: '#f21679' }}>Services</span></h2>
            <div className="row mt-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
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