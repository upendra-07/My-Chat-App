const { gql } = require("apollo-server-express");

const type = gql`
  type User {
    userName: String
    email: String
    phone: Int
    password: String!
  }

  input userSignInInput {
    userName: String
    email: String
    phone: Int
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    userSignIn(input: userSignInInput): User
  }
`;

module.exports = type;
