import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "productname",
    headerName: "Product Name",
    width: 150,
    editable: true,
  },
  {
    field: "instock",
    headerName: "In Stock",
    width: 150,
    editable: true,
  },
  {
    field: "avgorders",
    headerName: "Avg 30 Days Orders",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "unitprice",
    headerName: "Unit Price",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "stockvalue",
    headerName: "Stock Value",
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
        <NavLink to="/admin/inventory/instock/editstock">
          <StyledButton
          text="Edit"
          />
          
        </NavLink>
        <RedStyledButton text="Remove" />
     
      </Box>
    ),
  },
];

const rows = [
  {
    id: 10,
    productname: "Product A",
    instock: 25,
    avgorders: 20,
    unitprice: 15.99,
    stockvalue: 400,
  },
  {
    id: 11,
    productname: "Product B",
    instock: 50,
    avgorders: 30,
    unitprice: 25.99,
    stockvalue: 1300,
  },
  {
    id: 12,
    productname: "Product C",
    instock: 10,
    avgorders: 15,
    unitprice: 10.49,
    stockvalue: 150,
  },
  {
    id: 13,
    productname: "Product D",
    instock: 75,
    avgorders: 40,
    unitprice: 18.75,
    stockvalue: 900,
  },
  {
    id: 14,
    productname: "Product E",
    instock: 30,
    avgorders: 25,
    unitprice: 22.5,
    stockvalue: 600,
  },
  {
    id: 15,
    productname: "Product F",
    instock: 5,
    avgorders: 10,
    unitprice: 12.99,
    stockvalue: 75,
  },
  {
    id: 16,
    productname: "Product G",
    instock: 20,
    avgorders: 18,
    unitprice: 28.99,
    stockvalue: 500,
  },
  {
    id: 17,
    productname: "Product H",
    instock: 40,
    avgorders: 35,
    unitprice: 21.25,
    stockvalue: 1100,
  },
  {
    id: 18,
    productname: "Product I",
    instock: 15,
    avgorders: 22,
    unitprice: 14.5,
    stockvalue: 300,
  },
  {
    id: 19,
    productname: "Product J",
    instock: 60,
    avgorders: 28,
    unitprice: 19.99,
    stockvalue: 800,
  },
  {
    id: 20,
    productname: "Product K",
    instock: 8,
    avgorders: 12,
    unitprice: 16.75,
    stockvalue: 200,
  },
  {
    id: 21,
    productname: "Product L",
    instock: 45,
    avgorders: 33,
    unitprice: 24.5,
    stockvalue: 1000,
  },
  {
    id: 22,
    productname: "Product M",
    instock: 12,
    avgorders: 17,
    unitprice: 11.99,
    stockvalue: 120,
  },
  {
    id: 23,
    productname: "Product N",
    instock: 55,
    avgorders: 38,
    unitprice: 26.99,
    stockvalue: 1400,
  },
  {
    id: 24,
    productname: "Product O",
    instock: 18,
    avgorders: 26,
    unitprice: 23.25,
    stockvalue: 700,
  },
];

const InventoryAnalysisDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }} mt={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          In Stock
        </Typography>
        <NavLink to="/admin/inventory/instock/addstock">
          <Button
            variant="contained"
            style={{ backgroundColor: "#00688b", padding: 10 }}
          >
            Add Stock
          </Button>
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

export default InventoryAnalysisDataGrid;
