import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Field } from 'formik';

import { UploadFile, MsgValidationError } from '@tutelage-monorepo/shared/react-util';
import { TypeFormUpload } from '@tutelage-monorepo/tutelage/api-interfaces';

import './styles.scss';

const Certification = ({ onSetFieldValue, value, index, arrayHelpers, errors, touched }) => {
  const [message, setMessage] = useState('');

  const handleUploadFail = message => {
    setMessage(message);
  };

  const handleUploadSuccess = url => {
    onSetFieldValue(`certifications[${index}].picture`, url);
    setMessage('');
  };

  const { issuedDate = new Date(), expiredDate = new Date() } = value;
  return (
    <div className="item col-md-12" key={index}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block">
              <span className="label">Certification Name</span>
              <Field
                type="text"
                className="form-control"
                placeholder="Name"
                name={`certifications[${index}].certificationName`}
              />
              {errors.certifications &&
                errors.certifications[index] &&
                touched.certifications &&
                touched.certifications[index] && (
                  <MsgValidationError
                    messageErr={errors.certifications[index].certificationName}
                    touchedOop={touched.certifications[index].certificationName}
                  />
                )}
            </label>
          </div>
          <div className="form-group">
            <label className="d-block">
              <span className="label" style={{ display: 'block' }}>
                Issued Date
              </span>
              <DatePicker
                name={`certifications[${index}].issuedDate`}
                selected={issuedDate ? new Date(issuedDate) : issuedDate}
                onChange={date => {
                  onSetFieldValue(`certifications[${index}].issuedDate`, date);
                }}
                selectsStart
                startDate={issuedDate ? new Date(issuedDate) : issuedDate}
                endDate={expiredDate ? new Date(expiredDate) : expiredDate}
                placeholderText="Please Select Time Issued Date"
                customInput={<input type="text" className="form-control" />}
              />
              {errors.certifications &&
                errors.certifications[index] &&
                touched.certifications &&
                touched.certifications[index] && (
                  <MsgValidationError
                    messageErr={errors.certifications[index].issuedDate}
                    touchedOop={touched.certifications[index].issuedDate}
                  />
                )}
            </label>
          </div>
          <div className="form-group">
            <label className="d-block">
              <span className="label" style={{ display: 'block' }}>
                Expired Date
              </span>
              <DatePicker
                name={`certifications[${index}].expiredDate`}
                selected={expiredDate ? new Date(expiredDate) : expiredDate}
                onChange={date => {
                  onSetFieldValue(`certifications[${index}].expiredDate`, date);
                }}
                selectsEnd
                startDate={issuedDate ? new Date(issuedDate) : issuedDate}
                endDate={expiredDate ? new Date(expiredDate) : expiredDate}
                minDate={issuedDate ? new Date(issuedDate) : issuedDate}
                customInput={<input type="text" className="form-control" />}
                placeholderText="Please Select Time Expired Date"
              />
              {errors.certifications &&
                errors.certifications[index] &&
                touched.certifications &&
                touched.certifications[index] && (
                  <MsgValidationError
                    messageErr={errors.certifications[index].expiredDate}
                    touchedOop={touched.certifications[index].expiredDate}
                  />
                )}
            </label>
          </div>
        </div>
        <div>
          <UploadFile
            onUploadFail={handleUploadFail}
            onUploadSuccess={handleUploadSuccess}
            typeForm={TypeFormUpload.UPLOAD_CERTIFICATION}
            height={252}
            width={418}
            defaultImage={value.picture}
          />
          {errors.certifications &&
            errors.certifications[index] &&
            touched.certifications &&
            touched.certifications[index] && (
              <MsgValidationError
                messageErr={errors.certifications[index].picture}
                touchedOop={touched.certifications[index].picture}
              />
            )}
          <span style={{ color: 'red' }} className="message-upload">
            {message}
          </span>
        </div>
      </div>

      <span
        style={{ cursor: 'pointer' }}
        className="js-action-remove btn-action btn-action-remove"
        onClick={() => {
          arrayHelpers.remove(index);
        }}
      >
        <em className="ic-exp-close"></em>
      </span>

      <span
        style={{ cursor: 'pointer' }}
        onClick={() =>
          arrayHelpers.push({
            certificationName: '',
            issuedDate: '',
            expiredDate: '',
            picture: '',
          })
        }
        className="js-action-add btn-action btn-action-add"
      >
        <em className="ic-exp" />
      </span>
    </div>
  );
};

export default Certification;
