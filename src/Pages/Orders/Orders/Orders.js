import React from 'react';
import './Orders.css'
import useAuth from '../../../hooks/useAuth';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import jerinLogo from '../../../Icon/jerinLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCartShopping, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

const Orders = () => {
    const { isDarkTheme } = useAuth();
    document.title = "Orders";
    return (
        <div className="container">
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <div className="row">
                <div className="col-xxl-2 col-3">
                    <ul>
                        <Link to="/">
                            <li >
                                <img style={{ width: '40px' }} src={jerinLogo} alt="" />
                            </li>
                        </Link>
                        <Link to="book" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faCartShopping} /> Book
                            </li>
                        </Link>
                        <Link to="bookingList" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faBasketShopping} /> Booking List
                            </li>
                        </Link>
                        <Link to="review" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faCommentDots} /> Review
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="col-xxl-10 col-9 orders-main-style">
                    <Routes>
                        <Route path="book" element={<Book />} />
                        <Route path="bookingList" element={<BookingList />} />
                        <Route path="review" element={<Review />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Orders;