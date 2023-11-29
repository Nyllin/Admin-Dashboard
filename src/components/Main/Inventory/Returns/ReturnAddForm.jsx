import React from "react";
import styled from "@emotion/styled";
import SaleDatePicker from "../../Sales/DiscountSale/SaleDatePicker";
import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const ReturnAddForm = () => {
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
        Add New Return
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SaleDatePicker pickerLabel="Date" />
        <StyledInput label="Reference No" placeholder="Reference No" />
        <StyledInput label="Biller" placeholder="Biller" />
        <StyledInput label="Customer" placeholder="Customer" />
        <StyledInput
          label="Grand Total"
          placeholder="Grand Total"
          type="number"
        />

        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <StyledButton text="Add" />

          <NavLink to="/admin/inventory/returns">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default ReturnAddForm;
