import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import Routes from './configs/routes';
import './configs/i18n';
import awsconfig from '../../../generated-amplify/aws-exports';

// TODO: need to separate scss file to reduce size bundle
import '../src/assets/scss/main.scss';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsconfig);

ReactDOM.render(<Routes />, document.getElementById('root'));
