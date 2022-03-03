import { faBasketShopping, faPlus, faTableCells, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import jerinLogo from '../../../Icon/jerinLogo.png';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServcies/ManageServices';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
    const { isDarkTheme } = useAuth();
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
                        <Link to="orderList" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faBasketShopping} /> Order List
                            </li>
                        </Link>
                        <Link to="addService" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faPlus} /> Add Service
                            </li>
                        </Link>
                        <Link to="makeAdmin" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </li>
                        </Link>
                        <Link to="manageServices" className="orders-link-style">
                            <li>
                                <FontAwesomeIcon icon={faTableCells} /> Manage Services
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="col-xxl-10 col-9 orders-main-style">
                    <Routes>
                        <Route path="orderList" element={<OrderList />} />
                        <Route path="addService" element={<AddService />} />
                        <Route path="makeAdmin" element={<MakeAdmin />} />
                        <Route path="manageServices" element={<ManageServices />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Admin;