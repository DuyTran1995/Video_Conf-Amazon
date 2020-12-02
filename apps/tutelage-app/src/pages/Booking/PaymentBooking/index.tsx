import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import imgS3Default from '../../../assets/images/img-s3-01.png';
import imgInfoDefault from '../../../assets/images/img-infos-01.png';

const PaymentBooking = props => {
  return (
    <>
      <Helmet title="Booking Payment" />
      <main className="bg-light">
        <div className="container">
          <div className="section section--infos-tutor pt-5">
            <div className="book__wrap">
              <div className="book__content">
                <div className="infos-tutor mb-5">
                  <div className="avatar">
                    <div className="image-cover image-cover--cycle">
                      <img
                        alt=""
                        src={imgS3Default}
                        srcSet="images/img-s3-01@2x.png 2x, images/img-s3-01@3x.png 3x"
                        className="img-fluid img"
                      />
                    </div>
                  </div>
                  <div className="tutor-profile">
                    <h5 className="tutor-name">Request Sent</h5>
                    <p>NAME TUTORS - Will respond soon</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body p-5">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="card-content text-justify pr-3">
                          <h5 className="mb-3">
                            You’ll work with your tutor in tutelage online lesson online lesson tool
                          </h5>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolore
                            officiis. Distinctio eum voluptates necessitatibus, ipsam quia
                            voluptatibus voluptatum earum, rerum delectus laudantium odit.
                            Voluptatum dolorem aut, inventore sapiente officia similique suscipit
                            reiciendis corrupti ad aperiam error ab, ut molestias recusandae
                            consectetur asperiores. Aperiam necessitatibus unde molestias recusandae
                            vel porro.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="thumbnail">
                          <img
                            alt=""
                            src={imgInfoDefault}
                            srcSet="images/img-infos-01@2x.png 2x,images/img-infos-01@3x.png 3x"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 my-5">
                  <hr />
                </div>
                <div className="card mb-5 border-0 bg-transparent">
                  <div className="card-body">
                    <h5 className="mb-3 text-center text-danger">Here’s what comes next</h5>
                    <div className="py-4">
                      <ul className="list list--step colitem-3">
                        <li>
                          <span className="list__marker">
                            <em className="ic-card" />
                          </span>
                          Tutor confirm booking
                        </li>
                        <li>
                          <span className="list__marker">
                            <em className="ic-pay" />
                          </span>
                          Tutor confirm booking
                        </li>
                        <li>
                          <span className="list__marker">
                            <em className="ic-language" />
                          </span>
                          Tutor confirm booking
                        </li>
                      </ul>
                    </div>
                    <p className="card-text w840 text-center">
                      Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de
                      ambitie om bij de beste scholen van Rotterdam te horen. We zetten ons in om
                      het elke dag een beetje beter te doen. Op Het Epos stellen we zes kernwaarden
                      centraal, die terugkomen in ons onderwijs.
                    </p>
                  </div>
                </div>
                <div className="text-center mb-5">
                  <Link to="#!" className="btn btn--red w-25">
                    Add a payment method
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentBooking;
