import { useFormik } from 'formik';
import React, { useState, useEffect, useContext } from 'react';
import * as YUP from 'yup';

import { MsgValidationError, Notification } from '@tutelage-monorepo/shared/react-util';
import { User, TypeFormUpload } from '@tutelage-monorepo/tutelage/api-interfaces';

import { UserContext } from '../../contexts/user';
import { getLearnerProfile, updateLearnerProfile } from '../../services/leaner.service';
import { UploadFile } from '@tutelage-monorepo/shared/react-util';

import DefaultAvatar from '../../assets/images/default-avatar.png';

import './style.scss';

const LearnerProfile = () => {
  const [errMessage, setErrMessage] = useState({
    message: '',
    resultStatus: false,
  });
  const [avatar, setAvatar] = useState(DefaultAvatar);

  const [currentUser] = useContext(UserContext);
  const { id: currentUserId, name } = currentUser as User;

  useEffect(() => {
    getLearnerProfileById();
  }, [currentUserId]);

  const initialValues = {
    name: '',
    gender: 'Male',
    phone: '',
  };

  const getLearnerProfileById = async () => {
    if (currentUserId) {
      const { data } = (await getLearnerProfile(currentUserId)) as any;
      if (data && data.getLearner) {
        const { name, gender, phone, avatar: currentAvatar } = data.getLearner;
        if (currentAvatar === 'Default') {
          setAvatar(DefaultAvatar);
        } else {
          setAvatar(currentAvatar);
        }
        formik.setValues({
          gender,
          name,
          phone,
        });
      }
    }
  };

  const validationSchema = YUP.object().shape({
    name: YUP.string()
      .label('name')
      .required('Name is required')
      .matches(/^[a-zA-Z ]+$/, 'The name is not in the correct format [a-z] [A-Z]')
      .max(60, 'The name has length must below 60 character'),
    gender: YUP.string().label('gender').required('Gender is required'),
    phone: YUP.string()
      .label('phone')
      .required('Phone is required')
      .max(20, 'Phone number has length must below 20 character')
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        'The phone number is not in the correct format',
      ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { name = '', gender = '', phone = '' } = values;
      if (avatar === DefaultAvatar) {
        const {
          data: { updateLearner },
        } = (await updateLearnerProfile(currentUserId, name, gender, phone, 'Default')) as any;
        if (updateLearner) {
          setErrMessage({ message: 'Update profile success', resultStatus: true });
        } else {
          setErrMessage({ message: 'Update profile fail', resultStatus: false });
        }
      } else {
        const {
          data: { updateLearner },
        } = (await updateLearnerProfile(currentUserId, name, gender, phone, avatar)) as any;
        if (updateLearner) {
          setErrMessage({ message: 'Update profile success', resultStatus: true });
        } else {
          setErrMessage({ message: 'Update profile fail', resultStatus: false });
        }
      }
    },
  });

  const handleDisableErr = disable => {
    if (disable) setErrMessage({ ...errMessage, message: '', resultStatus: false });
  };

  const onUploadSuccess = url => {
    setAvatar(url);
  };

  const onUploadFail = message => {
    setErrMessage({ message, resultStatus: false });
  };

  return (
    <main className="bg-light py-3">
      <div className="section section--manager my-5">
        <div className="container">
          <div className="section__inner">
            <div className="card p-4">
              <div className="card-body">
                <h5 className="pb-4 title">Basic Information</h5>

                {errMessage.message && (
                  <Notification handleDisableErr={handleDisableErr} dataMessage={errMessage} />
                )}

                <form onSubmit={formik.handleSubmit} className="form form--learner">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="d-block">
                          <span className="label">Name</span>
                          <input
                            name="name"
                            type="text"
                            className={`form-control ${
                              formik.errors.name && formik.touched.name ? 'validate-form-error' : ''
                            }`}
                            placeholder="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </label>
                        <MsgValidationError messageErr={formik.errors.name} touchedOop={true} />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <span className="label">Gender</span>
                        <select
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          name="gender"
                          className="form-control custom-select"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <MsgValidationError messageErr={formik.errors.gender} touchedOop={true} />
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="d-block">
                          <span className="label">Phone</span>
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="— — —"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </label>
                        <MsgValidationError messageErr={formik.errors.phone} touchedOop={true} />
                      </div>
                    </div>
                    <div className="group-filed w-100">
                      <hr />
                      <h5 className="py-3 title-img">Profile Picture</h5>
                      <UploadFile
                        fileName={name}
                        onUploadSuccess={onUploadSuccess}
                        typeForm={TypeFormUpload.UPLOAD_AVATAR}
                        onUploadFail={onUploadFail}
                        defaultImage={avatar}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn--red w-25">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LearnerProfile;
