import styled from "@emotion/styled";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const UserEngagementCard = () => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none",
    borderRadius: "10px",
    padding: "10px",
  }));
  return (
    <Dcard>
      <CardContent>
        <Typography variant="h6" color="primary">
          FACEBOOK ENGAGEMENTS AND IMPRESSIONS
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Facebook Page:
          <span color="primary">Rangoon Discount</span>
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography variant="subtitle1" mt={1}>
              User Engagement
            </Typography>
            <Typography variant="subtitle1">45.07%</Typography>
            <Typography variant="subtitle1" color="primary">
              +28.44% (Prev)
            </Typography>
          </Grid>
          <Grid item md={8}>
            <SparkLineChart
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              height={100}
              width={300}
            />
          </Grid>
          <Grid item md={4}>
            <Typography variant="subtitle1" mt={1}>
              Page Impression
            </Typography>
            <Typography variant="subtitle1">45.07%</Typography>
            <Typography variant="subtitle1" color="primary">
              +28.44% (Prev)
            </Typography>
          </Grid>
          <Grid item md={8}>
            <SparkLineChart
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              height={100}
              width={300}
            />
          </Grid>
          <Grid item md={4}>
            <Typography variant="subtitle1" mt={1}>
              Page Impression
            </Typography>
            <Typography variant="subtitle1">45.07%</Typography>
            <Typography variant="subtitle1" color="primary">
              +28.44% (Prev)
            </Typography>
          </Grid>
          <Grid item md={8}>
            <SparkLineChart
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              height={100}
              width={300}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Dcard>
  );
};

export default UserEngagementCard;
