import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import ShopOwnerDataGrid from "./ShopOwnerDataGrid";

const ShopOwner = () => {
  const ShopOwnerContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <ShopOwnerContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <ShopOwnerDataGrid />
        </Grid>
      </Grid>
    </ShopOwnerContainer>
  );
};

export default ShopOwner;
