import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import OrderDataGrid from "./OrderDataGrid";

const Orders = () => {
  const OrderContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;

  return (
    <OrderContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
            <OrderDataGrid/>
        </Grid>
      </Grid>
    </OrderContainer>
  );
};

export default Orders;
