export const customGetTutorById = /* GraphQL */ `
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
    }
  }
`;

export const customGetListProfile = /* GraphQL */ `
  query ListTutors($filter: ModelTutorFilterInput, $limit: Int, $nextToken: String) {
    listTutors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rate
        name
        avatar
        biography
        status
      }
      nextToken
    }
  }
`;
