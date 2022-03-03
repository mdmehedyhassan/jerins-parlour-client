import React from 'react';
import screenFace from '../../../Image/screen.png'

const Professionally = () => {
    return (
        <div className="container background-style pt-5 pb-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={screenFace} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 style={{fontWeight: '800'}}>Let us Handle your screen <span style={{ color: '#f21679' }}>Professionally</span>.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque reprehenderit suscipit id inventore totam eaque quod nisi facere vero deleniti sint, repellendus amet iusto veritatis incidunt, earum eos a!</p>
                        <div className="row">
                            <div className="col-6">
                                <h2 style={{color: '#f21679', fontWeight: '900'}}>500+</h2>
                                <p>Happy Customer</p>
                            </div>
                            <div className="col-6">
                                <h2 style={{color: '#f21679', fontWeight: '900'}}>16+</h2>
                                <p>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professionally;