import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
const Searchbar = () => {
  const SearchInput = styled("input")(({ theme }) => ({
    borderRadius: "10px",
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "10px",
    "&:hover": {
      outline: 0,
      boxShadow: "10px 10px 97px 0px rgba(0,104,139,0.3)",
    },
    " &:focus": {
      outline: 0,
      boxShadow: "10px 10px 97px 0px rgba(0,104,139,0.3)",
    },
  }));
  const ProfileLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    display: "flex",
    color: "#000",
    "&:active": {
      color: theme.palette.primary.main,
    },
  }));
  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }} mt={3}>
      <SearchInput type="text" placeholder="Search..." />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ProfileLink to="/shop_owner/profile">
          <HouseIcon style={{ color: "#00688b" }} />
          <Typography variant="subtitle1" style={{ marginRight: "80px" }}>
            www.shopowner.com
          </Typography>
        </ProfileLink>
      </Box>
    </Box>
  );
};

export default Searchbar;
