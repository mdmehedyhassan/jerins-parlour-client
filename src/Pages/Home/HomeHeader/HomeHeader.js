import React from 'react';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import HeaderCarousel from './HeaderCarousel';

const HomeHeader = () => {
    return (
        <div className="container background-style" style={{ padding: '10px' }}>
            <HeaderNav></HeaderNav>
            <div className="row mt-5">
                <HeaderCarousel />
            </div>
        </div>
    );
};

export default HomeHeader;