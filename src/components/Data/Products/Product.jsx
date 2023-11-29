import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import ProductDataGrid from "./ProductDataGrid";

const Product = () => {
  const ProductContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <ProductContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <ProductDataGrid />
        </Grid> 
      </Grid>
    </ProductContainer>
  );
};

export default Product;
