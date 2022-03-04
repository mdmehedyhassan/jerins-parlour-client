import React from 'react';
import homeHeaderPic from '../../../Image/home-header-pic.png';
import HeaderNav from '../../Share/HeaderNav/HeaderNav';

const HomeHeader = () => {
    return (
        <div className="container background-style" style={{ padding: '10px' }}>
            <HeaderNav></HeaderNav>
            <div className="row mt-5">
                <div className="col-md-6 d-flex align-items-center" >
                    <div>
                        <h1 style={{ fontWeight: '700' }}>BEAUTY SALON <br /> ROR EVERY WOMEN</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur harum quasi animi modi cum rerum explicabo cupiditate expedita. Sit!</p>
                        <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                            <button className="btn" style={{ background: '#f21679', color: 'white' }}>Get an Appointment</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6" style={{ textAlign: 'center' }}>
                    <img style={{ width: '80%' }} src={homeHeaderPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;