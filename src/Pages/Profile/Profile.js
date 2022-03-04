import React from 'react';
import useAuth from '../../hooks/useAuth';
import HeaderNav from '../Share/HeaderNav/HeaderNav';

const Profile = () => {
    const { user, signOutHandler } = useAuth();
    console.log(user)
    return (
        <div className="container">
            <HeaderNav></HeaderNav>
            <div className="text-center border border-info p-5 m-5 rounded-pill">
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
                <button onClick={signOutHandler} className="btn" style={{ background: '#f21679', color: 'white' }}>Sign Out</button>
            </div>
            <div className='text-center'>
                <a className="m-3" href="https://github.com/mdmehedyhassan/jerins-parlour-client" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-primary">Github Client Link </button>
                </a>

                <a className="m-3" href="https://github.com/mdmehedyhassan/jerins-parlour-server" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-primary">Github Server Link </button>
                </a>
            </div>
        </div>
    );
};

export default Profile;