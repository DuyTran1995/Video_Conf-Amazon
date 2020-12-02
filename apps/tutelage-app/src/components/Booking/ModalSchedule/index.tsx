import React, { useState, useContext } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

import { Notification } from '@tutelage-monorepo/shared/react-util';
import { User, StatusBooking } from '@tutelage-monorepo/tutelage/api-interfaces';
import { createBooking, createConference, createMessage } from '../../../services/booking.service';

import { UserContext } from '../../../contexts/user';
import CustomDatePicker from '../DatePicker';

import './style.scss';

interface Props {
  isToggleModal: boolean;
  handleOpenModal: () => void;
  tutorID: string;
  timeZoneTutor: string;
  availabilities: Array<string>;
}

const ModalSchedule = (props: Props) => {
  const {
    isToggleModal,
    handleOpenModal,
    tutorID,
    timeZoneTutor: timezone,
    availabilities,
  } = props;

  const history = useHistory();

  const { addToast } = useToasts();

  const [currentUser] = useContext(UserContext);
  const { id: learnerID, authorized: isAuthenticator } = currentUser as User;

  const [timeTutor, setZoneTutor] = useState({
    timeStart: '',
    timeEnd: '',
    timeDuration: '',
  });

  const [dataMessage, setDataMessage] = useState({
    message: '',
    resultStatus: false,
  });
  const [description, setDescription] = useState('');

  const resetModal = () => {
    setZoneTutor(preState => ({ ...preState, timeStart: '', timeEnd: '', timeDuration: '' }));
    setDescription('');
  };

  const handleDateSelectedStart = dateSelected => {
    setZoneTutor(preState => ({ ...preState, timeStart: dateSelected.toString() }));
  };

  const handleDateSelectedEnd = dateSelected => {
    setZoneTutor(preState => ({ ...preState, timeEnd: dateSelected.toString() }));
  };

  const handleMgErrorDatePicker = (message: string) => {
    setDataMessage(preState => ({ ...preState, message: message, resultStatus: false }));
  };

  const handleDuration = (duration: number) => {
    setZoneTutor(preState => ({ ...preState, timeDuration: `${duration}` }));
  };

  // Show error
  const handleDisableErr = (disable: boolean) => {
    if (disable) setDataMessage({ ...dataMessage, message: '', resultStatus: false });
  };

  const handleCloseModal = () => {
    handleOpenModal();
    setZoneTutor(preState => ({ ...preState, timeStart: '', timeEnd: '', timeDuration: '' }));
  };

  const handleDescription = (event: any) => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleClickModal = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (timeTutor.timeStart && timeTutor.timeEnd) {
      if (!isAuthenticator) {
        handleCloseModal();
        addToast('You need to be logged in to perform this operation', {
          appearance: 'error',
        });
        return history.push('/auth/login');
      }
      try {
        const { data } = (await createBooking(
          timezone,
          StatusBooking.PENDING,
          learnerID,
          tutorID,
        )) as any;
        if (data && data.createBooking) {
          const { id } = data.createBooking;
          createConference(
            id,
            timeTutor.timeStart,
            parseInt(timeTutor.timeDuration),
            StatusBooking.PENDING,
          );
          createMessage(id, learnerID, tutorID, description, 'pending');
          resetModal();
          handleCloseModal();

          return addToast('Send request success', { appearance: 'success' });
        }
      } catch (err) {
        setDataMessage(preState => ({
          ...preState,
          message: err.message,
          resultStatus: false,
        }));
      }
    } else {
      setDataMessage(preState => ({
        ...preState,
        message: 'Please, Select a date!',
        resultStatus: false,
      }));
    }
  };

  return (
    <>
      <Modal isOpen={isToggleModal} toggle={handleOpenModal} size="lg">
        <ModalHeader toggle={handleCloseModal}>Your Request</ModalHeader>
        <ModalBody>
          {dataMessage.message && (
            <Notification handleDisableErr={handleDisableErr} dataMessage={dataMessage} />
          )}
          <CustomDatePicker
            onMgErrorDatePicker={handleMgErrorDatePicker}
            availabilities={availabilities}
            onDateSelectedStart={handleDateSelectedStart}
            onDateSelectedEnd={handleDateSelectedEnd}
            onDuration={handleDuration}
          />
          <div>
            <div className="form-group">
              <label className="d-block">
                <span className="label">Time zone of tutor</span>
                <p>
                  Start : <span>{timeTutor.timeStart}</span>
                </p>
                <p>
                  End : <span>{timeTutor.timeEnd}</span>
                </p>
              </label>
            </div>

            <div className="px5 mb-4">
              <hr />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="d-block">
                <span className="label">Message</span>
                <textarea
                  className="form-control"
                  rows={4}
                  value={description}
                  onChange={handleDescription}
                />
              </label>
            </div>

            <div className="px5 mb-4">
              <hr />
            </div>
          </div>
          <div>
            <div className="text-center mt-5">
              <button
                data-toggle="modal"
                data-target="#modal-schedule"
                className="btn btn--red w-25"
                onClick={handleClickModal}
              >
                Send
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalSchedule;
