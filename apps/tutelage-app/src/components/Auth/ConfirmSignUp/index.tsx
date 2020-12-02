import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { Auth } from '@aws-amplify/auth';
import { API, graphqlOperation } from 'aws-amplify';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';
import { UserType, createLearner, createTutor } from '@tutelage-monorepo/tutelage/api-interfaces';

interface Props {
  override?: any;
  onStateChange?: any;
  authState?: any;
  authData?: any;
}

const ConfirmSignUp = (props: Props) => {
  const { onStateChange } = props;
  const history = useHistory();

  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });

  const backToSignUp = () => {
    onStateChange('signUp', {});
  };

  const validationSchema = YUP.object().shape({
    code: YUP.number()
      .label('code')
      .required('New password is required')
      .min(6, 'Minimum 6 characters required!'),
  });

  const formik = useFormik({
    initialValues: { code: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDataMessage({ message: '', resultStatus: false });
      const { code } = values;
      const { username, password } = props.authData;
      Auth.confirmSignUp(username, code)
        .then(async () => {
          try {
            const user = await Auth.signIn(username, password);
            const { name, sub } = user.attributes;

            if (user.attributes['custom:userType'] === UserType.LEARNER) {
              const newLearner = {
                id: sub,
                name: `${name}`,
                gender: 'Male',
                phone: '',
                avatar: 'Default',
              };
              await API.graphql(graphqlOperation(createLearner, { input: newLearner }));
            } else {
              const newTutor = {
                id: sub,
                name: `${name}`,
                gender: 'Male',
                phone: '',
                avatar: 'Default',
                address: '',
                city: '',
                zipcode: '',
                state: '',
                country: '',
                timezone: '',
                rate: '20',
                subjects: [],
                availabilities: '',
                status: 'true',
                certifications: '',
              };

              await API.graphql(graphqlOperation(createTutor, { input: newTutor }));
            }
            resetForm({});
            onStateChange('signedIn', user);

            return history.push('/auth/signup-success');
          } catch (err) {
            setDataMessage({
              ...dataMessage,
              message: err.message,
              resultStatus: false,
            });
          }
        })
        .catch(err =>
          setDataMessage({
            ...dataMessage,
            message: err.message,
            resultStatus: false,
          }),
        );
    },
  });

  const resendCode = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { username } = props.authData;
    try {
      await Auth.resendSignUp(username);
      formik.values.code = '';
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

  return props.authState === 'confirmSignUp' ? (
    <div>
      <Helmet title="Confirm signup page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              CONFIRM SIGNUP
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
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="username"
                          value={props.authData.username ? props.authData.username : ''}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.errors.code && formik.touched.code ? 'validate-form-error' : ''
                          }`}
                          placeholder="Enter your code"
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
                      <div className="form-group row justify-align-center">
                        <div className="col-6">
                          <div className="form-check--custom">
                            <button className="text-green" type="button" onClick={resendCode}>
                              <span>Resend Code</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn--red w-50">
                          Confirm
                        </button>
                      </div>
                    </form>
                    <div className="divider" />
                    <p className="text-muted fz18">
                      <button onClick={backToSignUp}>Back to Sign Up</button>
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

export default ConfirmSignUp;
