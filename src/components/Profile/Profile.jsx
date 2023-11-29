import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";


const Profile = () => {
  const ProfileContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <ProfileContainer>
      <Searchbar />
      <Grid container spacing={2}>
        <Grid item md={11} mt={3}>
          <Outlet/>
        </Grid> 
      </Grid>
    </ProfileContainer>
  );
};

export default Profile;
