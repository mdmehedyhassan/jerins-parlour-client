import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Review = () => {
    document.title = "Review";
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Review</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae ab quasi nesciunt suscipit dignissimos placeat sit corporis ea, voluptatum iste molestiae explicabo illo officiis similique magnam laudantium error harum?
            </div>
        </div>
    );
};

export default Review;