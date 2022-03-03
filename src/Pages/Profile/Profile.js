import React from 'react';
import useAuth from '../../hooks/useAuth';
import HeaderNav from '../Share/HeaderNav/HeaderNav';

const Profile = () => {
    const {user, signOutHandler} = useAuth();
    return (
        <div className="container">
            <HeaderNav></HeaderNav>
           <h1>{user.email}</h1> 
           <button onClick={signOutHandler} className="btn" style={{ background: '#f21679', color: 'white' }}>Sign Out</button>
        </div>
    );
};

export default Profile;