import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const MakeAdmin = () => {
    document.title = "Make Admin";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://whispering-woodland-02622.herokuapp.com/admins', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Admin Added successfully!')
                reset();
            }
            if(!res.data.insertedId){
                alert('Something went wrong Please try again.')
            }
        })
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Make Admin</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} className="form-control " placeholder="example@gmail.com"/>
                    {errors.email && <span>Email field is required</span>}

                    <input type="submit" className="btn mt-3" style={{backgroundColor: '#f21679', color: "white" }} value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;