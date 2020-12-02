import React from 'react';

interface NextButtonInterFace {
  grid: number;
  isSubmitting?: boolean;
}

const NextButton = ({ grid, isSubmitting }: NextButtonInterFace) => {
  return (
    <div className={`col-md-${grid} text-center mb-3`}>
      <button
        disabled={isSubmitting}
        className={`btn btn--red r-100 w-50 ${isSubmitting ? 'disable' : ''}`}
        type="submit"
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
