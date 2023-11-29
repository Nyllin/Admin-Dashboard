import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import DashboardCharts from "./DashboardCharts";
import DashboardSmallCard from "./DashboardSmallCard";
import DashboardSmallCardItem from "./DashboardSmallCardItem";
import DashboardPieChart from "./DashboardPieChart";
import DashboardBarChart from "./DashboardBarChart";
import Searchbar from "../../Searchbar/Searchbar";
const Dashboard = () => {
  const DashboardContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
    height: 100vh;
  `;

  return (
    <DashboardContainer>
      <Searchbar />
      <Box my={3}>
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
              header="Orders"
              updatedNumber={5}
              total={289}
              linkText="See all orders"
              linkPath="/admin/orders"
              icon={<ShoppingCartIcon style={{ color: "#fff" }} />}
            />
          </Grid>
          <Grid item md={4}>
            <DashboardCard
              header="Earnings"
              updatedNumber={1}
              total={100000}
              linkText="See all transactions"
              linkPath="/admin/sales"
              icon={<PaidIcon style={{ color: "#fff" }} linkPath="/sales" />}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardCharts />
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardPieChart />
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardBarChart />
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardSmallCard
              header="Most Selling Products"
              navpath="/admin/products"
            >
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:1"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:2"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:3"
                total="128 Sales"
              />
            </DashboardSmallCard>
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardSmallCard header="Recent Orders" navpath="/orders">
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:1"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:2"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:3"
                total="128 Sales"
              />
            </DashboardSmallCard>
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardSmallCard header="Weekly Top Customers" navpath="/users">
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:1"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:2"
                total="128 Sales"
              />
              <DashboardSmallCardItem
                name="Sneaker Vento"
                id="ID:3"
                total="128 Sales"
              />
            </DashboardSmallCard>
          </Grid>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default Dashboard;
