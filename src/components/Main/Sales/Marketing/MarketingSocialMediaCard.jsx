import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import MarketingSocialMediaCardItem from "./MarketingSocialMediaCardItem";
import FacebookIcon from "@mui/icons-material/Facebook";

const MarketingSocialMediaCard = () => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none",
    borderRadius: "10px",
   
  }));

  return (
    <Dcard>
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          Social Media Activity
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Quick overview
        </Typography>
        <Grid container spacing={2} mt={3}>
          <Grid item md={6}>
            <MarketingSocialMediaCardItem
              icon={
                <FacebookIcon style={{ color: "#00688b", fontSize: "40px" }} />
              }
              title="Total Posts"
              count="188"
            />
          </Grid>
          <Grid item md={6}>
            <MarketingSocialMediaCardItem
              icon={
                <FacebookIcon style={{ color: "#00688b", fontSize: "40px" }} />
              }
              title="Total Likes"
              count="1000000"
            />
          </Grid>
          <Grid item md={6}>
            <MarketingSocialMediaCardItem
              icon={
                <FacebookIcon style={{ color: "#00688b", fontSize: "40px" }} />
              }
              title="Total Follower"
              count="1000000"
            />
          </Grid>
          <Grid item md={6}>
            <MarketingSocialMediaCardItem
              icon={
                <FacebookIcon style={{ color: "#00688b", fontSize: "40px" }} />
              }
              title="Total Posts"
              count="1000000"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Dcard>
  );
};

export default MarketingSocialMediaCard;
