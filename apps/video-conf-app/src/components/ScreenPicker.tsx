// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

// import LoadingSpinner from './LoadingSpinner';
import styles from './ScreenPicker.css';

const cx = classNames.bind(styles);

enum ShareType {
  Screen,
  Window,
}

type Props = {
  onClickShareButton: (selectedSourceId: string) => void;
  onClickCancelButton: () => void;
};

export default function ScreenPicker(props: Props) {
  const { onClickCancelButton, onClickShareButton } = props;
  const [shareType, setShareType] = useState(ShareType.Window);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);

  return (
    <div className={cx('screenPicker')}>
      <div className={cx('top')}>
        <h1 className={cx('header')}>
          <FormattedMessage id="ScreenPicker.title" />
        </h1>
        <div className={cx('tabs')}>
          <button
            type="button"
            className={cx('windowTab', {
              selected: shareType === ShareType.Window,
            })}
            onClick={() => {
              setShareType(ShareType.Window);
            }}
          >
            <FormattedMessage id="ScreenPicker.applicationWindowTab" />
          </button>
          <button
            type="button"
            className={cx('screenTab', {
              selected: shareType === ShareType.Screen,
            })}
            onClick={() => {
              setShareType(ShareType.Screen);
            }}
          >
            <FormattedMessage id="ScreenPicker.yourEntireScreenTab" />
          </button>
        </div>
      </div>
      <div className={cx('middle')}>
        <div className={cx('noScreen')}>
          <FormattedMessage id="ScreenPicker.noScreen" />
        </div>
        <div
          onClick={() => {
            setSelectedSourceId('123');
          }}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        ></div>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('buttons')}>
          <button
            type="button"
            className={cx('cancelButton')}
            onClick={() => {
              onClickCancelButton();
            }}
          >
            <FormattedMessage id="ScreenPicker.cancel" />
          </button>
          <button
            type="button"
            disabled={!selectedSourceId}
            className={cx('shareButton', {
              enabled: !!selectedSourceId,
            })}
            onClick={() => {
              if (selectedSourceId) {
                onClickShareButton(selectedSourceId);
              }
            }}
          >
            <FormattedMessage id="ScreenPicker.share" />
          </button>
        </div>
      </div>
    </div>
  );
}
