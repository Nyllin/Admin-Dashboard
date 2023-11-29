import React from "react";
import styled from "@emotion/styled";
import SaleDatePicker from "./SaleDatePicker";
import {
  Stack,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../../../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const SalesForm = () => {
  const SalesContainer = styled(Stack)`
    position: absolute;
    width: 100%;
    right: 0%;
    padding: 100px;
  `;

  const SaleSelect = styled(FormControl)(({ theme }) => ({
    color: theme.palette.primary.main,
    "&:hover": {
      border: ` 1px solid ${theme.palette.primary.main}`,
    },
    "&:focus": {
      border: ` 1px solid ${theme.palette.primary.main}`,
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
    <SalesContainer>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "center" }}
        mb={3}
      >
        Add New Sale
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledInput label="Name" placeholder="Name" />
        <Box>
          <SaleSelect fullWidth>
            <SalesInputLabel id="demo-simple-select-label">
              Status
            </SalesInputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="filled"
            >
              <MenuItem value={10}>Ongoing</MenuItem>
              <MenuItem value={20}>Ended</MenuItem>
              <MenuItem value={30}>Upcoming</MenuItem>
            </Select>
          </SaleSelect>
        </Box>
        <SaleDatePicker pickerLabel="Start Date" />
        <SaleDatePicker pickerLabel="End Date" />
        <Box
          sx={{ width: 300, display: "flex", justifyContent: "space-between" }}
        >
          <StyledButton text="Add" />

          <NavLink to="/admin/sales/discountsale">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default SalesForm;
