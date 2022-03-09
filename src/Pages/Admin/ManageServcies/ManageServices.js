import React, { useEffect, useState } from 'react';
import './ManageServices.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ManageServiceDetails from './ManageServiceDetails';

const ManageServices = () => {
    document.title = "Manage Services";
    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        axios('https://whispering-woodland-02622.herokuapp.com/orderList')
            .then(res => setManageServices(res.data))
    }, []);
   
    const deleteOrderHandler = (id) => {
        axios.delete(`https://whispering-woodland-02622.herokuapp.com/orderDelete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
                if (res.status !== 200) {
                    alert('Something went wrong please try again!')
                }
            })
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2 style={{ color: '#f21679', fontWeight: '900'}}>Manage Services</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div >
                <table id="servicesTable">
                    <tr >
                        <th className="email-responsive-services-list">Email Id</th>
                        <th>Service</th>
                        <th>Status</th>
                    </tr>
                    {
                        manageServices.map(service => <ManageServiceDetails key={service._id} service={service} deleteOrderHandler={deleteOrderHandler}></ManageServiceDetails>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageServices;