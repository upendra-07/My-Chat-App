// src/index.js
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const singInSchema = require("./Screens/SignIn/signIn.schema");
const signInResolvers = require("./Screens/SignIn/signIn.resolvers");
const db = require("./Knex/knex"); // Import the Knex instance

async function startServer() {
  try {
    // Test the database connection
    await db.raw("SELECT 1+1 AS result");
    console.log("PostgreSQL connected...");

    const server = new ApolloServer({
      typeDefs: [singInSchema],
      resolvers: [signInResolvers],
    });

    await server.start();
    const app = express();
    server.applyMiddleware({ app, path: "/api" });

    app.listen({ port: 4000 }, () =>
      console.log("Server running at http://localhost:4000/api")
    );
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
}

startServer();
