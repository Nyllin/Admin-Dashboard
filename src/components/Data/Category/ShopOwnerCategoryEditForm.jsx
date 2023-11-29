import React from "react";
import styled from "@emotion/styled";
import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShopOwnerSearchbar from "../../Searchbar/ShopOwnerSearchbar";
import StyledInput from "../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const ShopOwnerCategoryEditForm = () => {
  const UserContainer = styled("div")(({theme})=>({
    position: "absolute",
    width: "80%",
    left: "20%",
    marginLeft: "40px",
  }))
  return (
    <UserContainer>
      <ShopOwnerSearchbar />
      <Box mt={3}>
        <Typography
          variant="h5"
          color="primary"
          style={{ textAlign: "center" }}
          mb={3}
        >
          Edit Category
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
          <StyledInput label="Category" placeholder="Category" />
          <StyledInput label="Brands" placeholder="Brands" />
          <StyledInput label="Type" placeholder="Type" />

          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <StyledButton text=" Update" />

            <NavLink to="/shop_owner/categories">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default ShopOwnerCategoryEditForm;
