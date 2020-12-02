import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageNotFound from '../../assets/images/404page.jpg';

const System404 = () => {
  return (
    <>
      <Helmet title="404" />
      <Link className="py-5 d-flex justify-content-center" to="/">
        <img className="d-flex justify-content-center" src={PageNotFound} alt="" />
      </Link>
    </>
  );
};

export default System404;
