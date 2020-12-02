import React, { useState } from 'react';

import './styles.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="card border-0">
      <div
        data-toggle="collapse"
        data-target="#faq01"
        aria-expanded="true"
        aria-controls="faq01"
        className={`btn btn-link ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            {/*<em className="ic-question"></em>*/}
            <button
              className="btn btn-collapse"
              data-toggle="collapse"
              data-target="#faq02"
              aria-controls="faq02"
            >
              What do
              {title}
            </button>
            <em className="ic-arrow-expan"></em>
          </h5>
        </div>
      </div>

      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
