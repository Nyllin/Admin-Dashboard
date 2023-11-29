import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const ChatListItem = () => {
  const ChatListItemContainer = styled(Box)(({theme})=>({
   "&:hover" : {
          backgroundColor: theme.palette.secondary.main,
        },
        padding: "20px",
        borderBottom:`0.3px solid ${theme.palette.primary.main}`,
  }))
  
  

  return (
    <ChatListItemContainer
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        width={50}
        height={50}
        alt="user"
      />
      <Box>
        <Typography variant="subtitle2">Trevor James</Typography>
        <Typography variant="caption">I know you are doing great.</Typography>
      </Box>
      <Typography variant="caption">28th Nov</Typography>
    </ChatListItemContainer>
  );
};

export default ChatListItem;
