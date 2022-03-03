import React from 'react';
import Review from './Review';

const allReviews = [
    {
        id: 1,
        img: '',
        name: 'Nash Patrik',
        profession: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto consequatur provident dolor mollitia delectus libero dignissimos nihil, eveniet magni?',
        star: 5
    },
    {
        id: 2,
        img: '',
        name: 'Nash Patrik',
        profession: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto consequatur provident dolor mollitia delectus libero dignissimos nihil, eveniet magni?',
        star: 3
    },
    {
        id: 3,
        img: '',
        name: 'Nash Patrik',
        profession: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto consequatur provident dolor mollitia delectus libero dignissimos nihil, eveniet magni?',
        star: 4
    }

]
const Testimonials = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 style={{textAlign: 'center', fontWeight: '800'}}>Reviews</h1>
            <div className='row mt-4'>
                {
                    allReviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;