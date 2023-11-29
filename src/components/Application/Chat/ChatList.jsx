import React from "react";
import styled from "@emotion/styled";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import ChatListItem from "./ChatListItem";
const ChatList = () => {
  const ChatListContainer = styled(Stack)``;
  const ChatListForm = styled("input")(({ theme }) => ({
    width: "90%",
    padding: "5px 10px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    height: "30px",
    "&:focus": {
      outline: 0,
    },
    "&:hover": {
      outline: 0,
    },
  }));

  return (
    <ChatListContainer>
      <Card sx={{ padding: "20px", height: "600px" }}>
        <CardContent>
          <Typography variant="h5" color="primary">
            Chat List
          </Typography>
          <Box mt={3}>
            <ChatListForm placeholder="Search" />
            <Box sx={{ overflowY: "scroll", mt: 3, height: "450px" }}>
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ChatListContainer>
  );
};

export default ChatList;
