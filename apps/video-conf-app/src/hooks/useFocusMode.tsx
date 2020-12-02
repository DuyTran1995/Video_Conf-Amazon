// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useContext, useEffect, useState } from 'react';

import ChimeSdkWrapper from '../chime/ChimeSdkWrapper';
import getChimeContext from '../context/getChimeContext';
import MessageType from '../types/MessageType';

export default function useFocusMode() {
  const chime: ChimeSdkWrapper | null = useContext(getChimeContext());
  const [focusMode, setFocusMode] = useState(false);
  useEffect(() => {
    const callback = (message: MessageType) => {
      const { type, payload } = message;
      if (type === 'focus' && payload) {
        // eslint-disable-next-line
        chime?.audioVideo?.realtimeSetCanUnmuteLocalAudio(!payload.focus);
        if (payload.focus === true) {
          // eslint-disable-next-line
          chime?.audioVideo?.realtimeMuteLocalAudio();
        }
        setFocusMode(!!payload.focus);
      }
    };
    // eslint-disable-next-line
    chime?.subscribeToMessageUpdate(callback);
    return () => {
      // eslint-disable-next-line
      chime?.unsubscribeFromMessageUpdate(callback);
    };
    // eslint-disable-next-line
  }, []);
  return focusMode;
}
