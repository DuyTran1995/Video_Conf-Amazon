import React from 'react';

const SlickNextArrow = props => {
  const { className, style, onClick, children } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      {children}
    </div>
  );
};

export default SlickNextArrow;
