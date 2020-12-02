import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { getMonth, getDate } from 'date-fns';

import './style.scss';

interface Props {
  availabilities: Array<string>;
  onDateSelectedStart: (date: string) => void;
  onMgErrorDatePicker: (message: string) => void;
  onDateSelectedEnd: (date: string) => void;
  onDuration: (duration: number) => void;
}

const CustomDatePicker = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState(60);
  const [isSelect, setIsSelected] = useState(false);

  const { availabilities, onDateSelectedStart, onDuration, onDateSelectedEnd } = props;

  const getDayClassName = date => {
    const setDayClassName = [];
    const dateNow = new Date();
    if (availabilities.length > 0) {
      availabilities.map(item =>
        setDayClassName.push(
          getDate(date) === getDate(item) &&
            getMonth(date) === getMonth(item) &&
            getDate(item) >= getDate(dateNow)
            ? 'highlight'
            : 'disable',
        ),
      );

      return setDayClassName;
    }

    return setDayClassName;
  };

  const handleChangeDate = date => {
    setStartDate(date);

    if (!isSelect) {
      setIsSelected(true);
    } else {
      const dateEnd = new Date(date);
      dateEnd.setMinutes(dateEnd.getMinutes() + duration);
      onDateSelectedStart(date);
      onDateSelectedEnd(dateEnd.toString());
      onDuration(duration);
    }
  };

  const handleChangeSelect = (event: any) => {
    const { value } = event.target;
    setDuration(value);
    if (isSelect) {
      const dateChangeEnd = new Date(startDate);
      dateChangeEnd.setMinutes(dateChangeEnd.getMinutes() + parseInt(value));
      onDateSelectedEnd(dateChangeEnd.toString());
      onDuration(value);
    }
  };

  return (
    <div className={'component-datepicker'}>
      <DatePicker
        selected={startDate}
        dayClassName={getDayClassName}
        onChange={handleChangeDate}
        minDate={new Date()}
        showTimeSelect
        inline
        className={'component-datepicker'}
      />
      <div>
        <div className="form-group">
          <label className="d-block">
            <span className="label mb-3">Duration</span>
            <select
              className="form-control select-duration"
              value={duration}
              onChange={handleChangeSelect}
            >
              <option value={60}>60 Minutes</option>
              <option value={90}>90 Minutes</option>
              <option value={120}>120 Minutes</option>
              <option value={150}>150 Minutes</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
