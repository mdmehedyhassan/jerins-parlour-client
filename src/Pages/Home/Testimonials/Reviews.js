import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reviews = (props) => {
    const { img, name, email, review, star } = props.review;
    const starNumber = parseInt(star)
    return (
        <div className="col-md-4 service-styled">
            <div className="p-3 d-flex align-items-center">
                {
                    img ? <img style={{width: '100px', borderRadius: '50%'}} src={img} alt="" /> : 
                    <h1 style={{width: '100px', borderRadius: '50%'}}><FontAwesomeIcon icon={faCircleUser}/></h1>
                }
                <div className="ms-2">
                    <h4>{name}</h4>
                    <p><small>{email}</small></p>
                </div>
            </div>
            <p style={{textAlign: 'justify'}}>{review}</p>
            {
                [...Array(starNumber).keys()].map(number => <FontAwesomeIcon key={number} style={{color: 'gold'}} icon={faStar} />)
            }
            {
                [...Array(5 - starNumber).keys()].map(number => <FontAwesomeIcon key={number} style={{color: 'gray'}}  icon={faStar} />)
            }
        </div>
    );
};

export default Reviews;