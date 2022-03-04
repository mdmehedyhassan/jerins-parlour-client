import React, { useEffect, useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Book = () => {
    document.title = "Book";
    const { user } = useAuth();
    const { bookId } = useParams();
    const [bookData, setBookData] = useState();
    console.log(bookData);

    useEffect(() => {
        axios(`http://localhost:5000/book/${bookId}`)
            .then(res => setBookData(res?.data));
    }, [bookId]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const getData = {...data};
        getData.title = bookData?.title;
        getData.img = bookData.img;
        getData.description = bookData.description;
        getData.price = bookData.price;
        getData.status = 'Pending';
        axios.post('http://localhost:5000/bookings', getData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking successfully!')
                    reset();
                }
                if (!res.data.insertedId) {
                    alert('Something went wrong Please try again.')
                }
            })
        reset();
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Book</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>

            <div className="admin-orders-global-style">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4><small style={{color:'gray'}}>Service Name:</small> {bookData?.title}</h4>
                    <p><small style={{color:'gray'}}>Price:</small> ${bookData?.price}</p>

                    <label htmlFor="name">Name</label>
                    <input defaultValue={user?.displayName} {...register("name")} className="form-control" placeholder="Enter Your Name" />
                    {errors.name && <p style={{ color: '#f21679' }}>Name field is required</p>}

                    <label htmlFor="email">Email</label>
                    <input defaultValue={user?.email} {...register("email", { required: true })} className="form-control" placeholder="Enter Your Email" />
                    {errors.email && <p style={{ color: '#f21679' }}>Email field is required</p>}

                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" {...register("phone")} className="form-control" placeholder="Enter Your Phone Number" />

                    <label htmlFor="address">Address</label>
                    <input type="text" {...register("address", { required: true })} className="form-control" placeholder="Enter Your Address" />
                    {errors.address && <p style={{ color: '#f21679' }}>Address field is required</p>}

                    <input type="submit" value="Confirm Booking" style={{ background: '#f21679', color: 'white' }} className="form-control mt-3" />
                </form>
            </div>
        </div>
    );
};

export default Book;