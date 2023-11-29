import styled from "@emotion/styled";
import React from "react";
import { Grid } from "@mui/material";
import ShopOwnerCategoryDataGrid from "./ShopOwnerCategoryDataGrid";
import ShopOwnerSearchbar from "../../Searchbar/ShopOwnerSearchbar";


const ShopOwnerCategory = () => {
  const CategoryContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <CategoryContainer>
      <ShopOwnerSearchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <ShopOwnerCategoryDataGrid />
        </Grid> 
      </Grid>
    </CategoryContainer>
  );
};

export default ShopOwnerCategory;
