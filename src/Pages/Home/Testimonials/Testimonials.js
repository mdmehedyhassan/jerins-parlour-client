import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios(`https://whispering-woodland-02622.herokuapp.com/reviews?skip=${currentNumber}`)
            .then(res => {
                setReviews(res.data?.result)
                const getCount = res.data?.count;
                const pageCount = getCount / 3;
                const pageCountCeil= Math.ceil(pageCount)
                setPage(pageCountCeil)
            })

    }, [currentNumber]);
    return (
        <div className="container mt-5 mb-5">
            <h1 style={{ textAlign: 'center', fontWeight: '800' }}>Reviews</h1>
            <div className='row mt-4'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                {
                    [...Array(page).keys()].map(number => <span
                        key={number}
                        onClick={() => setCurrentNumber(number)}
                    >
                        {
                            currentNumber === number ? 
                            <FontAwesomeIcon style={{ margin: '3px', color: '#f21679' }} icon={faCircleDot} />
                            :
                            <FontAwesomeIcon style={{ margin: '3px' }} icon={faCircle} />
                        }

                    </span>)
                }
            </h2>
        </div>
    );
};

export default Testimonials;