import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Public = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Public;
