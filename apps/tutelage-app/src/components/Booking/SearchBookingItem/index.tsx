import React from 'react';
import { Link } from 'react-router-dom';

import Ratings from './../../../components/Ratings';

interface Props {
  id: string;
  name: string;
  biography: string;
  rate: string;
  levelRating: number;
  avatar: string;
}

const SearchBookingItem = (props: Props) => {
  const { id, name, biography, rate, levelRating, avatar } = props;

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="media">
            <div className="d-flex mr-3">
              <div className="avatar">
                <div className="image-cover image-cover--cycle">
                  <img src={avatar} alt="avatar" className="img" />
                </div>
              </div>
            </div>
            <div className="media-body">
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <h5 className="mb-3">{name}</h5>
                  <p className="mb-3">{biography}</p>
                  <div className="text-left">
                    <Link to={`/booking-detail/${id}`} className="btn btn--red">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="review text-center">
                    <div className="block-rate d-inline-block">
                      <p className="price text-left mb-3">{`$${rate}/ hour`}</p>
                      <div className="d-flex justify-content-center">
                        <Ratings levelRating={levelRating} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBookingItem;
