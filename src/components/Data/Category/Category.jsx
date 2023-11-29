import styled from "@emotion/styled";
import React from "react";

import { Grid } from "@mui/material";
import CategoryDataGrid from "./CategoryDataGrid";
import Searchbar from "../../Searchbar/Searchbar";


const Category = () => {
  const CategoryContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <CategoryContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <CategoryDataGrid />
        </Grid> 
      </Grid>
    </CategoryContainer>
  );
};

export default Category;
