/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
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
export const onCreateConference = /* GraphQL */ `
  subscription OnCreateConference {
    onCreateConference {
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
export const onUpdateConference = /* GraphQL */ `
  subscription OnUpdateConference {
    onUpdateConference {
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
export const onDeleteConference = /* GraphQL */ `
  subscription OnDeleteConference {
    onDeleteConference {
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
export const onCreateLearner = /* GraphQL */ `
  subscription OnCreateLearner {
    onCreateLearner {
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
export const onUpdateLearner = /* GraphQL */ `
  subscription OnUpdateLearner {
    onUpdateLearner {
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
export const onDeleteLearner = /* GraphQL */ `
  subscription OnDeleteLearner {
    onDeleteLearner {
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
export const onCreateLearnerTutor = /* GraphQL */ `
  subscription OnCreateLearnerTutor($owner: String!) {
    onCreateLearnerTutor(owner: $owner) {
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
export const onUpdateLearnerTutor = /* GraphQL */ `
  subscription OnUpdateLearnerTutor($owner: String!) {
    onUpdateLearnerTutor(owner: $owner) {
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
export const onDeleteLearnerTutor = /* GraphQL */ `
  subscription OnDeleteLearnerTutor($owner: String!) {
    onDeleteLearnerTutor(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateTutor = /* GraphQL */ `
  subscription OnCreateTutor($owner: String!) {
    onCreateTutor(owner: $owner) {
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
export const onUpdateTutor = /* GraphQL */ `
  subscription OnUpdateTutor($owner: String!) {
    onUpdateTutor(owner: $owner) {
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
export const onDeleteTutor = /* GraphQL */ `
  subscription OnDeleteTutor($owner: String!) {
    onDeleteTutor(owner: $owner) {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($owner: String!) {
    onCreateRating(owner: $owner) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($owner: String!) {
    onUpdateRating(owner: $owner) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($owner: String!) {
    onDeleteRating(owner: $owner) {
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
