import React from 'react';

import './style.scss';

interface Props {
  messageErr: string;
  touchedOop: boolean;
}
const MsgValidationError = (props: Props) => {
  const { messageErr, touchedOop } = props;
  return messageErr && touchedOop ? (
    <span className="error-validate-form">{messageErr}</span>
  ) : (
    <></>
  );
};

export default MsgValidationError;
