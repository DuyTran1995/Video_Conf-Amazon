import React from 'react';
import Slider from 'react-slick';

import s1img01 from '../../../assets/images/s1-img-01.png';
import s1img012x from '../../../assets/images/s1-img-01@2x.png';
import s1img013x from '../../../assets/images/s1-img-01@3x.png';

import './styles.scss';

const Counselors = () => {
  const sectionInnerSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="title title--lg text-green text-center">
        Professional, licensed, and vetted <br />
        Counselors that you can trust
      </h2>
      <div className="section__inner">
        <div className="js-main-carousel-02">
          <Slider {...sectionInnerSettings}>
            <div className="carousel-cell">
              <div className="item ">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Marie Winter</h4>
                    <p className="card-text desc">
                      Happiness is not something readymade. <br />
                      It comes from your own actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item ">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Grant Marshall</h4>
                    <p className="card-text desc">
                      Happiness is not something readymade. <br />
                      It comes from your own actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item ">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Duran Clayton</h4>
                    <p className="card-text desc">
                      If you’re offered a seat on a rocket ship, <br />
                      don’t ask what seat! Just get on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell ">
              <div className="item ">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Julia Petersen</h4>
                    <p className="card-text desc">
                      If you’re offered a seat on a rocket ship, <br />
                      don’t ask what seat! Just get on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell ">
              <div className="item">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Marie Winter</h4>
                    <p className="card-text desc">
                      Happiness is not something readymade. <br />
                      It comes from your own actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Grant Marshall</h4>
                    <p className="card-text desc">
                      Happiness is not something readymade. <br />
                      It comes from your own actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="item">
                <div className="card border-0 card--04">
                  <figure className="figure text-center">
                    <img
                      alt=""
                      src={s1img01}
                      srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h4 className="card-title">Marie Winter</h4>
                    <p className="card-text desc">
                      Happiness is not something readymade. <br />
                      It comes from your own actions.
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

export default Counselors;
