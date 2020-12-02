import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './styles.scss';
import bannerCate from '../../assets/images/banner-cate.jpg';
import bannerCate2x from '../../assets/images/banner-cate@2x.jpg';

import imageourTuor01 from '../../assets/images/img-our-01.png';
import imageourTuor012x from '../../assets/images/img-our-01@2x.png';
import imageourTuor013x from '../../assets/images/img-our-01@3x.png';

import imageourTuor02 from '../../assets/images/img-our-02.png';
import imageourTuor022x from '../../assets/images/img-our-02@2x.png';
import imageourTuor023x from '../../assets/images/img-our-02@3x.png';

export default function OurTutors() {
  return (
    <div>
      <Helmet title="Our Tutors" />
      <main>
        <div className="banner banner--category">
          <div className="thumbnail">
            <img src={bannerCate} srcSet={bannerCate2x} className="img-fluid" alt="" />
          </div>
          <div className="category__desc ">
            <h2 className="title title--xxl">
              <span className="text-white">Great</span>
              <span className="text-green font-weight-normal">Tutelage</span>
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident,
              <br />
              sunt in culpa qui officia deserunt
            </p>
          </div>
        </div>
        <section className="section section--our-tutors">
          <div className="container">
            <div className="section__inner">
              <h2 className="title title--lg title--deco text-green text-center ">
                Welcome to a new way to learn
                <em className="ic-deco-01" />
              </h2>
              <div className="section__desc text-center m-auto ">
                <p className="trimtext">
                  Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de ambitie om
                  bij de beste scholen van Rotterdam te horen. We zetten ons in om het elke dag een
                  beetje beter te doen. Op Het Epos stellen we zes kernwaarden centraal, die
                  terugkomen in ons onderwijs.
                </p>
              </div>
              <div className="list-our-tutors">
                <div className="item">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 ">
                      <div className="thumbnail">
                        <div className="image-cover image-cover--cycle">
                          <figure className="figure text-center">
                            <img
                              className="img"
                              src={imageourTuor01}
                              srcSet={`${imageourTuor012x} 2x,${imageourTuor013x} 3x`}
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 ">
                      <h5 className="fz24 text-danger">Grant Marshall</h5>
                      <p className="fz18 text-muted">
                        Happiness is not something readymade. It comes from your own actions.
                      </p>
                      <p className="fz14 desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                        et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut ero labore et dolore.
                      </p>
                      <div className="text-left">
                        <Link to="/booking-detail" className="btn btn--red w-25">
                          Connect
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item thumbnail-right">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 ">
                      <div className="thumbnail">
                        <div className="image-cover image-cover--cycle">
                          <figure className="figure text-center">
                            <img
                              className="img"
                              src={imageourTuor02}
                              srcSet={`${imageourTuor022x} 2x,${imageourTuor023x} 3x`}
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 ">
                      <h5 className="fz24 text-danger">Grant Marshall</h5>
                      <p className="fz18 text-muted">
                        Happiness is not something readymade. It comes from your own actions.
                      </p>
                      <p className="fz14 desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                        et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut ero labore et dolore.
                      </p>
                      <div className="text-left">
                        <Link to="/booking-detail" className="btn btn--red w-25">
                          Connect
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 ">
                      <div className="thumbnail">
                        <div className="image-cover image-cover--cycle">
                          <figure className="figure text-center">
                            <img
                              className="img"
                              src={imageourTuor01}
                              srcSet={`${imageourTuor012x} 2x,${imageourTuor013x} 3x`}
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 ">
                      <h5 className="fz24 text-danger">Grant Marshall</h5>
                      <p className="fz18 text-muted">
                        Happiness is not something readymade. It comes from your own actions.
                      </p>
                      <p className="fz14 desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                        et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut ero labore et dolore.
                      </p>
                      <div className="text-left">
                        <Link to="/booking-detail" className="btn btn--red w-25">
                          Connect
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-pagi mb-5 ">
                <nav className="">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#!" aria-label="Previous">
                        <span className="ic-arrow-prev-01" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#!">
                        <span>1</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!">
                        <span>2</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!">
                        <span>3</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#!" aria-label="Next">
                        <span className="ic-arrow-next-01" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
