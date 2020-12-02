import React from 'react';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

import Banner from '../../components/Banner';
import AboutUs from '../../components/HomePage/AboutUs';
import HowItWork from '../../components/HomePage/HowItWork';
import Rating from '../../components/HomePage/Rating';
import Counselors from '../../components/HomePage/Counselors';
import Figure from '../../components/HomePage/Figure';
import FrequentlyAskedQuestions from '../../components/HomePage/FrequentlyAskedQuestions';
import Quote from '../../components/HomePage/Quote';
import Partner from '../../components/HomePage/Partner';

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <main>
        <div className="banner banner--main">
          <Banner />
        </div>

        <Fade bottom>
          <section className="section section--01">
            <AboutUs />
            <Figure />
          </section>
        </Fade>

        <Fade bottom>
          <section className="section section--02">
            <HowItWork />
          </section>
        </Fade>

        <Fade bottom>
          <section className="section section--03">
            <Rating />
          </section>
        </Fade>

        <Fade bottom>
          <section className="section section--04">
            <Counselors />
          </section>
        </Fade>

        <Fade bottom>
          <section className="section section--05">
            <FrequentlyAskedQuestions />
          </section>
        </Fade>
        <Fade bottom>
          <section className="section section--06 bg-gray-light">
            <Quote />
          </section>
        </Fade>

        <Fade bottom>
          <section className="section section--07 bg-gray-light">
            <Partner />
          </section>
        </Fade>
      </main>
    </>
  );
};

export default Home;
