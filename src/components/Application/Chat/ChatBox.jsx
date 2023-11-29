import React from "react";
import styled from "@emotion/styled";
import { Box, Card, CardContent, Stack } from "@mui/material";
import ChatMessageBox from "./ChatMessageBox";
const ChatBox = () => {
  const ChatBoxContainer = styled(Stack)``;

  return (
    <ChatBoxContainer>
      <Card sx={{ padding: "20px", height: "600px"}}>
        <CardContent>
          <Box>
            <ChatMessageBox />
          </Box>
        </CardContent>
      </Card>
    </ChatBoxContainer>
  );
};

export default ChatBox;
