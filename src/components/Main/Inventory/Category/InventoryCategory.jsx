import { Box, Typography } from "@mui/material";
import React from "react";
import InventoryCategoryList from "./InventoryCategoryList";
import InventoryForm from "./InventoryForm";
const InventoryCategory = () => {
  return (
    <>
      <Box>
        <Typography variant="h5" color="primary">
          Category
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={3}>
          <InventoryCategoryList />
        </Box>
        <InventoryForm />
      </Box>
    </>
  );
};

export default InventoryCategory;
