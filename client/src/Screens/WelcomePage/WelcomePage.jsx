import React from "react";
import Grid from "@mui/material/Grid";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <Grid className="welcome-page-main">
      <Grid className="app-bar" container md={12} xs={12} sm={12}>
        <Grid item className="logo" md={5}>
          AU ChatBox
        </Grid>

        <Grid item className="about" alignItems={"center"}>
          About
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
