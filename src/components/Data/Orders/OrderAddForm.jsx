import React from "react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import SaleDatePicker from "../../Main/Sales/DiscountSale/SaleDatePicker";
import StyledInput from "../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const OrderAddForm = () => {
  const UserContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;

  const SaleSelect = styled(FormControl)(({ theme }) => ({
    color: theme.palette.primary.main,
    "&:hover": {
      border: " 1px solid theme.palette.primary.main",
    },
    "&:focus": {
      border: "1px solid theme.palette.primary.main",
      color: theme.palette.primary.main,
      outline: 0,
    },
    width: "300px",
  }));
  const SalesInputLabel = styled(InputLabel)(({ theme }) => ({
    "&:hover": {
      border: "1px solid theme.palette.primary.main",
      color: theme.palette.primary.main,
    },
    " &:focus": {
      border: "1px solid theme.palette.primary.main",
      color: theme.palette.primary.main,
      outline: 0,
    },
  }));
  return (
    <UserContainer>
      <Searchbar />
      <Box mt={3}>
        <Typography
          variant="h5"
          color="primary"
          style={{  textAlign: "center" }}
          mb={3}
        >
          Add New Order
        </Typography>
        <Stack
          component="form"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledInput label="Customer Name" placeholder="Customer Name" />
          <StyledInput label="Amount" placeholder="Amount" type="number" />
          <Box>
            <SaleSelect fullWidth>
              <SalesInputLabel id="demo-simple-select-label">
                User Confirm
              </SalesInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="filled"
              >
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            </SaleSelect>
          </Box>
          <Box>
            <SaleSelect fullWidth>
              <SalesInputLabel id="demo-simple-select-label">
                Order Status
              </SalesInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="filled"
              >
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Completed</MenuItem>
                <MenuItem value={30}>Shipped</MenuItem>
              </Select>
            </SaleSelect>
          </Box>
          <StyledInput label="Remark" placeholder="Remark" />

          <SaleDatePicker pickerLabel="Start Date" />

          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <StyledButton text="Add" />

            <NavLink to="/admin/orders">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default OrderAddForm;
