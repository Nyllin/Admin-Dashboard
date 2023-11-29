import styled from "@emotion/styled";
import { Box, CardContent } from "@mui/material";
import React from "react";
import StyledButton from "../../ReuseComponents/StyledButton/StyledButton";
const MailForm = () => {
  const MailFormContainer = styled("Card")`
    width: 100%;
  `;
  const MailFormInputOne = styled("input")(({ theme }) => ({
    width: "94%",
    backgroundColor: "transparent",
    height: "30px",
    fonSize: "20px",
    border: 0,
    padding: "20px",
    "&:focus": {
      borderBottom: ` 0.5px solid ${theme.palette.primary.main}`,
      outline: 0,
    },
    "&:hover": {
      borderBottom: ` 0.5px solid ${theme.palette.primary.main}`,
      outline: 0,
    },
  }));

  const MailFormInputTwo = styled("textarea")`
    width: 94%;
    background-color: transparent;
    height: 215px;
    font-size: 20px;
    border: 0;
    padding: 20px;
    &:focus {
      outline: 0;
    }
    &:hover {
      outline: 0;
    }
  `;
  return (
    <MailFormContainer>
      <CardContent sx={{ padding: 0, margin: 0, backgroundColor: "#e6f0f3" }}>
        <MailFormInputOne type="text" placeholder="To" />
        <MailFormInputOne type="text" placeholder="CC" />
        <MailFormInputTwo type="text" placeholder="" />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <StyledButton text="send" />
        </Box>
      </CardContent>
    </MailFormContainer>
  );
};

export default MailForm;
