import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const DashboardCard = ({
  header,
  updatedNumber,
  total,
  linkText,
  icon,
  linkPath,
}) => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "100%",
    border: " 1px solid #fff",
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
            <Typography variant="subtitle1">{header}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{
                backgroundColor: "#fff",
                width: "50px",
                height: "20px",
                borderRadius: "30px",
              }}
            >
              <KeyboardArrowUpIcon style={{ color: "#95f0c2" }} />
              <span style={{ color: "#95f0c2" }}>{updatedNumber}</span>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="h4" ml={5} style={{ color: "#000" }}>
              {total}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }} mt={2}>
            <DLink to={linkPath}>{linkText}</DLink>
            {icon}
          </Box>
        </CardContent>
      </Box>
    </Dcard>
  );
};

export default DashboardCard;
