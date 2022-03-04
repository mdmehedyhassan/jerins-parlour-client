import React from 'react';

const Service = (props) => {
    const { img, title, price, description } = props.service;
    return (
        <div className="col-md-4 service-styled">
            <div className="p-2">
                <img style={{ width: '100px', borderRadius: '50%'}} src={img} alt="" />
                <h4 style={{fontWeight: '700'}}>{title}</h4>
                <h3 style={{color: '#f21679', fontWeight:'900'}}>${price}</h3>
                <p style={{textAlign: 'justify'}}>{description}</p>
            </div>
        </div>
    );
};

export default Service;