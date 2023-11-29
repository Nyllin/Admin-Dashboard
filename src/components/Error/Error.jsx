import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { NavLink } from "react-router-dom";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";

const Error = () => {
  return (
    <Box sx={{ width: "50%", margin: "200px auto" }}>
      <Typography color="error" sx={{ textAlign: "center", fontSize: "100px" }}>
        404 <SentimentVeryDissatisfiedIcon style={{ fontSize: "80px" }} />
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        The page you are attempting to reach is currently not available. This
        may be because the page does not exist or has been moved.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          mt: 3,
        }}
      >
        <NavLink to="/">
          <StyledButton text="Back Home" />
        </NavLink>
      </Box>
    </Box>
  );
};

export default Error;
