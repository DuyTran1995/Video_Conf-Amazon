import React from 'react';

import s1img02 from '../../../assets/images/s1-img-02.png';
import s1img022x from '../../../assets/images/s1-img-02@2x.png';
import s1img023x from '../../../assets/images/s1-img-02@3x.png';

const Figure = () => {
  return (
    <div className="deco deco--01 only-pc ">
      <figure className="figure">
        <img
          src={s1img02}
          srcSet={`${s1img022x} 2x, ${s1img023x} 3x`}
          className="img-fluid"
          alt=""
        />
      </figure>
    </div>
  );
};

export default Figure;
