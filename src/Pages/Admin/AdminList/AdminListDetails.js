import React from 'react';

const AdminListDetails = ({admin}) => {
    const deleteAdminHandler = (id) => {
        console.log(id)
    }
    return (
        <tr>
            <td>{admin.email}</td>
            <td >
                <button
                    className="btn btn-danger m-1"
                    onClick={() => deleteAdminHandler(admin._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default AdminListDetails;