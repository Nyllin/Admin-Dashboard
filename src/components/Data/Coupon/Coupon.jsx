import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import CouponDataGrid from "./CouponDataGrid";

const Coupon = () => {
  const CouponContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <CouponContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <CouponDataGrid />
        </Grid>
      </Grid>
    </CouponContainer>
  );
};

export default Coupon;
