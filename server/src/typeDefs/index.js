// src/typeDefs/index.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    hello: String
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
