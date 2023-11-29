import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import ShopOwnerNavigator from "./Navigation/ShopOwnerNavigator.jsx";

const ShopOwnerHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3} mt={3}>
        <ShopOwnerNavigator />
      </Grid>
      <Grid item md={8} mt={3}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default ShopOwnerHome;
