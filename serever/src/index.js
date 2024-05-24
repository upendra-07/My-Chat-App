// src/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { connectDB } = require('./db');

async function startServer() {
  // Connect to the database
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  const app = express();
  server.applyMiddleware({ app, path: '/api' });

  app.listen({ port: 4000 }, () =>
    console.log('Server running at http://localhost:4000/api')
  );
}

startServer();
