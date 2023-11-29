import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Button, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledButton from "../../../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../../../ReuseComponents/StyledButton/RedStyledButton";
const Inventory = () => {
  const SalesContainer = styled(Stack)`
    position: absolute;
    width: 100%;
    right: 0%;
    padding: 100px;
  `;

  const ChooseFileButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontWeight: "bold",
    padding: 10,
  }));

  return (
    <SalesContainer mt={3}>
      <Typography
        variant="h5"
        color="primary"
        sx={{ textAlign: "center" }}
        mb={3}
      >
        Inventory File Upload
      </Typography>
      <Stack
        component="form"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ChooseFileButton variant="contained" component="label">
          Choose File
          <input type="file" hidden />
        </ChooseFileButton>

        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <StyledButton text="Upload" />

          <NavLink to="/admin/inventory/category">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </SalesContainer>
  );
};

export default Inventory;
