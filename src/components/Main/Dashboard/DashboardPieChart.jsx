import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
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

const DashboardPieChart = () => {
  const DashboardChartsContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "20px",
  }));

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
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Laptop" },
              { id: 1, value: 20, label: "Earphones" },
              { id: 2, value: 10, label: "Power Bank" },
            ],
          },
        ]}
        width={500}
        height={250}
      />
    </DashboardChartsContainer>
  );
};

export default DashboardPieChart;
