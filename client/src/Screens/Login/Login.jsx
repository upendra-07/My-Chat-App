import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import chat from "../../Assets/21794482.jpg";
import InputField from "../../Components/InputFields/InputFields";
import GetStartedButton from "../../Components/Buttons/GetStartedButton";
import { Link } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.email = values.email ? "" : "This field is required.";
    temp.password = values.password ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log(values);
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
          {/* <Card sx={{ borderRadius: 0 }}> */}
          <img src={chat} alt="" className="login-side-img" />
          {/* </Card> */}
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
                  label="Email"
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
                  type="password"
                  value={values.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} align={"center"}>
                <GetStartedButton label={"Log In"} style={btnStyle} />
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
