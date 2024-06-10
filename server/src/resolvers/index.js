const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Mutation: {
    createUser: async ({ name, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Connect to PostgreSQL database (using your chosen library)
      // Execute SQL query to insert new user
      const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
      const values = [name, email, hashedPassword];

      try {
        const result = await client.query(query, values); // Replace 'client' with your connection object
        const newUser = result.rows[0]; // Assuming the query returns the newly created user
        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user"); // Handle errors appropriately
      } finally {
        // Close connection if necessary (depending on your library)
      }
    },
  },
};

module.exports = resolvers;
