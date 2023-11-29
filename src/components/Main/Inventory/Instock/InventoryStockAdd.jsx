import React from "react";
import styled from "@emotion/styled";
import { Typography,  Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const InventoryStockAdd = () => {
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
        Add New Stock
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledInput label="Product Name" placeholder="Product Name" />
        <StyledInput label="Instock" placeholder="Instock" type="number" />
        <StyledInput
          label="Avg 30 Days"
          placeholder="Avg 30 Days"
          type="number"
        />
        <StyledInput
          label="Unit Price"
          placeholder="Unit Price"
          type="number"
        />
        <StyledInput
          label="Stock Value"
          placeholder="Stock Value"
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

          <NavLink to="/admin/inventory/instock">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default InventoryStockAdd;
