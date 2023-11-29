import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";

const ShopOwnerProfileInformation = () => {
  function createData(info, details) {
    return { info, details };
  }

  const rows = [
    createData("Username", "Shop Owner"),
    createData("Company Name", "Shop Owner"),
    createData("Email", "shopowner@gmail.com"),
    createData("Website URL", "www.shopowner.com"),
    createData("Phone", "09123456"),
    createData("Address", "Mya Wut Yee Street"),
    createData("City", "Yangon"),
    createData("Province/State", "Yangon"),
    createData("Country", "Myanmar"),
    createData("Last Login Device", " 128.456.89 (Apple) safari"),
    createData("Last Password Change", "30 days"),
  ];

  return (
    <Stack>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6" color="primary">
          Profile Details
        </Typography>
        <NavLink to="/shop_owner/profile/edit">
          <StyledButton text="Edit Profile" />
        </NavLink>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#e6f0f3" }}
          aria-label="simple table"
        >
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.info}
                </TableCell>
                <TableCell align="center" style={{ color: "#00688b" }}>
                  {row.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ShopOwnerProfileInformation;
