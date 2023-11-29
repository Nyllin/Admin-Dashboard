import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import RegionDataGrid from "./RegionDataGrid";

const Regions = () => {
  const RegionContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <RegionContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <RegionDataGrid />
        </Grid>
      </Grid>
    </RegionContainer>
  );
};

export default Regions;
