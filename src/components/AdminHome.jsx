import React from "react";
import Navigator from "./Navigation/Navigator.jsx";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3} mt={3}>
        <Navigator />
      </Grid>
      <Grid item md={8} mt={3}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
