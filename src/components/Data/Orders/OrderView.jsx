import React from "react";
import styled from "@emotion/styled";
import { Stack, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Searchbar from "../../Searchbar/Searchbar";
import RedStyledButton from "../../ReuseComponents/StyledButton/RedStyledButton";
const OrderView = () => {
  const UserContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
  `;

  return (
    <UserContainer>
      <Searchbar />
      <Box mt={3}>
        <Typography
          variant="h5"
          color="primary"
          style={{  textAlign: "center" }}
          mb={3}
        >
          Order Details
        </Typography>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            Customer : <span style={{ color: "#00688b" }}> John Doe</span>
          </Typography>
          <Typography variant="subtitle1">
            Amount : <span style={{ color: "#00688b" }}>100.5</span>
          </Typography>
          <Typography variant="subtitle1">
            User Confirmed : <span style={{ color: "#00688b" }}>Yes</span>
          </Typography>
          <Typography variant="subtitle1">
            Order Status : <span style={{ color: "#00688b" }}>Completed</span>
          </Typography>
          <Typography variant="subtitle1">
            Order Date : <span style={{ color: "#00688b" }}>2023-11-23</span>
          </Typography>
          <Typography variant="subtitle1">
            Remark : <span style={{ color: "#00688b" }}>Lorem ipsum</span>
          </Typography>
          <Box
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <NavLink to="/admin/orders">
              <RedStyledButton text="Cancel" />
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </UserContainer>
  );
};

export default OrderView;
