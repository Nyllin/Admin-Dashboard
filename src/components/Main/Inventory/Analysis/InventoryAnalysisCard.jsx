import styled from "@emotion/styled";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const InventoryAnalysisCard = ({
  title,
  count1,
  count2,
  subtitle1,
  subtitle2,
}) => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "85%",
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
    padding: "20px",
  }));

  return (
    <Dcard>
      <CardContent>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid md={6}>
            <Typography variant="h4">{count1}</Typography>
            <Typography variant="subtitle1" color="primary">
              {subtitle1}
            </Typography>
          </Grid>
          <Grid md={6}>
            <Typography variant="h4">{count2}</Typography>
            <Typography variant="subtitle1" color="primary">
              {subtitle2}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Dcard>
  );
};

export default InventoryAnalysisCard;
