const { gql } = require("apollo-server-express");

const singUpSchema = gql`
  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
    phone: String
    password: String
  }

  input userSignUpInput {
    id: Int
    firstName: String
    lastName: String
    email: String
    phone: String
    password: String
  }

  type Mutation {
    createUser(input: userSignUpInput): User
  }
`;

module.exports = singUpSchema;
