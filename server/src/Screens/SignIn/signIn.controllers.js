const { getUserByUserIdentifier } = require("./signIn.db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSignIn = async (_, args) => {
  const { input } = args;
  const { userName, email, phone, password } = input;

  // Determine user identifier (userName or email)
  const userIdentifier = userName || email;

  // Retrieve user from the database
  const user = await getUserByUserIdentifier(userIdentifier);
  if (!user) {
    throw new Error("No user with that username or email");
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, userName: user.userName, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token: token };
};

const getUserByUserNameOrEmail = async (_, args) => {
  const { userName, email } = args;
  return await getUserByUserIdentifier(userName || email);
};

module.exports = {
  userSignIn,
  getUserByUserNameOrEmail,
};
