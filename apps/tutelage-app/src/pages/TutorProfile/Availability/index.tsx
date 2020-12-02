import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { getDate, getMonth, getYear } from 'date-fns';

import { Notification } from '@tutelage-monorepo/shared/react-util';

import PrevButton from '../../../components/TutorProfile/PrevButton';
import NextButton from '../../../components/TutorProfile/NextControl';
import { LIST_STEP } from '../ListStep';

import './style.scss';

interface AvailabilityInterface {
  currentStep: any;
  onChangeStep: any;
  onSubmit: (data) => void;
  data: any;
}

const Availability = ({ currentStep, onChangeStep, onSubmit, data }: AvailabilityInterface) => {
  const [startDate, setStartDate] = useState(new Date());
  const [listDay, setListDay] = useState([new Date()]);
  const [errMessage, setErrMessage] = useState({
    message: '',
    resultStatus: false,
  });

  useEffect(() => {
    if (data.availabilities) {
      const { availabilities } = data;
      const newListDay = [];
      const listData = JSON.parse(availabilities);
      listData.map(item => {
        newListDay.push(new Date(item));
      });
      setListDay(newListDay);
    }
  }, [data]);

  const handleDayClassName = date => {
    const arr = [];
    listDay.map(item => {
      arr.push(
        getDate(date) === getDate(item) &&
          getMonth(date) === getMonth(item) &&
          getYear(date) === getYear(item)
          ? 'highlight'
          : '',
      );
    });
    return arr;
  };

  const handleOnChange = date => {
    const newListDay = [...listDay];
    const index = newListDay.findIndex(
      item =>
        getDate(item) === getDate(date) &&
        getMonth(item) === getMonth(date) &&
        getYear(date) === getYear(item),
    );
    if (index === -1) {
      newListDay.push(date);
    } else {
      newListDay.splice(index, 1);
    }
    setListDay(newListDay);
    setStartDate(date);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (listDay.length <= 0) {
      setErrMessage({ message: 'Please choose day you availability', resultStatus: false });
    } else {
      onSubmit({
        availabilities: JSON.stringify(listDay),
      });
      onChangeStep(LIST_STEP.SUBMIT);
    }
  };

  const handleDisableErr = disable => {
    if (disable) setErrMessage({ ...errMessage, message: '', resultStatus: false });
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
          <div className="step step--04 step--current step--done">
            <em className="ic-pressed-notification">4</em>
            <span className="label">Subject</span>
          </div>
          <div className="step step--05 step--current">
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
            <form className="form form--manager process-05" onSubmit={handleOnSubmit}>
              {errMessage.message && (
                <Notification handleDisableErr={handleDisableErr} dataMessage={errMessage} />
              )}
              <div className="row">
                <div className="group-filed w-100">
                  <h5 className="py-3">When are you available for lessons ?</h5>
                  <div className="item col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
                      et dolore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="group-filed w-100">
                  <div className="divider " />
                  <div className="component-datepicker">
                    <DatePicker
                      selected={startDate}
                      onChange={date => handleOnChange(date)}
                      inline
                      dayClassName={handleDayClassName}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <PrevButton grid={6} currentStep={currentStep} onChangeStep={onChangeStep} />
                <NextButton grid={6} isSubmitting={false} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Availability;
