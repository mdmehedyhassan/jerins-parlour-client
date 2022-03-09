import React from 'react';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';
import HeaderCarousel from './HeaderCarousel';

const HomeHeader = () => {
    return (
        <div className="container background-style" style={{ padding: '10px' }}>
            <HeaderNav></HeaderNav>
            <div className="row mt-5">

                <div className="col-md-6 d-flex align-items-center" >
                    <div className="text-center text-md-start">
                        <h1 style={{ fontWeight: '700' }}>BEAUTY SALON <br /> <span style={{ color: '#f21679' }}>ROR EVERY WOMEN</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur harum quasi animi modi cum rerum explicabo cupiditate expedita. Sit!</p>
                        <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                            <button className="btn" style={{ background: '#f21679', color: 'white' }}>Get an Appointment</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6" style={{ textAlign: 'center' }}>
                    <div style={{ width: '85%', marginLeft: '10%'}}>
                        <HeaderCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;