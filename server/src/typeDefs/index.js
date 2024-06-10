const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int
    name: String!
    email: String!
    password: String!
  }

  input userInput {
    id: Int
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(input: userInput): User
  }
`;

module.exports = typeDefs;
