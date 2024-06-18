const {
  userSignIn,
  getUserByUserNameOrEmail,
} = require("./signIn.controllers");

const signInResolvers = {
  Mutation: {
    userSignIn: userSignIn,
  },
  Query: {
    getUserByUserNameOrEmail: getUserByUserNameOrEmail,
  },
};

module.exports = signInResolvers;
