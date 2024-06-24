require("dotenv").config();
const express = require("express");
const { ApolloServer, AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const signInSchema = require("./Screens/SignIn/signIn.schema");
const signInResolvers = require("./Screens/SignIn/signIn.resolvers");
const db = require("./Knex/knex"); // Import the Knex instance

async function startServer() {
  try {
    // Test the database connection
    await db.raw("SELECT 1+1 AS result");
    console.log("PostgreSQL connected...");

    const server = new ApolloServer({
      typeDefs: [signInSchema],
      resolvers: [signInResolvers],
      context: ({ req }) => {
        const token = req.headers.authorization || "";
        // Verify and decode JWT token (example)
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          // Optionally, you can fetch user data from the database using `decoded.id`
          return { token, db, currentUser: decoded };
        } catch (err) {
          // Throw AuthenticationError if token is invalid
          throw new AuthenticationError("Invalid or expired token");
        }
      },
    });

    await server.start();

    const app = express();

    // Middleware for security headers, CORS, etc. can be added here

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
