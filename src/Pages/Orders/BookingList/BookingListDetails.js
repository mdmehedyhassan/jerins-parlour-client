import React from 'react';

const BookingListDetails = (props) => {
    const { img, title, description, status } = props.book;
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="col-md-6">
            <div style={{ borderRadius: '5px' }} className="p-2 mt-2 border border-secondary">
                <div className="d-flex justify-content-between align-items-center">
                    <img style={{ width: '100px', borderRadius: '50%' }} src={img} alt="" />
                    <div>
                        <button className={`btn ${status !== "Pending" ? "btn-success" : "btn-danger"}`}>{status}</button>
                    </div>
                </div>
                <h4 className="mt-2">{title}</h4>
                <p style={{ textAlign: 'justify', color: 'gray' }}>{description}</p>
            </div>
        </div>
    );
};

export default BookingListDetails;