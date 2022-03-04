import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    const {user} = useAuth();
    return (
        <div className="container background-style pt-5 pb-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input defaultValue={user?.displayName} {...register("name")} className="form-control" placeholder="Name" />
                    </div>

                    <div className="col-md-6 ">
                        <label htmlFor="email">Email</label>
                        <input defaultValue={user?.email} {...register("email", { required: true })} className="form-control" placeholder="Email" />
                        {errors.email && <span style={{ color: '#f21679' }}>This field is required</span>}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="address">Address</label>
                        <input {...register("address")} className="form-control" placeholder="Address" />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="number">Phone Number</label>
                        <input {...register("phone", { required: true })} className="form-control" placeholder="Phone Number" />
                        {errors.phone && <span style={{ color: '#f21679' }}>This field is required</span>}
                    </div>
                    <div className="p-3">
                        <label htmlFor="message">Your Message</label>
                        <textarea {...register("message", { required: true })} className="form-control" placeholder="Your Message"></textarea>
                        {errors.phone && <span style={{ color: '#f21679' }}>This field is required</span>}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" value="Send Message" style={{ background: '#f21679', color: 'white' }} className="form-control w-50 mt-3" />
                </div>
            </form>
        </div>
    );
};

export default Contact;