import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Auth } from 'aws-amplify';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';

const INITIAL_STATE = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const validationSchema = YUP.object().shape({
    oldPassword: YUP.string().label('oldPassword').required('Current password is required'),
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
      const { oldPassword, newPassword } = values;
      try {
        const userData = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(userData, oldPassword, newPassword);
        setDataMessage({
          ...dataMessage,
          message: 'Password has been changed',
          resultStatus: true,
        });
        resetForm({});
      } catch (err) {
        setDataMessage({
          ...dataMessage,
          message: 'Current password incorrect',
          resultStatus: false,
        });
      }
    },
  });

  const handleDisableErr = (disable: boolean) => {
    if (disable) setDataMessage({ ...dataMessage, message: '', resultStatus: false });
  };

  return (
    <>
      <Helmet title="Change password page" />
      <main className="bg-light">
        <div className="section section--manager py-4">
          <div className="container">
            <div className="section__inner">
              <div className="card border-0 p-4">
                <div className="card-body">
                  <h5 className="pb-4 text-danger">Change Password</h5>
                  {dataMessage.message && (
                    <Notification handleDisableErr={handleDisableErr} dataMessage={dataMessage} />
                  )}

                  <form
                    onSubmit={formik.handleSubmit}
                    method={'POST'}
                    className="form form--manager"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="d-block">
                            <span className="label">Current password</span>
                            <input
                              id="oldPassword"
                              type="password"
                              className={`form-control ${
                                formik.errors.oldPassword && formik.touched.oldPassword
                                  ? 'validate-form-error'
                                  : ''
                              }`}
                              placeholder="Current password"
                              name="oldPassword"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.oldPassword}
                            />
                            <MsgValidationError
                              messageErr={formik.errors.oldPassword}
                              touchedOop={formik.touched.oldPassword}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="d-block">
                            <span className="label">New password</span>
                            <input
                              id="newPassword"
                              type="password"
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
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="d-block">
                            <span className="label">Confirm password</span>
                            <input
                              id="confirmPassword"
                              type="password"
                              className={`form-control ${
                                formik.errors.confirmPassword && formik.touched.confirmPassword
                                  ? 'validate-form-error'
                                  : ''
                              }`}
                              placeholder="Confirm password"
                              name="confirmPassword"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.confirmPassword}
                            />
                            <MsgValidationError
                              messageErr={formik.errors.confirmPassword}
                              touchedOop={formik.touched.confirmPassword}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn--red w-25">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChangePassword;
