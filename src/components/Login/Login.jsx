import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import StyledInput from "../ReuseComponents/StyledInput.jsx/StyledInput";
import StyledButton from "../ReuseComponents/StyledButton/StyledButton";
const Login = () => {
  const LoginCard = styled(Card)`
    width: 50%;
    border-radius: 10px;
    margin: auto auto;
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
            Log In
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
            <StyledInput label="Email or Phone" placeholder="Email or Phone" type="email" />
            <StyledInput
              label="Password"
              placeholder="Password"
              type="password"
            />
            <StyledButton
             text="Log In"
            />

          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", marginTop: 3 }}
          >
            Need an account?
            <NavLink to="/register">
              <Button>Sign Up</Button>
            </NavLink>
          </Typography>
          <NavLink
            to="/forgetpassword"
            style={{ textDecoration: "none", color: "#00688b" }}
          >
            <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
              Forget Password?
            </Typography>
          </NavLink>
        </CardContent>
      </LoginCard>
    </Stack>
  );
};

export default Login;
