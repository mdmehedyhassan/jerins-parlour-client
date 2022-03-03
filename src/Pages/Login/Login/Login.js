import React from 'react';
import { useForm } from "react-hook-form";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';

const Login = () => {
    const { googleSignInHandler, signUserWithEmailHandler } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        signUserWithEmailHandler(data.email, data.password);
        reset();
    };
    return (
        <div className="container">
            <HeaderNav></HeaderNav>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-md-8 col-sm-10 login-field-style">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Email" />
                    {errors.email && <span style={{color: '#f21679'}}>Email is required</span>}

                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Password" />
                    {errors.Password && <span style={{color: '#f21679'}}>Password is required minimum 6 characters</span>}
                    
                    <input type="submit" value="Login" style={{ backgroundColor: '#f21679', color: "white" }} className="btn form-control  mt-3" />
                    <br />
                    <p className="mt-2 text-center">Don't have an account? <Link to="/registered" style={{ color: '#f21679' }}>Create an account</Link></p>
                </form>
            </div>

            <h4 className="text-center mt-4 mb-4">---------------or---------------</h4>
            <div className="d-flex justify-content-center">
                <button
                    onClick={googleSignInHandler}
                    className="btn rounded-pill form-control btn-outline-success w-50">
                    <FontAwesomeIcon icon={faGoogle} />oogle Sign in
                </button>
            </div>

        </div>
    );
};

export default Login;