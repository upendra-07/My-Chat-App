const signInControllers = require("./signIn.controllers");

const signInResolvers = {
  Mutation: {
    userSignIn: signInControllers.userSignIn,
  },
};

module.exports = signInResolvers;
