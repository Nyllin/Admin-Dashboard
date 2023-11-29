import { Box, Typography } from "@mui/material";
import React from "react";

const ChatMessageLeft = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
      <Box
        sx={{
          backgroundColor: "#e6f0f3",
          padding: "20px",
          width: "50%",
          mt: 2,
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="body1"
          color="primary"
          sx={{  textAlign: "justify" }}
        >
          Dear KK, Thank you for your update. We do not sell or share your
          details without your permission.
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessageLeft;
