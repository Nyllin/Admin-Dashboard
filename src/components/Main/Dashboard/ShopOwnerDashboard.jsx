import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardSmallCard from "./DashboardSmallCard";
import DashboardSmallCardItem from "./DashboardSmallCardItem";
import DashboardPieChart from "./DashboardPieChart";
import DashboardBarChart from "./DashboardBarChart";
import ShopOwnerSearchbar from "../../Searchbar/ShopOwnerSearchbar";
const ShopOwnerDashboard = () => {
  const DashboardContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
    height: 100vh;
  `;

  return (
    <DashboardContainer>
      <ShopOwnerSearchbar />
      <Box my={3}>
        <Grid container mt={3} spacing={2} sx={{ display: "flex" }}>  
          <Grid item md={5.5}>
            <DashboardCard
              header="Products"
              updatedNumber={6}
              total={289}
              linkText="See all products"
              linkPath="/shop_owner/products"
              icon={<ShoppingCartIcon style={{ color: "#fff" }} />}
            />
          </Grid>
          <Grid item md={6}>
            <DashboardCard
              header="Categories"
              updatedNumber={1}
              total={100000}
              linkText="See all categories"
              linkPath="/shop_owner/categories"
              icon={<ShoppingCartIcon style={{ color: "#fff" }} linkPath="/sales" />}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardPieChart />
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardBarChart />
          </Grid>
          <Grid item md={6} lg={6} mt={3}>
            <DashboardSmallCard
              header="Most Selling Products"
              navpath="/shop_owner/products"
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
       
        
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default ShopOwnerDashboard;
