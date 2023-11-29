import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 110 },
  { field: "no", headerName: "No.", width: 110 },
  {
    field: "code",
    headerName: "Code",
    width: 110,
    editable: true,
  },
  {
    field: "percent",
    headerName: "Percent",
    width: 250,
    editable: true,
  },
  {
    field: "used",
    headerName: "Used",
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
        <NavLink to="/admin/coupons/edit">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Cancel" />
      </Box>
    ),
  },
];

const rows = [
  { id: 1, no: 1, code: "ABC123", percent: 10, used: false },
  { id: 2, no: 2, code: "XYZ456", percent: 20, used: true },
  { id: 3, no: 3, code: "DEF789", percent: 15, used: false },
  { id: 4, no: 4, code: "GHI123", percent: 25, used: true },
  { id: 5, no: 5, code: "JKL456", percent: 30, used: false },
  { id: 6, no: 6, code: "MNO789", percent: 12, used: true },
  { id: 7, no: 7, code: "PQR123", percent: 18, used: false },
  { id: 8, no: 8, code: "STU456", percent: 22, used: true },
  { id: 9, no: 9, code: "VWX789", percent: 28, used: false },
  { id: 10, no: 10, code: "YZA123", percent: 16, used: true },
  { id: 11, no: 11, code: "BCD456", percent: 14, used: false },
  { id: 12, no: 12, code: "EFG789", percent: 32, used: true },
  { id: 13, no: 13, code: "HIJ123", percent: 26, used: false },
  { id: 14, no: 14, code: "KLM456", percent: 19, used: true },
  { id: 15, no: 15, code: "NOP789", percent: 24, used: false },
];

const CouponDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Coupon
        </Typography>
        <NavLink to="/admin/coupons/add">
          <StyledButton
           text="Add New Coupon"
          />
            
        
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

export default CouponDataGrid;
