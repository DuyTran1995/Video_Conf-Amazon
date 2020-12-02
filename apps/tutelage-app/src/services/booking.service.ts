import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import {
  customCreateBooking,
  customCreateMessage,
  customCreateConference,
} from '@tutelage-monorepo/tutelage/api-interfaces';

export const createBooking = async (timezone, status, learnerID, tutorID) => {
  return await API.graphql({
    query: customCreateBooking,
    variables: { input: { timezone, status, learnerID, tutorID } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};

export const createMessage = async (threadID, senderID, receiverID, content, status) => {
  return await API.graphql({
    query: customCreateMessage,
    variables: { input: { threadID, senderID, receiverID, content, status } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};

export const createConference = async (bookingID, startDate, duration, status) => {
  return await API.graphql({
    query: customCreateConference,
    variables: { input: { bookingID, startDate, duration, status } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};
