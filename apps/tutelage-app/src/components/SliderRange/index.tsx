import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider'; //TODO: review whether use this lib or not.

import './style.scss';

interface Props {
  getValueSliderRange: (value: number) => void;
}
const SliderRange = (props: Props) => {
  const [valueSlider, setValueSlider] = useState(30);

  const handleSliderChange = (event: any, value: number) => {
    setValueSlider(value);
    props.getValueSliderRange(value);
  };

  return (
    <>
      <div className="slider-range">
        <Slider
          min={20}
          max={50}
          valueLabelDisplay="auto"
          value={valueSlider}
          onChange={handleSliderChange}
          className="slider-range-custom"
        ></Slider>
        <span className="slider-range-start">_20$</span>
        <span className="slider-range-end">_50$</span>
      </div>
    </>
  );
};

export default SliderRange;
