import {
  Card,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import chat from "../../Assets/21794482.jpg";
import InputField from "../../Components/InputFields/InputFields";
import GetStartedButton from "../../Components/Buttons/GetStartedButton";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../../graphql/mutations/User/user.mutation";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = useLogin();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const validate = () => {
    let temp = {};
    temp.email = values.email ? "" : "This field is required.";
    temp.password = values.password ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      const variables = {
        input: { email: values.email, password: values.password },
      };
      userSignIn({ variables });
    }
  };

  const btnStyle = {
    width: "190px",
    height: "45px",
  };
  return (
    <Grid container>
      <Grid item md={12} xs={12} sm={12} container>
        <Grid item md={6} xs={12} sm={12}>
          <img src={chat} alt="" className="login-side-img" />
        </Grid>
        <Grid item md={6} xs={12} sm={12} alignItems={"center"}>
          <Grid mt={12}>
            <Typography
              align="center"
              variant="subtitle1"
              className="app-title"
            >
              AU ChatBox
            </Typography>
          </Grid>
          <Card className="login-card" elevation={4} sx={{ borderRadius: 4 }}>
            <Grid my={2}>
              <Typography
                align="center"
                variant="subtitle1"
                className="login-title"
              >
                Log In
              </Typography>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12} sm={12} mx={2}>
                <InputField
                  name="email"
                  label="Email or User Name"
                  value={values.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} mx={2}>
                <InputField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} align={"center"}>
                <GetStartedButton
                  label={"Log In"}
                  style={btnStyle}
                  onClick={handleSubmit}
                />
              </Grid>
              <Grid item xs={12} align={"center"}>
                {"Don't have an account ? "}
                <Link to="/signUp" className="singUp-link">
                  {" Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
