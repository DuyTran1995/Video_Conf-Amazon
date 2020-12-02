import React from 'react';

import './style.scss';

interface Props {
  dataMessage: {
    resultStatus: boolean;
    message: string;
  };
  handleDisableErr: (disable: boolean) => void;
}
const Notification = (props: Props) => {
  const disableError = () => {
    props.handleDisableErr(true);
  };
  const { resultStatus, message } = props.dataMessage;
  return (
    <>
      <div
        className={`alert ${
          resultStatus ? 'alert-success' : 'alert-danger'
        } alert-dismissible fade show alert-custom-notification`}
        role="alert"
      >
        <p>{message}</p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={disableError}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </>
  );
};

export default Notification;
