import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    document.title = "Make Admin";
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Make Admin</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam, voluptate dicta ab a molestiae quos nulla natus illum veniam nam iste possimus quae vero dignissimos fugiat maiores accusamus ut?
            </div>
        </div>
    );
};

export default MakeAdmin;