import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { isEmpty } from '@aws-amplify/core';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';

import './style.scss';

interface Props {
  override?: string;
  onStateChange?: any;
  authState?: any;
}

const INITIAL_STATE = {
  username: '',
  password: '',
};

const Login = (props: Props) => {
  const { onStateChange } = props;
  const _validAuthStates = ['signIn', 'signedOut', 'signedUp'];
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const validationSchema = YUP.object().shape({
    username: YUP.string()
      .email('Invalid email address')
      .label('username')
      .required('Email is required'),
    password: YUP.string().label('password').required('Password is required'),
  });

  const checkContact = async user => {
    try {
      const data = await Auth.verifiedContact(user);
      if (!isEmpty(data.verified)) {
        onStateChange('signedIn', user);
      } else {
        user = Object.assign(user, data);
        onStateChange('verifyContact', user);
      }
    } catch (err) {
      setDataMessage(dataMessage => ({
        ...dataMessage,
        message: err.message,
        resultStatus: false,
      }));
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const { username, password } = values;
      try {
        const userAuth = await Auth.signIn(username, password);
        if (userAuth.challengeName === 'NEW_PASSWORD_REQUIRED') {
          onStateChange('requireNewPassword', userAuth);
        } else {
          checkContact(userAuth);
        }
        resetForm({});
      } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
          onStateChange('confirmSignUp', { username });
          resetForm({});
        } else if (err.code === 'PasswordResetRequiredException') {
          onStateChange('forgotPassword', { username });
          resetForm({});
        } else {
          setDataMessage(dataMessage => ({
            ...dataMessage,
            message: 'Incorrect username or password',
            resultStatus: false,
          }));
        }
      }
    },
  });

  const handleDisableErr = (disable: boolean) => {
    if (disable) setDataMessage({ ...dataMessage, message: '', resultStatus: false });
  };

  const handleLoginFacebook = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      });
    } catch (err) {
      setDataMessage(dataMessage => ({
        ...dataMessage,
        message: 'Crash! Please try again later.',
        resultStatus: false,
      }));
    }
  };

  return _validAuthStates.includes(props.authState) ? (
    <>
      <Helmet title="Sign in page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              SIGN IN
            </h1>
            <div className="row">
              <div className="col-md-12">
                <div className="block-form">
                  <div className="block-form__inner">
                    <div className="login-width-facebook">
                      <Link
                        to="#facebook"
                        className="btn btn--login-face w-100"
                        onClick={handleLoginFacebook}
                      >
                        <em className="ic-face-b" />
                        <span>Log in with Facebook</span>
                      </Link>
                    </div>
                    <div className="divider divider--or">
                      <span>OR</span>
                    </div>
                    {dataMessage.message && (
                      <Notification handleDisableErr={handleDisableErr} dataMessage={dataMessage} />
                    )}

                    <form
                      className="form form-login--insite m-auto"
                      method={'POST'}
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            formik.errors.username && formik.touched.username
                              ? 'validate-form-error'
                              : ''
                          }`}
                          placeholder="Email"
                          name="username"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.username}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.username}
                          touchedOop={formik.touched.username}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={`form-control ${
                            formik.errors.password && formik.touched.password
                              ? 'validate-form-error'
                              : ''
                          }`}
                          placeholder="Password"
                          name="password"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.password}
                          touchedOop={formik.touched.password}
                        />
                      </div>
                      <div className="form-group row justify-align-center">
                        <div className="col-6">
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Remember me</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-6 form-check--align">
                          <div className="form-check--custom text-right">
                            <button className="text-green ">
                              <Link to="/auth/forgot-password">
                                <span>Forgot password</span>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn--red w-50">
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div className="divider" />
                    <p className="text-muted fz18">
                      Don’t have account ? <Link to="/auth/register">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  ) : (
    <></>
  );
};

export default Login;
