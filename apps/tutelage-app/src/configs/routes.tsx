import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import { ScrollToTop } from '@tutelage-monorepo/shared/react-util';

import Layout from '../layouts';
import GlobalContext from '../contexts';

const routes = [
  {
    name: 'Home',
    path: '/',
    Component: lazy(() => import('../pages/Home')),
    exact: true,
    props: {},
  },

  // Auth Pages
  {
    name: 'Authenticator Login',
    path: '/auth/login',
    Component: lazy(() => import('../pages/Auth/Authentication')),
    exact: true,
    props: { authState: 'signIn' },
  },
  {
    name: 'SignUpSuccess',
    path: '/auth/signup-success',
    Component: lazy(() => import('../pages/Auth/SignUpSuccess')),
    exact: true,
    props: {},
  },
  {
    name: 'Authenticator Register',
    path: '/auth/register',
    Component: lazy(() => import('../pages/Auth/Authentication')),
    exact: true,
    props: { authState: 'signUp' },
  },
  {
    name: 'Authenticator Forgot Password',
    path: '/auth/forgot-password',
    Component: lazy(() => import('../pages/Auth/Authentication')),
    exact: true,
    props: { authState: 'ForgotPassword' },
  },
  {
    path: '/auth/change-password',
    Component: lazy(() => import('../pages/Auth/ChangePassword')),
    exact: true,
    props: {},
  },

  // Static Pages
  {
    name: 'FAQ',
    path: '/faq',
    Component: lazy(() => import('../pages/FAQ')),
    exact: true,
    props: {},
  },

  {
    name: 'Contact',
    path: '/contact',
    Component: lazy(() => import('../pages/Contact')),
    exact: true,
    props: {},
  },

  // Tutor Pages
  {
    name: 'OurTutors',
    path: '/our-tutors',
    Component: lazy(() => import('../pages/OurTutors')),
    exact: true,
    props: {},
  },

  {
    name: 'TutorProfile',
    path: '/tutor-profile',
    Component: lazy(() => import('../pages/TutorProfile')),
    exact: true,
    props: {},
  },

  // Search Pages
  {
    name: 'SearchPage',
    path: '/result-search',
    Component: lazy(() => import('../pages/SearchPage')),
    exact: true,
    props: {},
  },

  //Learner profile property id
  {
    name: 'LearnerProfile',
    path: '/learner-profile',
    Component: lazy(() => import('../pages/LearnerProfile')),
    exact: true,
    props: {},
  },

  // Booking Tutor
  {
    name: 'Search Booking',
    path: '/search-booking',
    Component: lazy(() => import('../pages/Booking/SearchBooking')),
    exact: true,
    props: {},
  },

  {
    name: 'Booking Detail',
    path: '/booking-detail/:id',
    Component: lazy(() => import('../pages/Booking/BookingDetail')),
    exact: true,
    props: {},
  },

  {
    name: 'Payment Booking',
    path: '/payment-booking',
    Component: lazy(() => import('../pages/Booking/PaymentBooking')),
    exact: true,
    props: {},
  },

  // System Pages
  {
    name: 'System404',
    path: '/error/404',
    Component: lazy(() => import('../pages/System/System404')),
    exact: true,
    props: {},
  },
];

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <ToastProvider autoDismiss={true}>
        <GlobalContext>
          <Layout>
            <Switch>
              {routes.map(({ path, Component, exact, props }) => (
                <Route
                  path={path}
                  key={path}
                  exact={exact}
                  render={() => (
                    <Suspense fallback={null}>
                      {props.authState ? <Component authState={props.authState} /> : <Component />}
                    </Suspense>
                  )}
                />
              ))}
              <Redirect to="/error/404" />
            </Switch>
          </Layout>
        </GlobalContext>
      </ToastProvider>
    </Router>
  );
};

export default Routes;
