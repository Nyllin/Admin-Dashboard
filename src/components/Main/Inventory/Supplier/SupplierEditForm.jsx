import React from "react";
import styled from "@emotion/styled";
import SaleDatePicker from "../../Sales/DiscountSale/SaleDatePicker";
import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const SupplierEditForm = () => {
  const SalesContainer = styled(Stack)`
    position: absolute;
    width: 100%;
    right: 0%;
    padding: 100px;
  `;

  return (
    <SalesContainer>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "center" }}
        mb={3}
      >
        Edit Supplier
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SaleDatePicker pickerLabel="Register Date" />
        <StyledInput label="Item" placeholder="Item" />
        <StyledInput label="Supplier" placeholder="Supplier" />
        <StyledInput label="Mail" placeholder="Mail" />
        <StyledInput label="Phone" placeholder="Phone" type="number" />

        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <StyledButton text="Update" />

          <NavLink to="/admin/inventory/suppliers">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default SupplierEditForm;
