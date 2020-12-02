// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { MeetingSessionStatus, MeetingSessionStatusCode } from 'amazon-chime-sdk-js';
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ChimeSdkWrapper from '../chime/ChimeSdkWrapper';
import getChimeContext from '../context/getChimeContext';
import getMeetingStatusContext from '../context/getMeetingStatusContext';
import MeetingStatus from '../enums/MeetingStatus';

type Props = {
  children: ReactNode;
};

export default function MeetingStatusProvider(props: Props) {
  const MeetingStatusContext = getMeetingStatusContext();
  const { children } = props;
  const chime: ChimeSdkWrapper | null = useContext(getChimeContext());
  const [meetingStatus, setMeetingStatus] = useState<{
    meetingStatus: MeetingStatus;
    errorMessage?: string;
  }>({
    meetingStatus: MeetingStatus.Loading,
  });
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const audioElement = useRef(null);

  useEffect(() => {
    const start = async () => {
      try {
        await chime?.createRoom(query.get('title'), query.get('name'), query.get('region'));

        setMeetingStatus({
          meetingStatus: MeetingStatus.Succeeded,
        });
        // eslint-disable-next-line
        chime?.audioVideo?.addObserver({
          audioVideoDidStop: (sessionStatus: MeetingSessionStatus): void => {
            if (sessionStatus.statusCode() === MeetingSessionStatusCode.AudioCallEnded) {
              history.push('/');
              // eslint-disable-next-line
              chime?.leaveRoom(true);
            }
          },
        });

        await chime?.joinRoom(audioElement.current);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
        setMeetingStatus({
          meetingStatus: MeetingStatus.Failed,
          errorMessage: error.message,
        });
      }
    };
    start();
    // eslint-disable-next-line
  }, []);

  return (
    <MeetingStatusContext.Provider value={meetingStatus}>
      {/* eslint-disable-next-line */}
      <audio ref={audioElement} style={{ display: 'none' }} />
      {children}
    </MeetingStatusContext.Provider>
  );
}
