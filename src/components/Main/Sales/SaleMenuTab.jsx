import React from "react";
import { Tab, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";
import Searchbar from "../../Searchbar/Searchbar";
import { NavLink, Outlet } from "react-router-dom";
const SaleMenuTab = () => {
  const SalesContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;

  const MenuTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: "bold",
  }));

  const MenuLink = styled(NavLink)(({ theme }) => ({
    margin: "0px 10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "10px",
    },
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "10px",
    },
  }));
  return (
    <SalesContainer sx={{ typography: "body1" }}>
      <Searchbar />
      <TabContext>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
          <TabList centered>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/sales/discountsale"
            >
              <MenuTab to="/admin/sales/discountsale" label="Discount Sale" />
            </MenuLink>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/sales/analysis"
            >
              <MenuTab label="Sale Analysis" />
            </MenuLink>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/sales/marketing"
            >
              <MenuTab label="Marketing" />
            </MenuLink>
          </TabList>
        </Box>
        <TabPanel>
          <Outlet />
        </TabPanel>
      </TabContext>
    </SalesContainer>
  );
};

export default SaleMenuTab;
