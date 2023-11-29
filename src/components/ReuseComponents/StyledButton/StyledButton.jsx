import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = ({ text,onClick }) => {
  const MuiButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "10px 15px",
  }));
  return <MuiButton variant="contained" onClick={onClick}>{text}</MuiButton>;
};

export default StyledButton;
