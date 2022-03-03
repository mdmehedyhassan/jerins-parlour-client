import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reviews = (props) => {
    const { img, name, profession, description, star } = props.review;
    return (
        <div className="col-md-4 service-styled">
            <div className="p-3 d-flex align-items-center">
                <h1>Img</h1>
                <div className="ms-2">
                    <h4>{name}</h4>
                    <h5>{profession}</h5>
                </div>
            </div>
            <p>{description}</p>
            {
                [...Array(star).keys()].map(number => <FontAwesomeIcon key={number} style={{color: 'gold'}} icon={faStar} />)
            }
            {
                [...Array(5 - star).keys()].map(number => <FontAwesomeIcon key={number} style={{color: 'gray'}}  icon={faStar} />)
            }
        </div>
    );
};

export default Reviews;