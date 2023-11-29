import styled from "@emotion/styled";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import StyledInput from "../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";
const Register = () => {
  const LoginCard = styled(Card)`
    width: 50%;
    margin: auto auto;
    border-radius: 10px;
    box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
    -webkit-box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
    -moz-box-shadow: 10px 24px 136px -31px rgba(0, 104, 139, 0.75);
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
            Sign Up
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
            <StyledInput label="Username" placeholder="Username" />
            <StyledInput label="Email" placeholder="Email" type="email" />
            <StyledInput label="Phone" placeholder="Phone" type="number" />
            <StyledInput
              label="Password"
              placeholder="Password"
              type="password"
            />
            <StyledInput
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
            />
            <StyledButton text="Sign Up" />
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", marginTop: 3 }}
          >
            Already have an account?
            <NavLink to="/">
              <Button>Login</Button>
            </NavLink>
          </Typography>
        </CardContent>
      </LoginCard>
    </Stack>
  );
};

export default Register;
