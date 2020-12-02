// TODO: Delete file

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Progress } from 'reactstrap';

import { TypeFormUpload } from '@tutelage-monorepo/tutelage/api-interfaces';

// import IconDelete from '../../assets/images/icon/alert-close.png';
import DefaultAvatar from '../../../../../../../apps/tutelage-app/src/assets/images/default-avatar.jpg';

import './style.scss';

const UploadFile = ({
  fileName = '',
  typeForm = TypeFormUpload.UPLOAD_AVATAR,
  width = 500,
  height = 500,
  defaultImage = DefaultAvatar,
  onUploadSuccess = url => {},
  onUploadFail = message => {},
}) => {
  const [url, setUrl] = useState(defaultImage);
  const [temp] = useState([]);
  const [isShowProgress, setIsShowProgress] = useState(false);
  const [valueProgress, setValueProgress] = useState(1);
  // show progress bar
  useEffect(() => {
    if (valueProgress + 0.1 <= 100) {
      setValueProgress(valueProgress + 5);
    } else {
      setTimeout(() => {
        setIsShowProgress(false);
      }, 500);
    }
  }, [valueProgress]);

  // show image when default image change
  useEffect(() => {
    setUrl(defaultImage);
  }, [defaultImage]);

  const GET_PRESIGNED_URL_UPLOAD =
    'https://hk04dplp7e.execute-api.ap-southeast-1.amazonaws.com/default/getURLUpload';

  const handleOnChange = async e => {
    const { target: { files = [] } = {} } = e;
    const fileUpload = files[0];
    if (fileUpload.type.indexOf('image') === -1) {
      onUploadFail('The file is not a image');
      return;
    }
    const fileNameUpload = fileName ? fileName : fileUpload.name.split('.')[0];
    if (files.length > 0) {
      try {
        const { data: { UploadURL = '' } = {} } = await axios({
          url: GET_PRESIGNED_URL_UPLOAD,
          method: 'POST',
          params: {
            name: fileNameUpload,
            type: fileUpload.type,
          },
        });
        uploadFile(UploadURL, fileNameUpload, fileUpload);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const uploadFile = (UploadURL, fileName, file) => {
    setValueProgress(0);
    setIsShowProgress(true);

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', UploadURL);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const extension = file.type.split('/')[1];
          const urlUpload = `https://avatar-of-user.s3-ap-southeast-1.amazonaws.com/${fileName}.${extension}`;
          onUploadSuccess(urlUpload);
          setUrl(urlUpload);
        } else {
          onUploadFail(`Could not upload file`);
        }
      }
    };
    xhr.send(file);
  };

  const renderUploadAvatar = () => {
    return (
      <div style={{ width, height }} className="wrapper-upload wrapper">
        <span>Picture</span>
        <label
          className={`box-upload ${url ? 'upload' : ''}`}
          htmlFor="upload"
          style={{ width, height }}
        >
          {url ? (
            <div className="content-image">
              <img src={url} alt="" className="image" />
              {/* <img src={IconDelete} alt="" className="icon-delete" onClick={deleteImage} /> */}
            </div>
          ) : (
            <div className="box-content">
              <span>+ Upload</span>
            </div>
          )}
          <input
            value={temp}
            type="file"
            id="upload"
            hidden
            onChange={handleOnChange}
            accept="image/*"
          />
        </label>
      </div>
    );
  };

  const renderUploadCertificate = () => {
    return (
      <div className="group-filed w-100">
        <div className="row align-items-center mb-5">
          {/* {url !== DefaultAvatar ? (
            <img src={IconDelete} alt="" className="icon-delete" onClick={deleteImage} />
          ) : (
            ''
          )} */}
          <div className="col-sm-6">
            <div className="avatar w-50">
              <div className="image-cover image-cover--cycle">
                <img src={url} alt="" className="img" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="btn-uploadFile">
              <span className="label mb-3">
                Chose your picture for show <br />
                <span className="recommend-image">(recommend: 200x200 px)</span>
              </span>
              <label className="d-block m-0">
                <span className="btn">+ Upload</span>
                <input
                  name="avatar"
                  type="file"
                  className="form-control d-none"
                  onChange={handleOnChange}
                  accept="image/*"
                  value={temp}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const deleteImage = () => {
  //   if (typeForm === TypeFormUpload.UPLOAD_AVATAR) {
  //     setUrl(DefaultAvatar);
  //     onUploadSuccess(DefaultAvatar);
  //   } else {
  //     setUrl('');
  //     onUploadSuccess('');
  //   }
  //   setTemp([]);
  // };

  return (
    <>
      {isShowProgress && <Progress animated value={valueProgress} />}
      {typeForm === TypeFormUpload.UPLOAD_CERTIFICATION
        ? renderUploadAvatar()
        : renderUploadCertificate()}
    </>
  );
};

UploadFile.propTypes = {
  fileName: PropTypes.string,
  onUploadSuccess: PropTypes.func,
  onUploadFail: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  defaultImage: PropTypes.string,
};

export default UploadFile;
