import React from 'react';

import howItWorkImg1 from '../../../assets/images/img-s2-01.png';
import howItWorkImg12x from '../../../assets/images/img-s2-01@2x.png';
import howItWorkImg13x from '../../../assets/images/img-s2-01@3x.png';
import howItWorkImg2 from '../../../assets/images/img-s2-02.png';
import howItWorkImg22x from '../../../assets/images/img-s2-02@2x.png';
import howItWorkImg23x from '../../../assets/images/img-s2-02@3x.png';
import howItWorkImg3 from '../../../assets/images/img-s2-03.png';
import howItWorkImg32x from '../../../assets/images/img-s3-02@2x.png';
import howItWorkImg33x from '../../../assets/images/img-s3-02@3x.png';

import './styles.scss';

const HowItWork = () => {
  return (
    <div className="container">
      <h2 className="title title--lg text-green text-center">How it work</h2>
      <div className="section02-inner">
        <div className="card card--02 border-0">
          <figure className="figure">
            <img
              src={howItWorkImg1}
              srcSet={`${howItWorkImg12x} 2x, ${howItWorkImg13x} 3x`}
              alt=""
              className="img-fluid"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title text-center">Find matched tutor for you</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et
              dolore.
            </p>
          </div>
        </div>
        <div className="card card--02 border-0">
          <figure className="figure">
            <img
              src={howItWorkImg2}
              srcSet={`${howItWorkImg22x} 2x, ${howItWorkImg23x} 3x`}
              alt=""
              className="img-fluid"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title text-center">Book and pay</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et
              dolore.
            </p>
          </div>
        </div>
        <div className="card card--02 border-0">
          <figure className="figure">
            <img
              src={howItWorkImg3}
              srcSet={`${howItWorkImg32x} 2x, ${howItWorkImg33x} 3x`}
              alt=""
              className="img-fluid"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title text-center">Chat, Video Conferencing</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et
              dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
