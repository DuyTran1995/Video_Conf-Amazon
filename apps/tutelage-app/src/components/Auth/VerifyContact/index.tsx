import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Auth } from '@aws-amplify/auth';
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
};

const VerifyContact = (props: Props) => {
  const { onStateChange } = props;
  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const sendCodeEmail = async () => {
    try {
      await Auth.verifyCurrentUserAttribute('email');
    } catch (err) {
      setDataMessage({
        ...dataMessage,
        message: err.message,
        resultStatus: false,
      });
    }
  };

  useEffect(() => {
    if (props.authState === 'verifyContact') {
      sendCodeEmail();
    }
  }, [props.authState]);

  const validationSchema = YUP.object().shape({
    code: YUP.number()
      .label('Code')
      .required('Current password is required')
      .min(6, 'Minimum 6 characters required!'),
  });

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const user = props.authData;
      const { code } = values;
      try {
        await Auth.verifyCurrentUserAttributeSubmit('email', code);
        onStateChange('signedIn', user);
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

  return props.authState === 'verifyContact' ? (
    <div>
      <Helmet title="Verify Contact page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              Account recovery requires verified contact information (Code send email)
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
                          type="text"
                          className={`form-control ${
                            formik.errors.code && formik.touched.code ? 'validate-form-error' : ''
                          }`}
                          placeholder="Code"
                          name="code"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.code}
                        />
                        <MsgValidationError
                          messageErr={formik.errors.code}
                          touchedOop={formik.touched.code}
                        />
                      </div>

                      <div className="form-group text-center">
                        <button type="submit" className="btn btn--red w-50">
                          Submit
                        </button>
                      </div>
                    </form>
                    <div className="divider" />
                    <p className="text-muted fz18">
                      <button onClick={() => props.onStateChange('signedIn', props.authData)}>
                        Skip
                      </button>
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

export default VerifyContact;
