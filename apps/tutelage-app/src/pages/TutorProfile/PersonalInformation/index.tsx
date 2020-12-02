import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';

import { infoPersonValue, infoPersonSchemaYup } from './Validation/';
import NextButton from '../../../components/TutorProfile/NextControl';
import { LIST_TIMEZONE } from './ListTimezone';
import { LIST_STEP } from '../ListStep';

interface Info {
  onChangeStep: (e) => void;
  onSubmit: (data) => void;
  data: any;
}

const PersonalInformation = ({ onChangeStep, onSubmit, data }: Info) => {
  const formikInfoPerson = useFormik({
    initialValues: infoPersonValue,
    validationSchema: infoPersonSchemaYup,
    onSubmit: values => {
      onSubmit(values);
      onChangeStep(LIST_STEP.EDUCATION_CERTIFICATION);
    },
  });

  useEffect(() => {
    const {
      name = '',
      gender = 'Female',
      phone = '',
      address = '',
      city = '',
      zipcode = '',
      state = '',
      country = '',
      timezone = '7',
    } = data;
    formikInfoPerson.setValues({
      name,
      gender,
      phone,
      address,
      city,
      zipcode,
      state,
      country,
      timezone,
    });
  }, [data]);

  const {
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formikInfoPerson;

  const renderListTimeZone = () => {
    let element = null;
    element = LIST_TIMEZONE.map(item => {
      return (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      );
    });
    return element;
  };

  return (
    <main>
      <div className="process">
        <div className="process__inner">
          <div className="step step--01 step--current">
            <em className="ic-pressed-notification">1</em>
            <span className="label">Personal Information</span>
          </div>
          <div className="step step--02">
            <em className="ic-pressed-notification">2</em>
            <span className="label">Education & Certification</span>
          </div>
          <div className="step step--03">
            <em className="ic-pressed-notification">3</em>
            <span className="label">Biography</span>
          </div>
          <div className="step step--04">
            <em className="ic-pressed-notification">4</em>
            <span className="label">Subject</span>
          </div>
          <div className="step step--05">
            <em className="ic-pressed-notification">5</em>
            <span className="label">Availability</span>
          </div>
          <div className="step step--06">
            <em className="ic-pressed-notification">6</em>
            <span className="label">Submit</span>
          </div>
        </div>
      </div>
      <div className="section section--manager mb-5">
        <div className="container">
          <div className="section__inner">
            <form className="form form--manager process-01" onSubmit={handleSubmit}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">Name</span>
                      <input
                        type="text"
                        className={`form-control ${
                          touched.name && errors.name ? 'validate-form-error' : ''
                        }`}
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.name}
                        id="name"
                        name="name"
                      />
                    </label>
                    {errors.name && touched.name ? (
                      <MsgValidationError messageErr={errors.name} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <span className="label">Gender</span>
                    <select
                      className={`form-control custom-select ${
                        errors.gender && touched.gender ? 'validate-form-error' : ''
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formikInfoPerson.values.gender}
                      id="gender"
                      name="gender"
                      placeholder="Select Gender"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && touched.gender ? (
                      <MsgValidationError messageErr={errors.gender} touchedOop={touched.gender} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">Phone</span>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.phone && touched.phone ? 'validate-form-error' : ''
                        }`}
                        placeholder="&mdash; &mdash; &mdash;"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.phone}
                        id="phone"
                        name="phone"
                      />
                    </label>
                    {errors.phone && touched.phone ? (
                      <MsgValidationError messageErr={errors.phone} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">Address</span>
                      <input
                        type="text"
                        className={`form-control mb-3 ${
                          errors.address && touched.address ? 'validate-form-error' : ''
                        }`}
                        placeholder="Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.address}
                        id="address"
                        name="address"
                      />
                    </label>
                    {errors.address && touched.address ? (
                      <MsgValidationError messageErr={errors.address} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">City</span>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.city && touched.city ? 'validate-form-error' : ''
                        }`}
                        placeholder="&mdash; &mdash; &mdash;"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.city}
                        id="city"
                        name="city"
                      />
                    </label>
                    {errors.city && touched.city ? (
                      <MsgValidationError messageErr={errors.city} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">Zipcode</span>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.zipcode && touched.zipcode ? 'validate-form-error' : ''
                        }`}
                        placeholder="&mdash; &mdash; &mdash;"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.zipcode}
                        id="zipcode"
                        name="zipcode"
                      />
                    </label>
                    {errors.zipcode && touched.zipcode ? (
                      <MsgValidationError messageErr={errors.zipcode} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">State</span>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.state && touched.state ? 'validate-form-error' : ''
                        }`}
                        placeholder="&mdash; &mdash; &mdash;"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.state}
                        id="state"
                        name="state"
                      />
                    </label>
                    {errors.state && touched.state ? (
                      <MsgValidationError messageErr={errors.state} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="d-block">
                      <span className="label">Country</span>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.country && touched.country ? 'validate-form-error' : ''
                        }`}
                        placeholder="Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formikInfoPerson.values.country}
                        id="country"
                        name="country"
                      />
                    </label>
                    {errors.country && touched.country ? (
                      <MsgValidationError messageErr={errors.country} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <span className="label">Timezone</span>
                    <select
                      className={`form-control custom-select ${
                        errors.timezone && touched.timezone ? 'validate-form-error' : ''
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formikInfoPerson.values.timezone}
                      id="timezone"
                      name="timezone"
                      placeholder="Select Timezone"
                    >
                      {renderListTimeZone()}
                    </select>
                    {errors.timezone && touched.timezone ? (
                      <MsgValidationError messageErr={errors.timezone} touchedOop={true} />
                    ) : null}
                  </div>
                </div>
                <NextButton grid={6} isSubmitting={isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PersonalInformation;
