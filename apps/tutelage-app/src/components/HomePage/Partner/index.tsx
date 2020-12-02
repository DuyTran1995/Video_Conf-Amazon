import React from 'react';
import { Link } from 'react-router-dom';

import partner01 from '../../../assets/images/partner-img-01.png';
import partner02 from '../../../assets/images/partner-img-02.png';
import partner03 from '../../../assets/images/partner-img-03.png';
import partner04 from '../../../assets/images/partner-img-04.png';
import partner05 from '../../../assets/images/partner-img-05.png';
import partner06 from '../../../assets/images/partner-img-06.png';

const Partner = () => {
  return (
    <div className="container">
      <div className="block-partner">
        <ul className="list-partner py-3">
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner01} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner02} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner03} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner04} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner05} alt="" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img className="img-fluid" src={partner06} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partner;
