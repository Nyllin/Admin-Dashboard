import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const columns = [
  { field: "id", headerName: "ID", width: 110 },
  { field: "no", headerName: "No.", width: 110 },
  {
    field: "brand",
    headerName: "Brand",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    width: 250,
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
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
    ),
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 110,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    editable: true,
  },
  {
    field: "coupon%",
    headerName: "Coupon%",
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
        <NavLink to="/admin/coupon_products/edit">
          <StyledButton text="Edit" />
        </NavLink>
        <RedStyledButton text="Edit" />
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    no: 1,
    brand: "Nike",
    type: "Running Shoes",
    image:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
    productName: "Joyride",
    price: 120,
    "coupon%": 10,
  },
  {
    id: 2,
    no: 2,
    brand: "Adidas",
    type: "Sneakers",
    image:
      "https://static.adidas.com/images/w_600,f_auto,q_auto/ae1eb5cf456e40ccbf0bafb800cdb5bf_9366/ZX_2K_Boost_Shoes_White_FV9996.jpg",
    productName: "ZX 2K Boost",
    price: 90,
    "coupon%": 15,
  },
  {
    id: 3,
    no: 3,
    brand: "Puma",
    type: "Athletic Shoes",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/193526/01/sv01/fnd/EEA/fmt/png/ULTRA-1.1-METALLIC-FG-Mens-Football-Boots",
    productName: "Ultra 1.1 Metallic FG",
    price: 110,
    "coupon%": 12,
  },
  {
    id: 4,
    no: 4,
    brand: "Reebok",
    type: "CrossFit Shoes",
    image:
      "https://cdn11.bigcommerce.com/s-zb3xleqjb2/images/stencil/1280x1280/products/324/1324/Rogue_Speed_TR__32016.1559545409.png?c=2",
    productName: "Rogue Speed TR",
    price: 80,
    "coupon%": 18,
  },
  {
    id: 5,
    no: 5,
    brand: "New Balance",
    type: "Walking Shoes",
    image:
      "https://www.newbalance.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-newbalance_us2-Library/default/dwc45f6ecb/2022/Collections/Global/Brands/0010/Heroes/WX01/B_Hero_980.jpg?sw=1600&sh=2000",
    productName: "Fresh Foam 980",
    price: 100,
    "coupon%": 20,
  },
  {
    id: 6,
    no: 6,
    brand: "Under Armour",
    type: "Basketball Shoes",
    image:
      "https://underarmour.scene7.com/is/image/Underarmour/V5USM_1287362_101_RF_RT?bgc=f8f8f8&fmt=jpg&hei=520&qlt=85&resMode=sharp2&op_usm=1.75,1,6,0",
    productName: "Curry 8",
    price: 130,
    "coupon%": 15,
  },
  {
    id: 7,
    no: 7,
    brand: "Asics",
    type: "Tennis Shoes",
    image:
      "https://images.asics.com/assets//images/products/FHMSO/FHMSO-00/0332/FHMSO-0003320313_1.png?bgc=fafafa&fmt=png&hei=1000&qlt=85,0&resMode=sharp2&op_usm=1.75,1,6,0",
    productName: "GEL-Resolution 8",
    price: 140,
    "coupon%": 10,
  },
  {
    id: 8,
    no: 8,
    brand: "Skechers",
    type: "Casual Shoes",
    image:
      "https://www.skechers.com/dw/image/v2/BBLV_PRD/on/demandware.static/-/Sites-skechers-master-catalog/default/dwd47a7442/232261_WNV_E.png?sw=1000&sh=1000&sm=fit",
    productName: "Energy Lights",
    price: 70,
    "coupon%": 25,
  },
  {
    id: 9,
    no: 9,
    brand: "Vans",
    type: "Skate Shoes",
    image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
    productName: "Old Skool",
    price: 65,
    "coupon%": 20,
  },
  {
    id: 10,
    no: 10,
    brand: "Converse",
    type: "High-Top Sneakers",
    image:
      "https://www.converse.com/dw/image/v2/ABAW_PRD/on/demandware.static/-/Sites-cngblz-master-catalog/default/dwdbf4ed8a/images/e_04/168545C_E_04.png?sw=580",
    productName: "Chuck Taylor All Star",
    price: 55,
    "coupon%": 30,
  },
  {
    id: 11,
    no: 11,
    brand: "Brooks",
    type: "Running Shoes",
    image:
      "https://www.brooksrunning.com/on/demandware.static/-/Sites-BrooksRunning-Library/default/dwa6487179/images/ProductImages/110351/110351_034_l_WR.jpg",
    productName: "Glycerin 19",
    price: 120,
    "coupon%": 15,
  },
  {
    id: 12,
    no: 12,
    brand: "Salomon",
    type: "Trail Running Shoes",
    image:
      "https://www.salomon.com/sites/default/files/products-images/409844_1.png",
    productName: "Speedcross 5",
    price: 110,
    "coupon%": 18,
  },
  {
    id: 13,
    no: 13,
    brand: "Mizuno",
    type: "Volleyball Shoes",
    image:
      "https://www.mizunousa.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-mna-master-catalog/default/dw52a7240c/products/FB21J2/FB21J2-61/medium/FB21J2-61_C.png",
    productName: "Wave Lightning Z6",
    price: 100,
    "coupon%": 22,
  },
  {
    id: 14,
    no: 14,
    brand: "Merrell",
    type: "Hiking Shoes",
    image:
      "https://www.merrell.com/dw/image/v2/BBLX_PRD/on/demandware.static/-/Sites-merrell_us-Library/default/dw87ecf7a5/images/product/HERO/0000/J95229/000/J95229-000_ALT_L1_1.jpg?sw=1000&sh=1000&sm=fit",
    productName: "Moab 2",
    price: 90,
    "coupon%": 20,
  },
  {
    id: 15,
    no: 15,
    brand: "Columbia",
    type: "Winter Boots",
    image:
      "https://www.columbia.com/on/demandware.static/-/Sites-Columbia_US-Library/default/dw16e43ec0/images/products/1877671/1877671_013_alt2.jpg",
    productName: "Bugaboot III",
    price: 150,
    "coupon%": 12,
  },
];

const CouponProductDataGrid = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="variant">
          Coupon Products
        </Typography>
        <NavLink to="/admin/coupon_products/add">
          <StyledButton text="Add New Coupon Product" />
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
          height: 450,
        }}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default CouponProductDataGrid;
