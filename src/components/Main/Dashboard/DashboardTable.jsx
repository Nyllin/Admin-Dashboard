import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
function createData(name, color, capacity, fuel, price) {
  return { name, color, capacity, fuel, price };
}

const rows = [
  createData("TATA HARRIER", "BLACK", 6, "DIESEL", "14 LACS"),
  createData("MAHINDRA THAR", "RED", 4, "DIESEL", "16 LACS"),
  createData("MARUTI SWIFT", "WHITE", 5, "PETROL", "9 LACS"),
  createData("MG HECTOR", "BLACK", 5, "PETROL", "18 LACS"),
  createData("MERCEDES GLS", "WHITE", 5, "DIESEL", "52 LACS"),
];

const DashboardTable = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "20px",

  maxWidth: "700px",
}));

export default function MostSellingProducts() {
  return (
    <DashboardTable component={Paper}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Most Selling Products</Typography>
        <Link to="/products">
          <Button
            variant="contained"
            style={{ backgroundColor: "#fff", color: "#00688b" }}
          >
            View Details
          </Button>
        </Link>
      </Box>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">COLOR</TableCell>
            <TableCell align="right">CAPACITY</TableCell>
            <TableCell align="right">FUEL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
              <TableCell align="right">{row.fuel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashboardTable>
  );
}
