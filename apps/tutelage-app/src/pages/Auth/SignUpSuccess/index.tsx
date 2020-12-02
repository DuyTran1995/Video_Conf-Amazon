import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const LoginSuccess = () => {
  return (
    <div>
      <Helmet title="Register page" />
      <main>
        <section className="section section--login">
          <div className="container">
            <div className="section__inner w840">
              <h1 className="title title--lg font-weight-normal text-green mb-5 text-center">
                Thank for signing up !
              </h1>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-5 text-justify">
                    <p className="fz18 text-justify">
                      Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de
                      ambitie om bij de beste scholen van Rotterdam te horen. We zetten ons in om
                      het elke dag een beetje beter te doen. Op Het Epos stellen we zes kernwaarden
                      centraal, die terugkomen in ons onderwijs.
                    </p>
                  </div>
                  <div className="text-center">
                    <Link className="btn btn--red w-50" to="#!">
                      Get start
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginSuccess;
