import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Submit = ({ onSubmit }) => {
  const handleOnChange = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <main className="py-4">
      <section className="section section--maneger my-5">
        <div className="container">
          <div className="section__inner w840">
            <h1 className="title title--md font-weight-normal text-green mb-5 text-center">
              You have Complete The Setup Profile
            </h1>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-5 text-justify">
                  <p>
                    Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de ambitie
                    om bij de beste scholen van Rotterdam te horen. We zetten ons in om het elke dag
                    een beetje beter te doen. Op Het Epos stellen we zes kernwaarden centraal, die
                    terugkomen in ons onderwijs.
                  </p>
                </div>
                <div className="text-center">
                  <Link to="/" className="btn btn--red w-50" onClick={handleOnChange}>
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

Submit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Submit.defaultProps = {
  onSubmit: null,
};

export default Submit;
