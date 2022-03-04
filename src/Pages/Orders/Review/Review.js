import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';


const Review = () => {
    document.title = "Review";
    const {user} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const getData = {...data};
        getData.img = user?.photoURL;
        
        axios.post('https://whispering-woodland-02622.herokuapp.com/reviews', getData)
        .then(res => {
            if(res.data.insertedId){
                alert('Service Added successfully!')
                reset();
            }
            if(!res.data.insertedId){
                alert('Something went wrong Please try again.')
            }
        })
        reset();
    };
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Review</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input defaultValue={user?.displayName} {...register("name")} className="form-control" placeholder="Name" />
                    {errors.name && <p style={{ color: '#f21679' }}>Name field is required</p>}

                    <label htmlFor="email">Email</label>
                    <input defaultValue={user?.email} {...register("email", { required: true })} className="form-control" placeholder="Email" />
                    {errors.email && <p style={{ color: '#f21679' }}>Email field is required</p>}
                    
                    <label htmlFor="star">Rating</label>
                    <input type="number" defaultValue={5} {...register("star", { required: true, min: 1, max: 5 } )} className="form-control" placeholder="Give Rating" />
                    {errors.star && <p style={{ color: '#f21679' }}>Rating field is required minimum 1 and maximum 5</p>}

                    <label htmlFor="review" >Your Review</label>
                    <textarea {...register("review", { required: true })} className="form-control" placeholder="Your Review"></textarea>
                    {errors.phone && <p style={{ color: '#f21679' }}>Review field is required</p>}

                    <input type="submit" value="Review" style={{ background: '#f21679', color: 'white' }} className="form-control mt-3" />
                </form>
            </div>
        </div>
    );
};

export default Review;