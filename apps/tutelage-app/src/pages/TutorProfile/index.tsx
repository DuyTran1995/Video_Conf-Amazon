import React, { useState, useEffect, useContext } from 'react';
import { useToasts } from 'react-toast-notifications';

import { User } from '@tutelage-monorepo/tutelage/api-interfaces';

import PersonalInformation from './PersonalInformation';
import EducationCertification from './EducationCertification';
import Biography from './Biography';
import Subject from './Subject';
import Availability from './Availability';
import Submit from './Submit';
import { UserContext } from '../../contexts/user';
import { getTutorById, updateTutor } from '../../services/tutor.service';
import { LIST_STEP } from './ListStep';

const TutorProfile = () => {
  const { addToast } = useToasts();
  const [currentUser] = useContext(UserContext);
  const { id: currentUserId } = currentUser as User;

  const [step, setStep] = useState(LIST_STEP.PERSONAL_INFORMATION);

  const [dataInfoOfTutor, setDataInfoOfTutor] = useState({});

  useEffect(() => {
    const getTutorByIdAPI = async () => {
      if (currentUserId) {
        try {
          const result = (await getTutorById(currentUserId)) as any;
          if (result && result.data && result.data.getTutor) {
            setDataInfoOfTutor(result.data.getTutor);
          }
        } catch (e) {
          addToast(e.message, { appearance: 'error' });
        }
      }
    };

    getTutorByIdAPI();
  }, [currentUserId, addToast]);

  const handlerOnSubmit = data => {
    setDataInfoOfTutor({ ...dataInfoOfTutor, ...data });
  };

  const handlerOnSubmitData = async () => {
    try {
      await updateTutor(dataInfoOfTutor);
    } catch (e) {
      addToast(e.message, { appearance: 'error' });
    }
  };

  const renderTutorComponent = () => {
    switch (step) {
      case LIST_STEP.PERSONAL_INFORMATION:
        return (
          <PersonalInformation
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
            data={dataInfoOfTutor}
          />
        );
      case LIST_STEP.EDUCATION_CERTIFICATION:
        return (
          <EducationCertification
            data={dataInfoOfTutor}
            currentStep={step}
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
          />
        );
      case LIST_STEP.BIOGRAPHY:
        return (
          <Biography
            currentStep={step}
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
            data={dataInfoOfTutor}
          />
        );
      case LIST_STEP.SUBJECT:
        return (
          <Subject
            currentStep={step}
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
            data={dataInfoOfTutor}
          />
        );
      case LIST_STEP.AVAILABILITY:
        return (
          <Availability
            currentStep={step}
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
            data={dataInfoOfTutor}
          />
        );
      case LIST_STEP.SUBMIT:
        return <Submit onSubmit={handlerOnSubmitData} />;
      default:
        return (
          <PersonalInformation
            data={dataInfoOfTutor}
            onChangeStep={setStep}
            onSubmit={handlerOnSubmit}
          />
        );
    }
  };
  return <>{renderTutorComponent()}</>;
};

export default TutorProfile;
