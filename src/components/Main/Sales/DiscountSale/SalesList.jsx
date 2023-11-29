import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
const SalesList = () => {
  const MenuLink = styled(NavLink)`
    color: #000;
    text-decoration: none;
  `;
  return (
    <FormControl variant="filled" sx={{ minWidth: 200 }}>
      <InputLabel
       color="primary"
      >
        List of Sales
      </InputLabel>
      <Select>
        <MenuLink to="/admin/sales/discountsale/1111">
          <MenuItem value={10}>11.11 Sale</MenuItem>
        </MenuLink>
        <MenuLink to="/admin/sales/tazaungdine">
          <MenuItem value={20}>Tazaungdine</MenuItem>
        </MenuLink>
        <MenuLink to="/admin/sales/christmas">
          <MenuItem value={30}>Christmas</MenuItem>
        </MenuLink>
      </Select>
    </FormControl>
  );
};

export default SalesList;
