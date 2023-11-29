import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const InventoryCategoryList = () => {
  return (
    <FormControl variant="filled" sx={{ minWidth: 200 }}>
      <InputLabel
        style={{
          color: "#00688b",
        }}
      >
        Choose Category
      </InputLabel>
      <Select>
        <MenuItem value={1}>Laptop</MenuItem>
        <MenuItem value={2}>Network</MenuItem>
        <MenuItem value={3}>Gadget</MenuItem>
        <MenuItem value={4}>Coupon</MenuItem>
        <MenuItem value={5}>Power Solution</MenuItem>
        <MenuItem value={6}>Phone</MenuItem>
      </Select>
    </FormControl>
  );
};

export default InventoryCategoryList;
