import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const DashboardSmallCard = ({ children, header, navpath }) => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
  }));

  const DLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }));

  return (
    <Dcard variant="outlined">
      <Box sx={{ paddingY: "10px" }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h6">{header}</Typography>
            <DLink to={navpath}>View Details</DLink>
          </Box>
          {children}
        </CardContent>
      </Box>
    </Dcard>
  );
};

export default DashboardSmallCard;
