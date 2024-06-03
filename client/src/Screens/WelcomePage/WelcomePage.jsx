import React from "react";
import Grid from "@mui/material/Grid";
import "./WelcomePage.css";
import GetStartedButton from "../../Components/Buttons/GetStartedButton";
const WelcomePage = () => {
  return (
    <Grid className="welcome-page-main">
      <Grid className="app-bar" container md={12} xs={12} sm={12}>
        <Grid item className="logo" md={5}>
          AU ChatBox
        </Grid>

        <Grid item className="items" alignItems={"center"}>
          About
        </Grid>
        <Grid item className="items" alignItems={"center"}>
          Features
        </Grid>
        <Grid item className="items" alignItems={"center"}>
          Privacy
        </Grid>
        <Grid item className="items" alignItems={"center"}>
          Help Center
        </Grid>
        <Grid item className="login" alignItems={"center"}>
          Log In
        </Grid>
        <Grid item className="get-start" alignItems={"center"}>
          <GetStartedButton label={"Get Started"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
