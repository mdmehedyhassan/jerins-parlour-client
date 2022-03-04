import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    document.title = "Add Service";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`http://localhost:5000/services`, (data))
        .then(res => {
            if(res.data.insertedId){
                alert('Service Added successfully!')
                reset();
            }
            if(!res.data.insertedId){
                alert('Something went wrong Please try again.')
            }
        });
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Add Service</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="admin-orders-global-style">
                <div className="p-5 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="login-field-style">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="title">Service Title</label>
                                <input type="text" {...register("title", { required: true })} className="form-control" placeholder="Enter Title" />
                                {errors.title && <p style={{ color: '#f21679' }}>Title is required</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price">Price</label>
                                <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Enter Price" />
                                {errors.price && <p style={{ color: '#f21679' }}>Price is required</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="img">Image Url</label>
                                <input type="text" {...register("img", { required: true })} className="form-control" placeholder="Enter Image URL" />
                                {errors.img && <p style={{ color: '#f21679' }}>Image URL is required</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="description">Description</label>
                                <textarea {...register("description", { required: true })} className="form-control" placeholder="Enter Description"></textarea>
                                {errors.description && <p style={{ color: '#f21679' }}>Description field is required</p>}
                            </div>

                        </div>
                        <input type="submit" value="Add Service" style={{ backgroundColor: '#f21679', color: "white" }} className="btn form-control  mt-3" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;