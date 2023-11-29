import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "itemCode",
    headerName: "Item Code",
    width: 110,
    editable: true,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 150,
    editable: true,
  },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    editable: true,
    renderCell: (params) => (
      <img
        src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg"
        width={100}
        height={100}
        alt="product"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
    ),
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    editable: true,
    type: "number",
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <NavLink to="/admin/products/edit">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Remove" />
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    itemCode: "IC001",
    brand: "Brand A",
    image: "image1.jpg",
    productName: "Product A",
    price: 20,
  },
  {
    id: 2,
    itemCode: "IC002",
    brand: "Brand B",
    image: "image2.jpg",
    productName: "Product B",
    price: 25,
  },
  {
    id: 3,
    itemCode: "IC003",
    brand: "Brand C",
    image: "image3.jpg",
    productName: "Product C",
    price: 30,
  },
  {
    id: 4,
    itemCode: "IC004",
    brand: "Brand A",
    image: "image4.jpg",
    productName: "Product D",
    price: 15,
  },
  {
    id: 5,
    itemCode: "IC005",
    brand: "Brand B",
    image: "image5.jpg",
    productName: "Product E",
    price: 22,
  },
  {
    id: 6,
    itemCode: "IC006",
    brand: "Brand C",
    image: "image6.jpg",
    productName: "Product F",
    price: 18,
  },
  {
    id: 7,
    itemCode: "IC007",
    brand: "Brand A",
    image: "image7.jpg",
    productName: "Product G",
    price: 28,
  },
  {
    id: 8,
    itemCode: "IC008",
    brand: "Brand B",
    image: "image8.jpg",
    productName: "Product H",
    price: 24,
  },
  {
    id: 9,
    itemCode: "IC009",
    brand: "Brand C",
    image: "image9.jpg",
    productName: "Product I",
    price: 35,
  },
  {
    id: 10,
    itemCode: "IC010",
    brand: "Brand A",
    image: "image10.jpg",
    productName: "Product J",
    price: 19,
  },
  {
    id: 11,
    itemCode: "IC011",
    brand: "Brand B",
    image: "image11.jpg",
    productName: "Product K",
    price: 27,
  },
  {
    id: 12,
    itemCode: "IC012",
    brand: "Brand C",
    image: "image12.jpg",
    productName: "Product L",
    price: 32,
  },
  {
    id: 13,
    itemCode: "IC013",
    brand: "Brand A",
    image: "image13.jpg",
    productName: "Product M",
    price: 21,
  },
  {
    id: 14,
    itemCode: "IC014",
    brand: "Brand B",
    image: "image14.jpg",
    productName: "Product N",
    price: 26,
  },
  {
    id: 15,
    itemCode: "IC015",
    brand: "Brand C",
    image: "image15.jpg",
    productName: "Product O",
    price: 23,
  },
];

const ProductDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Products
        </Typography>
        <NavLink to="/admin/products/add">
          <StyledButton text="Add New Product" />
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

export default ProductDataGrid;
