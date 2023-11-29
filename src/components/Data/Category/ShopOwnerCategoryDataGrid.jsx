import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "category",
    headerName: "Category",
    width: 110,
    editable: true,
  },
  {
    field: "brands",
    headerName: "Brands",
    width: 250,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
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
        <NavLink to="/shop_owner/categories/edit">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Cancel" />
      </Box>
    ),
  },
];

const rows = [
  { id: 1, category: "Electronics", brands: "Sony", type: "Smartphone" },
  { id: 2, category: "Clothing", brands: "Nike", type: "Athletic Wear" },
  { id: 3, category: "Home Goods", brands: "IKEA", type: "Furniture" },
  { id: 4, category: "Books", brands: "Penguin", type: "Fiction" },
  { id: 5, category: "Electronics", brands: "Samsung", type: "TV" },
  { id: 6, category: "Clothing", brands: "Adidas", type: "Sports Shoes" },
  {
    id: 7,
    category: "Home Goods",
    brands: "AmazonBasics",
    type: "Kitchenware",
  },
  { id: 8, category: "Books", brands: "HarperCollins", type: "Non-Fiction" },
  { id: 9, category: "Electronics", brands: "LG", type: "Appliances" },
  { id: 10, category: "Clothing", brands: "H&M", type: "Casual Wear" },
  { id: 11, category: "Home Goods", brands: "Crate & Barrel", type: "Decor" },
  { id: 12, category: "Books", brands: "Random House", type: "Mystery" },
  { id: 13, category: "Electronics", brands: "Apple", type: "Laptop" },
  { id: 14, category: "Clothing", brands: "Zara", type: "Fashion" },
  { id: 15, category: "Home Goods", brands: "Target", type: "Bedding" },
];

const ShopOwnerCategoryDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Category
        </Typography>
        <NavLink to="/shop_owner/categories/add">
          <StyledButton text="Add New Category" />
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

export default ShopOwnerCategoryDataGrid;
