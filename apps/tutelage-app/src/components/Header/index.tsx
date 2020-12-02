import React, { useEffect, useRef, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { User } from '@tutelage-monorepo/tutelage/api-interfaces';

import { UserContext } from '../../contexts/user';
import HeaderLogin from './Login';
import HeaderRegister from './Register';
import LoginSuccess from './LoginSuccess';

import logo from '../../assets/images/logo.png';

const Header = () => {
  const [currentUser] = useContext(UserContext);

  const burgerButton = useRef<HTMLButtonElement>(null);
  const burgerNav = useRef<HTMLDivElement>(null);
  const closeBurgerNav = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const location = useLocation();

  const { authorized } = currentUser as User;

  useEffect(() => {
    burgerNav.current.classList.remove('show');
    document.body.style.overflow = 'visible';
  }, [location.pathname]);

  useEffect(() => {
    burgerButton.current.addEventListener('click', () => {
      burgerNav.current.classList.add('show');
      document.body.style.overflow = 'hidden';
    });

    closeBurgerNav.current.addEventListener('click', () => {
      burgerNav.current.classList.remove('show');
      document.body.style.overflow = 'visible';
    });

    window.addEventListener('scroll', event => {
      const fromTop = window.scrollY;
      const positionHeader = headerRef.current.offsetTop;
      if (fromTop > positionHeader) {
        document.body.classList.add('header-fixed');
      } else {
        document.body.classList.remove('header-fixed');
      }
    });
  }, []);

  return (
    <header className="header" id="header" ref={headerRef}>
      <div className="header-wrap">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/" exact>
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              ref={burgerButton}
              type="button"
              data-toggle="collapse"
              data-target="#navbarMain"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMain" ref={burgerNav}>
              <button className="dismiss-menu" data-toggle="collapse" data-target="#navbarMain">
                <em className="ic-close-modal" ref={closeBurgerNav} />
              </button>
              <ul className="navbar-nav ml-auto align-items-center">
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
                  <NavLink className="nav-link" to="/search-booking" exact>
                    <span className="btn-search">
                      <em className="ic-search">search</em>
                    </span>
                  </NavLink>
                </li>
              </ul>
              {!authorized ? (
                <ul className="menu-user">
                  <HeaderLogin />
                  <HeaderRegister />
                </ul>
              ) : (
                <LoginSuccess />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
