import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const DashboardBarChart = () => {
  const DashboardChartsContainer = styled(Stack)(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "20px",
  }))

  return (
    <DashboardChartsContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={3}>
        <Typography variant="h6" mt={3}>
          Top 3 Products Total Sales
        </Typography>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Laptop</MenuItem>
            <MenuItem value={20}>Earphones</MenuItem>
            <MenuItem value={20}>Power Bank</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <BarChart
        series={[
          {
            data: [
              1000000, 2000000, 3000000, 4000000, 5000000, 8000000, 10000000,
            ],
            color: "#00688b",
          },
        ]}
        xAxis={[
          {
            scaleType: "band",
            data: [
              "Sep 1",
              "Sep 5",
              "Sep 10",
              "Sep 15",
              "Sep 20",
              "Sep 25",
              "Sep 30",
            ],
          },
        ]}
        height={300}
        width={500}
        leftAxis={null}
      />
    </DashboardChartsContainer>
  );
};

export default DashboardBarChart;
