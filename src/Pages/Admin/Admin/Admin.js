import { faBasketShopping, faPlus, faTableCells, faUserPlus, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import jerinLogo from '../../../Icon/jerinLogo.png';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import AddService from '../AddService/AddService';
import AdminList from '../AdminList/AdminList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServcies/ManageServices';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
    const { isDarkTheme } = useAuth();
    const location = useLocation();
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
                        <Link to="orderList" className={location.pathname === "/admin/orderList"? 'text-danger' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faBasketShopping} /> Order List
                            </li>
                        </Link>
                        <Link to="addService" className={location.pathname === "/admin/addService"? 'text-danger' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faPlus} /> Add Service
                            </li>
                        </Link>
                        <Link to="makeAdmin" className={location.pathname === "/admin/makeAdmin"? 'text-danger' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </li>
                        </Link>
                        <Link to="manageServices" className={location.pathname === "/admin/manageServices"? 'text-danger ' : "orders-link-style" }>
                            <li>
                                <FontAwesomeIcon icon={faTableCells} /> Manage Services
                            </li>
                        </Link>
                        <Link to="adminList" className={location.pathname === "/admin/adminList"? 'text-danger' : "orders-link-style"}>
                            <li>
                                <FontAwesomeIcon icon={faUsersGear} /> Admin List
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
                        <Route path="adminList" element={<AdminList />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Admin;