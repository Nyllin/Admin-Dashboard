import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import DashboardCard from "../../Dashboard/DashboardCard";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MarketingDataGrid from "./MarketingDataGrid";
import MarketingSocialMediaCard from "./MarketingSocialMediaCard";
import UserEngagementCard from "./UserEngagementCard";
import MaketingTodoLists from "./MaketingTodoLists";

const Marketing = () => {
  return (
    <Stack>
      <Typography variant="h5" color="primary">
        Marketing
      </Typography>
      <Grid container mt={3} spacing={2} sx={{ display: "flex" }}>
        <Grid item md={4}>
          <DashboardCard
            header="Users"
            updatedNumber={1}
            total={188}
            linkText="See all user"
            linkPath="/admin/users"
            icon={<PersonIcon style={{ color: "#fff" }} linkPath="/users" />}
          />
        </Grid>

        <Grid item md={4}>
          <DashboardCard
            header="Facebook Followers"
            updatedNumber={1}
            total={100000}
            // linkText="See all transactions"
            // linkPath="/sales"
            icon={
              <FacebookIcon
                style={{ color: "#fff", marginLeft: "160px" }}
                linkPath="/sales"
              />
            }
          />
        </Grid>
        <Grid item md={4}>
          <DashboardCard
            header="Instagram Followers"
            updatedNumber={1}
            total={100000}
            // linkText="See all transactions"
            // linkPath="/sales"
            icon={
              <InstagramIcon
                style={{ color: "#fff", marginLeft: "160px" }}
                linkPath="/sales"
              />
            }
          />
        </Grid>
        <Grid item md={5.5} mt={5}>
          <MarketingSocialMediaCard />
        </Grid>
        <Grid item md={6} mt={5}>
          <UserEngagementCard />
        </Grid>
        <Grid item md={11.5} mb={5}>
          <MarketingDataGrid />
        </Grid>
        <Grid item md={11} mt={5}>
          <MaketingTodoLists />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Marketing;
