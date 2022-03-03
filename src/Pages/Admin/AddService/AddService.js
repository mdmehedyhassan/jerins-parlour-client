import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddService = () => {
    document.title = "Add Service";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
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
                <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-md-8 col-sm-10 login-field-style">
                        <label htmlFor="title">Service Title</label>
                        <input type="text" {...register("title", { required: true })} className="form-control" placeholder="Enter Title" />
                        {errors.title && <span style={{ color: '#f21679' }}>Title is required</span>}

                        <label htmlFor="price">Price</label>
                        <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Enter Price" />
                        {errors.price && <span style={{ color: '#f21679' }}>Price is required</span>}

                        <label htmlFor="img">Image Url</label>
                        <input type="text" {...register("img", { required: true })} className="form-control" placeholder="Enter Image URL" />
                        {errors.img && <span style={{ color: '#f21679' }}>Image URL is required</span>}

                        <label htmlFor="description">Description</label>
                        <textarea {...register("description", { required: true })} className="form-control" placeholder="Enter Description"></textarea>
                        {errors.description && <span style={{ color: '#f21679' }}>Description field is required</span>}
                    

                        <input type="submit" value="Login" style={{ backgroundColor: '#f21679', color: "white" }} className="btn form-control  mt-3" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;