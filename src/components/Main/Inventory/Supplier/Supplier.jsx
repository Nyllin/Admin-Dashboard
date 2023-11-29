import React from "react";
import SupplierDataGrid from "./SupplierDataGrid";
import { Grid } from "@mui/material";

const Supplier = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={11.5}>
        <SupplierDataGrid />
      </Grid>
    </Grid>
  );
};

export default Supplier;
