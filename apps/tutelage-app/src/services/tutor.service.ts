import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import {
  customGetTutorById,
  customUpdateTutor,
  customGetListProfile,
} from '@tutelage-monorepo/tutelage/api-interfaces';

export const getTutorById = tutorId => {
  return API.graphql({
    query: customGetTutorById,
    variables: { id: tutorId },
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
};

export const updateTutor = input => {
  const params = {
    input: input,
  };

  return API.graphql({
    query: customUpdateTutor,
    variables: params,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};

export const listTutorProfile = async (limit: number, nextToken?: string) => {
  return API.graphql({
    query: customGetListProfile,
    variables: { limit, nextToken },
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
};
