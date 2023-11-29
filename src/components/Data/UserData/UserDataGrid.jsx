import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";

const UserDataGrid = () => {
  const [suspend, setSuspend] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
          <NavLink to="/admin/users/edit">
            <StyledButton text="Edit" />
          </NavLink>
          <RedStyledButton text="Remove" />
        </Box>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Users
        </Typography>
        <NavLink to="/admin/users/add">
          <StyledButton text="Add New User" />
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

export default UserDataGrid;
