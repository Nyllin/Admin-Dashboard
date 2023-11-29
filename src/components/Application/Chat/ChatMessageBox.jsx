import { Box, Typography } from "@mui/material";
import React from "react";
import ChatMessageLeft from "./ChatMessageLeft";
import ChatMessageRight from "./ChatMessageRight";
import MessageSend from "./MessageSend";

const ChatMessageBox = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          width={50}
          height={50}
          alt="user"
        />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography variant="h6" color="primary">
            Travar James
          </Typography>
          <Typography variant="caption">Yesterday at 6.33 pm</Typography>
        </Box>
      </Box>
      <Box sx={{ overflowY: "scroll",height:"450px" }}>
        <ChatMessageLeft />
        <ChatMessageRight />
        <ChatMessageLeft />
        <ChatMessageRight />
        <ChatMessageLeft />
        <ChatMessageRight />
      </Box>
      <Box>
        <MessageSend/>
      </Box>
    </Box>
  );
};

export default ChatMessageBox;
