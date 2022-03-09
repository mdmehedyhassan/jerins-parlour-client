import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { _id, img, title, price, description } = props.service;
    const navigate = useNavigate();

    const serviceBookHandler = (id) => {
        navigate(`/orders/book/${id}`)
    }
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            onClick={() => serviceBookHandler(_id)} style={{ cursor: 'pointer' }} className="col-md-6 col-lg-4">
            <div style={{ borderRadius: '10px' }} className="p-2 mt-2 border border-secondary service-styled">
                <img style={{ width: '100px', borderRadius: '50%' }} src={img} alt="" />
                <h4 style={{ fontWeight: '700', color: '#f21679'}}>{title}</h4>
                <h3 style={{ color: '#f21679', fontWeight: '900' }}>${price}</h3>
                <p style={{ textAlign: 'justify', color:'gray' }}>{description}</p>
            </div>
        </div>
    );
};

export default Service;