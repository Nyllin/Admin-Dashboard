import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    editable: true,
    renderCell: (params) => (
      <img
        src={params.value}
        width={100}
        height={100}
        alt="sale"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
    ),
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "discount",
    headerName: "Discount",
    width: 90,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <NavLink to="/admin/sales/discountsale/saleeditform">
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

const SalesTable = ({ title, row }) => {
  return (
    <Stack mt={3} spacing={2}>
      <Box>
        <Typography
          variant="h5"
          color="primary"
          style={{ textAlign: "center" }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", my: 3 }}>
        <NavLink to="/admin/dashboard">
          <Button
            variant="outlined"
            style={{
              borderColor: "#00688b",
              padding: 10,
              color: "#00688b",
              marginRight: "60px",
            }}
          >
            Prepare Email
          </Button>
        </NavLink>
      </Box>
      <Box sx={{ width: "80%" }}>
        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          slots={{ toolbar: GridToolbar, color: "#00688b" }}
          checkboxSelection
          sx={{
            "& .MuiDataGrid-cell:hover": {
              color: "#00688b",
            },
            mt: 3,
            backgroundColor:"#e6f0f3"
          }}
        />
      </Box>
    </Stack>
  );
};

export default SalesTable;
