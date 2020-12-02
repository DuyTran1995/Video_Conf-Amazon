import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Ratings from '../../../components/Ratings';
import ModalSchedule from '../../../components/Booking/ModalSchedule';
import { getTutorById } from '../../../services/tutor.service';

const INITIAL_STATE = {
  address: '',
  availabilities: [],
  avatar: 'Default',
  biography: '',
  city: '',
  country: '',
  gender: '',
  id: '',
  name: '',
  phone: '',
  rate: '',
  ratings: [],
  state: '',
  status: '',
  subjects: [],
  timezone: '',
  certifications: {
    graduateDegrees: [{ collegeName: '', typeOfDegree: '', major: '' }],
    certifications: [{ certificationName: '', issuedDate: '', expiredDate: '', picture: '' }],
  },
  zipcode: '',
};

const BookingDetail = () => {
  const { id } = useParams();

  const [isToggleModal, setIsToggleModal] = useState(false);
  const handleOpenModal = () => setIsToggleModal(!isToggleModal);

  const [tutorProfile, setTutorProfile] = useState(INITIAL_STATE);

  useEffect(() => {
    getTutorProfileById();
  }, [id]);

  const getTutorProfileById = async () => {
    if (id) {
      const { data } = (await getTutorById(id)) as any;
      if (data && data.getTutor) {
        const {
          name,
          id,
          avatar,
          gender,
          ratings,
          bookings,
          rate,
          biography,
          availabilities,
          certifications,
          subjects,
          timezone,
        } = data.getTutor;
        setTutorProfile(preState => ({
          ...preState,
          name,
          id,
          avatar,
          biography,
          gender,
          ratings,
          bookings,
          rate,
          subjects,
          timezone,
          certifications: certifications ? JSON.parse(certifications) : {},
          availabilities: availabilities ? JSON.parse(availabilities) : [],
        }));
      }
    }
  };

  return (
    <>
      <Helmet title="Booking Tutor Detail" />
      <main className="bg-light">
        <div className="container">
          <div className="section section--book">
            <div className="book__wrap">
              <div className="book__content">
                <div className="infos-detail mb-4">
                  <div className="p-5">
                    <div className="media">
                      <div className="d-flex mr-4">
                        <div className="avatar w120">
                          <div className="image-cover image-cover--cycle">
                            <img src={tutorProfile.avatar} alt="Avatar" className="img" />
                          </div>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-md-8">
                            <h5 className="mb-2">
                              {tutorProfile.name ? tutorProfile.name : 'Loading'}
                            </h5>
                            <div className="review">
                              <div className="block-rate d-inline-block small">
                                <div className="d-flex justify-content-center">
                                  <Ratings levelRating={3} />
                                </div>
                              </div>
                            </div>
                            <p className="mb-3">{tutorProfile.subjects[0]}</p>
                            <div className="d-flex align-items-center list-action">
                              <Link to="!#">
                                <em className="ic-edit" />
                              </Link>
                              <Link to="!#">
                                <em className="ic-address-card" />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <span className="btn btn-secondary mb-2 w-100">{`$${
                                tutorProfile.rate ? tutorProfile.rate : 'Loading'
                              }/h`}</span>
                              <button className="btn btn--red w-100" onClick={handleOpenModal}>
                                Schedule a call
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body p-5">
                    <h5 className="mb-3">Biography</h5>
                    <p className="mb-3">
                      {tutorProfile.biography ? tutorProfile.biography : 'Loading'}
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body p-5">
                    <h5 className="mb-3">Graduate Degree</h5>
                    {tutorProfile.certifications.graduateDegrees
                      ? tutorProfile.certifications.graduateDegrees.map((item, index) => (
                          <ul className="level-01" key={index}>
                            <li>{item.collegeName}</li>
                            <li>{item.typeOfDegree}</li>
                            <li>{item.major}</li>
                          </ul>
                        ))
                      : 'loading'}

                    <div className="px-5 my-4">
                      <hr />
                    </div>
                    <h5 className="mb-3">Certificate</h5>
                    <div className="row">
                      {tutorProfile.certifications.certifications
                        ? tutorProfile.certifications.certifications.map((item, index) => (
                            <div className="col-md-5" key={index}>
                              <div className="thumbnail show-infos">
                                <figure className="figure">
                                  <img src={item.picture} alt={'certifications'} />
                                </figure>
                                <div className="detail">
                                  <h6>{item.certificationName}</h6>
                                  <p>
                                    Issued Date: {item.issuedDate} <br /> Expired Date:
                                    {item.expiredDate}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        : 'loading'}
                    </div>
                    <div className="px-5 my-4">
                      <hr />
                    </div>
                    <h5 className="mb-3">Subject</h5>
                    <ul className="level-01">
                      {tutorProfile.subjects
                        ? tutorProfile.subjects.map((item, index) => <li key={index}>{item}</li>)
                        : 'loading'}
                    </ul>
                    <div className="px-5 my-4">
                      <hr />
                    </div>
                    <h5 className="mb-3">Schedule</h5>
                    <ul className="level-01">
                      {tutorProfile.availabilities
                        ? tutorProfile.availabilities.map((item, index) => (
                            <li key={index}>{new Date(item).toString()}</li>
                          ))
                        : 'loading'}
                    </ul>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body p-5">
                    <h5 className="mb-3">EducaRating and Reviewtion</h5>
                    <div className="block-rate d-inline-block">
                      <div className="d-flex justify-content-center">
                        <Ratings levelRating={3} />
                      </div>
                    </div>
                    <div className="block-rated w-50">
                      <div className="media mb-4">
                        <div className="d-flex align-self-center">
                          <div className="mr-4">5 start</div>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: '70%' }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="media mb-4">
                        <div className="d-flex align-self-center">
                          <div className="mr-4">4 start</div>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: '45%' }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="media mb-4">
                        <div className="d-flex align-self-center">
                          <div className="mr-4">3 start</div>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: '30%' }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="media mb-4">
                        <div className="d-flex align-self-center">
                          <div className="mr-4">2 start</div>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: '15%' }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="media mb-4">
                        <div className="d-flex align-self-center">
                          <div className="mr-4">1 start</div>
                        </div>
                        <div className="media-body align-self-center">
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: '0%' }}
                              aria-valuenow={41}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 my-4">
                      <hr />
                    </div>
                    <div className="w-50">
                      <div className="card mb-4">
                        <div className="card-body p-0">
                          <div className="media">
                            <div className="d-flex mr-3 w70">
                              <div className="image-cover image-cover--cycle">
                                <img alt="avatar" className="img" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h5 className="mb-2">Marie Winter</h5>
                              <p>
                                Happiness is not something readymade. It comes from your own
                                actions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center my-5">
                  <button className="btn btn--red w-25" onClick={handleOpenModal}>
                    Schedule a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalSchedule
          isToggleModal={isToggleModal}
          handleOpenModal={handleOpenModal}
          timeZoneTutor={tutorProfile.timezone}
          tutorID={id}
          availabilities={tutorProfile.availabilities}
        />
      </main>
    </>
  );
};

export default BookingDetail;
