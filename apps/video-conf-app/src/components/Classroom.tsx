// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classNames from 'classnames/bind';
import React, { useCallback, useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

import ChimeSdkWrapper from '../chime/ChimeSdkWrapper';
import getChimeContext from '../context/getChimeContext';
import getMeetingStatusContext from '../context/getMeetingStatusContext';
// import getUIStateContext from '../context/getUIStateContext';
// import ClassMode from '../enums/ClassMode';
import MeetingStatus from '../enums/MeetingStatus';
import ViewMode from '../enums/ViewMode';
import Chat from './Chat';
import styles from './Classroom.css';
import ContentVideo from './ContentVideo';
import Controls from './Controls';
// import DeviceSwitcher from './DeviceSwitcher';
import Error from './Error';
import LoadingSpinner from './LoadingSpinner';
import LocalVideo from './LocalVideo';
import RemoteVideoGroup from './RemoteVideoGroup';
import Roster from './Roster';
import ScreenPicker from './ScreenPicker';
import ScreenShareHeader from './ScreenShareHeader';

const cx = classNames.bind(styles);

export default function Classroom() {
  Modal.setAppElement('body');
  const chime: ChimeSdkWrapper | null = useContext(getChimeContext());
  // const [state] = useContext(getUIStateContext());
  const { meetingStatus, errorMessage } = useContext(getMeetingStatusContext());
  const [isContentShareEnabled, setIsContentShareEnabled] = useState(false);
  const [viewMode] = useState(ViewMode.Room);
  const [isModeTransitioning, setIsModeTransitioning] = useState(false);
  const [isPickerEnabled, setIsPickerEnabled] = useState(false);

  const stopContentShare = async () => {
    setIsModeTransitioning(true);
    await new Promise(resolve => setTimeout(resolve, 200));
  };

  // Must pass a memoized callback to the ContentVideo component using useCallback().
  // ContentVideo will re-render only when one dependency "viewMode" changes.
  // See more comments in ContentVideo.
  const onContentShareEnabled = useCallback(
    async (enabled: boolean) => {
      if (enabled && viewMode === ViewMode.ScreenShare) {
        await stopContentShare();
      }
      setIsContentShareEnabled(enabled);
    },
    [viewMode],
  );

  return (
    <div
      className={cx('classroom', {
        roomMode: viewMode === ViewMode.Room,
        screenShareMode: viewMode === ViewMode.ScreenShare,
        isModeTransitioning,
        isContentShareEnabled,
      })}
    >
      {meetingStatus === MeetingStatus.Loading && <LoadingSpinner />}
      {meetingStatus === MeetingStatus.Failed && <Error errorMessage={errorMessage} />}
      {meetingStatus === MeetingStatus.Succeeded && (
        <>
          <>
            <div className={cx('left')}>
              {viewMode === ViewMode.ScreenShare && (
                <ScreenShareHeader onClickStopButton={stopContentShare} />
              )}
              <div className={cx('contentVideoWrapper')}>
                <ContentVideo onContentShareEnabled={onContentShareEnabled} />
              </div>
              <div className={cx('remoteVideoGroupWrapper')}>
                <RemoteVideoGroup
                  viewMode={viewMode}
                  isContentShareEnabled={isContentShareEnabled}
                />
              </div>
              <div className={cx('localVideoWrapper')}>
                <div className={cx('controls')}>
                  <Controls
                    viewMode={viewMode}
                    onClickShareButton={() => {
                      setIsPickerEnabled(true);
                    }}
                  />
                </div>
                <div className={cx('localVideo')}>
                  <LocalVideo />
                </div>
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('titleWrapper')}>
                <div className={cx('title')}>{chime?.title}</div>
                <div className={cx('label')}>
                  <FormattedMessage id="Classroom.classroom" />
                </div>
              </div>
              <div className={cx('roster')} style={{ overflow: 'visible' }}>
                <Roster />
              </div>
              <div className={cx('chat')} style={{ overflow: 'visible' }}>
                <Chat />
              </div>
            </div>
          </>
          <Modal
            isOpen={isPickerEnabled}
            contentLabel="Screen picker"
            className={cx('modal')}
            overlayClassName={cx('modalOverlay')}
            onRequestClose={() => {
              setIsPickerEnabled(false);
            }}
          >
            <ScreenPicker
              onClickShareButton={async () => {
                setIsModeTransitioning(true);
                await new Promise(resolve => setTimeout(resolve, 200));
              }}
              onClickCancelButton={() => {
                setIsPickerEnabled(false);
              }}
            />
          </Modal>
        </>
      )}
    </div>
  );
}
