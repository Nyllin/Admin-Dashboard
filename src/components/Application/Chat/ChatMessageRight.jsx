import { Box, Typography } from "@mui/material";
import React from "react";

const ChatMessageRight = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{
          backgroundColor: "#00688b",
          padding: "20px",
          width: "50%",
          mt: 2,
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="body1"
          color="secondary"
          sx={{  textAlign: "justify" }}
        >
          Dear KK, Thank you for your update. We do not sell or share your
          details without your permission.
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessageRight;
