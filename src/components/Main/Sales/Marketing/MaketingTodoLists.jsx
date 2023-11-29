import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import MarketingTodoItem from "./MarketingTodoItem";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
const MaketingTodoLists = () => {
  const Dcard = styled(Card)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none",
    borderRadius: "10px",
    padding: "10px",
  }));

  return (
    <Dcard mt={5}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h5" color="primary">
            To Do Lists
          </Typography>
          <NavLink to="/admin/sales/marketing/todoform">
            <StyledButton text=" Add New Task" />
          </NavLink>
        </Box>

        <MarketingTodoItem />
      </CardContent>
    </Dcard>
  );
};

export default MaketingTodoLists;
