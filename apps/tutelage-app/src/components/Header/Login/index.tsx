import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HeaderLogin = () => {
  const { pathname } = useLocation();
  const urlSignUp = '/auth/register';

  return (
    <>
      {pathname !== urlSignUp ? (
        <li className="menu-user__item">
          <Link className="menu-user__link menu-user__link--login" to="/auth/login">
            <em className="ic-user">icon user</em>
            <span>Sign In</span>
          </Link>
        </li>
      ) : (
        <li className="menu-user__item">
          <Link className="menu-user__link menu-user__link--signup" to="/auth/login">
            <span>Sign In</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default HeaderLogin;
