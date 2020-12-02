// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import './app.global.css';

document.addEventListener('DOMContentLoaded', () =>
  render(
    <Fragment>
      <Root />
    </Fragment>,
    document.getElementById('root'),
  ),
);
