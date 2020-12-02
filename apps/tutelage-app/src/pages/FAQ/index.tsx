import React from 'react';
import { Helmet } from 'react-helmet';

import bannerCate from '../../assets/images/banner-cate.jpg';
import bannerCate2x from '../../assets/images/banner-cate.jpg';
import Accordion from '../../components/Accordion';

const FAQ = () => {
  return (
    <>
      <Helmet title="FAQ" />
      <div>
        <main>
          <div className="banner banner--category">
            <div className="thumbnail">
              <img src={bannerCate} srcSet={bannerCate2x} className="img-fluid" alt="" />
            </div>
            <div className="category__desc ">
              <h2 className="title title--xxl">
                <span className="text-white">How it works</span>
              </h2>
            </div>
          </div>
          <section className="section section--our-mission">
            <div className="container">
              <h2 className="title title--lg title--deco text-green text-center">
                Frequently Asked Questions
                <em className="ic-deco-01"></em>
              </h2>
              <div className="section__desc text-center m-auto">
                <p className="trimtext">
                  Op here Het Epos staat de kwaliteit van onderwijs voorop. Wij hebben de ambitie om
                  bij de beste scholen van Rotterdam te horen. We zetten ons in om het elke dag een
                  beetje beter te doen. Op Het Epos stellen we zes kernwaarden centraal, die
                  terugkomen in ons onderwijs.
                </p>
              </div>
              <div className="section__inner">
                <div className="block-faq">
                  <div id="accordion">
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                    <Accordion title="What do I need to get started?">
                      Sunlight reaches Earth's atmosphere and is scattered in all directions by all
                      the gases and particles in the air. Blue light is scattered more than the
                      other colors because it travels as shorter, smaller waves. This is why we see
                      a blue sky most of the time.
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FAQ;
