import React from 'react';

import './styles.scss';

const Rating = () => {
  return (
    <div className="container">
      <h2 className="title title--lg text-green text-center">Over 2,000,000 users choose</h2>
      <div className="block-rate ">
        <div className="d-flex justify-content-center">
          <span>
            <em className="ic-star-02" />
          </span>
          <span>
            <em className="ic-star-02" />
          </span>
          <span>
            <em className="ic-star-02" />
          </span>
          <span>
            <em className="ic-star-02" />
          </span>
          <span>
            <em className="ic-star-01" />
          </span>
        </div>
      </div>
      <div className="section__desc text-center m-auto">
        <p className="desc">
          Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de ambitie om bij de
          beste scholen van Rotterdam te horen. We zetten ons in om het elke dag een beetje beter te
          doen. Op Het Epos stellen we zes kernwaarden centraal, die terugkomen in ons onderwijs.
        </p>
      </div>
      <div className="section__inner">
        <div className="row">
          <div className="col-md-4">
            <div className="card card--03 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">000.000</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card--03 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">000.000</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card--03 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">000.000</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut ero labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
