import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import CouponProductDataGrid from "./CouponProductDataGrid";

const CouponProduct = () => {
  const CouponProductContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <CouponProductContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <CouponProductDataGrid />
        </Grid>
      </Grid>
    </CouponProductContainer>
  );
};

export default CouponProduct;
