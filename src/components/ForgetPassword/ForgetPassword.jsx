import styled from "@emotion/styled";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import StyledInput from "../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";
const ForgetPassword = () => {
  const LoginCard = styled(Card)`
    width: 50%;
    margin: auto auto;
    box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
    -webkit-box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
    -moz-box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
    border-radius: 10px;
  `;

  return (
    <Stack sx={{ width: "100%", height: "100vh" }}>
      <LoginCard>
        <CardContent sx={{ m: 3 }}>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "25px", sm: "30px" },
            }}
          >
            Forget Password
          </Typography>
          <Stack
            component="form"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <StyledInput label="Email" placeholder="Email" type="email" />

            <StyledButton text="Send" />
          </Stack>
        </CardContent>
      </LoginCard>
    </Stack>
  );
};

export default ForgetPassword;
