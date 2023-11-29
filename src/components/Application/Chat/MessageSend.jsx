import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
const MessageSend = () => {
  const ChatSendInput = styled("input")(({ theme }) => ({
    width: "80%",
    padding: "5px 10px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    height: "30px",
    "&:focus": {
      outline: 0,
    },
    "&:hover": {
      outline: 0,
    },
  }));

  return (
    <Box sx={{ mt: 3, display: "flex" }}>
      <ChatSendInput placeholder="Send Message" />
      <Button sx={{ color: "#00688b" }}>
        <SendIcon />
      </Button>
    </Box>
  );
};

export default MessageSend;
