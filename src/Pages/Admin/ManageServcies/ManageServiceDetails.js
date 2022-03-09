import React from 'react';

const ManageServiceDetails = (props) => {
    const { _id, email, title } = props.service;
    return (
        <tr>
            <td className="email-responsive-services-list">{email}</td>
            <td>{title}</td>
            <td >
                <button
                    className="btn btn-danger m-1"
                    onClick={() => props.deleteOrderHandler(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageServiceDetails;