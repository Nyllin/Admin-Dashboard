import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
const columns = [
  {
    field: "country",
    headerName: "Country",
    width: 150,
    editable: true,
  },
  {
    field: "countryCode",
    headerName: "Country Code",
    width: 150,
    editable: true,
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 110,
    editable: true,
  },
  {
    field: "rate",
    headerName: "Rate",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <NavLink to="/admin/currency/edit">
          <Button
            variant="contained"
            style={{ backgroundColor: "#00688b", padding: 10 }}
          >
            Edit
          </Button>
        </NavLink>
        <Button variant="contained" style={{ padding: 10 }} color="error">
          Remove
        </Button>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    country: "United States",
    countryCode: "US",
    symbol: "$",
    rate: 1.0,
  },
  {
    id: 2,
    country: "United Kingdom",
    countryCode: "UK",
    symbol: "£",
    rate: 0.75,
  },
  {
    id: 3,
    country: "Eurozone",
    countryCode: "EU",
    symbol: "€",
    rate: 0.85,
  },
  {
    id: 4,
    country: "Canada",
    countryCode: "CA",
    symbol: "CA$",
    rate: 1.25,
  },
  {
    id: 5,
    country: "Australia",
    countryCode: "AU",
    symbol: "A$",
    rate: 1.2,
  },
  {
    id: 6,
    country: "Japan",
    countryCode: "JP",
    symbol: "¥",
    rate: 110.5,
  },
  {
    id: 7,
    country: "Switzerland",
    countryCode: "CH",
    symbol: "CHF",
    rate: 0.92,
  },
  {
    id: 8,
    country: "China",
    countryCode: "CN",
    symbol: "¥",
    rate: 6.4,
  },
  {
    id: 9,
    country: "Brazil",
    countryCode: "BR",
    symbol: "R$",
    rate: 5.3,
  },
  {
    id: 10,
    country: "India",
    countryCode: "IN",
    symbol: "₹",
    rate: 75.0,
  },
  {
    id: 11,
    country: "South Africa",
    countryCode: "ZA",
    symbol: "R",
    rate: 15.5,
  },
  {
    id: 12,
    country: "Russia",
    countryCode: "RU",
    symbol: "₽",
    rate: 80.25,
  },
  {
    id: 13,
    country: "Mexico",
    countryCode: "MX",
    symbol: "MXN$",
    rate: 20.5,
  },
  {
    id: 14,
    country: "Singapore",
    countryCode: "SG",
    symbol: "S$",
    rate: 1.35,
  },
  {
    id: 15,
    country: "New Zealand",
    countryCode: "NZ",
    symbol: "NZ$",
    rate: 1.4,
  },
];

const CurrencyDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Currency
        </Typography>
        <NavLink to="/admin/currency/add">
          <StyledButton text="Add New Currency" />
        </NavLink>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "#00688b",
          },
          backgroundColor: "#e6f0f3",
          mt: 3,
          height: 420,
        }}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default CurrencyDataGrid;
