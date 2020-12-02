// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classNames from 'classnames/bind';
import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

import ChimeSdkWrapper from '../chime/ChimeSdkWrapper';
import routes from '../constants/routes.json';
import getChimeContext from '../context/getChimeContext';
import getUIStateContext from '../context/getUIStateContext';
import ClassMode from '../enums/ClassMode';
import ViewMode from '../enums/ViewMode';
import styles from './Controls.css';
import Tooltip from './Tooltip';

const cx = classNames.bind(styles);

enum VideoStatus {
  Disabled,
  Loading,
  Enabled,
}

type Props = {
  viewMode: ViewMode;
  onClickShareButton: () => void;
};

export default function Controls(props: Props) {
  const chime: ChimeSdkWrapper | null = useContext(getChimeContext());
  const [state] = useContext(getUIStateContext());
  const history = useHistory();
  const [muted, setMuted] = useState(false);
  const [focus, setFocus] = useState(false);
  const [videoStatus, setVideoStatus] = useState(VideoStatus.Disabled);
  const intl = useIntl();

  useEffect(() => {
    const callback = (localMuted: boolean) => {
      setMuted(localMuted);
    };
    // eslint-disable-next-line
    chime?.audioVideo?.realtimeSubscribeToMuteAndUnmuteLocalAudio(callback);
    return () => {
      if (chime && chime?.audioVideo) {
        // eslint-disable-next-line
        chime?.audioVideo?.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(callback);
      }
    };
    // eslint-disable-next-line
  }, []);

  const onClickShareButton = e => {
    startCapture();
  };

  async function startCapture() {
    try {
      await chime?.audioVideo.startContentShareFromScreenCapture();
    } catch (err) {
      console.error('Error: ' + err);
    }
  }

  // }

  return (
    <div
      className={cx('controls', {
        videoEnabled: videoStatus === VideoStatus.Enabled,
        audioMuted: muted,
      })}
    >
      <div className={cx('micMuted')}>
        <FormattedMessage id="Controls.micMutedInScreenViewMode" />
      </div>
      <Tooltip
        tooltip={
          focus
            ? intl.formatMessage({ id: 'Controls.turnOffFocusTooltip' })
            : intl.formatMessage({ id: 'Controls.turnOnFocusTooltip' })
        }
      >
        <button
          type="button"
          className={cx('focusButton', {
            enabled: focus,
          })}
          onClick={() => {
            const newFocusState = !focus;
            // eslint-disable-next-line
            chime?.sendMessage('focus', { focus: newFocusState });
            // eslint-disable-next-line
            chime?.sendMessage('chat-message', {
              attendeeId: chime?.configuration?.credentials?.attendeeId,
              message: newFocusState
                ? intl.formatMessage({ id: 'Controls.focusOnMessage' })
                : intl.formatMessage({ id: 'Controls.focusOffMessage' }),
            });
            setFocus(newFocusState);
          }}
        >
          {focus ? <i className="fas fa-street-view" /> : <i className="fas fa-street-view" />}
        </button>
      </Tooltip>
      <Tooltip
        tooltip={
          muted
            ? intl.formatMessage({ id: 'Controls.unmuteTooltip' })
            : intl.formatMessage({ id: 'Controls.muteTooltip' })
        }
      >
        <button
          type="button"
          className={cx('muteButton', {
            enabled: !muted,
          })}
          onClick={async () => {
            if (muted) {
              // eslint-disable-next-line
              chime?.audioVideo?.realtimeUnmuteLocalAudio();
            } else {
              // eslint-disable-next-line
              chime?.audioVideo?.realtimeMuteLocalAudio();
            }
            // Adds a slight delay to close the tooltip before rendering the updated text in it
            await new Promise(resolve => setTimeout(resolve, 10));
          }}
        >
          {muted ? <i className="fas fa-microphone-slash" /> : <i className="fas fa-microphone" />}
        </button>
      </Tooltip>
      <Tooltip
        tooltip={
          videoStatus === VideoStatus.Disabled
            ? intl.formatMessage({ id: 'Controls.turnOnVideoTooltip' })
            : intl.formatMessage({ id: 'Controls.turnOffVideoTooltip' })
        }
      >
        <button
          type="button"
          className={cx('videoButton', {
            enabled: videoStatus === VideoStatus.Enabled,
          })}
          onClick={async () => {
            // Adds a slight delay to close the tooltip before rendering the updated text in it
            await new Promise(resolve => setTimeout(resolve, 10));
            if (videoStatus === VideoStatus.Disabled) {
              setVideoStatus(VideoStatus.Loading);
              try {
                if (!chime?.currentVideoInputDevice) {
                  throw new Error('currentVideoInputDevice does not exist');
                }
                await chime?.chooseVideoInputDevice(chime?.currentVideoInputDevice);
                // eslint-disable-next-line
                chime?.audioVideo?.startLocalVideoTile();
                setVideoStatus(VideoStatus.Enabled);
              } catch (error) {
                // eslint-disable-next-line
                console.error(error);
                setVideoStatus(VideoStatus.Disabled);
              }
            } else if (videoStatus === VideoStatus.Enabled) {
              setVideoStatus(VideoStatus.Loading);
              // eslint-disable-next-line
              chime?.audioVideo?.stopLocalVideoTile();
              setVideoStatus(VideoStatus.Disabled);
            }
          }}
        >
          {videoStatus === VideoStatus.Enabled ? (
            <i className="fas fa-video" />
          ) : (
            <i className="fas fa-video-slash" />
          )}
        </button>
      </Tooltip>

      <Tooltip tooltip={intl.formatMessage({ id: 'Controls.shareScreenTooltip' })}>
        <button type="button" className={cx('shareButton')} onClick={onClickShareButton}>
          <i className="fas fa-desktop" />
        </button>
      </Tooltip>
      <Tooltip tooltip={intl.formatMessage({ id: 'Controls.endClassroomTooltip' })}>
        <button
          type="button"
          className={cx('endButton')}
          onClick={() => {
            // eslint-disable-next-line
            chime?.leaveRoom(state.classMode === ClassMode.Teacher);
            history.push(routes.HOME);
          }}
        >
          <i className="fas fa-times" />
        </button>
      </Tooltip>

      <Tooltip tooltip={intl.formatMessage({ id: 'Controls.leaveClassroomTooltip' })}>
        <button
          type="button"
          className={cx('leaveButton')}
          onClick={() => {
            // eslint-disable-next-line
            history.push(routes.HOME);
          }}
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </Tooltip>
    </div>
  );
}
