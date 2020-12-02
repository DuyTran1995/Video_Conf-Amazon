import React from 'react';
import { Helmet } from 'react-helmet';
//Import Images
import bannerCate from '../../assets/images/banner-cate.jpg';
import bannerCate2x from '../../assets/images/banner-cate.jpg';

import imgs301 from '../../assets/images/img-s3-01.png';
import imgs3012x from '../../assets/images/img-s3-01@2x.png';

import imgs302 from '../../assets/images/img-s3-02.png';
import imgs3022x from '../../assets/images/img-s3-02@2x.png';

import imgs303 from '../../assets/images/img-s3-03.png';
import imgs3032x from '../../assets/images/img-s3-03@2x.png';

import imgs304 from '../../assets/images/img-s3-04.png';
import imgs3042x from '../../assets/images/img-s3-04@2x.png';

import imgs305 from '../../assets/images/img-s3-05.png';
import imgs3052x from '../../assets/images/img-s3-05@2x.png';

import imgs306 from '../../assets/images/img-s3-06.png';
import imgs3062x from '../../assets/images/img-s3-06@2x.png';

const About = () => {
  return (
    <>
      <Helmet title="About Page" />
      <main>
        <div className="banner banner--category">
          <div className="thumbnail">
            <img src={bannerCate} srcSet={bannerCate2x} className="img-fluid" alt="" />
          </div>
          <div className="category__desc">
            <h2 className="title title--xxl">
              <span className="text-white">About us</span>
              <span className="text-green font-weight-normal">Tutelage</span>
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>
          </div>
        </div>
        <section className="section section--our-mission">
          <div className="container">
            <h2 className="title title--lg title--deco text-green text-center">
              Our Mission
              <em className="ic-deco-01" />
            </h2>
            <div className="section__desc text-center m-auto">
              <p className="trimtext">
                Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de ambitie om
                bij de beste scholen van Rotterdam te horen. We zetten ons in om het elke dag een
                beetje beter te doen. Op Het Epos stellen we zes kernwaarden centraal, die
                terugkomen in ons onderwijs.
              </p>
            </div>
            <div className="section__inner">
              <div className="row">
                <div className="col-md-3">
                  <div className="item">
                    <div className="item__icon">
                      <em className="ic-trend-up-icon" />
                    </div>
                    <div className="item__title">
                      <h3>Vision</h3>
                    </div>
                    <div className="item__desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="item__icon">
                      <em className="ic-tree" />
                    </div>
                    <div className="item__title">
                      <h3>Mission</h3>
                    </div>
                    <div className="item__desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="item__icon">
                      <em className="ic-user-02" />
                    </div>
                    <div className="item__title">
                      <h3>People</h3>
                    </div>
                    <div className="item__desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="item__icon">
                      <em className="ic-lightning" />
                    </div>
                    <div className="item__title">
                      <h3>Core value</h3>
                    </div>
                    <div className="item__desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut ero labore et dolore.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr className="hr-gray-light" />
        </div>
        <section className="section section--our-counselors">
          <div className="container">
            <h2 className="title title--lg title--deco text-green text-center">
              Our Counselors
              <em className="ic-deco-01" />
            </h2>
            <div className="section__inner">
              <div className="row">
                <div className="col-md-8">
                  <div className="js-main-carousel-04 slider-our-counselors">
                    <div className="carousel-cell">
                      <div className="item">
                        <div className="card border-0 card--04">
                          <figure className="figure text-center">
                            <img
                              src={imgs301}
                              srcSet={imgs3012x}
                              className=" rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              src={imgs301}
                              srcSet={imgs3012x}
                              className=" rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              src={imgs302}
                              srcSet={imgs3022x}
                              className="rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Grant Marshall</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              src={imgs302}
                              srcSet={imgs3022x}
                              className=" rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Grant Marshall</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              src={imgs303}
                              srcSet={imgs3032x}
                              className="rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Duran Clayton</h4>
                            <p className=" card-text">
                              If you’re offered a seat on a rocket ship, <br />
                              don’t ask what seat! Just get on.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              src={imgs303}
                              srcSet={imgs3032x}
                              className=" rounded-circle img-fluid"
                              alt=""
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Duran Clayton</h4>
                            <p className=" card-text">
                              If you’re offered a seat on a rocket ship, <br />
                              don’t ask what seat! Just get on.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs304}
                              srcSet={imgs3042x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Julia Petersen</h4>
                            <p className=" card-text">
                              If you’re offered a seat on a rocket ship, <br />
                              don’t ask what seat! Just get on.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs304}
                              srcSet={imgs3042x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Julia Petersen</h4>
                            <p className=" card-text">
                              If you’re offered a seat on a rocket ship, <br />
                              don’t ask what seat! Just get on.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs305}
                              srcSet={imgs3052x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs305}
                              srcSet={imgs3052x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs306}
                              srcSet={imgs3062x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Grant Marshall</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs306}
                              srcSet={imgs3062x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Grant Marshall</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" carousel-cell">
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs301}
                              srcSet={imgs3012x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" item">
                        <div className=" card border-0 card--04">
                          <figure className=" figure text-center">
                            <img
                              alt=""
                              src={imgs301}
                              srcSet={imgs3012x}
                              className=" img-fluid rounded-circle"
                            />
                          </figure>
                          <div className=" card-body text-center">
                            <h4 className=" card-title">Marie Winter</h4>
                            <p className=" card-text">
                              Happiness is not something readymade. <br />
                              It comes from your own actions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" footer-our-counselors">
                    <a href="#!" className="btn btn--red">
                      Meet Our Tutors
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 card--04 card--lg">
                    <figure className="figure text-center">
                      <img
                        alt=""
                        src={imgs302}
                        srcSet={imgs3022x}
                        className="img-fluid rounded-circle"
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h4 className="card-title">Grant Marshall</h4>
                      <p className="card-text trimtext">
                        <span className="text-muted">
                          Happiness is not something readymade.
                          <br />
                          It comes from your own actions.
                        </span>
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                        et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut ero labore et dolore.
                      </p>
                      <div className="card-button text-center">
                        <a href="#!" className="btn btn--red">
                          Connect
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr className="hr-gray-light" />
        </div>
        ; ;
        <section className="section section--our-office">
          <div className="container">
            <h2 className="title title--lg title--deco text-green text-center">
              Our Counselors
              <em className="ic-deco-01" />
            </h2>
            <div className="section__inner">
              <div className="row">
                <div className="col-md-6">
                  <p className="desc mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut ero labore et dolore.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="block-schedule">
                    <div className="schedule-slider js-main-carousel-03">
                      <div className="carousel-cell w-100">
                        <div className="item">
                          <div className="item__header">
                            <h3>
                              Good morning,
                              <strong>
                                Hanna <br />
                                this is your schedule looks like today!
                              </strong>
                            </h3>
                            <ul className="list-avatar">
                              <li>
                                <a href="#!" className="avatar">
                                  <img
                                    src="../images/img-s3-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </a>
                              </li>
                              <li>
                                <em className="ic-add" />
                              </li>
                            </ul>
                          </div>
                          <div className="item__body">
                            <div className="schedule-row">
                              <div className="schedule-cell bg-violet">
                                <span>Meeting with the team!</span>
                                <strong>9:00 AM</strong>
                              </div>
                              <div className="schedule-cell bg-blue-light">
                                <span>Call me ! I need Suport </span>
                                <strong>10:00 AM</strong>
                              </div>
                            </div>
                            <div className="schedule-row">
                              <div className="schedule-cell bg-orange">
                                <span>
                                  You go, buy some food for Pepper.
                                  <br />
                                  Pedigreeeeee!
                                </span>
                                <strong>8:00 PM</strong>
                              </div>
                              <div className="schedule-cell bg-pink">
                                <span>Stay focus!!</span>
                                <strong>All-day</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell w-100">
                        <div className="item">
                          <div className="item__header">
                            <h3>
                              Good morning,
                              <strong>
                                Hanna <br />
                                this is your schedule looks like today!
                              </strong>
                            </h3>
                            <ul className="list-avatar">
                              <li>
                                <a href="#!" className="avatar">
                                  <img
                                    src="../images/img-s3-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </a>
                              </li>
                              <li>
                                <em className="ic-add" />
                              </li>
                            </ul>
                          </div>
                          <div className="item__body">
                            <div className="schedule-row">
                              <div className="schedule-cell bg-violet">
                                <span>Meeting with the team!</span>
                                <strong>9:00 AM</strong>
                              </div>
                              <div className="schedule-cell bg-blue-light">
                                <span>Call me ! I need Suport </span>
                                <strong>10:00 AM</strong>
                              </div>
                            </div>
                            <div className="schedule-row">
                              <div className="schedule-cell bg-orange">
                                <span>
                                  You go, buy some food for Pepper.
                                  <br />
                                  Pedigreeeeee!
                                </span>
                                <strong>8:00 PM</strong>
                              </div>
                              <div className="schedule-cell bg-pink">
                                <span>Stay focus!!</span>
                                <strong>All-day</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell w-100">
                        <div className="item">
                          <div className="item__header">
                            <h3>
                              Good morning,
                              <strong>
                                Hanna <br />
                                this is your schedule looks like today!
                              </strong>
                            </h3>
                            <ul className="list-avatar">
                              <li>
                                <a href="#!" className="avatar">
                                  <img
                                    src="../images/img-s3-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </a>
                              </li>
                              <li>
                                <em className="ic-add" />
                              </li>
                            </ul>
                          </div>
                          <div className="item__body">
                            <div className="schedule-row">
                              <div className="schedule-cell bg-violet">
                                <span>Meeting with the team!</span>
                                <strong>9:00 AM</strong>
                              </div>
                              <div className="schedule-cell bg-blue-light">
                                <span>Call me ! I need Suport </span>
                                <strong>10:00 AM</strong>
                              </div>
                            </div>
                            <div className="schedule-row">
                              <div className="schedule-cell bg-orange">
                                <span>
                                  You go, buy some food for Pepper.
                                  <br />
                                  Pedigreeeeee!
                                </span>
                                <strong>8:00 PM</strong>
                              </div>
                              <div className="schedule-cell bg-pink">
                                <span>Stay focus!!</span>
                                <strong>All-day</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-cell w-100">
                        <div className="item">
                          <div className="item__header">
                            <h3>
                              Good morning,
                              <strong>
                                Hanna <br />
                                this is your schedule looks like today!
                              </strong>
                            </h3>
                            <ul className="list-avatar">
                              <li>
                                <a href="#!" className="avatar">
                                  <img
                                    src="../images/img-s3-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </a>
                              </li>
                              <li>
                                <em className="ic-add" />
                              </li>
                            </ul>
                          </div>
                          <div className="item__body">
                            <div className="schedule-row">
                              <div className="schedule-cell bg-violet">
                                <span>Meeting with the team!</span>
                                <strong>9:00 AM</strong>
                              </div>
                              <div className="schedule-cell bg-blue-light">
                                <span>Call me ! I need Suport </span>
                                <strong>10:00 AM</strong>
                              </div>
                            </div>
                            <div className="schedule-row">
                              <div className="schedule-cell bg-orange">
                                <span>
                                  You go, buy some food for Pepper.
                                  <br />
                                  Pedigreeeeee!
                                </span>
                                <strong>8:00 PM</strong>
                              </div>
                              <div className="schedule-cell bg-pink">
                                <span>Stay focus!!</span>
                                <strong>All-day</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
