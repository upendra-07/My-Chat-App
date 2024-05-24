// src/resolvers/index.js
const { pool } = require('../db');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: async () => {
      const result = await pool.query('SELECT * FROM users');
      return result.rows;
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );
      return result.rows[0];
    },
  },
};

module.exports = resolvers;
