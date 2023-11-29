import styled from "@emotion/styled";
import React from "react";
import Searchbar from "../../Searchbar/Searchbar";
import { Grid } from "@mui/material";
import CurrencyDataGrid from "./CurrencyDataGrid";

const Currency = () => {
  const CurrencyContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <CurrencyContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11}>
          <CurrencyDataGrid />
        </Grid>
      </Grid>
    </CurrencyContainer>
  );
};

export default Currency;
