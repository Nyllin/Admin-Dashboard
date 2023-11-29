import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
const columns = [
  { field: "customer", headerName: "Customer", width: 110, editable: true },
  {
    field: "amount",
    headerName: "Amount",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "userConfirmed",
    headerName: "User Confirmed",
    width: 150,
    editable: true,
  },
  {
    field: "orderStatus",
    headerName: "Order Status",
    width: 130,
    editable: true,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
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
        <NavLink to="/admin/orders/view">
          <Button
            variant="contained"
            style={{ backgroundColor: "#00688b", padding: 10 }}
          >
            View Order
          </Button>
        </NavLink>
      </Box>
    ),
  },
  {
    field: "remark",
    headerName: "Remark",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    customer: "John Doe",
    amount: 100.5,
    userConfirmed: "Yes",
    orderStatus: "Pending",
    orderDate: "2023-11-23",
    remark: "Lorem ipsum",
  },
  {
    id: 2,
    customer: "Jane Smith",
    amount: 75.2,
    userConfirmed: "No",
    orderStatus: "Completed",
    orderDate: "2023-11-22",
    remark: "Dolor sit amet",
  },
  {
    id: 15,
    customer: "Alice Johnson",
    amount: 200.0,
    userConfirmed: "Yes",
    orderStatus: "Shipped",
    orderDate: "2023-11-20",
    remark: "Consectetur adipiscing elit",
  },
];

const OrderGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ color: "#00688b" }}>
          Orders
        </Typography>
        <NavLink to="/admin/orders/add">
          <StyledButton text=" Add New Order" />
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

export default OrderGrid;
