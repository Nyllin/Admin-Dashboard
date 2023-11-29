import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import UserDataGrid from "./UserDataGrid";

const User = () => {
  const UserContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <UserContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <UserDataGrid />
        </Grid> 
      </Grid>
    </UserContainer>
  );
};

export default User;
