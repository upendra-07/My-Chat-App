import jwt from "jsonwebtoken"; // Ensure you have this installed: npm install jsonwebtoken

const Authentication = async (_, args) => {
  const { token } = args;

  if (!token) {
    return { isAuthenticated: false, message: "No token provided." };
  }

  try {
    // Replace 'your_secret_key' with your actual secret key used for signing tokens
    const decoded = jwt.verify(token, "your_secret_key");

    // Optionally, you can perform additional checks, such as checking if the user exists in your database
    // const user = await User.findById(decoded.id); // Example with MongoDB

    return { isAuthenticated: true, userId: decoded.id }; // Include userId if needed
  } catch (error) {
    return { isAuthenticated: false, message: "Invalid token." };
  }
};

export default Authentication;
