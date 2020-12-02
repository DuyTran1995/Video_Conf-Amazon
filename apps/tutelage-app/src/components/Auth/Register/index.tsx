import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';
import { UserType } from '@tutelage-monorepo/tutelage/api-interfaces';

interface Props {
  override?: string;
  onStateChange?: any;
  authState?: string;
}

const INITIAL_STATE = {
  password: '',
  name: '',
  email: '',
  confirmPassword: '',
  userType: UserType.LEARNER,
};

const Register = (props: Props) => {
  const [disableSignUp, setDisableSignUp] = useState(true);
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const validationSchema = YUP.object().shape({
    name: YUP.string().label('name').required('Name is required'),
    email: YUP.string().email('Invalid email address').label('email').required('Email is required'),
    password: YUP.string()
      .label('password')
      .required('Password is required')
      .matches(/(?=.*[a-z])/, 'One lowercase required!')
      .matches(/(?=.*[A-Z])/, 'One uppercase required!')
      .matches(/(?=.*[0-9])/, 'One numeric required!')
      .min(8, 'Minimum 8 characters required!'),
    confirmPassword: YUP.string()
      .required('Confirm password is required')
      .label('Confirm password')
      .oneOf([YUP.ref('password'), null], 'Passwords do not match'),
  });

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const { password, name, email, confirmPassword, userType } = values;
      if (password === confirmPassword) {
        try {
          await Auth.signUp({
            username: email,
            password: password,
            attributes: {
              name,
              'custom:userType': `${userType}`,
            },
          });
          props.onStateChange('confirmSignUp', { username: email, password: password });
          resetForm({});
        } catch (err) {
          setDataMessage({
            ...dataMessage,
            message: err.message,
            resultStatus: false,
          });
        }
      } else {
        setDataMessage({
          ...dataMessage,
          message: 'Passwords do not match!',
          resultStatus: false,
        });
      }
    },
  });

  const changeUserTypeTutor = () => {
    formik.values.userType = UserType.TUTOR;
  };

  const changeUserTypeLearner = () => {
    formik.values.userType = UserType.LEARNER;
  };

  const handlePrivacyPolicy = () => {
    setDisableSignUp(!disableSignUp);
  };

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

  return props.authState === 'signUp' ? (
    <div>
      <Helmet title="Register page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-4 text-center">
              {formik.values.userType === UserType.LEARNER
                ? 'SIGN UP AS LEARNER'
                : 'SIGN UP AS TUTOR'}
            </h1>
            <div className="row">
              <div className="col-md-12">
                <div className="block-form">
                  <div className="block-form__inner">
                    <div className="login-width-facebook">
                      <button className="btn btn--login-face w-100" onClick={handleLoginFacebook}>
                        <em className="ic-face-b" />
                        <span>Sign Up with Facebook</span>
                      </button>
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
                          type="text"
                          className={`form-control ${
                            formik.errors.name && formik.touched.name ? 'validate-form-error' : ''
                          }`}
                          placeholder="Name"
                          name="name"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.name}
                          touchedOop={formik.touched.name}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            formik.errors.email && formik.touched.email ? 'validate-form-error' : ''
                          }`}
                          placeholder="Email"
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.email}
                          touchedOop={formik.touched.email}
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
                      <div className="form-group">
                        <input
                          type="password"
                          className={`form-control ${
                            formik.errors.confirmPassword && formik.touched.confirmPassword
                              ? 'validate-form-error'
                              : ''
                          }`}
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.confirmPassword}
                          touchedOop={formik.touched.confirmPassword}
                        />
                      </div>
                      <div className="form-group">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          {formik.values.userType === UserType.LEARNER ? (
                            <Link to="#!" className="text-green" onClick={changeUserTypeTutor}>
                              I want to tutor on Tutelage
                            </Link>
                          ) : (
                            <Link to="#!" className="text-green" onClick={changeUserTypeLearner}>
                              I am here to get help from tutor
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="form-group text-center">
                        <div className="form-check--custom">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="d-none"
                              onChange={handlePrivacyPolicy}
                            />
                            <span>I agree to the Freelancer User Agreement and Privacy Policy</span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <button
                          type="submit"
                          className="btn btn--red w-50"
                          disabled={disableSignUp}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="divider" />
                      <div className="form-group text-center">
                        <div className="form-check m-auto d-inline-block">
                          <span className="text-muted">
                            Already have an account? <Link to="/auth/login"> Sign In</Link>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  ) : (
    <></>
  );
};

export default Register;
