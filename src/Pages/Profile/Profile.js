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
        </div>
    );
};

export default Profile;