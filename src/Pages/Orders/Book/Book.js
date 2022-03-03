import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Book = () => {
    document.title = "Book";
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Book</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser}/></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque esse deleniti vitae qui velit illo ut ullam provident enim! Nihil, impedit! Sint assumenda modi similique esse beatae, aut earum ipsum?
            </div>
        </div>
    );
};

export default Book;