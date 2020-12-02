import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as YUP from 'yup';

import { UploadFile } from '@tutelage-monorepo/shared/react-util';

import PrevButton from '../../../components/TutorProfile/PrevButton';
import NextButton from '../../../components/TutorProfile/NextControl';
import PreferredRates from '../../../constants/PreferredRates';
import { LIST_STEP } from '../ListStep';

interface BiographyInterface {
  currentStep: any;
  onChangeStep: any;
  onSubmit: (data) => void;
  data: any;
}

const Biography = ({ currentStep, onChangeStep, onSubmit, data }: BiographyInterface) => {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState({
    avatar: '',
    biography: '',
    rate: 20,
  });

  useEffect(() => {
    if (data) {
      const { avatar, biography, rate } = data;
      formik.setValues({
        avatar: avatar,
        biography: biography,
        rate: rate,
      });
    }
  }, [data]);

  const onUploadFail = message => {
    setMessage(message);
  };

  const onUploadSuccess = url => {
    formik.setFieldValue('avatar', url);
    setMessage('');
  };

  const validation = YUP.object().shape({
    biography: YUP.string(),
    rate: YUP.string().required('Preferred rates is required'),
    avatar: YUP.string().required('Avatar is required'),
  });

  const formik = useFormik({
    initialValues: value,
    validationSchema: validation,
    onSubmit: values => {
      onSubmit(values);
      onChangeStep(LIST_STEP.SUBJECT);
    },
  });

  const renderPreferredRate = () => {
    let element = null;
    element = PreferredRates.map((item, index) => {
      return (
        <option key={index} value={+item}>
          ${item}
        </option>
      );
    });
    return element;
  };

  return (
    <main>
      <div className="process">
        <div className="process__inner">
          <div className="step step--01 step--current step--done">
            <em className="ic-pressed-notification">1</em>
            <span className="label">Personal Information</span>
          </div>
          <div className="step step--02 step--current step--done">
            <em className="ic-pressed-notification">2</em>
            <span className="label">Education &amp; Certification</span>
          </div>
          <div className="step step--03 step--current">
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
            <form onSubmit={formik.handleSubmit} className="form form--manager process-03">
              <div className="row align-items-center mb-5">
                <UploadFile
                  fileName="name"
                  onUploadFail={onUploadFail}
                  onUploadSuccess={onUploadSuccess}
                  width={200}
                  defaultImage={
                    formik.values.avatar !== 'Default' ? formik.values.avatar : undefined
                  }
                />
                <span style={{ color: 'red' }}>{formik.errors.avatar || message}</span>
              </div>
              <div className="row">
                <div className="group-filed w-100">
                  <hr />
                  <h5 className="py-3">Biography</h5>
                  <div className="item col-md-12">
                    <div className="form-group">
                      <label className="d-block">
                        <span className="label">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                          labore et dolore………
                        </span>
                        <textarea
                          value={formik.values.biography ? formik.values.biography : ''}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control"
                          name="biography"
                          rows={5}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="group-filed w-100">
                  <hr />
                  <h5 className="py-3">Preferred Rates</h5>
                  <div className="item col-md-7">
                    <div className="form-group">
                      <span className="label">Type of Rates</span>
                      <div className="d-flex align-items-center">
                        <select
                          value={formik.values.rate}
                          onChange={formik.handleChange}
                          className="form-control custom-select"
                          name="rate"
                        >
                          {renderPreferredRate()}
                        </select>
                        <span className="ml-3 w-25">per hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <PrevButton
                  grid={6}
                  currentStep={currentStep}
                  onChangeStep={onChangeStep}
                  isSubmitting={false}
                />
                <NextButton grid={6} isSubmitting={false} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Biography;
