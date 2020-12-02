import React from 'react';

import { LIST_STEP } from '../../../pages/TutorProfile/ListStep';

interface PrevButtonInterFace {
  grid: number;
  currentStep: any;
  onChangeStep: (e) => void;
  isSubmitting?: boolean;
}

const PrevButton = ({ grid, currentStep, onChangeStep, isSubmitting }: PrevButtonInterFace) => {
  const handleOnSubmit = () => {
    switch (currentStep) {
      case LIST_STEP.AVAILABILITY:
        onChangeStep(LIST_STEP.SUBJECT);
        break;
      case LIST_STEP.BIOGRAPHY:
        onChangeStep(LIST_STEP.EDUCATION_CERTIFICATION);
        break;
      case LIST_STEP.EDUCATION_CERTIFICATION:
        onChangeStep(LIST_STEP.PERSONAL_INFORMATION);
        break;
      case LIST_STEP.SUBJECT:
        onChangeStep(LIST_STEP.BIOGRAPHY);
        break;
    }
  };

  return (
    <div className={`col-md-${grid} text-center mb-3`}>
      <button
        onClick={handleOnSubmit}
        disabled={isSubmitting}
        className={`btn btn-secondary r-100 w-50 ${isSubmitting ? 'disable' : ''}`}
        type="submit"
      >
        Back
      </button>
    </div>
  );
};

export default PrevButton;
