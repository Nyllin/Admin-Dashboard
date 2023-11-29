import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import SalesList from "./SalesList";

const DiscountSales = () => {
  return (
    <Stack>
      <Typography variant="h5" color="primary">
        Discount Sale
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={3}>
        <SalesList />
        <NavLink to="/admin/sales/discountsale/form">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00688b",
              padding: 10,
              marginRight: "60px",
            }}
          >
            Add New Sale
          </Button>
        </NavLink>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DiscountSales;
