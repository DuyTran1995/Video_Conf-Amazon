import React from 'react';
import PropTypes from 'prop-types';

const MainLayout: React.FC = ({ children }) => {
  return <>{children}</>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
