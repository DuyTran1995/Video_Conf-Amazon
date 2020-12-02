import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Auth } from '@aws-amplify/auth';
import { isEmpty } from '@aws-amplify/core';
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
  newPassword: '',
  confirmPassword: '',
};

const RequireNewPassword = (props: Props) => {
  const { onStateChange } = props;
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const backToSignIn = () => {
    onStateChange('signIn', {});
  };

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
      setDataMessage({
        ...dataMessage,
        message: 'Current password incorrect',
        resultStatus: false,
      });
    }
  };

  const validationSchema = YUP.object().shape({
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

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const { newPassword } = values;
      const user = props.authData;
      try {
        await Auth.completeNewPassword(user, newPassword, null);
        checkContact(user);
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

  const handleDisableErr = (disable: boolean) => {
    if (disable) setDataMessage({ ...dataMessage, message: '', resultStatus: false });
  };

  return props.authState === 'requireNewPassword' ? (
    <div>
      <Helmet title="Reset Password page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              CHANGE PASSWORD
            </h1>
            <div className="row">
              <div className="col-md-12">
                <div className="block-form">
                  <div className="block-form__inner">
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
                          type="Password"
                          className={`form-control ${
                            formik.errors.newPassword && formik.touched.newPassword
                              ? 'validate-form-error'
                              : ''
                          }`}
                          placeholder="New password"
                          name="newPassword"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.newPassword}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.newPassword}
                          touchedOop={formik.touched.newPassword}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="Password"
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

                      <div className="form-group text-center">
                        <button type="submit" className="btn btn--red w-50">
                          Change
                        </button>
                      </div>
                    </form>
                    <div className="divider" />
                    <p className="text-muted fz18">
                      <button onClick={backToSignIn}>Back to Sign In</button>
                    </p>
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

export default RequireNewPassword;
