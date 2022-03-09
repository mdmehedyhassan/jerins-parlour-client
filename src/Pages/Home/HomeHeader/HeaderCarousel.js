import React from 'react';
import homeHeaderPicOne from '../../../Image/home-header-pic.png';
import homeHeaderPicTwo from '../../../Image/home-header-pic-2.png';
import homeHeaderPicThree from '../../../Image/home-header-pic-3.png';
import { Carousel } from 'react-bootstrap';

const HeaderCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeHeaderPicOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeHeaderPicTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={homeHeaderPicThree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;