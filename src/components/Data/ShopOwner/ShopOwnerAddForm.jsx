import React from "react";
import styled from "@emotion/styled";
import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import StyledInput from "../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const ShopOwnerAddForm = () => {
  const UserContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;

  return (
    <UserContainer>
      <Searchbar />
      <Box mt={3}>
        <Typography
          variant="h5"
          color="primary"
          style={{ textAlign: "center" }}
          mb={3}
        >
          Add New Shop Owner
        </Typography>
        <Stack
          component="form"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledInput label="Name" placeholder="Name" />
          <StyledInput label="Product" placeholder="Product" />
       

          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <StyledButton text="Add" />

            <NavLink to="/admin/shop_owners">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default ShopOwnerAddForm;
