import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './styles.scss';

const Contact = () => {
  return (
    <>
      <Helmet title="Contact Us" />
      <main>
        <section className="section section--contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <h1 className="title title--lg font-weight-normal mb-5">
                  <span className="text-green">Your</span>
                  <br />
                  <span>Required information</span>
                </h1>
                <div className="block-form">
                  <form action="#" className="form form--contact">
                    <div className="form-row">
                      <div className="form-group col">
                        <input type="text" className="form-control" placeholder="First name" />
                      </div>
                      <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows={5}
                        defaultValue={''}
                      />
                    </div>
                    <div className="text-center my-5">
                      <Link to="#!" className="btn btn--red">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 ">
                <div id="maps">
                  <div className="maps-content">
                    <iframe
                      title="Maps Content"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.3382567035!2d106.41504071638664!3d10.755341071470365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1593766826228!5m2!1sen!2s"
                      width={600}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                  <div className="block-detail-contact">
                    <ul className="nav nav-infos-contact">
                      <li className="nav-item item-local">
                        <em className="ic-local" />
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                      </li>
                    </ul>
                  </div>
                  <div className="block-detail-contact">
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="nav nav-infos-contact">
                        <li className="nav-item item-phone">
                          <em className="ic-phone" />
                          <span>+1 800 123 1234</span>
                        </li>
                        <li className="nav-item item-email">
                          <em className="ic-email" />
                          <span>email@website.com</span>
                        </li>
                      </ul>
                      <ul className="nav nav-social-contact">
                        <li className="nav-item">
                          <Link to="#!">
                            <em className="ic-insta" />
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#!">
                            <em className="ic-twitter" />
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#!">
                            <em className="ic-face" />
                          </Link>
                        </li>
                      </ul>
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

export default Contact;
