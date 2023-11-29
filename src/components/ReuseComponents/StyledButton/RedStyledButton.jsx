import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const RedStyledButton = ({ text, onClick }) => {
  const MuiButton = styled(Button)(({ theme }) => ({
    padding: "10px 15px",
  }));
  return (
    <MuiButton variant="contained" color="error" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default RedStyledButton;
