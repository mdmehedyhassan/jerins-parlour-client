import React from 'react';
import './Orders.css';
import useAuth from '../../../hooks/useAuth';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import jerinLogo from '../../../Icon/jerinLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCartShopping, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

const Orders = () => {
    const { isDarkTheme } = useAuth();
    const location = useLocation();
    return (
        <div className="container">
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <div className="row">
                <div className="col-xxl-2 col-lg-3 col-12 text-lg-start text-center">
                    <ul className="mt-2 d-flex flex-lg-column">
                        <Link to="/" className="orders-link-style">
                            <li >
                                <img style={{ width: '30px' }} src={jerinLogo} alt="" /> Home
                            </li>
                        </Link>
                        <Link to="/services" className="orders-link-style" >
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} /> Book
                        </li>
                        </Link>
                        <Link to="bookingList" className={location.pathname === "/orders/bookingList"? 'text-danger' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faBasketShopping} /> Booking List
                            </li>
                        </Link>
                        <Link to="review" className={location.pathname === "/orders/review"? 'text-danger' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faCommentDots} /> Review
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="col-xxl-10 col-lg-9 col-12 orders-main-style mt-3">
                    <Routes>
                        <Route path="book/:bookId" element={<Book />} />
                        <Route path="bookingList" element={<BookingList />} />
                        <Route path="review" element={<Review />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Orders;