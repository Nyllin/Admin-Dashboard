import styled from "@emotion/styled";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const InventoryReturnCard = () => {
  const data = [10, 20, 30, 40, 50, 80, 10];
  const xData = [
    "Sep 1",
    "Sep 5",
    "Sep 10",
    "Sep 15",
    "Sep 20",
    "Sep 25",
    "Sep 30",
  ];
  
  const Dcard = styled(Card)(({theme})=>({
    width: "85%",
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
    padding: "20px",
    marginTop:"15px",
  }))

  return (
    <Dcard>
      <Typography variant="h5" color="primary">
        Returns
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item md={6}>
          <Typography variant="h4">43</Typography>
          <Typography variant="subtitle1" color="primary">
            to be processed
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">2.9%</Typography>
          <Typography variant="subtitle1" color="primary">
            return rate
          </Typography>
        </Grid>
        <Grid item md={12} mt={3}>
          <Typography variant="h5" color="primary">
            Return Rate by Month
          </Typography>
          <Box mt={3}>
            <LineChart
              xAxis={[{ data: xData, scaleType: "point" }]}
              series={[{ data, color: "#00688b" }]}
              width={400}
              height={250}
              margin={{ top: 20, bottom: 20, left: 100 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Dcard>
  );
};

export default InventoryReturnCard;
