const { createUserDB } = require("./signUp.db");

const createUser = async (_, args) => {
  const { input } = args;
  return await createUserDB(input);
};

module.exports = {
  createUser,
};
