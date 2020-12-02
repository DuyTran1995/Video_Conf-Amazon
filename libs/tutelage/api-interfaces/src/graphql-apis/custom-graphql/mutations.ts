export const customUpdateTutor = /* GraphQL */ `
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
    }
  }
`;

export const customCreateMessage = /* GraphQL */ `
  mutation CreateConference($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
    createMessage(input: $input, condition: $condition) {
      threadID
      senderID
      receiverID
      content
      status
      id
    }
  }
`;

export const customCreateConference = /* GraphQL */ `
  mutation CreateConference(
    $input: CreateConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    createConference(input: $input, condition: $condition) {
      bookingID
      startDate
      duration
      status
      id
    }
  }
`;

export const customCreateBooking = /* GraphQL */ `
  mutation CreateBooking($input: CreateBookingInput!, $condition: ModelBookingConditionInput) {
    createBooking(input: $input, condition: $condition) {
      timezone
      status
      learnerID
      tutorID
      id
    }
  }
`;
