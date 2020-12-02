import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import NProgress from 'nprogress';

import Public from './Public';
import Auth from './Auth';
import Tutor from './Tutor';
import Learner from './Learner';
import { User, UserType } from '@tutelage-monorepo/tutelage/api-interfaces';
import { UserContext } from '../contexts/user';

const Layouts = {
  public: Public,
  auth: Auth,
  tutor: Tutor,
  learner: Learner,
};

const Layout = ({ children }) => {
  const [currentUser] = useContext(UserContext);
  const { pathname, search } = useLocation();
  const { authorized, type: userType } = currentUser as User;
  const [stateAmplify, setStateAmplify] = useState(
    localStorage.getItem('amplify-authenticator-authState'),
  );

  useEffect(() => {
    setStateAmplify(localStorage.getItem('amplify-authenticator-authState'));
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [pathname, search, stateAmplify, authorized]);

  // Layout Rendering
  const getLayout = () => {
    if (/^\/auth(?=\/|$)/i.test(pathname)) {
      return 'auth';
    }

    if (/^\/tutor(?=\/|$)/i.test(pathname)) {
      return 'tutor';
    }

    if (/^\/learner(?=\/|$)/i.test(pathname)) {
      return 'learner';
    }

    return 'public';
  };

  const Container = Layouts[getLayout()];
  const isUserAuthorized = authorized;
  // Use pathname instead. //const isAuthLayout = getLayout();

  const authenticationRoutes = [
    '/auth/signup-success',
    '/auth/change-password',
    '/tutor-profile',
    '/learner-profile',
  ];
  const loginRoutes = ['/auth/login', '/auth/login/'];
  const learnRouter = ['/learner-profile', '/my-learner'];
  const tutorRouter = ['/tutor-profile', '/my-tutor'];

  const BootstrappedLayout = () => {
    if (
      stateAmplify !== 'signedIn' &&
      authenticationRoutes.includes(pathname) &&
      isUserAuthorized === false
    ) {
      return <Redirect to="/auth/login" />;
    }

    if (
      ((userType === UserType.LEARNER && tutorRouter.includes(pathname)) ||
        (userType === UserType.TUTOR && learnRouter.includes(pathname))) &&
      isUserAuthorized === true
    ) {
      return <Redirect to="/error/404" />;
    }

    if (loginRoutes.includes(pathname) && isUserAuthorized === true) {
      return <Redirect to="/" />;
    }

    return <Container>{children}</Container>;
  };

  return <>{BootstrappedLayout()}</>;
};

export default Layout;
