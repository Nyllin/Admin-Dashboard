import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  {
    field: "region/country",
    headerName: "Region/Country",
    width: 200,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
    editable: true,
  },
  {
    field: "deliveryFee",
    headerName: "Delivery Fee",
    width: 150,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <NavLink to="/admin/regions/edit">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Cancel" />
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    "region/country": "North America",
    city: "New York",
    deliveryFee: 10.99,
  },
  {
    id: 2,
    "region/country": "Europe",
    city: "Paris",
    deliveryFee: 8.5,
  },
  {
    id: 3,
    "region/country": "Asia",
    city: "Tokyo",
    deliveryFee: 12.75,
  },
  {
    id: 4,
    "region/country": "South America",
    city: "Sao Paulo",
    deliveryFee: 15.2,
  },
  {
    id: 5,
    "region/country": "Oceania",
    city: "Sydney",
    deliveryFee: 9.99,
  },
  {
    id: 6,
    "region/country": "Africa",
    city: "Cape Town",
    deliveryFee: 18.5,
  },
  {
    id: 7,
    "region/country": "North America",
    city: "Los Angeles",
    deliveryFee: 12.99,
  },
  {
    id: 8,
    "region/country": "Europe",
    city: "Berlin",
    deliveryFee: 7.8,
  },
  {
    id: 9,
    "region/country": "Asia",
    city: "Beijing",
    deliveryFee: 14.5,
  },
  {
    id: 10,
    "region/country": "South America",
    city: "Buenos Aires",
    deliveryFee: 16.25,
  },
  {
    id: 11,
    "region/country": "Oceania",
    city: "Auckland",
    deliveryFee: 11.99,
  },
  {
    id: 12,
    "region/country": "Africa",
    city: "Nairobi",
    deliveryFee: 20.5,
  },
  {
    id: 13,
    "region/country": "North America",
    city: "Toronto",
    deliveryFee: 13.75,
  },
  {
    id: 14,
    "region/country": "Europe",
    city: "Madrid",
    deliveryFee: 9.2,
  },
  {
    id: 15,
    "region/country": "Asia",
    city: "Seoul",
    deliveryFee: 16.99,
  },
];

const RegionDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ color: "#00688b" }}>
          Regions
        </Typography>
        <NavLink to="/admin/regions/add">
          <StyledButton text="Add New Region" />
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

export default RegionDataGrid;
