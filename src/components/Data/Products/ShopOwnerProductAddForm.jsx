import React from "react";
import styled from "@emotion/styled";
import { Typography, Box,Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShopOwnerSearchbar from "../../Searchbar/ShopOwnerSearchbar";
import StyledInput from "../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const ShopOwnerProductAddForm = () => {
  const UserContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  const ChooseFileButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    padding: 10,
  }));


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
          Add New Product
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
          <StyledInput label="Item Code" placeholder="Item Code" />
          <StyledInput label="Brand" placeholder="Brand" />
          <ChooseFileButton variant="contained" component="label">
          Choose Image
          <input type="file" hidden />
        </ChooseFileButton>

          <StyledInput label="Product Name" placeholder="Product Name" />
          <StyledInput label="Price" placeholder="Price" type="number" />

          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <StyledButton text="Add" />

            <NavLink to="/shop_owner/products">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default ShopOwnerProductAddForm;
