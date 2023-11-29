import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledInput from "../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";
import RedStyledButton from "../ReuseComponents/StyledButton/RedStyledButton";

const ProfileEditForm = () => {
  return (
    <Box mb={5}>
      <Typography
        variant="h5"
        color="primary"
        style={{ textAlign: "center" }}
        mb={3}
      >
        Edit Profile
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
        <StyledInput label="Username" placeholder="Username" />
        <StyledInput label="Company Name" placeholder="Company Name" />
        <StyledInput label="Email" placeholder="Email" type="email" />
        <StyledInput label="Password" placeholder="Password" type="password" />
        <StyledInput label="Website URL" placeholder="Website URL" />
        <StyledInput label="Phone" placeholder="Phone" />
        <StyledInput label="Address" placeholder="Address" />
        <StyledInput label="City" placeholder="City" />
        <StyledInput label="Province/State" placeholder="Province/State" />
        <StyledInput label="Country" placeholder="Country" />

        <Box
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <StyledButton text="Update" />

          <NavLink to="/admin/profile">
            <RedStyledButton text="Cancel" />
          </NavLink>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileEditForm;
