/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings($filter: ModelBookingFilterInput, $limit: Int, $nextToken: String) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timezone
        status
        learnerID
        tutorID
        subject
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConference = /* GraphQL */ `
  query GetConference($id: ID!) {
    getConference(id: $id) {
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
export const listConferences = /* GraphQL */ `
  query ListConferences($filter: ModelConferenceFilterInput, $limit: Int, $nextToken: String) {
    listConferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookingID
        startDate
        duration
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLearner = /* GraphQL */ `
  query GetLearner($id: ID!) {
    getLearner(id: $id) {
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
export const listLearners = /* GraphQL */ `
  query ListLearners($filter: ModelLearnerFilterInput, $limit: Int, $nextToken: String) {
    listLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gender
        phone
        avatar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        threadID
        senderID
        receiverID
        content
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTutors = /* GraphQL */ `
  query ListTutors($filter: ModelTutorFilterInput, $limit: Int, $nextToken: String) {
    listTutors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTutor = /* GraphQL */ `
  query GetTutor($id: ID!) {
    getTutor(id: $id) {
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
export const tutorByRateByStatus = /* GraphQL */ `
  query TutorByRateByStatus(
    $rate: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTutorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutorByRateByStatus(
      rate: $rate
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings($filter: ModelRatingFilterInput, $limit: Int, $nextToken: String) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tutorID
        conferenceID
        level
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
