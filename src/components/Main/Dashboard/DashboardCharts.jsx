import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Stack,
} from "@mui/material";

const data = [1000000, 2000000, 3000000, 4000000, 5000000, 8000000, 10000000];
const xData = [
  "Sep 1",
  "Sep 5",
  "Sep 10",
  "Sep 15",
  "Sep 20",
  "Sep 25",
  "Sep 30",
];

const DashboardCharts = () => {
  const DashboardChartsContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "20px",
  }));

  return (
    <DashboardChartsContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={3}>
        <Typography variant="h6" mt={3}>
          Earnings
        </Typography>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Date</InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Sep 1</MenuItem>
            <MenuItem value={20}>Sep 20</MenuItem>
            <MenuItem value={30}>Sep 30</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <LineChart
        xAxis={[{ data: xData, scaleType: "point" }]}
        series={[{ data, color: "#00688b" }]}
        width={500}
        height={250}
        margin={{ top: 20, bottom: 20, left: 100 }}
      />
    </DashboardChartsContainer>
  );
};

export default DashboardCharts;
