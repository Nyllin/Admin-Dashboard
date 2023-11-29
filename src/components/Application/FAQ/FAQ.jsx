import { Grid } from "@mui/material";
import React from "react";
import FaqItem from "./FaqItem";
import Searchbar from "../../Searchbar/Searchbar";
import styled from "@emotion/styled";

const FAQ = () => {
  const FaqContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;
  return (
    <FaqContainer>
      <Searchbar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={11} mt={3}>
          <FaqItem />
        </Grid>
        <Grid item md={11} mt={3}>
          <FaqItem />
        </Grid>
        <Grid item md={11} mt={3}>
          <FaqItem />
        </Grid>
        <Grid item md={11} mt={3}>
          <FaqItem />
        </Grid>
      </Grid>
    </FaqContainer>
  );
};

export default FAQ;
