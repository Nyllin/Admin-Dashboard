import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import NavListItem from "./NavListItem";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
// icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import QuizIcon from "@mui/icons-material/Quiz";

const ShopOwnerNavigator = () => {
  const NavContainer = styled("div")`
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    margin-top: 20px;
  `;

  const NavbarLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: "#000",
    "&.active": {
      color: "#fff",
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <>
      <NavContainer className="nav-container">
        <Box style={{ padding: "20px" }}>
          <NavbarLink to="/shop_owner/dashboard">
            <Typography
              variant="h5"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Admin Dashboard
            </Typography>
          </NavbarLink>
          <Box>
            <NavList subnav="MAIN">
              <NavListItem
                text="Dashboard"
                icon={<DashboardIcon />}
                navpath="/shop_owner/dashboard"
              />
            </NavList>
            <NavList subnav="APPLICATION">
              <NavListItem
                text="FAQ"
                icon={<QuizIcon />}
                navpath="/shop_owner/faq"
              />
            </NavList>
            <NavList subnav="DATA">
              <NavListItem
                text="Categories"
                icon={<CategoryIcon />}
                navpath="/shop_owner/categories"
              />
              <NavListItem
                text="Products"
                icon={<ProductionQuantityLimitsIcon />}
                navpath="/shop_owner/products"
              />
            </NavList>
            <NavList subnav="User">
              <NavListItem
                text="Profile"
                icon={<AccountBoxIcon />}
                navpath="/shop_owner/profile"
              />
              <NavListItem
                text="Logout"
                icon={<LogoutIcon />}
                navpath="/shop_owner/logout"
              />
            </NavList>
          </Box>
        </Box>
      </NavContainer>
    </>
  );
};

export default ShopOwnerNavigator;
