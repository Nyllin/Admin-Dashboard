import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import NavListItem from "./NavListItem";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
// icon
import InventoryIcon from "@mui/icons-material/Inventory";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FlagIcon from "@mui/icons-material/Flag";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import QuizIcon from "@mui/icons-material/Quiz";
import ShopIcon from "@mui/icons-material/Shop";
const Navigator = () => {
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
          <NavbarLink to="/admin/dashboard">
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
                navpath="/admin/dashboard"
              />
              <NavListItem
                text="Inventory"
                icon={<InventoryIcon />}
                navpath="/admin/inventory"
              />
              <NavListItem
                text="Sales"
                icon={<SellIcon />}
                navpath="/admin/sales"
              />
            </NavList>
            <NavList subnav="APPLICATION">
              <NavListItem
                text="Mail Box"
                icon={<EmailIcon />}
                navpath="/admin/mailbox"
              />
              <NavListItem
                text="Chat"
                icon={<ChatIcon />}
                navpath="/admin/chat"
              />
              <NavListItem
                text="FAQ"
                icon={<QuizIcon />}
                navpath="/admin/faq"
              />
            </NavList>
            <NavList subnav="DATA">
              <NavListItem
                text="Shop Owner"
                icon={<ShopIcon />}
                navpath="/admin/shop_owners"
              />

              <NavListItem
                text="Users"
                icon={<PersonIcon />}
                navpath="/admin/users"
              />
              <NavListItem
                text="Categories"
                icon={<CategoryIcon />}
                navpath="/admin/categories"
              />
              <NavListItem
                text="Products"
                icon={<ProductionQuantityLimitsIcon />}
                navpath="/admin/products"
              />
              <NavListItem
                text="Orders"
                navpath="/admin/orders"
                icon={<ListAltIcon />}
              />
              <NavListItem
                text="Currency Exchange"
                icon={<CurrencyExchangeIcon />}
                navpath="/admin/currency"
              />
              <NavListItem
                text="Regions"
                icon={<FlagIcon />}
                navpath="/admin/regions"
              />
              <NavListItem
                text="Coupons"
                icon={<ConfirmationNumberIcon />}
                navpath="/admin/coupons"
              />
              <NavListItem
                text="Coupon Products"
                icon={<LocalActivityIcon />}
                navpath="/admin/coupon_products"
              />
            </NavList>
            <NavList subnav="User">
              <NavListItem
                text="Profile"
                icon={<AccountBoxIcon />}
                navpath="/admin/profile"
              />
              <NavListItem
                text="Logout"
                icon={<LogoutIcon />}
                navpath="/admin/logout"
              />
            </NavList>
          </Box>
        </Box>
      </NavContainer>
    </>
  );
};

export default Navigator;
