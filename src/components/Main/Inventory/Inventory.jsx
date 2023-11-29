import React from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";
import { NavLink, Outlet } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
const Inventory = () => {
  const InventoryContainer = styled("div")`
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
    <InventoryContainer sx={{ typography: "body1" }}>
      <Searchbar />
      <TabContext>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
          <TabList centered>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/inventory/category"
            >
              <MenuTab to="/sales/discountsale" label="Category" />
            </MenuLink>

            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/inventory/analysis"
            >
              <MenuTab label="Inventory Analysis" />
            </MenuLink>

            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/inventory/returns"
            >
              <MenuTab label="Returns" />
            </MenuLink>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/inventory/suppliers"
            >
              <MenuTab label="Suppliers" />
            </MenuLink>
            <MenuLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/admin/inventory/instock"
            >
              <MenuTab label="Instock" />
            </MenuLink>
          </TabList>
        </Box>
        <TabPanel>
          <Outlet />
        </TabPanel>
      </TabContext>
    </InventoryContainer>
  );
};

export default Inventory;
