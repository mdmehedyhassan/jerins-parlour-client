import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';

const Registered = () => {
    const {createUserWithEmailHandler, googleSignInHandler} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.password === data.cPassword) {
            createUserWithEmailHandler(data.name, data.email, data.password)
            reset();
        }
        if(data.password !== data.cPassword) {
            alert("Sorry your Password and Confirm Password are does not match.")
        }
        
    };
    return (
        <div className="container">
            <HeaderNav></HeaderNav>
            <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-md-8 col-sm-10 login-field-style">
                <label htmlFor="name">Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} className="form-control " placeholder="Name" />
                {errors.name && <span style={{color: '#f21679'}}>Name is required</span>}

                <label htmlFor="email">Email</label>
                <input type="email" {...register("email", { required: true })} className="form-control " placeholder="Email" />
                {errors.email && <span style={{color: '#f21679'}}>Email is required</span>}

                <label htmlFor="password">Password</label>
                <input type="password" {...register("password", { required: true, minLength: 6 })} className="form-control " placeholder="Password" />
                {errors.Password && <span style={{color: '#f21679'}}>Password is required minimum 6 characters</span>}

                <label htmlFor="cPassword">Confirm Password</label>
                <input type="password" {...register("cPassword", { required: true })} className="form-control " placeholder="Confirm Password" />

                <input type="submit" value="Sign in" style={{ backgroundColor: '#f21679', color:"white" }} className="btn form-control  mt-3" />
                <br />
                <p className="mt-2 text-center">Already have an account? <Link to="/login" style={{ color: '#f21679' }}>Login</Link></p>
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

export default Registered;