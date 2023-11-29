import React from "react";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const SaleProductEditForm = () => {
  const SalesContainer = styled(Stack)`
    position: absolute;
    width: 100%;
    right: 0%;
    padding: 100px;
  `;
  const ChooseFileButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    padding: 10,
  }));

  return (
    <SalesContainer mt={3}>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "center" }}
        mb={3}
      >
        Edit Product
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledInput label="Title" placeholder="Title" />
        <ChooseFileButton variant="contained" component="label">
          Choose Image
          <input type="file" hidden />
        </ChooseFileButton>
        <StyledInput label="Price" placeholder="Price" type="number" />
        <StyledInput label="Discount" placeholder="Discount" type="number" />
        <Box
          sx={{ width: 300, display: "flex", justifyContent: "space-between" }}
        >
          <StyledButton text="Update" />

          <NavLink to="/admin/sales/discountsale">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default SaleProductEditForm;
