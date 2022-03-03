import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login/Login';

const PrivateRoute = () => {
    const {user} = useAuth();
    return user.email ? <Outlet/> : <Login />;
};

export default PrivateRoute;