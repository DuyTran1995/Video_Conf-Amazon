import React, { useState, useEffect, useRef } from 'react';
import { Formik, FieldArray, Form } from 'formik';

import { formikEducationCertificationSchemaYup } from './Validation';
import Certification from '../../../components/TutorProfile/Certification';
import GraduateDegree from '../../../components/TutorProfile/GraduateDegree';
import PrevButton from '../../../components/TutorProfile/PrevButton';
import NextButton from '../../../components/TutorProfile/NextControl';
import { LIST_STEP } from '../ListStep';

import './styles.scss';

interface EducationCertificationInterface {
  currentStep: any;
  onChangeStep: (e) => void;
  onSubmit: (data) => void;
  data: any;
}

const EducationCertification = ({
  currentStep,
  onChangeStep,
  onSubmit,
  data,
}: EducationCertificationInterface) => {
  const formikRef = useRef() as any;

  const [initValue, setInitValue] = useState(() => {
    const graduateDegrees = [
      {
        collegeName: '',
        typeOfDegree: 'ABC',
        major: '',
      },
    ];
    const certifications = [
      {
        certificationName: '',
        issuedDate: '',
        expiredDate: '',
        picture: '',
      },
    ];

    return { graduateDegrees, certifications };
  });

  useEffect(() => {
    const { certifications } = data;

    if (data.certifications) {
      const dataParser = JSON.parse(certifications);
      if (formikRef.current) {
        const valueGraduateDegrees = [];
        dataParser.graduateDegrees.map(item => {
          valueGraduateDegrees.push(item);
        });
        const valueCertifications = [];
        dataParser.certifications.map(item => {
          valueCertifications.push(item);
        });
        formikRef.current.setValues({
          graduateDegrees: dataParser.graduateDegrees,

          certifications: dataParser.certifications,
        });
      }
    }
  }, [data]);

  return (
    <Formik
      innerRef={formikRef}
      onSubmit={values => {
        const dataSubmit = {
          certifications: JSON.stringify(values),
        };
        onSubmit(dataSubmit);
        onChangeStep(LIST_STEP.BIOGRAPHY);
      }}
      initialValues={initValue}
      validationSchema={formikEducationCertificationSchemaYup}
    >
      {({ values, touched, errors, handleBlur, handleSubmit, handleChange, setFieldValue }) => (
        <main>
          <div className="process">
            <div className="process__inner">
              <div className="step step--01 step--current step--done">
                <em className="ic-pressed-notification">1</em>
                <span className="label">Personal Information</span>
              </div>
              <div className="step step--02 step--current">
                <em className="ic-pressed-notification">2</em>
                <span className="label">Education &amp; Certification</span>
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
                <Form className="form form--manager process-02" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="group-filed w-100">
                      <hr />
                      <h5 className="py-3">Graduate Degree</h5>
                      <div id="field">
                        <FieldArray
                          name="graduateDegrees"
                          render={arrayHelper => (
                            <>
                              {values.graduateDegrees && values.graduateDegrees.length > 0
                                ? values.graduateDegrees.map((item, index) => {
                                    return (
                                      <GraduateDegree
                                        handleBlur={handleBlur}
                                        value={item}
                                        key={index}
                                        index={index}
                                        arrayHelper={arrayHelper}
                                        handleChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                      />
                                    );
                                  })
                                : ''}
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="group-filed w-100">
                      <hr />
                      <h5 className="py-3">Certification</h5>
                      <div id="field02">
                        <div className="item col-md-12">
                          <div className="row">
                            <FieldArray
                              name="certification"
                              render={arrayHelpers => (
                                <>
                                  {values.certifications && values.certifications.length > 0
                                    ? values.certifications.map((item, index) => (
                                        <Certification
                                          value={item}
                                          key={index}
                                          index={index}
                                          arrayHelpers={arrayHelpers}
                                          onSetFieldValue={setFieldValue}
                                          errors={errors}
                                          touched={touched}
                                        />
                                      ))
                                    : ''}
                                </>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <PrevButton
                          grid={6}
                          currentStep={currentStep}
                          onChangeStep={onChangeStep}
                        />
                        <NextButton grid={6} isSubmitting={false} />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </main>
      )}
    </Formik>
  );
};

export default EducationCertification;
