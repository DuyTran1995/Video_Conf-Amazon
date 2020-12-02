import { API, graphqlOperation } from 'aws-amplify';

import {
  getLearner,
  updateLearner,
  createLearner,
} from '@tutelage-monorepo/tutelage/api-interfaces';

export const getLearnerProfile = leanerId => {
  return API.graphql(graphqlOperation(getLearner, { id: leanerId }));
};

export const updateLearnerProfile = (id, name, gender, phone, avatar) => {
  return API.graphql(
    graphqlOperation(updateLearner, {
      input: {
        name,
        gender,
        phone,
        id,
        avatar,
      },
    }),
  );
};

export const createLearnerProfile = (id, name, gender, avatar) => {
  return API.graphql(
    graphqlOperation(createLearner, {
      input: {
        avatar,
        name,
        gender,
        id,
      },
    }),
  );
};
