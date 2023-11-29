import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";

const ShopOwnerDataGrid = () => {
  const [suspend, setSuspend] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },

    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {suspend ? (
            <RedStyledButton text="Suspend" onClick={() => setSuspend(false)} />
          ) : (
            <StyledButton text="Active" onClick={() => setSuspend(true)} />
          )}
        </Box>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <NavLink to="/admin/shop_owners/edit">
            <StyledButton text="Edit" />
          </NavLink>
          <RedStyledButton text="Remove" />
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, name: "John Doe", product: "Product A" },
    { id: 2, name: "Jane Smith", product: "Product B" },
    { id: 3, name: "Bob Johnson", product: "Product C" },
    { id: 4, name: "Alice Williams", product: "Product D" },
    { id: 5, name: "Charlie Brown", product: "Product E" },
    { id: 6, name: "Eva Davis", product: "Product F" },
    { id: 7, name: "Frank Miller", product: "Product G" },
    { id: 8, name: "Grace Wilson", product: "Product H" },
    { id: 9, name: "Henry Lee", product: "Product I" },
    { id: 10, name: "Ivy Robinson", product: "Product J" },
    { id: 11, name: "Jack Anderson", product: "Product K" },
    { id: 12, name: "Katie Moore", product: "Product L" },
    { id: 13, name: "Leo Turner", product: "Product M" },
    { id: 14, name: "Mia Garcia", product: "Product N" },
    { id: 15, name: "Noah Davis", product: "Product O" },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Shop Owners
        </Typography>
        <NavLink to="/admin/shop_owners/add">
          <StyledButton text="Add New Shop Owner" />
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
        }}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default ShopOwnerDataGrid;
