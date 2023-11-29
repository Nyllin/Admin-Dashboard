import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

const NavListItem = ({ text, icon, navpath }) => {
  const NavbarLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: "#000",
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const NavIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

  const ListNavbarButton = styled(ListItemButton)(({ theme }) => ({
    ".active &": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  return (
    <NavbarLink
      to={navpath}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <ListNavbarButton>
        <NavIcon>{icon}</NavIcon>
        <ListItemText primary={text} />
      </ListNavbarButton>
    </NavbarLink>
  );
};

export default NavListItem;
