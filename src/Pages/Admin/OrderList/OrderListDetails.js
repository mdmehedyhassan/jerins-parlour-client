import axios from 'axios';
import React from 'react';

const OrderListDetails = (props) => {
    const { _id, name, email, title, status } = props.order;
    const updateOrderHandler = (id) => {
        axios.put(`https://whispering-woodland-02622.herokuapp.com/orderUpdate/${id}`)
            .then(res => {
                if(res.status === 200){
                    window.location.reload();
                }
                if(res.status !== 200){
                    alert('Something went wrong please try again!')
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td >
                {
                    status === "Pending" ?
                        <button
                            className="btn btn-danger m-1"
                            onClick={() => updateOrderHandler(_id)}
                        >
                            {status}
                        </button>
                        :
                        <button
                            className="btn btn-success m-1"
                        >
                            {status}
                        </button>
                }
            </td>
        </tr>
    );
};

export default OrderListDetails;