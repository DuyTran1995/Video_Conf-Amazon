import React from 'react';

import s1img01 from '../../../assets/images/s1-img-01.png';
import s1img012x from '../../../assets/images/s1-img-01@2x.png';
import s1img013x from '../../../assets/images/s1-img-01@3x.png';

import './styles.scss';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="media-block align-items-center">
        <div className="media-block__body ">
          <h2 className="media-block__title title title--lg text-green">Our Mission</h2>
          <p className="media-block__text">
            Tutelage seeks to empower learners by providing them with an affordable platform that
            matches them with a licensed teacher in their desired area of study and taps into the
            often- undervalued talent of teachers beyond the classroom.
          </p>

          <p className="media-block__text">
            As a former student, and later as an educator I’ve experienced first-hand the power of
            one on one instruction with teachers who were unencumbered by unreasonable policies, and
            unrealistic objectives, enabling them to custom tailor learning in order to best meet
            the needs of students.
          </p>

          <p className="media-block__text">
            At Tutelage we understand that people are individuals and that learning is a very
            individual process. In a classroom of 20 or more students, there are invariably 20
            different learning styles, and while the best of teachers try to address the learning
            diversity of their classrooms, rarely can this ever match the effectiveness of one on
            one instruction.
          </p>
        </div>
        <div className="media-block__media ">
          <figure className="figure">
            <img
              src={s1img01}
              srcSet={`${s1img012x} 2x, ${s1img013x} 3x`}
              className="img-fluid"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
