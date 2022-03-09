import React, { useEffect, useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import BookingListDetails from './BookingListDetails';

const BookingList = () => {
    document.title = "Booking List";
    const { user } = useAuth();
    const [bookingList, setBookingList] = useState([]);
    useEffect(() => {
        axios(`https://whispering-woodland-02622.herokuapp.com/bookings?email=${user?.email}`)
            .then(res => setBookingList(res.data))
    }, [user?.email])
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2 style={{color: '#f21679', fontWeight: '900'}}>Booking List</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="">
                <div className="row">
                    {
                        bookingList.map(book => <BookingListDetails key={book._id} book={book}></BookingListDetails>)
                    }
                </div>
                {
                    bookingList.length === 0 && <h4 style={{color: 'red'}}>Please Booking some Services.</h4>
                }
                
            </div>
        </div>
    );
};

export default BookingList;