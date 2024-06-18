import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";
import WelcomePage from "./Screens/WelcomePage/WelcomePage";

const App = () => {
  // A mock function to simulate authentication status check
  const isAuthenticated = () => {
    // Replace with your actual logic for checking if a user is authenticated
    return !!localStorage.getItem("authToken");
  };

  // PrivateRoute component to protect private routes
  const PrivateRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      element={isAuthenticated() ? <Element /> : <Navigate to="/login" />}
    />
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Default Route */}
      </Routes>
    </Router>
  );
};

export default App;
