const { gql } = require("apollo-server-express");

const type = gql`
  type User {
    id: Int
    name: String!
    email: String!
    password: String!
  }

  input userSignInInput {
    id: Int
    name: String!
    email: String!
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
