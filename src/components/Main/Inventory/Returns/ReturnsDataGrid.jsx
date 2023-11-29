import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    width: 110,
    editable: true,
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 150,
    editable: true,
  },
  {
    field: "referenceno",
    headerName: "Reference No.",
    width: 150,
    editable: true,
  },
  {
    field: "biller",
    headerName: "Biller",
    width: 110,
    editable: true,
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 150,
    editable: true,
  },
  {
    field: "grandtotal",
    headerName: "Grand Total",
    type: "number",
    width: 110,
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
        <NavLink to="/admin/inventory/returns/returneditform">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Remove" />
      </Box>
    ),
  },
];

const rows = [
  {
    id: 25,
    date: "2023-11-22",
    referenceno: "REF123",
    biller: "John Doe",
    customer: "Customer XYZ",
    grandtotal: 500.0,
    productName: "Product ABC",
  },
  {
    id: 26,
    date: "2023-11-23",
    referenceno: "REF124",
    biller: "Jane Smith",
    customer: "Customer ABC",
    grandtotal: 750.5,
    productName: "Product DEF",
  },
  {
    id: 27,
    date: "2023-11-24",
    referenceno: "REF125",
    biller: "Bob Johnson",
    customer: "Customer PQR",
    grandtotal: 300.25,
    productName: "Product GHI",
  },
  {
    id: 28,
    date: "2023-11-25",
    referenceno: "REF126",
    biller: "Alice Williams",
    customer: "Customer LMN",
    grandtotal: 900.75,
    productName: "Product JKL",
  },
  {
    id: 29,
    date: "2023-11-26",
    referenceno: "REF127",
    biller: "Charlie Brown",
    customer: "Customer UVW",
    grandtotal: 400.0,
    productName: "Product MNO",
  },
  {
    id: 30,
    date: "2023-11-27",
    referenceno: "REF128",
    biller: "Diana Miller",
    customer: "Customer DEF",
    grandtotal: 600.5,
    productName: "Product PQR",
  },
  {
    id: 31,
    date: "2023-11-28",
    referenceno: "REF129",
    biller: "Evan Davis",
    customer: "Customer GHI",
    grandtotal: 200.75,
    productName: "Product UVW",
  },
  {
    id: 32,
    date: "2023-11-29",
    referenceno: "REF130",
    biller: "Fiona Clark",
    customer: "Customer JKL",
    grandtotal: 800.25,
    productName: "Product XYZ",
  },
  {
    id: 33,
    date: "2023-11-30",
    referenceno: "REF131",
    biller: "George Wilson",
    customer: "Customer XYZ",
    grandtotal: 350.0,
    productName: "Product ABC",
  },
  {
    id: 34,
    date: "2023-12-01",
    referenceno: "REF132",
    biller: "Helen Taylor",
    customer: "Customer MNO",
    grandtotal: 950.5,
    productName: "Product DEF",
  },
  {
    id: 35,
    date: "2023-12-02",
    referenceno: "REF133",
    biller: "Ivan Martinez",
    customer: "Customer ABC",
    grandtotal: 100.25,
    productName: "Product GHI",
  },
  {
    id: 36,
    date: "2023-12-03",
    referenceno: "REF134",
    biller: "Jessica Turner",
    customer: "Customer PQR",
    grandtotal: 700.75,
    productName: "Product JKL",
  },
  {
    id: 37,
    date: "2023-12-04",
    referenceno: "REF135",
    biller: "Kevin Scott",
    customer: "Customer LMN",
    grandtotal: 450.0,
    productName: "Product MNO",
  },
  {
    id: 38,
    date: "2023-12-05",
    referenceno: "REF136",
    biller: "Laura White",
    customer: "Customer UVW",
    grandtotal: 550.5,
    productName: "Product PQR",
  },
  {
    id: 39,
    date: "2023-12-06",
    referenceno: "REF137",
    biller: "Mike Adams",
    customer: "Customer DEF",
    grandtotal: 250.75,
    productName: "Product XYZ",
  },
];

const ReturnsDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }} mt={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Return List
        </Typography>
        <NavLink to="/admin/inventory/returns/returnaddform">
          <StyledButton text=" Add New Return" />
        </NavLink>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
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
          height: 450,
        }}
      />
    </Box>
  );
};

export default ReturnsDataGrid;
