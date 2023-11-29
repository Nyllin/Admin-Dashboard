import React from "react";
import InventoryAnalysisCard from "./InventoryAnalysisCard";
import { Box, Grid } from "@mui/material";
import InventoryReturnCard from "../Returns/InventoryReturnCard";

const InventoryAnalysis = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <InventoryAnalysisCard
            title="In Stock"
            count1={42}
            subtitle1="days since last check"
            count2={99.1}
            subtitle2="% in inventory accuracy"
          />
        </Grid>
        <Grid item md={6}>
          <InventoryAnalysisCard
            title="Warehouse"
            count1={81}
            subtitle1="% in utilization"
            count2={1000000}
            subtitle2="MMK in value of stock"
          />
        </Grid>
        <Grid item md={6}>
          <InventoryReturnCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InventoryAnalysis;
