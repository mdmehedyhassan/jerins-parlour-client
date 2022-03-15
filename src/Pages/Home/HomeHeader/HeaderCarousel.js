import React from 'react';
import homeHeaderPicOne from '../../../Image/home-header-pic.png';
import homeHeaderPicTwo from '../../../Image/home-header-pic-2.png';
import homeHeaderPicThree from '../../../Image/home-header-pic-3.png';
import { Carousel } from 'react-bootstrap';

const HeaderCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center" >
            <div className="text-center text-md-start">
              <h1 style={{ fontWeight: '700' }}>BEAUTY SALON <br /> <span style={{ color: '#f21679' }}>FOR EVERY WOMEN</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur harum quasi animi modi cum rerum explicabo cupiditate expedita. Sit!</p>
              <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                <button className="btn" style={{ background: '#f21679', color: 'white' }}>Get an Appointment</button>
              </a>
            </div>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <div style={{ width: '85%', marginLeft: '10%' }}>
              <img
                className="d-block w-100"
                src={homeHeaderPicOne}
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center" >
            <div className="text-center text-md-start">
              <h1 style={{ fontWeight: '700' }}>BEAUTY SALON <br /> <span style={{ color: '#f21679' }}>ANTI AGE FACE TREATMENT</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur harum quasi animi modi cum rerum explicabo cupiditate expedita. Sit!</p>
              <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                <button className="btn" style={{ background: '#f21679', color: 'white' }}>Get an Appointment</button>
              </a>
            </div>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <div style={{ width: '85%', marginLeft: '10%' }}>
              <img
                className="d-block w-100"
                src={homeHeaderPicTwo}
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center" >
            <div className="text-center text-md-start">
              <h1 style={{ fontWeight: '700' }}>BEAUTY SALON <br /> <span style={{ color: '#f21679' }}>SKIN CATE TREATMENT</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur harum quasi animi modi cum rerum explicabo cupiditate expedita. Sit!</p>
              <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                <button className="btn" style={{ background: '#f21679', color: 'white' }}>Get an Appointment</button>
              </a>
            </div>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <div style={{ width: '85%', marginLeft: '10%' }}>
              <img
                className="d-block w-100"
                src={homeHeaderPicThree}
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;