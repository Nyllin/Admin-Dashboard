import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import StyledInput from "../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const CouponProductAddForm = () => {
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
          Add Coupon Product
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
          <StyledInput label="No." placeholder="No." type="number" />
          <StyledInput label="Brand" placeholder="Brand" />

          <StyledInput label="Type" placeholder="Type" />
          <Button
            variant="contained"
            component="label"
            style={{ backgroundColor: "#00688b", padding: 10 }}
          >
            Upload File
            <input type="file" hidden />
          </Button>
          <StyledInput label="Product Name" placeholder="Product Name" />
          <StyledInput label="Price" placeholder="Price" type="number" />
          <StyledInput label="Coupon%" placeholder="Coupon%" type="number" />

          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <StyledButton text="Add" />

            <NavLink to="/admin/coupon_products">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default CouponProductAddForm;
