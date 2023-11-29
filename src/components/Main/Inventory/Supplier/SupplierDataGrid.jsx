import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "item",
    headerName: "Item",
    width: 110,
    editable: true,
  },
  {
    field: "supplier",
    headerName: "Supplier",
    width: 150,
    editable: true,
  },
  {
    field: "registerdate",
    headerName: "Register Date",
    width: 150,
    editable: true,
  },
  {
    field: "mail",
    headerName: "Mail",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
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
        <NavLink to="/admin/inventory/suppliers/suppliereditform">
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
    item: "Item 1",
    supplier: "Supplier A",
    registerdate: "2023-01-01",
    mail: "item1@mail.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    item: "Item 2",
    supplier: "Supplier B",
    registerdate: "2023-02-02",
    mail: "item2@mail.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    item: "Item 3",
    supplier: "Supplier C",
    registerdate: "2023-03-03",
    mail: "item3@mail.com",
    phone: "555-555-5555",
  },
  {
    id: 4,
    item: "Item 4",
    supplier: "Supplier A",
    registerdate: "2023-04-04",
    mail: "item4@mail.com",
    phone: "123-789-4560",
  },
  {
    id: 5,
    item: "Item 5",
    supplier: "Supplier B",
    registerdate: "2023-05-05",
    mail: "item5@mail.com",
    phone: "789-456-1230",
  },
  {
    id: 6,
    item: "Item 6",
    supplier: "Supplier C",
    registerdate: "2023-06-06",
    mail: "item6@mail.com",
    phone: "333-333-3333",
  },
  {
    id: 7,
    item: "Item 7",
    supplier: "Supplier A",
    registerdate: "2023-07-07",
    mail: "item7@mail.com",
    phone: "111-222-3333",
  },
  {
    id: 8,
    item: "Item 8",
    supplier: "Supplier B",
    registerdate: "2023-08-08",
    mail: "item8@mail.com",
    phone: "444-555-6666",
  },
  {
    id: 9,
    item: "Item 9",
    supplier: "Supplier C",
    registerdate: "2023-09-09",
    mail: "item9@mail.com",
    phone: "777-888-9999",
  },
  {
    id: 10,
    item: "Item 10",
    supplier: "Supplier A",
    registerdate: "2023-10-10",
    mail: "item10@mail.com",
    phone: "999-888-7777",
  },
  {
    id: 11,
    item: "Item 11",
    supplier: "Supplier B",
    registerdate: "2023-11-11",
    mail: "item11@mail.com",
    phone: "222-333-4444",
  },
  {
    id: 12,
    item: "Item 12",
    supplier: "Supplier C",
    registerdate: "2023-12-12",
    mail: "item12@mail.com",
    phone: "666-777-8888",
  },
  {
    id: 13,
    item: "Item 13",
    supplier: "Supplier A",
    registerdate: "2024-01-01",
    mail: "item13@mail.com",
    phone: "111-111-1111",
  },
  {
    id: 14,
    item: "Item 14",
    supplier: "Supplier B",
    registerdate: "2024-02-02",
    mail: "item14@mail.com",
    phone: "444-444-4444",
  },
  {
    id: 15,
    item: "Item 15",
    supplier: "Supplier C",
    registerdate: "2024-03-03",
    mail: "item15@mail.com",
    phone: "777-777-7777",
  },
];

const SupplierDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }} mt={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Supplier
        </Typography>
        <NavLink to="/admin/inventory/suppliers/supplieraddform">
          <StyledButton text="Add New Supplier" />
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

export default SupplierDataGrid;
