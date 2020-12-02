import React from 'react';
import Slider from 'react-slick';

import s1img01 from '../../../assets/images/s1-img-01.png';

const Quote = () => {
  const section06 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="block-quote">
        <div className="block-quote__slider js-main-carousel-03">
          <Slider {...section06}>
            <div className="carousel-cell w-100">
              <div className="card border-0 cart--05 bg-gray-light ">
                <figure className="figure w120 m-auto">
                  <img
                    alt=""
                    src={s1img01}
                    srcSet={`${s1img01}@2x.png 2x, ${s1img01}@3x.png 3x`}
                    className="img-fluid"
                  />
                </figure>
                <div className="card-body text-center pt-0">
                  <h4 className="title title--quote">You’ll be in good company</h4>
                  <div className="deco-quote">
                    <p className="card-text trimtext trimtext--4clamp">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell w-100">
              <div className="card border-0 cart--05 bg-gray-light">
                <figure className="figure w120 m-auto">
                  <img
                    alt=""
                    src={s1img01}
                    srcSet={`${s1img01}@2x.png 2x, ${s1img01}@3x.png 3x`}
                    className="img-fluid"
                  />
                </figure>
                <div className="card-body text-center pt-0">
                  <h4 className="title title--quote">You’ll be in good company</h4>
                  <div className="deco-quote" />
                  <p className="card-text trimtext trimtext--4clamp">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut ero labore et dolore.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-cell w-100">
              <div className="card border-0 cart--05 bg-gray-light">
                <figure className="figure w120 m-auto">
                  <img
                    alt=""
                    src={s1img01}
                    srcSet={`${s1img01}@2x.png 2x, ${s1img01}@3x.png 3x`}
                    className="img-fluid"
                  />
                </figure>
                <div className="card-body text-center pt-0">
                  <h4 className="title title--quote">You’ll be in good company</h4>
                  <div className="deco-quote">
                    <p className="card-text trimtext trimtext--4clamp deco-quote">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Quote;
