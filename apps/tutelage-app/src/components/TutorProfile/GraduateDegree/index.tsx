import React from 'react';
import { Field } from 'formik';

import { MsgValidationError } from '@tutelage-monorepo/shared/react-util';

import './styles.scss';

const GraduateDegree = ({
  value,
  arrayHelper,
  index,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <div className="item col-md-12">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block">
              <span className="label">College Name</span>
              <Field
                className="form-control"
                placeholder="Name"
                id={`graduateDegrees.[${index}].collegeName`}
                name={`graduateDegrees.[${index}].collegeName`}
                onChange={handleChange}
              />
              {errors.graduateDegrees &&
                errors.graduateDegrees[index] &&
                touched.graduateDegrees &&
                touched.graduateDegrees[index] && (
                  <MsgValidationError
                    messageErr={errors.graduateDegrees[index].collegeName}
                    touchedOop={touched.graduateDegrees[index].collegeName}
                  />
                )}
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <span className="label">Type of Degree</span>
            <select
              className="form-control custom-select"
              onChange={handleChange}
              value={value.typeOfDegree}
              id={`graduateDegrees.[${index}].typeOfDegree`}
              name={`graduateDegrees.[${index}].typeOfDegree`}
            >
              <option value="ABC">ABC</option>
              <option value="XYZ">XYZ</option>
            </select>
            {errors.graduateDegrees &&
              errors.graduateDegrees[index] &&
              touched.graduateDegrees &&
              touched.graduateDegrees[index] && (
                <MsgValidationError
                  messageErr={errors.graduateDegrees[index].typeOfDegree}
                  touchedOop={touched.graduateDegrees[index].typeOfDegree}
                />
              )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block">
              <span className="label">Major</span>
              <Field
                type="text"
                className="form-control"
                placeholder="Major"
                value={value.major}
                onChange={handleChange}
                onBlur={handleBlur}
                id="major"
                name={`graduateDegrees.[${index}].major`}
              />
              {errors.major &&
              touched.major &&
              touched.graduateDegrees &&
              touched.graduateDegrees[index] ? (
                <MsgValidationError
                  messageErr={errors.major + ''}
                  touchedOop={touched.graduateDegrees[index].major}
                />
              ) : (
                ''
              )}
            </label>
          </div>
        </div>
      </div>
      <span
        style={{ cursor: 'pointer' }}
        className="js-action-remove btn-action btn-action-remove"
        onClick={() => {
          arrayHelper.remove(index);
        }}
      >
        <em className="ic-exp-close"></em>
      </span>

      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          arrayHelper.push({
            collegeName: '',
            typeOfDegree: 'ABC',
          });
        }}
        className="js-action-add btn-action btn-action-add"
      >
        <em className="ic-exp" />
      </span>
    </div>
  );
};
export default GraduateDegree;
