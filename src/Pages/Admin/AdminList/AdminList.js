import React, { useEffect, useState } from 'react';
import './AdminList.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminListDetails from './AdminListDetails';

const AdminList = () => {
    document.title = "Admin List";
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        axios('https://whispering-woodland-02622.herokuapp.com/admins')
        .then(res => setAdmins(res.data))
    },[])
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2 style={{ color: '#f21679', fontWeight: '900'}}>Manage Services</h2>
                <Link to="/profile">
                    <button className="btn" style={{ background: '#f21679', color: 'white' }}><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>
            <div >
                <table id="adminTable">
                    <tr >
                        <th>Admin Email Id</th>
                        <th>Status</th>
                    </tr>
                    {
                        admins.map(admin => <AdminListDetails key={admin._id} admin={admin}></AdminListDetails>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AdminList;