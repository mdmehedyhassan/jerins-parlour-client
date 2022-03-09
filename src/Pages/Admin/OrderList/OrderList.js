import React, { useEffect, useState } from 'react';
import './OrderList.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {
    document.title = "Order List";
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        axios('https://whispering-woodland-02622.herokuapp.com/orderList')
            .then(res => setOrderList(res.data))
    }, []);
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2 style={{ color: '#f21679', fontWeight: '900'}}>Order List</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div className="">
                <table id="ordersTable">
                    <tr>
                        <th>Name</th>
                        <th className="email-responsive-order-list">Email Id</th>
                        <th>Service</th>
                        <th>Status</th>
                    </tr>
                    {
                        orderList.map(order => <OrderListDetails key={order._id} order={order}></OrderListDetails>)
                    }
                </table>
            </div>
        </div>
    );
};

export default OrderList;