import React from 'react';
import { Link } from 'react-router-dom';

import Accordion from '../../Accordion';

import './styles.scss';

const FrequentlyAskedQuestions = () => {
  return (
    <div className="container">
      <h2 className="title title--lg text-center">Frequently Asked Questions</h2>
      <div className="block-faq">
        <div id="accordion">
          <Accordion title="What do I need to get started?">
            Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases
            and particles in the air. Blue light is scattered more than the other colors because it
            travels as shorter, smaller waves. This is why we see a blue sky most of the time.
          </Accordion>
          <Accordion title="What do I need to get started?">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
            squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Accordion>
          <Accordion title="What do I need to get started?">
            Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases
            and particles in the air. Blue light is scattered more than the other colors because it
            travels as shorter, smaller waves. This is why we see a blue sky most of the time.
          </Accordion>
        </div>
      </div>
      <div className="group-btn text-center">
        <Link to="" className="btn btn--readmore">
          <span>Read more</span>
          <em className="ic-arrow-right-white" />
        </Link>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
