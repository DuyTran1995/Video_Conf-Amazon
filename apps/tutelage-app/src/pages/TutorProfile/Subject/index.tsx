import React, { useState, useEffect } from 'react';
import { Collapse } from 'reactstrap';

import { Notification } from '@tutelage-monorepo/shared/react-util';

import PrevButton from '../../../components/TutorProfile/PrevButton';
import NextButton from '../../../components/TutorProfile/NextControl';
import ListData from './ListData';
import { LIST_STEP } from '../ListStep';

import './style.scss';

interface SubjectInterface {
  currentStep: any;
  onChangeStep: any;
  onSubmit: (data) => void;
  data: any;
}

const Subject = ({ currentStep, onChangeStep, onSubmit, data }: SubjectInterface) => {
  const [errMessage, setErrMessage] = useState({
    message: '',
    resultStatus: false,
  });
  const [isShow, setIsShow] = useState(() => {
    const count = ListData.length;
    const arr = [];
    arr.push(true);
    for (let i = 0; i < count; i++) {
      arr.push(false);
    }
    return arr;
  });
  const [listSubject, setListSubject] = useState([]);

  useEffect(() => {
    if (data && data.subjects) {
      setListSubject(data.subjects);
    }
  }, [data]);

  const handleOnClick = index => {
    const newIsShow = [...isShow];
    newIsShow[index] = !newIsShow[index];
    setIsShow(newIsShow);
  };

  const handleChecked = e => {
    const { target: { value = '', checked = false } = {} } = e;
    const newListSubject = [...listSubject];
    const index = newListSubject.indexOf(value);
    if (index !== -1) {
      if (!checked) {
        newListSubject.splice(index, 1);
      }
    } else {
      if (checked) {
        newListSubject.push(value);
      }
    }
    setListSubject(newListSubject);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (listSubject.length > 0) {
      const dataSend = {
        subjects: listSubject,
      };
      onSubmit(dataSend);
      onChangeStep(LIST_STEP.AVAILABILITY);
    } else {
      setErrMessage({ message: 'Please choose Subject', resultStatus: false });
    }
  };

  const handleDisableErr = disable => {
    if (disable) setErrMessage({ ...errMessage, message: '', resultStatus: false });
  };

  const renderListMajor = () => {
    let element = null;

    element = ListData.map((major, index) => {
      return (
        <div key={index}>
          <h5
            data-toggle="collapse"
            data-target={`#collapse0${index}`}
            style={{ cursor: 'pointer' }}
            id={`toggler${index}`}
            className="d-flex justify-content-between py-3 active d-block"
            onClick={() => handleOnClick(index)}
          >
            <span>{major.name}</span>
            <em className={`ic-select up180 ${isShow[index] ? 'arrow' : ''}`}></em>
          </h5>
          <Collapse isOpen={isShow[index]}>
            <div className="item col-sm-12 block-exp show collapse">
              <div className="row">
                {major.subjects.map((subject, index) => {
                  let isChecked = false;
                  if (listSubject.findIndex(item => item === subject.name) !== -1) isChecked = true;
                  return (
                    <div className="col-md-4 mb-3" key={index}>
                      <div className="form-check--custom">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="d-none"
                            name="subject"
                            onChange={handleChecked}
                            checked={isChecked}
                            value={subject.name}
                          />
                          <span>{subject.name}</span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Collapse>
        </div>
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
          <div className="step step--03 step--current step--done">
            <em className="ic-pressed-notification">3</em>
            <span className="label">Biography</span>
          </div>
          <div className="step step--04 step--current">
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
            <div className="form form--manager process-04">
              <form onSubmit={handleOnSubmit}>
                {errMessage.message && (
                  <Notification handleDisableErr={handleDisableErr} dataMessage={errMessage} />
                )}
                <div className="row">
                  <div className="group-filed w-100">
                    <h5 className="py-3">My Subjects</h5>
                    <div className="item col-md-12 mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                        et dolore………ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut ero labore et dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="group-filed w-100 collapse-custom">
                    <hr />
                    {renderListMajor()}
                  </div>
                </div>
                <div className="row mt-3 text-center w-100">
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
      </div>
    </main>
  );
};

export default Subject;
