/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking($input: CreateBookingInput!, $condition: ModelBookingConditionInput) {
    createBooking(input: $input, condition: $condition) {
      id
      timezone
      status
      learnerID
      tutorID
      subject
      conferences {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking($input: UpdateBookingInput!, $condition: ModelBookingConditionInput) {
    updateBooking(input: $input, condition: $condition) {
      id
      timezone
      status
      learnerID
      tutorID
      subject
      conferences {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking($input: DeleteBookingInput!, $condition: ModelBookingConditionInput) {
    deleteBooking(input: $input, condition: $condition) {
      id
      timezone
      status
      learnerID
      tutorID
      subject
      conferences {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConference = /* GraphQL */ `
  mutation CreateConference(
    $input: CreateConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    createConference(input: $input, condition: $condition) {
      id
      bookingID
      startDate
      duration
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateConference = /* GraphQL */ `
  mutation UpdateConference(
    $input: UpdateConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    updateConference(input: $input, condition: $condition) {
      id
      bookingID
      startDate
      duration
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteConference = /* GraphQL */ `
  mutation DeleteConference(
    $input: DeleteConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    deleteConference(input: $input, condition: $condition) {
      id
      bookingID
      startDate
      duration
      status
      createdAt
      updatedAt
    }
  }
`;
export const createLearner = /* GraphQL */ `
  mutation CreateLearner($input: CreateLearnerInput!, $condition: ModelLearnerConditionInput) {
    createLearner(input: $input, condition: $condition) {
      id
      name
      gender
      phone
      avatar
      bookings {
        nextToken
      }
      tutors {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLearner = /* GraphQL */ `
  mutation UpdateLearner($input: UpdateLearnerInput!, $condition: ModelLearnerConditionInput) {
    updateLearner(input: $input, condition: $condition) {
      id
      name
      gender
      phone
      avatar
      bookings {
        nextToken
      }
      tutors {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLearner = /* GraphQL */ `
  mutation DeleteLearner($input: DeleteLearnerInput!, $condition: ModelLearnerConditionInput) {
    deleteLearner(input: $input, condition: $condition) {
      id
      name
      gender
      phone
      avatar
      bookings {
        nextToken
      }
      tutors {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTutor = /* GraphQL */ `
  mutation CreateTutor($input: CreateTutorInput!, $condition: ModelTutorConditionInput) {
    createTutor(input: $input, condition: $condition) {
      id
      rate
      name
      gender
      phone
      address
      city
      zipcode
      state
      country
      timezone
      avatar
      biography
      status
      certifications
      subjects
      availabilities
      bookings {
        nextToken
      }
      learners {
        nextToken
      }
      createdAt
      updatedAt
      owner
      ratings {
        nextToken
      }
    }
  }
`;
export const updateTutor = /* GraphQL */ `
  mutation UpdateTutor($input: UpdateTutorInput!, $condition: ModelTutorConditionInput) {
    updateTutor(input: $input, condition: $condition) {
      id
      rate
      name
      gender
      phone
      address
      city
      zipcode
      state
      country
      timezone
      avatar
      biography
      status
      certifications
      subjects
      availabilities
      bookings {
        nextToken
      }
      learners {
        nextToken
      }
      createdAt
      updatedAt
      owner
      ratings {
        nextToken
      }
    }
  }
`;
export const deleteTutor = /* GraphQL */ `
  mutation DeleteTutor($input: DeleteTutorInput!, $condition: ModelTutorConditionInput) {
    deleteTutor(input: $input, condition: $condition) {
      id
      rate
      name
      gender
      phone
      address
      city
      zipcode
      state
      country
      timezone
      avatar
      biography
      status
      certifications
      subjects
      availabilities
      bookings {
        nextToken
      }
      learners {
        nextToken
      }
      createdAt
      updatedAt
      owner
      ratings {
        nextToken
      }
    }
  }
`;
export const createLearnerTutor = /* GraphQL */ `
  mutation CreateLearnerTutor(
    $input: CreateLearnerTutorInput!
    $condition: ModelLearnerTutorConditionInput
  ) {
    createLearnerTutor(input: $input, condition: $condition) {
      id
      learnerID
      tutorID
      learner {
        id
        name
        gender
        phone
        avatar
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tutor {
        id
        rate
        name
        gender
        phone
        address
        city
        zipcode
        state
        country
        timezone
        avatar
        biography
        status
        certifications
        subjects
        availabilities
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const updateLearnerTutor = /* GraphQL */ `
  mutation UpdateLearnerTutor(
    $input: UpdateLearnerTutorInput!
    $condition: ModelLearnerTutorConditionInput
  ) {
    updateLearnerTutor(input: $input, condition: $condition) {
      id
      learnerID
      tutorID
      learner {
        id
        name
        gender
        phone
        avatar
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tutor {
        id
        rate
        name
        gender
        phone
        address
        city
        zipcode
        state
        country
        timezone
        avatar
        biography
        status
        certifications
        subjects
        availabilities
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const deleteLearnerTutor = /* GraphQL */ `
  mutation DeleteLearnerTutor(
    $input: DeleteLearnerTutorInput!
    $condition: ModelLearnerTutorConditionInput
  ) {
    deleteLearnerTutor(input: $input, condition: $condition) {
      id
      learnerID
      tutorID
      learner {
        id
        name
        gender
        phone
        avatar
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tutor {
        id
        rate
        name
        gender
        phone
        address
        city
        zipcode
        state
        country
        timezone
        avatar
        biography
        status
        certifications
        subjects
        availabilities
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating($input: CreateRatingInput!, $condition: ModelRatingConditionInput) {
    createRating(input: $input, condition: $condition) {
      id
      tutorID
      conferenceID
      level
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating($input: UpdateRatingInput!, $condition: ModelRatingConditionInput) {
    updateRating(input: $input, condition: $condition) {
      id
      tutorID
      conferenceID
      level
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating($input: DeleteRatingInput!, $condition: ModelRatingConditionInput) {
    deleteRating(input: $input, condition: $condition) {
      id
      tutorID
      conferenceID
      level
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
    createMessage(input: $input, condition: $condition) {
      id
      threadID
      senderID
      receiverID
      content
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
    updateMessage(input: $input, condition: $condition) {
      id
      threadID
      senderID
      receiverID
      content
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
    deleteMessage(input: $input, condition: $condition) {
      id
      threadID
      senderID
      receiverID
      content
      status
      createdAt
      updatedAt
    }
  }
`;
