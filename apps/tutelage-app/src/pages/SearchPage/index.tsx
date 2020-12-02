import React from 'react';

const SearchPage = () => {
  return (
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
                        <div className="block-range">
                          <input type="range" className="custom-range" id="customRange1" />
                          <span className="start-range">_20$</span>
                          <span className="end-range">_50$</span>
                        </div>
                      </div>
                      <div className="item">
                        <h6 className="mb-4">Availabitity</h6>
                        <div className="block-option">
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Sunday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Monday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Tuesday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Wednesday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Thursday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Friday</span>
                            </label>
                          </div>
                          <div className="form-check--custom">
                            <label className="form-check-label">
                              <input type="checkbox" className="d-none" />
                              <span>Saturday</span>
                            </label>
                          </div>
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
                        <a href="#!" className="btn btn--red w-100">
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
                          <select className="form-control custom-select type-02">
                            <option value={'Best match'}>Best match</option>
                            <option value={'Best match'}>Best match</option>
                            <option value={'Best match'}>Best match</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-staff">
                    <div className="list-staff-wrapp">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="media">
                            <div className="d-flex mr-3">
                              <div className="avatar">
                                <div className="image-cover image-cover--cycle">
                                  <img src="images/1x1.png" alt="" className="img" />
                                </div>
                              </div>
                            </div>
                            <div className="media-body">
                              <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                  <h5 className="mb-3">Grant Marshall</h5>
                                  <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                                    ex nulla dolor maiores illum, temporibus porro exercitationem
                                    magni ullam ea ipsam quibusdam rerum quidem quae vero sit
                                    tempora commodi sint est aperiam! Amet eos perspiciatis, ipsum,
                                    provident inventore id distinctio esse eaque dignissimos beatae
                                    itaque maiores ea sequi quasi recusandae!
                                  </p>
                                  <div className="text-left">
                                    <a href="book-tutor-workflow-2.html" className="btn btn--red">
                                      Get Started
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                  <div className="review text-center">
                                    <div className="block-rate d-inline-block">
                                      <p className="price text-left mb-3">$20/ hour</p>
                                      <div className="d-flex justify-content-center">
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-01" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="media">
                            <div className="d-flex mr-3">
                              <div className="avatar">
                                <div className="image-cover image-cover--cycle">
                                  <img src="images/1x1.png" alt="" className="img" />
                                </div>
                              </div>
                            </div>
                            <div className="media-body">
                              <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                  <h5 className="mb-3">Grant Marshall</h5>
                                  <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                                    ex nulla dolor maiores illum, temporibus porro exercitationem
                                    magni ullam ea ipsam quibusdam rerum quidem quae vero sit
                                    tempora commodi sint est aperiam! Amet eos perspiciatis, ipsum,
                                    provident inventore id distinctio esse eaque dignissimos beatae
                                    itaque maiores ea sequi quasi recusandae!
                                  </p>
                                  <div className="text-left">
                                    <a href="book-tutor-workflow-2.html" className="btn btn--red">
                                      Get Started
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                  <div className="review text-center">
                                    <div className="block-rate d-inline-block">
                                      <p className="price text-left mb-3">$20/ hour</p>
                                      <div className="d-flex justify-content-center">
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-01" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="media">
                            <div className="d-flex mr-3">
                              <div className="avatar">
                                <div className="image-cover image-cover--cycle">
                                  <img src="images/1x1.png" alt="" className="img" />
                                </div>
                              </div>
                            </div>
                            <div className="media-body">
                              <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                  <h5 className="mb-3">Grant Marshall</h5>
                                  <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                                    ex nulla dolor maiores illum, temporibus porro exercitationem
                                    magni ullam ea ipsam quibusdam rerum quidem quae vero sit
                                    tempora commodi sint est aperiam! Amet eos perspiciatis, ipsum,
                                    provident inventore id distinctio esse eaque dignissimos beatae
                                    itaque maiores ea sequi quasi recusandae!
                                  </p>
                                  <div className="text-left">
                                    <a href="book-tutor-workflow-2.html" className="btn btn--red">
                                      Get Started
                                    </a>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                  <div className="review text-center">
                                    <div className="block-rate d-inline-block">
                                      <p className="price text-left mb-3">$20/ hour</p>
                                      <div className="d-flex justify-content-center">
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-02" />
                                        </span>
                                        <span>
                                          <em className="ic-star-01" />
                                        </span>
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
                    <div className="block-pagi mb-4">
                      <nav className="">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <a className="page-link" href="#!" aria-label="Previous">
                              <span className="ic-arrow-prev-01" />
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link active" href="#!">
                              <span>1</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#!">
                              <span>2</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#!">
                              <span>3</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#!" aria-label="Next">
                              <span className="ic-arrow-next-01" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="media">
                          <div className="d-flex mr-3">
                            <img src="images/icon/avata-df.png" alt="" />
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
  );
};

export default SearchPage;
