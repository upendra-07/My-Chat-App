const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool, TABLE_NAMES } = require("../db"); // Import the PostgreSQL pool from db.js
require("dotenv").config();

const resolvers = {
  Mutation: {
    createUser: async (_, { input }) => {
      console.log(input);
      const { name, email, password } = input;
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = `INSERT INTO "${TABLE_NAMES.USERS}" (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
      const values = [name, email, hashedPassword];

      try {
        const client = await pool.connect(); // Get a client from the pool
        const result = await client.query(query, values);
        const newUser = result.rows[0];
        client.release(); // Release the client back to the pool
        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },
  },
};

module.exports = resolvers;
