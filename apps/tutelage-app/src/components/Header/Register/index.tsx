import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HeaderRegister = () => {
  const { pathname } = useLocation();
  const urlSignUp = '/auth/register';

  return (
    <>
      {pathname === urlSignUp ? (
        <li className="menu-user__item">
          <Link className="menu-user__link menu-user__link--login" to="/auth/register">
            <span>Sign Up</span>
          </Link>
        </li>
      ) : (
        <li className="menu-user__item">
          <Link className="menu-user__link menu-user__link--signup" to="/auth/register">
            <span>Sign Up</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default HeaderRegister;
