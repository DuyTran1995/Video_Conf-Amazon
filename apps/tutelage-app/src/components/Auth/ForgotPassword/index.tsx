import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Auth } from '@aws-amplify/auth';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';

interface Props {
  override?: string;
  onStateChange?: any;
  authState?: any;
  authData?: any;
}
const INITIAL_STATE = {
  code: '',
  newPassword: '',
  confirmPassword: '',
};

const ForgotPassword = (props: Props) => {
  const { onStateChange } = props;
  const history = useHistory();
  const [delivery, setDelivery] = useState('');
  const [emailState, setEmailState] = useState('');
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });
  const usernameDataAuth = props.authData ? props.authData.username : null;

  const validationSchemaSubmit = YUP.object().shape({
    code: YUP.number()
      .label('code')
      .required('Code is required')
      .min(6, 'Minimum 6 characters required!'),
    newPassword: YUP.string()
      .label('newPassword')
      .required('New password is required')
      .matches(/(?=.*[a-z])/, 'One lowercase required!')
      .matches(/(?=.*[A-Z])/, 'One uppercase required!')
      .matches(/(?=.*[0-9])/, 'One numeric required!')
      .min(8, 'Minimum 8 characters required!'),
    confirmPassword: YUP.string()
      .required('Confirm password is required')
      .label('Confirm password')
      .oneOf([YUP.ref('newPassword'), null], 'Passwords do not match'),
  });

  const validationSchemaSenCode = YUP.object().shape({
    email: YUP.string().email('Invalid email address').label('email').required('Email is required'),
  });

  const formikSendCode = useFormik({
    initialValues: { email: '' },
    validationSchema: validationSchemaSenCode,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const { email } = values;
      const username = email || usernameDataAuth;
      try {
        const data = await Auth.forgotPassword(username);
        setDelivery(data.CodeDeliveryDetails);
        setEmailState(email);
        resetForm({});
      } catch (err) {
        setDataMessage({
          ...dataMessage,
          message: err.message,
          resultStatus: false,
        });
      }
    },
  });

  const sendCode = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { email } = formikSendCode.values;
    const username = emailState || email || usernameDataAuth;
    try {
      const data = await Auth.forgotPassword(username);
      setDelivery(data.CodeDeliveryDetails);
      formikSubmitCode.values.code = '';
      setDataMessage({
        ...dataMessage,
        message: 'Resend code success',
        resultStatus: true,
      });
    } catch (err) {
      setDataMessage({
        ...dataMessage,
        message: err.message,
        resultStatus: false,
      });
    }
  };

  const handleDisableErr = (disable: boolean) => {
    if (disable) setDataMessage({ ...dataMessage, message: '', resultStatus: false });
  };

  const formikSubmitCode = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validationSchemaSubmit,
    onSubmit: async (values, { resetForm }) => {
      const { code, newPassword } = values;
      const username = emailState || usernameDataAuth;
      try {
        await Auth.forgotPasswordSubmit(username, code, newPassword);
        onStateChange('signIn', {});
        setDelivery('');
        resetForm({});
        return history.push('/auth/login');
      } catch (err) {
        setDataMessage({
          ...dataMessage,
          message: err.message,
          resultStatus: false,
        });
      }
    },
  });

  const sendEmailForgotPassword = () => {
    return (
      <div className="block-form__inner">
        {dataMessage.message && (
          <Notification handleDisableErr={handleDisableErr} dataMessage={dataMessage} />
        )}
        <form
          className="form form-login--insite m-auto"
          method={'POST'}
          onSubmit={formikSendCode.handleSubmit}
        >
          <div className="form-group">
            <input
              type="email"
              className={`form-control ${
                formikSendCode.errors.email && formikSendCode.touched.email
                  ? 'validate-form-error'
                  : ''
              }`}
              placeholder="Email"
              name="email"
              onBlur={formikSendCode.handleBlur}
              onChange={formikSendCode.handleChange}
              value={formikSendCode.values.email}
            />
            <MsgValidationError
              messageErr={formikSendCode.errors.email}
              touchedOop={formikSendCode.touched.email}
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn--red w-50">
              Send
            </button>
          </div>
        </form>
        <div className="divider" />
        <p className="text-muted fz18">
          <Link to="/auth/login">Back to Sign In</Link>
        </p>
      </div>
    );
  };

  const submitForgotPassword = () => {
    return (
      <>
        {dataMessage.message && (
          <Notification handleDisableErr={handleDisableErr} dataMessage={dataMessage} />
        )}
        <form
          className="form form-login--insite m-auto"
          method={'POST'}
          onSubmit={formikSubmitCode.handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${
                formikSubmitCode.errors.code && formikSubmitCode.touched.code
                  ? 'validate-form-error'
                  : ''
              }`}
              placeholder="Code"
              name="code"
              onBlur={formikSubmitCode.handleBlur}
              onChange={formikSubmitCode.handleChange}
              value={formikSubmitCode.values.code}
            />
            <MsgValidationError
              messageErr={formikSubmitCode.errors.code}
              touchedOop={formikSubmitCode.touched.code}
            />
          </div>
          <div className="form-group">
            <input
              type="Password"
              className={`form-control ${
                formikSubmitCode.errors.newPassword && formikSubmitCode.touched.newPassword
                  ? 'validate-form-error'
                  : ''
              }`}
              placeholder="New Password"
              name="newPassword"
              onBlur={formikSubmitCode.handleBlur}
              onChange={formikSubmitCode.handleChange}
              value={formikSubmitCode.values.newPassword}
            />
            <MsgValidationError
              messageErr={formikSubmitCode.errors.newPassword}
              touchedOop={formikSubmitCode.touched.newPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="Password"
              className={`form-control ${
                formikSubmitCode.errors.confirmPassword && formikSubmitCode.touched.confirmPassword
                  ? 'validate-form-error'
                  : ''
              }`}
              placeholder="Confirm Password"
              name="confirmPassword"
              onBlur={formikSubmitCode.handleBlur}
              onChange={formikSubmitCode.handleChange}
              value={formikSubmitCode.values.confirmPassword}
            />
            <MsgValidationError
              messageErr={formikSubmitCode.errors.confirmPassword}
              touchedOop={formikSubmitCode.touched.confirmPassword}
            />
          </div>
          <div className="form-group row justify-align-center">
            <div className="col-6">
              <div className="form-check--custom">
                <button className="text-green" type="button" onClick={sendCode}>
                  <span>Resend Code</span>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn--red w-50">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  };

  return props.authState === 'ForgotPassword' ? (
    <div>
      <Helmet title="Reset password page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              RESET PASSWORD
            </h1>
            <div className="row">
              <div className="col-md-12">
                <div className="block-form">
                  {delivery || usernameDataAuth
                    ? submitForgotPassword()
                    : sendEmailForgotPassword()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  ) : (
    <> </>
  );
};

export default ForgotPassword;
