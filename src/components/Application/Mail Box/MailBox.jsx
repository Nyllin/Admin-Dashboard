import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Box, Grid, Typography } from "@mui/material";
import MailNav from "./MailNav";
import { NavLink, Outlet } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";

const MailBox = () => {
  const MailContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <MailContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11} sm={11}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary">
              Mail Box
            </Typography>
            <NavLink to="/admin/mailbox/compose">
              <StyledButton text="Compose" />
            </NavLink>
          </Box>
        </Grid>
        <Grid item md={3}>
          <MailNav />
        </Grid>
        <Grid item md={8}>
          <Outlet />
        </Grid>
      </Grid>
    </MailContainer>
  );
};

export default MailBox;
