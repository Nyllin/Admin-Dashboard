import styled from "@emotion/styled";
import React from "react";
import ShopOwnerSearchbar from "../../Searchbar/ShopOwnerSearchbar";
import { Grid } from "@mui/material";
import ShopOwnerProductDataGrid from "./ShopOwnerProductDataGrid";

const ShopOwnerProduct = () => {
  const ProductContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <ProductContainer>
      <ShopOwnerSearchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <ShopOwnerProductDataGrid />
        </Grid>
      </Grid>
    </ProductContainer>
  );
};

export default ShopOwnerProduct;
