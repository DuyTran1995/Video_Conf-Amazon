/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookingInput = {
  id?: string | null;
  timezone: string;
  status: string;
  learnerID: string;
  tutorID: string;
  subject: string;
};

export type ModelBookingConditionInput = {
  timezone?: ModelStringInput | null;
  status?: ModelStringInput | null;
  learnerID?: ModelIDInput | null;
  tutorID?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  and?: Array<ModelBookingConditionInput | null> | null;
  or?: Array<ModelBookingConditionInput | null> | null;
  not?: ModelBookingConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBookingInput = {
  id: string;
  timezone?: string | null;
  status?: string | null;
  learnerID?: string | null;
  tutorID?: string | null;
  subject?: string | null;
};

export type DeleteBookingInput = {
  id?: string | null;
};

export type CreateConferenceInput = {
  id?: string | null;
  bookingID: string;
  startDate: string;
  duration: number;
  status: string;
};

export type ModelConferenceConditionInput = {
  bookingID?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  duration?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelConferenceConditionInput | null> | null;
  or?: Array<ModelConferenceConditionInput | null> | null;
  not?: ModelConferenceConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateConferenceInput = {
  id: string;
  bookingID?: string | null;
  startDate?: string | null;
  duration?: number | null;
  status?: string | null;
};

export type DeleteConferenceInput = {
  id?: string | null;
};

export type CreateLearnerInput = {
  id?: string | null;
  name: string;
  gender: string;
  phone: string;
  avatar: string;
};

export type ModelLearnerConditionInput = {
  name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  and?: Array<ModelLearnerConditionInput | null> | null;
  or?: Array<ModelLearnerConditionInput | null> | null;
  not?: ModelLearnerConditionInput | null;
};

export type UpdateLearnerInput = {
  id: string;
  name?: string | null;
  gender?: string | null;
  phone?: string | null;
  avatar?: string | null;
};

export type DeleteLearnerInput = {
  id?: string | null;
};

export type CreateTutorInput = {
  id?: string | null;
  rate: string;
  name: string;
  gender: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
  timezone: string;
  avatar: string;
  biography?: string | null;
  status: string;
  certifications: string;
  subjects: Array<string | null>;
  availabilities: string;
};

export type ModelTutorConditionInput = {
  rate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  state?: ModelStringInput | null;
  country?: ModelStringInput | null;
  timezone?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  biography?: ModelStringInput | null;
  status?: ModelStringInput | null;
  certifications?: ModelStringInput | null;
  subjects?: ModelStringInput | null;
  availabilities?: ModelStringInput | null;
  and?: Array<ModelTutorConditionInput | null> | null;
  or?: Array<ModelTutorConditionInput | null> | null;
  not?: ModelTutorConditionInput | null;
};

export type UpdateTutorInput = {
  id: string;
  rate?: string | null;
  name?: string | null;
  gender?: string | null;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
  zipcode?: string | null;
  state?: string | null;
  country?: string | null;
  timezone?: string | null;
  avatar?: string | null;
  biography?: string | null;
  status?: string | null;
  certifications?: string | null;
  subjects?: Array<string | null> | null;
  availabilities?: string | null;
};

export type DeleteTutorInput = {
  id?: string | null;
};

export type CreateLearnerTutorInput = {
  id?: string | null;
  learnerID: string;
  tutorID: string;
};

export type ModelLearnerTutorConditionInput = {
  learnerID?: ModelIDInput | null;
  tutorID?: ModelIDInput | null;
  and?: Array<ModelLearnerTutorConditionInput | null> | null;
  or?: Array<ModelLearnerTutorConditionInput | null> | null;
  not?: ModelLearnerTutorConditionInput | null;
};

export type UpdateLearnerTutorInput = {
  id: string;
  learnerID?: string | null;
  tutorID?: string | null;
};

export type DeleteLearnerTutorInput = {
  id?: string | null;
};

export type CreateRatingInput = {
  id?: string | null;
  tutorID: string;
  conferenceID: string;
  level: number;
  content?: string | null;
};

export type ModelRatingConditionInput = {
  tutorID?: ModelIDInput | null;
  conferenceID?: ModelIDInput | null;
  level?: ModelIntInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelRatingConditionInput | null> | null;
  or?: Array<ModelRatingConditionInput | null> | null;
  not?: ModelRatingConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateRatingInput = {
  id: string;
  tutorID?: string | null;
  conferenceID?: string | null;
  level?: number | null;
  content?: string | null;
};

export type DeleteRatingInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  threadID: string;
  senderID: string;
  receiverID: string;
  content: string;
  status: string;
};

export type ModelMessageConditionInput = {
  threadID?: ModelIDInput | null;
  senderID?: ModelIDInput | null;
  receiverID?: ModelStringInput | null;
  content?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  threadID?: string | null;
  senderID?: string | null;
  receiverID?: string | null;
  content?: string | null;
  status?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null;
  timezone?: ModelStringInput | null;
  status?: ModelStringInput | null;
  learnerID?: ModelIDInput | null;
  tutorID?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  and?: Array<ModelBookingFilterInput | null> | null;
  or?: Array<ModelBookingFilterInput | null> | null;
  not?: ModelBookingFilterInput | null;
};

export type ModelConferenceFilterInput = {
  id?: ModelIDInput | null;
  bookingID?: ModelIDInput | null;
  startDate?: ModelStringInput | null;
  duration?: ModelFloatInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelConferenceFilterInput | null> | null;
  or?: Array<ModelConferenceFilterInput | null> | null;
  not?: ModelConferenceFilterInput | null;
};

export type ModelLearnerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  and?: Array<ModelLearnerFilterInput | null> | null;
  or?: Array<ModelLearnerFilterInput | null> | null;
  not?: ModelLearnerFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  threadID?: ModelIDInput | null;
  senderID?: ModelIDInput | null;
  receiverID?: ModelStringInput | null;
  content?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelTutorFilterInput = {
  id?: ModelIDInput | null;
  rate?: ModelStringInput | null;
  name?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  state?: ModelStringInput | null;
  country?: ModelStringInput | null;
  timezone?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  biography?: ModelStringInput | null;
  status?: ModelStringInput | null;
  certifications?: ModelStringInput | null;
  subjects?: ModelStringInput | null;
  availabilities?: ModelStringInput | null;
  and?: Array<ModelTutorFilterInput | null> | null;
  or?: Array<ModelTutorFilterInput | null> | null;
  not?: ModelTutorFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null;
  tutorID?: ModelIDInput | null;
  conferenceID?: ModelIDInput | null;
  level?: ModelIntInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelRatingFilterInput | null> | null;
  or?: Array<ModelRatingFilterInput | null> | null;
  not?: ModelRatingFilterInput | null;
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput;
  condition?: ModelBookingConditionInput | null;
};

export type CreateBookingMutation = {
  createBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput;
  condition?: ModelBookingConditionInput | null;
};

export type UpdateBookingMutation = {
  updateBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput;
  condition?: ModelBookingConditionInput | null;
};

export type DeleteBookingMutation = {
  deleteBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateConferenceMutationVariables = {
  input: CreateConferenceInput;
  condition?: ModelConferenceConditionInput | null;
};

export type CreateConferenceMutation = {
  createConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateConferenceMutationVariables = {
  input: UpdateConferenceInput;
  condition?: ModelConferenceConditionInput | null;
};

export type UpdateConferenceMutation = {
  updateConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteConferenceMutationVariables = {
  input: DeleteConferenceInput;
  condition?: ModelConferenceConditionInput | null;
};

export type DeleteConferenceMutation = {
  deleteConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLearnerMutationVariables = {
  input: CreateLearnerInput;
  condition?: ModelLearnerConditionInput | null;
};

export type CreateLearnerMutation = {
  createLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLearnerMutationVariables = {
  input: UpdateLearnerInput;
  condition?: ModelLearnerConditionInput | null;
};

export type UpdateLearnerMutation = {
  updateLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLearnerMutationVariables = {
  input: DeleteLearnerInput;
  condition?: ModelLearnerConditionInput | null;
};

export type DeleteLearnerMutation = {
  deleteLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTutorMutationVariables = {
  input: CreateTutorInput;
  condition?: ModelTutorConditionInput | null;
};

export type CreateTutorMutation = {
  createTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateTutorMutationVariables = {
  input: UpdateTutorInput;
  condition?: ModelTutorConditionInput | null;
};

export type UpdateTutorMutation = {
  updateTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteTutorMutationVariables = {
  input: DeleteTutorInput;
  condition?: ModelTutorConditionInput | null;
};

export type DeleteTutorMutation = {
  deleteTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateLearnerTutorMutationVariables = {
  input: CreateLearnerTutorInput;
  condition?: ModelLearnerTutorConditionInput | null;
};

export type CreateLearnerTutorMutation = {
  createLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type UpdateLearnerTutorMutationVariables = {
  input: UpdateLearnerTutorInput;
  condition?: ModelLearnerTutorConditionInput | null;
};

export type UpdateLearnerTutorMutation = {
  updateLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type DeleteLearnerTutorMutationVariables = {
  input: DeleteLearnerTutorInput;
  condition?: ModelLearnerTutorConditionInput | null;
};

export type DeleteLearnerTutorMutation = {
  deleteLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput;
  condition?: ModelRatingConditionInput | null;
};

export type CreateRatingMutation = {
  createRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput;
  condition?: ModelRatingConditionInput | null;
};

export type UpdateRatingMutation = {
  updateRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput;
  condition?: ModelRatingConditionInput | null;
};

export type DeleteRatingMutation = {
  deleteRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetBookingQueryVariables = {
  id: string;
};

export type GetBookingQuery = {
  getBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBookingsQuery = {
  listBookings: {
    __typename: 'ModelBookingConnection';
    items: Array<{
      __typename: 'Booking';
      id: string;
      timezone: string;
      status: string;
      learnerID: string;
      tutorID: string;
      subject: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetConferenceQueryVariables = {
  id: string;
};

export type GetConferenceQuery = {
  getConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListConferencesQueryVariables = {
  filter?: ModelConferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListConferencesQuery = {
  listConferences: {
    __typename: 'ModelConferenceConnection';
    items: Array<{
      __typename: 'Conference';
      id: string;
      bookingID: string;
      startDate: string;
      duration: number;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetLearnerQueryVariables = {
  id: string;
};

export type GetLearnerQuery = {
  getLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLearnersQueryVariables = {
  filter?: ModelLearnerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLearnersQuery = {
  listLearners: {
    __typename: 'ModelLearnerConnection';
    items: Array<{
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages: {
    __typename: 'ModelMessageConnection';
    items: Array<{
      __typename: 'Message';
      id: string;
      threadID: string;
      senderID: string;
      receiverID: string;
      content: string;
      status: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTutorsQueryVariables = {
  filter?: ModelTutorFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTutorsQuery = {
  listTutors: {
    __typename: 'ModelTutorConnection';
    items: Array<{
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetTutorQueryVariables = {
  id: string;
};

export type GetTutorQuery = {
  getTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type TutorByRateByStatusQueryVariables = {
  rate?: string | null;
  status?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelTutorFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type TutorByRateByStatusQuery = {
  tutorByRateByStatus: {
    __typename: 'ModelTutorConnection';
    items: Array<{
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetRatingQueryVariables = {
  id: string;
};

export type GetRatingQuery = {
  getRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRatingsQuery = {
  listRatings: {
    __typename: 'ModelRatingConnection';
    items: Array<{
      __typename: 'Rating';
      id: string;
      tutorID: string;
      conferenceID: string;
      level: number;
      content: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateBookingSubscription = {
  onCreateBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking: {
    __typename: 'Booking';
    id: string;
    timezone: string;
    status: string;
    learnerID: string;
    tutorID: string;
    subject: string;
    conferences: {
      __typename: 'ModelConferenceConnection';
      nextToken: string | null;
    } | null;
    messages: {
      __typename: 'ModelMessageConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateConferenceSubscription = {
  onCreateConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateConferenceSubscription = {
  onUpdateConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteConferenceSubscription = {
  onDeleteConference: {
    __typename: 'Conference';
    id: string;
    bookingID: string;
    startDate: string;
    duration: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLearnerSubscription = {
  onCreateLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLearnerSubscription = {
  onUpdateLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLearnerSubscription = {
  onDeleteLearner: {
    __typename: 'Learner';
    id: string;
    name: string;
    gender: string;
    phone: string;
    avatar: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    tutors: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLearnerTutorSubscriptionVariables = {
  owner: string;
};

export type OnCreateLearnerTutorSubscription = {
  onCreateLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type OnUpdateLearnerTutorSubscriptionVariables = {
  owner: string;
};

export type OnUpdateLearnerTutorSubscription = {
  onUpdateLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type OnDeleteLearnerTutorSubscriptionVariables = {
  owner: string;
};

export type OnDeleteLearnerTutorSubscription = {
  onDeleteLearnerTutor: {
    __typename: 'LearnerTutor';
    id: string;
    learnerID: string;
    tutorID: string;
    learner: {
      __typename: 'Learner';
      id: string;
      name: string;
      gender: string;
      phone: string;
      avatar: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    tutor: {
      __typename: 'Tutor';
      id: string;
      rate: string;
      name: string;
      gender: string;
      phone: string;
      address: string;
      city: string;
      zipcode: string;
      state: string;
      country: string;
      timezone: string;
      avatar: string;
      biography: string | null;
      status: string;
      certifications: string;
      subjects: Array<string | null>;
      availabilities: string;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    };
    owner: string | null;
  } | null;
};

export type OnCreateMessageSubscription = {
  onCreateMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage: {
    __typename: 'Message';
    id: string;
    threadID: string;
    senderID: string;
    receiverID: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTutorSubscriptionVariables = {
  owner: string;
};

export type OnCreateTutorSubscription = {
  onCreateTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateTutorSubscriptionVariables = {
  owner: string;
};

export type OnUpdateTutorSubscription = {
  onUpdateTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteTutorSubscriptionVariables = {
  owner: string;
};

export type OnDeleteTutorSubscription = {
  onDeleteTutor: {
    __typename: 'Tutor';
    id: string;
    rate: string;
    name: string;
    gender: string;
    phone: string;
    address: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    timezone: string;
    avatar: string;
    biography: string | null;
    status: string;
    certifications: string;
    subjects: Array<string | null>;
    availabilities: string;
    bookings: {
      __typename: 'ModelBookingConnection';
      nextToken: string | null;
    } | null;
    learners: {
      __typename: 'ModelLearnerTutorConnection';
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
    ratings: {
      __typename: 'ModelRatingConnection';
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateRatingSubscriptionVariables = {
  owner: string;
};

export type OnCreateRatingSubscription = {
  onCreateRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateRatingSubscriptionVariables = {
  owner: string;
};

export type OnUpdateRatingSubscription = {
  onUpdateRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteRatingSubscriptionVariables = {
  owner: string;
};

export type OnDeleteRatingSubscription = {
  onDeleteRating: {
    __typename: 'Rating';
    id: string;
    tutorID: string;
    conferenceID: string;
    level: number;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};
