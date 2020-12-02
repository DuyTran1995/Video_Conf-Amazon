import React from 'react';
import PropTypes from 'prop-types';

import { UserProvider } from './user';

const GlobalContext = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
