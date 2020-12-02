import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './styles.scss';

import btnStart from '../../assets/images/btn-start.png';
import bannerAcademic from '../../assets/images/banner_academic.png';
import bannerAcademic2x from '../../assets/images/banner_academic@2x.png';
import bannerAcademic3x from '../../assets/images/banner_academic@3x.png';

import SlickNextArrow from '../SlickPrevArrow';
import SlickPrevArrow from '../SlickPrevArrow';
import slickSliderNextArrow from '../../assets/images/icon/arrow-next.png';
import slickSliderPrevArrow from '../../assets/images/icon/arrow-prev.png';

const Banner = () => {
  const bannerSlider = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <SlickNextArrow>
        <img src={slickSliderNextArrow} alt="" />
      </SlickNextArrow>
    ),
    prevArrow: (
      <SlickPrevArrow>
        <img src={slickSliderPrevArrow} alt="" />
      </SlickPrevArrow>
    ),
  };

  return (
    <div className="banner_academic">
      <div className="banner__sologan">
        <h2 className="title title--xxl text-green">
          Welcome to <br />
          Tutelage
        </h2>
        <p className="desc">
          Excepteur sint occaecat cupidatat non <br />
          proident, sunt in culpa qui officia deserunt
        </p>
        <Link to="#!" className="btn-start">
          <img src={btnStart} className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="banner-slider">
        <div className="js-main-carousel">
          <Slider {...bannerSlider}>
            <div className="carousel-cell">
              <div className="item">
                <img
                  src={bannerAcademic}
                  srcSet={`${bannerAcademic2x} 2x, ${bannerAcademic3x} 3x`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item">
                <img
                  src={bannerAcademic}
                  srcSet={`${bannerAcademic2x} 2x, ${bannerAcademic3x} 3x`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item">
                <img src={bannerAcademic} className="img-fluid" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
