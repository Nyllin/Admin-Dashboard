import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import DashboardCharts from "../../Dashboard/DashboardCharts";
import DashboardPieChart from "../../Dashboard/DashboardPieChart";
import DashboardBarChart from "../../Dashboard/DashboardBarChart";
import DashboardSmallCard from "../../Dashboard/DashboardSmallCard";
import DashboardSmallCardItem from "../../Dashboard/DashboardSmallCardItem";
import SalesDataGrid from "./SalesDataGrid";
const Analysis = () => {
  return (
    <Stack>
      <Typography variant="h5" color="primary">
        Analysis
      </Typography>
      <Grid container spacing={2} mt={3}>
        <Grid item md={6}>
          <DashboardCharts />
        </Grid>
        <Grid item md={6}>
          <DashboardPieChart />
        </Grid>
        <Grid item md={6}>
          <DashboardBarChart />
        </Grid>
        <Grid item md={6} lg={6} mt={3}>
          <DashboardSmallCard
            header="Most Selling Products"
            navpath="/admin/products"
          >
            <DashboardSmallCardItem
              name="Sneaker Vento"
              id="ID:1"
              total="128 Sales"
            />
            <DashboardSmallCardItem
              name="Sneaker Vento"
              id="ID:2"
              total="128 Sales"
            />
            <DashboardSmallCardItem
              name="Sneaker Vento"
              id="ID:3"
              total="128 Sales"
            />
          </DashboardSmallCard>
        </Grid>
        <Grid item md={6} lg={6} mt={3}>
          <SalesDataGrid />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Analysis;
