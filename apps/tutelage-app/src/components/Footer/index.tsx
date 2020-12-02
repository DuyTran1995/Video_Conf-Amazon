import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Footer = () => {
  const buttonToTop = useRef<HTMLDivElement>();

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
        buttonToTop.current.classList.add('active');
      } else {
        buttonToTop.current.classList.remove('active');
      }
    };

    buttonToTop.current.addEventListener('click', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  });

  return (
    <footer className="footer bg-gray-dark">
      <div className="container">
        <div className="footer__top d-flex align-content-center justify-content-between">
          <ul className="nav nav--footer">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq" exact>
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-tutors" exact>
                Our Tutors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/terms-conditions" exact>
                Terms and Conditions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="pravacy-policy" exact>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <ul className="nav ml-auto">
            <li
              className="nav-item"
              dangerouslySetInnerHTML={{
                __html: '<a class="nav-link" href="tel: 18001231234">+1800 123 1234</a>',
              }}
            ></li>

            <li
              className="nav-item"
              dangerouslySetInnerHTML={{
                __html:
                  '<a class="nav-link" href="mailto: info@tutelage.com">info@tutelage.com</a>',
              }}
            ></li>
          </ul>
        </div>
        <hr className="hr-gray" />
        <div className="footer__bottom d-flex align-items-center justify-content-between">
          <p className="copyright px-3">Copyright by @Tutelage 2020</p>
          <ul className="nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="#!">
                <em className="ic-insta" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#!">
                <em className="ic-twitter" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#!">
                <em className="ic-face" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div id="backToTop" className="js-back-to-top" ref={buttonToTop}>
        <em className="ic-totop"></em>
      </div>
    </footer>
  );
};

export default Footer;
