import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import SearchBookingItem from '../../../components/Booking/SearchBookingItem';
import SliderRange from '../../../components/SliderRange';
import CheckBox from '../../../components/Checkbox';
import CustomPagination from '../../../components/Pagination';

import { listTutorProfile } from '../../../services/tutor.service';

import avatarDefault from '../../../assets/images/icon/avata-df.png';
import img1x1Default from '../../../assets/images/1x1.png';

const mockDataSelectSort = [
  { label: 'Best Price', value: 'bestPrice' },
  { label: 'Best Rating', value: 'bestRating' },
];

const SearchBooking = props => {
  const [sliderHours, setSliderHours] = useState(30);
  const [selectSort, setSelectSort] = useState('bestPrice');
  const [listTutor, setListTutor] = useState([]);

  const [availability, setAvailability] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const getValueSliderRange = (value: number) => {
    setSliderHours(value);
  };

  const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = availability;

  const handleChangeChecked = (isChecked: boolean, name: string) => {
    setAvailability(availability => ({ ...availability, [name]: isChecked }));
  };

  const handleSelectSort = (event: any) => {
    const { value } = event.target;
    setSelectSort(value);
  };

  useEffect(() => {
    getListTutor();
  }, []);

  const getListTutor = async () => {
    const { data } = (await listTutorProfile(8)) as any;
    if (data && data.listTutors) {
      const { items } = data.listTutors;
      setListTutor(items);
    }
  };

  return (
    <>
      <Helmet title="Search Booking Tutors" />
      <main className="bg-light pt-5">
        <div className="container">
          <div className="section section--book">
            <div className="book__wrap">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-12">
                  <div className="book__filter">
                    <div className="card border-0">
                      <div className="card-body">
                        <h5>Filter</h5>
                        <div className="item">
                          <h6>Hourly rate</h6>
                          <SliderRange getValueSliderRange={getValueSliderRange} />
                        </div>
                        <div className="item">
                          <h6 className="mb-4">Availability</h6>
                          <div className="block-option">
                            <CheckBox
                              name="sunday"
                              isChecked={sunday}
                              labelName={'Sunday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="monday"
                              isChecked={monday}
                              labelName={'Monday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="tuesday"
                              isChecked={tuesday}
                              labelName={'Tuesday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="wednesday"
                              isChecked={wednesday}
                              labelName={'Wednesday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="thursday"
                              isChecked={thursday}
                              labelName={'Thursday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="friday"
                              isChecked={friday}
                              labelName={'Friday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                            <CheckBox
                              name="saturday"
                              isChecked={saturday}
                              labelName={'Saturday'}
                              handleChangeChecked={handleChangeChecked}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="book__content">
                    <div className="row align-items-end mb-4">
                      <div className="col-md-7 col-md-7 col-lg-8 col-xl-9 mb-2">
                        <div className="form-group form-group--search mb-0">
                          <label className="d-block m-0">
                            <span className="label mb-3">Subject</span>
                            <input type="text" className="form-control " />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5 col-md-5 col-lg-4 col-xl-3 mb-2">
                        <div className="form-group m-0 text-right">
                          <a
                            href="http://edu.da-nang.top/book-tutor-workflow-1.html#!"
                            className="btn btn--red w-100"
                          >
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-4">
                      <div className="col-xl-8 col-lg-7 col-md-6">100 Tutors fit your choices</div>
                      <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="form-group row align-items-center m-0">
                          <label className="col-sm-3 col-form-label">Sort</label>
                          <div className="col-sm-9 p-0">
                            <select
                              className="form-control custom-select type-02"
                              onChange={handleSelectSort}
                              value={selectSort}
                            >
                              {mockDataSelectSort.map((item: any, index: number) => (
                                <option key={index} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-staff">
                      <div className="list-staff-wrapp">
                        {listTutor.length > 0 ? (
                          listTutor.map((item: any) => (
                            <SearchBookingItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              biography={item.biography ? item.biography : ''}
                              rate={item.rate}
                              levelRating={5}
                              avatar={item.avatar !== 'Default' ? item.avatar : img1x1Default}
                            />
                          ))
                        ) : (
                          <>
                            <p>No data</p>
                          </>
                        )}
                      </div>

                      <CustomPagination totalPage={3} />

                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="media">
                            <div className="d-flex mr-3">
                              <img src={avatarDefault} alt="" />
                            </div>
                            <div className="media-body">
                              <h5 className="mb-2">Search for tutor according to your need!</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut ero labore et dolore.Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut ero labore et dolore………
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchBooking;
